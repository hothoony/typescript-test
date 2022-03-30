let greeting: (a: string, b: string) => void;
greeting = (name: string, message: string) => {
    console.log(name, message);
}

greeting('aa', 'cc');
