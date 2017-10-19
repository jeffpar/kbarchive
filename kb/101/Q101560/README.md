---
layout: page
title: "Q101560: Odd MSAV Behavior when CHKLIST.MS Files Are Read-Only"
permalink: /kb/101/Q101560/
---

## Q101560: Odd MSAV Behavior when CHKLIST.MS Files Are Read-Only

	Article: Q101560
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	By default, Microsoft Anti-Virus and Microsoft Anti-Virus for Windows store a
	CHKLIST.MS file (marked with the Archive file attribute) in each directory they
	scan. If the CHKLIST.MS file has a Read-Only, System, or Hidden file attribute,
	certain Anti-Virus functions do not work.
	
	CAUSE
	=====
	
	When a file (such as CONFIG.SYS) changes, Anti-Virus detects the change and asks
	to update the file. If the file has a Read-Only, System, or Hidden attribute,
	Anti-Virus does not update the CHKLIST.MS file even if you choose to update it.
	
	This problem also occurs on network drives when you do not have write privileges
	to a directory Anti-Virus is scanning.
	
	If the CHKLIST.MS files have the Read-Only attribute set when you choose Delete
	CHKLIST Files, the files are not deleted; however, Microsoft Anti-Virus gives no
	indication that the files were not deleted. System and Hidden attributes have no
	effect on this process.
	
	WORKAROUND
	==========
	
	To work around this problem, remove any Read-Only, Hidden, or System file
	attributes from the CHKLIST.MS files. If you are scanning a network drive, you
	must have write privileges to all directories scanned by Anti-Virus.
	
	Additional query words: 6.22 6.00 MSAV MWAV 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
