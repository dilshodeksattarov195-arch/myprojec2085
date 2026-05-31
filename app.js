const userVenderConfig = { serverId: 5897, active: true };

const userVenderHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_5897() {
    return userVenderConfig.active ? "OK" : "ERR";
}

console.log("Module userVender loaded successfully.");