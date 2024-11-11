import { Link as CLink, LinkProps } from "@chakra-ui/react";
import { Link as RRLink, LinkProps as RRLinkProps } from "react-router-dom";

type ButtonLinkProps = LinkProps & RRLinkProps & { children: React.ReactNode };

export function ButtonLink({ children, to, ...props }: ButtonLinkProps) {
    return (
        <CLink
            as={RRLink} to={to} {...props}
            _hover={{ color: 'red' }}
            textDecoration={'none'}>
            {children}
        </CLink>
    );
}