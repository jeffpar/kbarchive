---
layout: page
title: "Q158168: XADM: SA Failed to Start: Logon Error 7013"
permalink: /kb/158/Q158168/
---

## Q158168: XADM: SA Failed to Start: Logon Error 7013

	Article: Q158168
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 09-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Exchange System Attendant service may fail to start; error message
	7013 appears:
	
	  The user has not been granted the requested logon type at this computer.
	
	This will cause other Microsoft Exchange services to not start.
	
	RESOLUTION
	==========
	
	To resolve the error, verify the appropriate properties are set for the service
	account in User Manager. If that does not resolve the error, enter the service
	account and password for the failed service, as follows:
	
	1. In Control Panel Services, click System Attendant and click Startup.
	
	2. Type the Exchange service account and password for This Account.
	
	3. Start the System Attendant
	
	This may need to be done for other Microsoft Exchange services as well.
	
	MORE INFORMATION
	================
	
	The error may be received if the service account password is correct and the
	account is able to logon to the local computer. If changing the password and
	rebooting the computer does not resolve the error, the above steps may prevent
	the error 7013 or other related logon failures.
	
	The Log On As option in This Account is used to assign a logon user account to a
	service. If there is an existing user account for that service make certain that
	the user account has the Password Never Expires option selected, and has
	memberships in the appropriate groups.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
