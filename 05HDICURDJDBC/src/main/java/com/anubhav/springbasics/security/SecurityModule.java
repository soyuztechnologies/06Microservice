package com.anubhav.springbasics.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.convert.converter.Converter;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AbstractAuthenticationToken;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.oauth2.jwt.Jwt;

import com.sap.cloud.security.xsuaa.XsuaaServiceConfiguration;
import com.sap.cloud.security.xsuaa.token.TokenAuthenticationConverter;

@Configuration
@EnableWebSecurity
public class SecurityModule extends WebSecurityConfigurerAdapter {
	@Autowired(required = true)
    XsuaaServiceConfiguration xsuaaServiceConfiguration;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        // @formatter:off
        http
            .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
        .and()
            .authorizeRequests()
            .antMatchers("/Vendors").permitAll() //hasAuthority("microservice!t53603.readAnubhav")
            .antMatchers("/Vendors/**").hasAuthority("changeAnubhav") // checks whether it has scope "<xsappId>.Read"
        .and()
            .oauth2ResourceServer()
            .jwt()
            .jwtAuthenticationConverter(getJwtAuthoritiesConverter());
        // @formatter:on
    }

//    @Override
//    protected void configure(HttpSecurity http) throws Exception {
//        http.cors()
//            .and()
//              .authorizeRequests()
//                .antMatchers(HttpMethod.GET, "/Vendors")
//              	  .hasAuthority("Display")
//                .antMatchers(HttpMethod.GET, "/Vendors/**")
//                  .hasAuthority("Display")
//                .antMatchers(HttpMethod.POST, "/Vendors")
//                  .hasAuthority("Edit")
//                .anyRequest()
//                  .authenticated()
//            .and()
//              .oauth2ResourceServer()
//                .jwt()
//                .jwtAuthenticationConverter(getJwtAuthoritiesConverter());
//    }
    

    Converter<Jwt, AbstractAuthenticationToken> getJwtAuthoritiesConverter() {
        TokenAuthenticationConverter converter = new TokenAuthenticationConverter(xsuaaServiceConfiguration);
        converter.setLocalScopeAsAuthorities(true); // not applicable in case of multiple xsuaa bindings!
        return converter;
    }
}