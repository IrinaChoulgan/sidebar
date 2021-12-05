import AppBar from "./AppBar";
import { navItems } from "../Navigation/Navigation.stories";

const Stories ={
    title: "AppBar",
    component: AppBar,
}
export default Stories;

const Template = (args) => <AppBar {...args}/>;

export const Default = Template.bind({});

Default.args = {
    logoImage: "https://cdn-icons.flaticon.com/png/512/3906/premium/3906619.png?token=exp=1638726336~hmac=b64abdeb29ed8fefc288b02d836a3922",
    navItems,
    minimized: false,
};

export const Minimized = Template.bind({});

Minimized.args = {
    ...Default.args,
    minimized: true,
};