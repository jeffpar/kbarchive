---
layout: page
title: "Q148973: XADM: Installation Allows Selection of Group Account"
permalink: kb/148/Q148973/
---

## Q148973: XADM: Installation Allows Selection of Group Account

	Article: Q148973
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbsetup exc4 exc5 exc55
	Last Modified: 23-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Microsoft Exchange Server Setup program, you will be prompted
	to select the services account. When you select Browse, a dialog box opens with
	all the accounts that are defined in your domain. You can select any account,
	however, Microsoft Exchange should not allow the selection of the Domain Admins
	group or any other group.
	
	
	MORE INFORMATION
	================
	
	When the Microsoft Exchange Server Setup program finishes copying all the files
	to your server and Setup is installing services and modifying the registry it
	will attempt to start the Microsoft Exchange Service Attendant service. You then
	receive an error message that the service did not start due to a logon failure.
	After you click OK, another dialog box appears stating that the Account
	information is incorrect. After you click OK again you are prompted to select
	another account to be the services account. After you select another account
	Setup continues and finishes successfully.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
