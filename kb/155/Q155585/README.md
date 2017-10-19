---
layout: page
title: "Q155585: XADM: Error 1069 When Starting an Exchange Service"
permalink: /kb/155/Q155585/
---

## Q155585: XADM: Error 1069 When Starting an Exchange Service

	Article: Q155585
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbnetwork kbsetup
	Last Modified: 30-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start one of the Microsoft Exchange services, the following error
	message might appear:
	
	  Could not start the Microsoft Exchange <service name> on <server
	  name>
	  Error 1069: The service did not start due to logon failure.
	
	CAUSE
	=====
	
	In Control Panel Services in the Startup options for the service receiving the
	error, the "Log On As: This Account" option either has the wrong password or the
	account no longer exists.
	
	WORKAROUND
	==========
	
	If the Service Account's password is not known and the services will not start
	and return an error 1069, you must run Windows NT User Manager for Domains and
	change the Service Account password.
	
	After changing the Service Account password, you will need to start the Microsoft
	Exchange Administrator program and perform the following steps:
	
	Note: To run the Administrator program you will have to start the Microsoft
	Exchange System Attendant service and the Microsoft Exchange Directory service,
	and quite possibly will have to change the password in the Startup options on
	these services.
	
	1. Highlight the Configuration container.
	
	2. On the File menu, click Properties.
	
	3. Click the Service Account Password tab.
	
	4. Enter and confirm the new password.
	
	5. Click Apply.
	
	In addition, you need to change the Service Account password on any service
	account override pages on Microsoft Exchange Servers in other Sites.
	
	For more information about change the Service Account password, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q157780 XADM How to Change the Service Account Password
	
	MORE INFORMATION
	================
	
	You can confirm that this is the problem by logging off the Windows NT Domain
	and attempting to log back on to the domain as the Service Account.
	
	If you can log on to the Domain as the Service Account, change the password in
	the Startup option to the reflect the same password you entered.
	
	
	Additional query words: exfaq exfaqad
	
	======================================================================
	Keywords          : kbenv kberrmsg kbnetwork kbsetup 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : :4.0
	
	=============================================================================
	
