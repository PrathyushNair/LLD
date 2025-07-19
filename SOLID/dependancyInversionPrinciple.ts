
class GoogleEmail{
    constructor(){

    }
    sendEmail(){
        // code for sending email using gmail
    }
}
class OutlookEmail{
    constructor(){

    }
    sendEmail(){
        // code for sending email using gmail
    }
}

class EmailService{
    gmailEmail:GoogleEmail
    OutlookEmail:OutlookEmail
    constructor(){
        this.gmailEmail=new GoogleEmail()
        this.OutlookEmail=new OutlookEmail
    }
    sendGoogleEmail(){

    }
    sendOutLookEmail(){

    }
}
//In the above code there is a coupling between the email services and the googleEmail and outlook email
// This will violate the DI principle
//Instead we should have an abstract layer in between the email service and each ot the individual service


interface EmailProviderInterface{
    sendEmail(content:any):void
}

class GoogleEmailAssitant implements EmailProviderInterface{
    constructor(){

    }
    sendEmail(){
        // code for sending email using gmail
    }
}
class OutlookEmailServieAssistant implements EmailProviderInterface{
    constructor(){

    }
    sendEmail(){
        // code for sending email using gmail
    }
}

class EmailServiceImproved{
    provider:EmailProviderInterface
    constructor(provider:EmailProviderInterface){
        this.provider=provider
    }
    sendEmail(content:any){
        //use the send method promised by the provider
        this.provider.sendEmail(content)
    }
}

//Usage:
const gmailSender=new EmailServiceImproved(new GoogleEmailAssitant)
gmailSender.sendEmail('hello')