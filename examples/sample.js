// Latte Aesthetic — JavaScript Demo
function brewCoffee(type = "Latte") {
    const milk = { hot: true, foam: true };
    const coffee = {
      beans: "Arabica",
      strength: 3,
      origin: "Colombia"
    };
  
    console.log(`Brewing a ${type} with ${coffee.beans} beans...`);
    return { ...coffee, milk, type };
  }
  
  async function serveOrder(orderId) {
    try {
      const order = await brewCoffee("Cappuccino");
      console.log(`Order #${orderId} ready!`, order);
    } catch (error) {
      console.error("Machine error:", error);
    }
  }
  
  serveOrder(42);
  