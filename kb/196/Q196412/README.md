---
layout: page
title: "Q196412: XADM: Cannot Change Password Generation Method In Move Server"
permalink: kb/196/Q196412/
---

## Q196412: XADM: Cannot Change Password Generation Method In Move Server

	Article: Q196412
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	When you use the Move Server Wizard, if the administrator selects the "Create New
	NT Accounts" option, they do not have the option to specify how passwords are
	generated (that is, generate random strings for passwords or use the Windows NT
	account name as the password).
	
	WORKAROUND
	==========
	
	The Move Server Wizard generates passwords in the following way:
	
	- Passwords are created based on the user ID.
	
	- Xs are added to make sure that the password meets the minimum length.
	
	- The accounts are set to change the password at the next log on attempt.
	
	- A password file is created that contains the user IDs and passwords.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
