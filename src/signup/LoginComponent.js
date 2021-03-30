import React from "react";
import { Container } from "react-bootstrap";
import LanguageUtility from "../localisation/LanguageUtility";

export default class LoginComponent extends React.Component {


    constructor(props) {
        super(props);

    }

    render() {

        return (
            <Container>

                <p>
                    {
                        LanguageUtility.trans("onboarding.titleLogin")
                    }

                </p>

                <p>

                    Login Component
                </p>
            </Container>

        )

    }
}