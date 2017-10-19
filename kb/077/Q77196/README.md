---
layout: page
title: "Q77196: When Windows 3.0 Setup Installs HIMEM.SYS"
permalink: /kb/077/Q77196/
---

## Q77196: When Windows 3.0 Setup Installs HIMEM.SYS

	Article: Q77196
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Windows 3.0 Setup program determines whether or not to install
	HIMEM.SYS, based on the computer's hardware and software configuration.
	
	MORE INFORMATION
	================
	
	Setup installs HIMEM.SYS if the machine meets the following basic criteria:
	
	- A 286, 386, or 486 processor.
	
	- The High Memory Area (HMA) exists, which implies 640K conventional memory
	  plus at least 64K extended memory.
	
	- The machine is NOT running an XMS memory manager providing XMS version 2.0 or
	  later. The only exception is that Setup will install its new HIMEM.SYS over
	  HIMEM.SYS versions earlier than 2.6.
	
	Note that Setup checks whether HIMEM.SYS is in memory, not on the hard drive.
	Setup will not check for a DEVICE=C:\HIMEM.SYS statement in the CONFIG.SYS file,
	and will not search the path. Also, Setup cannot check the version number of
	QEMM-386, so it will not install HIMEM.SYS if QEMM is loaded.
	
	Additional query words: 2.0 2.6 3.00 3.00a win30
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
