---
layout: page
title: "Q104485: PC Ext: Err Msg: Error 21 Missing Routing File"
permalink: /kb/104/Q104485/
---

## Q104485: PC Ext: Err Msg: Error 21 Missing Routing File

	Article: Q104485
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In version 3.2 of the Microsoft Mail for PC Networks External Mail program
	(EXTERNAL.EXE), Mail's message transfer agent (MTA), you may receive the
	following error message:
	
	  Error 21 Missing Routing File
	
	CAUSE
	=====
	
	This error means that the corresponding .OVL file (ASYNC.OVL, X25EICON.OVL, or
	X25ATLAN.OVL) cannot be loaded.
	
	RESOLUTION
	==========
	
	To load this file, make sure the machine has MS-DOS extended memory available
	and the ASYNC.OVL, X25EICON.OVL, and X25ATLAN.OVL files are in the same
	directory as the EXTERNAL.EXE file.
	
	NOTE: You should store these files on the computer's local disk drive and you
	should set the MS-DOS temporary (temp) workspace to the local drive.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
