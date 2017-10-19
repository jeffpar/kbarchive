---
layout: page
title: "Q99313: Password Duration Parameters and Update Procedures"
permalink: /kb/099/Q99313/
---

## Q99313: Password Duration Parameters and Update Procedures

	Article: Q99313
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	If your password expires and undergoes a forced password change, you must wait
	for the password to be replicated by the Netlogon service across the domain. If
	you do not, any Net Use commands to a backup domain controller or member server
	fail because these servers have not had time to receive the user accounts
	subsystem update from the primary domain controller. The failure returns an
	invalid password error, and until the new password is validated, you can access
	the resource only by using the old password or by accessing it on the primary
	domain controller.
	
	MORE INFORMATION
	================
	
	The message that prompts you to change your password before it expires appears
	at logon. It reads:
	
	  NOTE: Your Password Expires in xx days.
	  Use the NET PASSWORD command to change your password.
	
	Password uniqueness is essential for system security; the amount of time a user's
	password is allowed to exist on the system is controlled by two parameters:
	
	- maximum password age: this places a limit on how much time can elapse after a
	  password is changed before it must be changed again. This is a value between
	  1 and 49710 days.
	
	- minimum password age: this retains a new password for a given length of time,
	  preventing users from changing to one password then changing back to the old
	  one before a specified amount of time elapses. This is a value between 1 and
	  49710 days, and must be smaller than maximum password age.
	
	The expiration message is captured at logon time and if the maximum age has been
	reached, a password change is forced. You are already logged on and connected to
	other servers, but any Net Use commands you issue to a backup domain controller
	or member server fails because these servers have not had time to receive the
	user accounts subsystem update from the primary domain controller.
	
	Additional query words: 2.20 2.2
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
