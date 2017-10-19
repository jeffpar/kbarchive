---
layout: page
title: "Q88145: SMARTDrive Shows Status of Nonexistent Floppy Drives"
permalink: /kb/088/Q88145/
---

## Q88145: SMARTDrive Shows Status of Nonexistent Floppy Drives

	Article: Q88145
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	SMARTDrive (SMARTDRV.EXE) version 4.0 from Windows 3.1 shows the status of
	floppy drives A and B, even if no floppy disk drives are installed.
	
	WORKAROUND
	==========
	
	To work around this problem, specifically instruct SMARTDrive not to cache the
	missing floppy drives. For example, type the following at the MS-DOS command
	prompt:
	
	  c:\windows\smartdrv.exe a- b-
	
	Additional query words: 3.10 3.11 smartdrive diskette caching missing removed non-existent nonexistent
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
