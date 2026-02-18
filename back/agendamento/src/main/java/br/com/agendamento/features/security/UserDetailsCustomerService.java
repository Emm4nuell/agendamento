package br.com.agendamento.features.security;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserDetailsCustomerService implements UserDetailsService {

    private final BCryptPasswordEncoder passwordEncoder;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        if (username.equals("07687053478")) {
            var ts = passwordEncoder.encode("123");
            return User.builder()
                       .username(username)
                       .password(ts)
                       .authorities(new SimpleGrantedAuthority("USER"))
                       .build();
        }
        throw new UsernameNotFoundException("Senha inválida.");
    }
}
