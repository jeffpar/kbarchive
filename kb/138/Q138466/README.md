---
layout: page
title: "Q138466: Disk Space Reported Incorrectly When Dspace Tool Is Used"
permalink: /kb/138/Q138466/
---

## Q138466: Disk Space Reported Incorrectly When Dspace Tool Is Used

	Article: Q138466
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Microsoft Client for NetWare Networks to connect to a Novell
	NetWare server, you may experience any of the following symptoms when you access
	a directory whose space has been limited with the Dspace tool:
	
	- When you attempt to check the amount of disk space available in the
	  directory, the amount of available disk space on the entire volume is
	  reported. The fact that the Dspace tool has been run to limit the size of the
	  directory is not recognized.
	
	- When you attempt to copy files to the directory, one of the following error
	  messages may be displayed if the size of the files that you are attempting to
	  copy exceeds the amount of available space in the directory:
	
	  -Unable to complete a background operation on connection to <server>.
	  Select Retry to try the operation again, or press Escape to cancel all
	  outstanding background operations on this connection.
	
	  Operation: File Write
	  Error: 0x01 'Unknown error'
	
	  -Access denied.
	
	RESOLUTION
	==========
	
	To work around this problem, use the Novell VLM or NETX network client instead
	of the Microsoft Client for NetWare Networks.
	
	STATUS
	======
	
	This behavior is caused by a difference in the functionality provided by the
	Microsoft Client for NetWare Networks and the Novell VLM and NETX clients, not
	by a problem in Microsoft Windows 95.
	
	MORE INFORMATION
	================
	
	The Novell Dspace tool is a workstation tool used to view or modify directory
	and user space limitations.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
