---
layout: page
title: "Q94380: Troubleshooting 'Segment Load Failure' Errors"
permalink: /kb/094/Q94380/
---

## Q94380: Troubleshooting 'Segment Load Failure' Errors

	Article: Q94380
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-SEP-1999
	
	3.00 3.00a 3.10 3.11
	
	WINDOWS
	
	kbtshoot
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Windows loads programs into memory in segments (64K blocks of memory)
	marked fixed, movable, or discardable. Windows can unload discardable segments
	when it needs more memory for other applications.
	
	When an application needs to access a segment of code that is not in memory,
	Windows loads it from the hard disk. If Windows cannot load the segment for some
	reason, it generates a "Segment Load Failure" error.
	
	MORE INFORMATION
	================
	
	"Segment Load Failure" errors are generated if a discarded code segment has been
	damaged or moved, or if Windows lacks the system resources to load a file, as in
	the case when there are not enough MS-DOS file handles.
	
	"Segment Load Failure" errors may also be caused by corrupt binary files.
	Reinstalling Windows or Windows for Workgroups into a new directory or over
	itself may alleviate the error.
	
	You can troubleshoot "Segment Load Failure" errors in the same manner that you
	would troubleshoot a general protection (GP) fault or an unrecoverable
	application error (UAE). For more information on these troubleshooting
	procedures, query on the following words in the Microsoft Knowledge Base:
	
	  gp and tshoot
	
	Additional query words: gpf 3.00 3.00a 3.10 moveable 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
