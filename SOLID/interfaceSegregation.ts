//Statement: Clients should not be forced to depend on interfaces they do not use.

interface Machine {
    print(): void;
    scan(): void;
    fax(): void;
  }
  
  class OldPrinter implements Machine {
    print(): void {
      console.log("Printing...");
    }
  
    scan(): void {
      throw new Error("Scan not supported");
    }
  
    fax(): void {
      throw new Error("Fax not supported");
    }
  }
//  Here OldPrinter is forced to use fax which it does not support

interface Printer {
    print(): void;
  }
  
  interface Scanner {
    scan(): void;
  }
  
  interface Fax {
    fax(): void;
  }
  
  class BasicPrinter implements Printer {
    print(): void {
      console.log("Printing...");
    }
  }
  
  class MultiFunctionPrinter implements Printer, Scanner, Fax {
    print(): void {
      console.log("Printing...");
    }
  
    scan(): void {
      console.log("Scanning...");
    }
  
    fax(): void {
      console.log("Faxing...");
    }
  }

  //here the interfaces are broken down and then individually each class can subscribe to what they want.