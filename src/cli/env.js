const parseEnv = () => {
    console.log(Object.entries(process.env).filter(prop => prop[0].startsWith('RSS')).map(([key, value]) => `${key}=${value}`).join(', '));
};

parseEnv();