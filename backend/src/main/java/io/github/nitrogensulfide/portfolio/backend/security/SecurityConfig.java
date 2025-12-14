package io.github.nitrogensulfide.portfolio.backend.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                // For APIs, disabling CSRF is usually correct (especially if you're not using browser sessions/forms)
                .csrf(AbstractHttpConfigurer::disable)
                .authorizeHttpRequests(auth -> auth
                        // Allow unauthenticated health checks (includes liveness/readiness if enabled)
                        .requestMatchers("/actuator/health/**").permitAll()
                        // Everything else requires auth
                        .anyRequest().authenticated()
                )
                // Simple starter auth mechanism
                .httpBasic(Customizer.withDefaults());

        return http.build();
    }
}
