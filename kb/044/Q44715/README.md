---
layout: page
title: "Q44715: Mac Srv: Server Not Visible in Chooser on a Macintosh Plus"
permalink: kb/044/Q44715/
---

## Q44715: Mac Srv: Server Not Visible in Chooser on a Macintosh Plus

	Article: Q44715
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A Microsoft Mail server running on a Macintosh Plus may not see itself in the
	Chooser unless the AppleTalk file has been copied into the System Folder on the
	hard disk of the Macintosh Plus. This file is provided on the Microsoft Mail
	Server Installer disk.
	
	If you installed a Mail server on a Macintosh Plus without using the Installer,
	be sure to copy the AppleTalk file that came with that disk into the System
	Folder. If you use the Installer, the AppleTalk file is automatically copied
	into the System Folder of a Macintosh Plus server.
	
	Macintosh Plus servers do not show up in their own Chooser because a Macintosh
	Plus cannot treat itself as an AppleTalk node on an AppleTalk network. The ROM
	(read-only memory) on a Macintosh Plus does not support self-addressing.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300 kbMailATN310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
