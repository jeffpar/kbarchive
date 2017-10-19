---
layout: page
title: "Q142376: PRB: Jetpack Failed With Error = 80"
permalink: /kb/142/Q142376/
---

## Q142376: PRB: Jetpack Failed With Error = 80

	Article: Q142376
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the program Jetpack.exe to compact a WINS or DHCP database, you may
	get the following message:
	
	  Temporary database Temp.mdb already exists.
	  Jetpack failed with error = 80
	
	CAUSE
	=====
	
	You have typed in a Jetpack command line using the file name Temp.mdb for the
	temporary database file, such as:
	
	  Jetpack.exe wins.mdb temp.mdb
	
	Jetpack.exe actually uses two temporary files to compact the database. The first
	one is hardcoded as Temp.mdb, and the second one is specified on your command
	line.
	
	
	When Jetpack is finished, it will delete the Temp.mdb file, so you should also
	make sure that you don't save any file with the name Temp.mdb in the WINS or
	DHCP directory.
	
	RESOLUTION
	==========
	
	Use any other file name for your temp file, as in this example:
	
	  Jetpack.exe wins.mdb tmp.mdb
	
	STATUS
	======
	
	This behavior is by design.
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	Issue type        : kbprb
	
	=============================================================================
	
