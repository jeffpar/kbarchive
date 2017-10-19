---
layout: page
title: "Q166837: SMS: Incorrect Remote Control Permissions Dialog Box"
permalink: /kb/166/Q166837/
---

## Q166837: SMS: Incorrect Remote Control Permissions Dialog Box

	Article: Q166837
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbtshoot smsremtshoot kbRemoteProg
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	When a remote control session is established by a user whose user name contains a
	space, as in "FirstName LastName," the Remote Control Permissions dialog box on
	the system being remote controlled will display the either of the following:
	
	- Will you allow "FirstName" to LastName?
	
	-or-
	
	- Will you allow "FirstName" to ?? Unknown prompt from server?
	
	The message that should be displayed is
	
	  Will you allow "FirstName LastName" to Remote Control your machine?
	
	where "FirstName LastName" is the Windows NT User Name of the account that is
	attempting remote control.
	
	A user logged on with a User Name of one word who has a Full Name of two words
	with a space, will also produce the same error on the client computer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2.
	
	MORE INFORMATION
	================
	
	The Remote Control Permissions dialog box on the client displays correctly and
	completely if the Remote Controlling user's name is only one word.
	
	
	Additional query words: prodsms rc
	
	======================================================================
	Keywords          : kbnetwork kbtshoot smsremtshoot kbRemoteProg 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
