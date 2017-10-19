---
layout: page
title: "Q152321: XADM: Migration Wizard Reports Invalid Home-Server Definition"
permalink: /kb/152/Q152321/
---

## Q152321: XADM: Migration Wizard Reports Invalid Home-Server Definition

	Article: Q152321
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbother kbusage
	Last Modified: 28-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you perform a 2 step migration of a user from MS Mail to Microsoft
	Exchange, if the user account already exists in the Microsoft Exchange
	Directory, the following error will be reported in the Windows NT Event Log.
	
	  Event ID: 162 (or Event ID: 178)
	  Source: MSExchangeMig
	  Type: Error
	  Description:
	
	  Invalid Home-Server definition in user list file for the user 'Home-Server'.
	
	
	This error might cause you to think that the migration has not been completed
	successfully, but it has.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbother kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
