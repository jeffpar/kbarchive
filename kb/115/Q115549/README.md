---
layout: page
title: "Q115549: FAX: Ferrari Board Functions; Gateway Fails w/ Corrupt RRS.FAX"
permalink: kb/115/Q115549/
---

## Q115549: FAX: Ferrari Board Functions; Gateway Fails w/ Corrupt RRS.FAX

	Article: Q115549
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to Fax, version 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Ferrari fax board continues to process faxes but the Fax gateway fails to
	operate because of a corrupt RRS.FAX file.
	
	CAUSE
	=====
	
	The Ferrari fax board queue is out of sync with the RRS.FAX file. This problem
	can be caused by fax failures. It requires maintenance on the fax board-level
	queue.
	
	The Ferrari fax board software has no control of the board-level queue, so it
	cannot clear a current process or clear the queue of pending outgoing faxes.
	This is a design limitation.
	
	RESOLUTION
	==========
	
	Reinstall the Ferrari software. Compress the RRS.FAX file using the Microsoft
	Mail Administrator (ADMIN.EXE) program: select the Gateway, FAX, Compress menu
	commands.
	
	
	Additional query words: 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateFax300a
	Version           : MS-DOS:3.0a
	
	=============================================================================
	
