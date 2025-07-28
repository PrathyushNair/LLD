// Start by referring the basic factory patter
// There we see that for instantiating the sedan or convertible class we used a car factory. But we still see the use of switch case.
// When we wan to add more types of car this will oat the switch case. That is not feasible as the sys grows.
//Hence we introduce the concept of product,concrete product, creator and abstract creator.

//Taking an example of the base issue with switch case
interface NotificationInterface{
    send():void
}
class NotificationFactory{
    constructor(){
    }
    createNotificationObject(notificationType:string){
        switch(notificationType){
            case 'Email':
                return new EmailNotification()
            case 'Push':
                return new PushNotification()
            case 'InApp':
                return new InAppNotification()
        }
    }
}

class EmailNotification implements NotificationInterface{
    constructor(){}
    send(){
        console.log('Sending Email Notification')
    }
}
class PushNotification implements NotificationInterface{
    constructor(){}
    send(){
        console.log('Sending Push Notification')
    }
}
class InAppNotification implements NotificationInterface{
    constructor(){}
    send(){
        console.log('Sending InApp Notification')
    }
}

//Say tomorrow if we want to add whats app and slack then this bloats. Because we will have to add additional cases in switch.
// This violates the open for extension closed for modification principle.
// Hence we will go with a new approach in advNotificationApproach.ts
