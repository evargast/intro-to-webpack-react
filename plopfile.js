const componentGenerator = {
    prompts: [
        {
            type: "input",
            name: "name",
            message: "component name",
        },
    ],
    actions: [
        {
            type: "add",
            path: "src/components/{{name}}.tsx",
            templateFile: "templates/component.hbs",
        },
    ],
};

const generateComponent = plop => {
    plop.setGenerator("component", componentGenerator);
};

module.exports = generateComponent;
