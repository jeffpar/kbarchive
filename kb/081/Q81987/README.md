---
layout: page
title: "Q81987: Windows 3.1 May Prompt for System Disk During Network Setup"
permalink: /kb/081/Q81987/
---

## Q81987: Windows 3.1 May Prompt for System Disk During Network Setup

	Article: Q81987
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you install Microsoft Windows 3.1 over a network, you may receive the
	following error message if you boot the workstation from a floppy drive:
	
	  Setup cannot find or cannot update your system files on drive A. If you
	  started your system from a floppy disk, be sure to remove write-protection
	  from your system startup (boot) disk. Then insert the disk into drive A and
	  choose Retry. To copy system files to your Windows directory, choose Cancel.
	
	You may receive this error message even if you started the workstation with the
	original system (boot) disk.
	
	CAUSE
	=====
	
	The Windows 3.1 Setup program cannot reliably detect if the original system disk
	is in drive A (that is, Windows 3.1 Setup assumes the system disk is NOT in
	drive A).
	
	RESOLUTION
	==========
	
	To continue installing Windows 3.1, insert the system disk that the machine is
	usually booted from and choose Retry.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows version 3.1. We are
	researching this problem and will post new information here as it becomes
	available.
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
