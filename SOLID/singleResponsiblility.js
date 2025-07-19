// Here we see the class doing two things. Authentication and privisioning. This violates the Single responsibility.
//Instead we should have Authenticationa s separate class and the Provisioning as separate Class
class UserManageMent {
  constructor() {}
  authenticateUser() {}
  provisionUserPlan() {}
}

// We can have
class ProvisioningService {}
class AuthService {}
