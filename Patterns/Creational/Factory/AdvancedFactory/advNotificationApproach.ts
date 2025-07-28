//First Step is to create the product and the concrete product(In simple terms the actual class that performs the actions).
//If you are confused about the interface implementation then start by creating the concrete product.

//Products
interface NotificationInterfaceAdv {
  sendNotification(): void;
}

//Concrete Products
class EmailNotificationAdv implements NotificationInterfaceAdv {
  constructor() {}
  sendNotification() {
    console.log("Send Email Notification");
  }
}

class PushNotificationAdv implements NotificationInterfaceAdv {
  constructor() {}
  sendNotification() {
    console.log("Send Push Notification");
  }
}

class InAppNotificationAdv implements NotificationInterfaceAdv {
  constructor() {}
  sendNotification() {
    console.log("Send InApp Notification");
  }
}

//Second step is to create an abstract creator and concrete creator

abstract class NotificationFatory {
  abstract createNotification(): NotificationInterfaceAdv;

  send() {
    const obj = this.createNotification();
    obj.sendNotification();
  }
}

class EmailNotificationFactory extends NotificationFatory {
  createNotification(): NotificationInterfaceAdv {
    return new EmailNotificationAdv();
  }
}

class PushNotificationFactory extends NotificationFatory {
  createNotification(): NotificationInterfaceAdv {
    return new PushNotificationAdv();
  }
}
class InAppNotificationFactory extends NotificationFatory {
  createNotification(): NotificationInterfaceAdv {
    return new InAppNotificationAdv();
  }
}

//Usage
const emailFactory = new EmailNotificationFactory();
emailFactory.send();

const pushFactory = new PushNotificationFactory();
pushFactory.send();

//Here again we can take an approach where we first create the factory for each concrete Product.
// This factory will contain method that will return the instance of the concrete product.
//Then create an abstract class like the notification factory. It can contain al=dditional methods like send.
//The abstract class can be optional in some cases. But to sustain polymorphism and extendibility it is better.
//How is polymorphism sustained??
// Without abstract class. Say I a creating a function which has to call only the email or push or in app on the basis of the facory passed.
function sendNotificationAsPerFactory(
  factory:
    | EmailNotificationFactory
    | InAppNotificationFactory
    | PushNotificationFactory
) {
  if (factory instanceof EmailNotificationFactory) {
    let obj = new EmailNotificationFactory();
    obj.send();
  } else if (factory instanceof PushNotificationFactory) {
    let obj = new PushNotificationFactory();
    obj.send();
  } else {
    let obj = new InAppNotificationFactory();
    obj.send();
  }
}
// We notice the use of if else
//Due to abstraction we can rewrite as 
//
function sendNotification(factory:NotificationFatory){
    return factory.send()
}
//Usage
sendNotification(new EmailNotificationFactory())
sendNotification(new PushNotificationFactory())
//This is polymorphism. The abstract class now allows you to have different factory form and it can handle those.