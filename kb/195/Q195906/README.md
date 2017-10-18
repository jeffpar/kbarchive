---
layout: page
title: "Q195906: XADM: How To Move A Public Folder To A Server In The Same Site"
permalink: kb/195/Q195906/
---

## Q195906: XADM: How To Move A Public Folder To A Server In The Same Site

	Article: Q195906
	Product(s): Microsoft Exchange
	Version(s): WinNT:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	To move a public folder between servers in the same site, perform the
	following steps:
	
	1. In the Exchange Server Administrator Program, double-click Folders to see the
	  Public Folders.
	
	2. Double-click the public folder you want to move, or highlight the public
	  folder and then on the File menu, click Properties to bring up the properties
	  page for the folder.
	
	3. Click the Replicas tab.
	
	4. In the Servers box, highlight the server you want to move the folder to, and
	  then click Add.
	
	5. In the Replicate Folders To box, select the server or servers you want to
	  remove the replica from, and then click Remove.
	
	NOTE: The folder will still be available on the original server until
	replication has taken place.
	
	SUMMARY
	=======
	
	
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WinNT:4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
