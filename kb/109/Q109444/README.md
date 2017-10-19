---
layout: page
title: "Q109444: CONN: Err Msg: Error &#91;68&#93; Network Name Already in Use: MACNET"
permalink: /kb/109/Q109444/
---

## Q109444: CONN: Err Msg: Error &#91;68&#93; Network Name Already in Use: MACNET

	Article: Q109444
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Connection for PC and AppleTalk Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Import program (IMPORT.EXE) may display the following error during the T3
	Directory Synchronization (Dir-Sync) cycle (this error is also recorded in the
	DIRSYNC.LOG file):
	
	  Error [68] Network name already in use: MACNET
	
	CAUSE
	=====
	
	Version 3.2 of the Microsoft Mail Connection for PC and AppleTalk Networks
	requires version 3.0.3 or later of the Mail for PC Networks IMPORT.EXE program
	to complete the T3 stage of the Directory Synchronization (Dir-Sync) cycle.
	
	Version 3.0.3 or later of the IMPORT.EXE program is required to successfully
	exchange address lists between Mail for AppleTalk Networks and Mail for PC
	Networks by means of Mail Connection version 3.2.
	
	IMPORT.EXE is included with version 3.2 of Microsoft Mail for PC Networks.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailConn320
	Version           : :3.2
	
	=============================================================================
	
