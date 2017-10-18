---
layout: page
title: "Q71231: Mac Srv: Pyro! 4.0 Must Load Before Mail Server"
permalink: kb/071/Q71231/
---

## Q71231: Mac Srv: Pyro! 4.0 Must Load Before Mail Server

	Article: Q71231
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If the Microsoft Mail server and Pyro! version 4.0 from Fifth Generation Systems
	are installed in the System Folder, and Mail is loaded first, neither Mail nor
	Pyro! will be installed properly.
	
	Since start-up documents and INITs are load alphabetically, Pyro! can be renamed
	so that it loads before Microsoft Mail and both will function properly. For
	example, Pyro! can be renamed to "!Pyro".
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
