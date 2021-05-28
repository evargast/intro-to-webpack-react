import {
    Flex,
    Grid,
    lightTheme,
    Provider as ProviderV3,
    repeat,
    View,
} from "@adobe/react-spectrum";
import React, { ComponentProps, FC } from "react";
import styled from "styled-components";

type BackgroundColor = ComponentProps<typeof View>["backgroundColor"];

const Header = styled.h1`
    text-align: center;
`

const App: FC = () => {
    const baseColors = [
        "celery",
        "purple",
        "orange"
    ];

    const colors: BackgroundColor[] = [];
    for (const color of baseColors) {
        for (let i = 4; i <= 7; i++) {
            colors.push(`${color}-${i}00` as BackgroundColor);
        }
    }

    return (
        <ProviderV3 theme={lightTheme} colorScheme={"light"}>
            <View paddingTop="size-400">
                <h1>Welcome to React Spectrum!</h1>
                {/* <Header>Welcome to React Spectrum!</Header> */}
            </View>

            <Flex justifyContent="center" gap="10px">
                {colors.map(color => (
                    <View key={color} backgroundColor={color} height="100px" width="100px" />
                ))}
            </Flex>

        </ProviderV3>
    );
};

export default App;
