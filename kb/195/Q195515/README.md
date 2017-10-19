---
layout: page
title: "Q195515: XADM:Perform a full online backup of servers after a server move"
permalink: /kb/195/Q195515/
---

## Q195515: XADM:Perform a full online backup of servers after a server move

	Article: Q195515
	Product(s): Microsoft Exchange
	Version(s): WINNT:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	When using the Microsoft Exchange Move Server Wizard, after completing the
	server move, a full online backup should be performed on the following servers:
	
	- The server you moved.
	
	- The server you specified as the reference server in the destination site if
	  you joined an existing site.
	
	- All servers in the original site.
	
	MORE INFORMATION
	================
	
	It is important that you perform a full online backup rather than an incremental
	or differential backup. The incremental and differential backups will not secure
	your data in the destination site.
	
	For more information on performing a full online backup, see Microsoft Exchange
	Server Maintenance and Troubleshooting.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINNT:5.5
	Issue type        : kbinfo
	
	=============================================================================
	
