---
layout: page
title: "Q104563: PC Win: Running Mail on PC-NFS 5.0"
permalink: kb/104/Q104563/
---

## Q104563: PC Win: Running Mail on PC-NFS 5.0

	Article: Q104563
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run version 3.0, 3.0b, or 3.2 of Microsoft Mail for Windows on version
	5.0 of PC-NFS, you will encounter problems if you have the Mail message file
	(MMF) on the PC-NFS server. Some of the problems include:
	
	- Problems sending and receiving new messages
	
	- Problems moving the MMF locally
	
	CAUSE
	=====
	
	PC-NFS 5.0 has problems performing a short write to a large file.
	
	RESOLUTION
	==========
	
	Sun Microsystems has produced a patch to correct this problem. To obtain the
	patch, call Sun at (800) 872-4786 [(800) USA-4SUN] and request patch ID
	101127-01.
	
	NOTE: Sun will try to e-mail this patch because of its small size. This method
	will only work if you receive the e-mail on a UNIX system. If this is not
	possible, request the patch on a floppy disk.
	
	In addition, the following are two fixes available for file locks:
	
	1. A new lock D to resolve the file lock issue.
	
	2. A new patch for X-locks (exclusive locks) used by Microsoft Word version 6
	  for Windows and Microsoft Excel version 5 for Windows.
	
	
	Additional query words: 3.00 3.00b 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320 kbMail300b
	Version           : WINDOWS:3.0,3.0b,3.2
	
	=============================================================================
	
