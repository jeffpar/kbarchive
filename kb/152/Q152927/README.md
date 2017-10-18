---
layout: page
title: "Q152927: XADM: Event ID 136 Created When Importing Duplicate Alias"
permalink: kb/152/Q152927/
---

## Q152927: XADM: Event ID 136 Created When Importing Duplicate Alias

	Article: Q152927
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 29-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Microsoft Exchange Migration Wizard to migrate a Microsoft Mail
	account to Microsoft Exchange and tell it to create a new Windows NT account, if
	the NT account that the Wizard tries to create already exists, it will re-use
	the account. In addition, the new Microsoft Exchange account's E-mail address
	will have a number appended to the end. This number will begin at 2 and will
	increase each time that NT account is re- used. No error or warning messages
	will be displayed but Event ID 136 will be written to the Windows NT Event Log
	and the description will be:
	
	  A Windows NT account for user User_name already exists.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	The fix will log additional information in the Windows NT Event Viewer
	Application log to help administrators identify if users with the same Directory
	Name have been assigned the same Windows NT Domain account. The additional
	information will be logged when a Microsoft Exchange user is created and the
	Migration Wizard is told to auto-create a Windows NT Domain account. If the
	Windows NT account already exists, it will be assigned to the Mailbox that is
	being created. The Event ID will still be 136 but the new description will be:
	
	Windows NT Account Domain_name\User_name already exists and was set as
	the Primary Windows NT account for Mailbox Directory_name.
	
	Additional query words: migrate
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
