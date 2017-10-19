---
layout: page
title: "Q182024: XFOR: Built-in WinNT System Groups Not Added to Chat Sysop"
permalink: /kb/182/Q182024/
---

## Q182024: XFOR: Built-in WinNT System Groups Not Added to Chat Sysop

	Article: Q182024
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 04-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you use the Microsoft Management Console for the Microsoft Exchange Chat
	Service to attempt to add one of the following Windows NT built-in system groups
	to the Chat Sysop Managers or the Chat Sysops account, the group will appear to
	be added but will not appear in the Member Name Pane. No error message will be
	displayed.
	
	  Authenticated Users
	  INTERACTIVE
	  NETWORK
	  SYSTEM
	  CREATOR OWNER
	
	NOTE: CREATOR OWNER can only be added on a local computer.
	
	All other Windows NT accounts and groups, both local and global, can be added
	without a problem.
	
	CAUSE
	=====
	
	These built-in accounts are not listed in the User Manager window. However, when
	you administer a computer and Windows NT presents lists of groups, these special
	groups sometimes appear in the list, as is the case with the Chat Service.
	
	RESOLUTION
	==========
	
	These groups are not required as part of the Chat Service and should not be
	added to either the Chat Sysop Managers account or the Chat Sysops account
	through the Microsoft Management Console.
	
	
	Additional query words: MCIS
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
