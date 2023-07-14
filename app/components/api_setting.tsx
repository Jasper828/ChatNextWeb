import {
    List,
    ListItem,
    PasswordInput,
} from "./ui-lib";
import {
    useAccessStore,
} from "../store";

import Locale from "../locales";



export function ApiSettings() {
    const accessStore = useAccessStore();
    return (
        <>
            <List>
                {!accessStore.hideUserApiKey ? (
                    <>
                        <ListItem
                            title={Locale.Settings.Endpoint.Title}
                            subTitle={Locale.Settings.Endpoint.SubTitle}
                        >
                            <input
                                type="text"
                                value={accessStore.openaiUrl}
                                placeholder="https://api.openai.com/"
                                onChange={(e) =>
                                    accessStore.updateOpenAiUrl(e.currentTarget.value)
                                }
                            ></input>
                        </ListItem>
                        <ListItem
                            title={Locale.Settings.Token.Title}
                            subTitle={Locale.Settings.Token.SubTitle}
                        >
                            <PasswordInput
                                value={accessStore.token}
                                type="text"
                                placeholder={Locale.Settings.Token.Placeholder}
                                onChange={(e) => {
                                    accessStore.updateToken(e.currentTarget.value);
                                }}
                            />
                        </ListItem>
                    </>
                ) : null}
            </List>
        </>
    );
};
