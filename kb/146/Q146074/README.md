---
layout: page
title: "Q146074: XCLN: Restored Schedule+ File Not Synchronized w/ Server File"
permalink: /kb/146/Q146074/
---

## Q146074: XCLN: Restored Schedule+ File Not Synchronized w/ Server File

	Article: Q146074
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-SEP-1999
	
	7.00
	WINDOWS
	kbusage
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are a Delegate Owner and you restore the backup copy of another user's
	Microsoft Schedule+ file, the local file is not synchronized with the file on
	the Microsoft Exchange server.
	
	CAUSE
	=====
	
	Normally, when you log on to Microsoft Schedule+, the local file is synchronized
	with the server file. If you restore another user's file from the server, the
	link between the user's local copy and the server copy is broken and
	synchronization is disabled.
	
	
	RESOLUTION
	==========
	
	To correct this problem, force synchronization using the following steps:
	
	1. On the Tools menu, click Options, and then click the Synchronize tab.
	
	2. Click Synchronize Now.
	
	3. Click OK.
	
	
	Additional query words: 7.00
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbScheduleSearch kbSchedule700
	Version           : WINDOWS:7.0
	
	=============================================================================
	
