---
layout: page
title: "Q69973: Unable to Format Floppy Without a Local Hard Drive on Networks"
permalink: /kb/069/Q69973/
---

## Q69973: Unable to Format Floppy Without a Local Hard Drive on Networks

	Article: Q69973
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are on a network and do not have a hard drive, you cannot format a floppy
	disk from Microsoft Windows File Manager.
	
	File Manager returns the error message:
	
	  Format Diskette Error
	
	  Unable to format diskette
	
	CAUSE
	=====
	
	File Manager requires that a hard drive formatted with 512 bytes per sector be
	present to be able to format a floppy disk.
	
	WORKAROUND
	==========
	
	To work around this problem issue the FORMAT command from the MS-DOS command
	prompt.
	
	Additional query words: 3.00 3.0 3.0a 3.00a 3.10 3.11 win30 diskless workstation
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
