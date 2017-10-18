---
layout: page
title: "Q288335: XADM:  Error Messages Occur When You Run Exmerge"
permalink: kb/288/Q288335/
---

## Q288335: XADM:  Error Messages Occur When You Run Exmerge

	Article: Q288335
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Mailbox Merge program (Exmerge.exe) to export or import mail
	data from an Exchange Server information store, you may receive either of the
	following error messages:
	
	  Error encountered reading list of recipients on server
	  '\\<SERVERNAME>'. Make sure you have Administrator permissions on the
	  Private Information Store object. Please refer to the 'C:\Exmerge.log' log
	  file for more information.
	
	  -or-
	
	  The server '\\<SERVERNAME>' is inaccessible. It is either not a
	  Microsoft Exchange Server or you do not have rights to access the Microsoft
	  Exchange Directory on this machine.
	
	NOTE: These error messages may be reported in Exmerge.log.
	
	CAUSE
	=====
	
	This issue can occur if you use the Universal Naming Convention (UNC) format
	(\\<SERVERNAME>) when you enter the server name when you run Exmerge.
	
	RESOLUTION
	==========
	
	To resolve this issue, enter the NetBIOS server name instead (remove the
	backslash symbols [\\] that precede the server name).
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
