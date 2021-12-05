import Logo from "./Logo";

const Stories = {
    title: 'Logo',
    component: Logo,
}

export default Stories;

const Template = (args) => <Logo {...args}/>

export const Default = Template.bind({});

Default.args = { 
  imageUrl: "https://cdn-icons.flaticon.com/png/512/3906/premium/3906619.png?token=exp=1638726336~hmac=b64abdeb29ed8fefc288b02d836a3922",
}