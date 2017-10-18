---
layout: page
title: "Q89380: VSAFE Virus Scanning Software Causes Windows 3.1 Setup to Fail"
permalink: kb/089/Q89380/
---

## Q89380: VSAFE Virus Scanning Software Causes Windows 3.1 Setup to Fail

	Article: Q89380
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): MS-DOS:6.0,6.2,6.21; WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you have VSAFE virus scanning software on your machine, you should disable
	VSAFE from the CONFIG.SYS file and/or the AUTOEXEC.BAT file and restart your
	system before installing Windows 3.1. This applies to new installations and
	upgrades from Windows 3.0.
	
	After Windows is installed, you may use VSAFE. If you are using SMARTDRV.EXE
	version 4.0, load it after VSAFE.
	
	If VSAFE is running when you upgrade to Windows 3.1 from Windows 3.0, you receive
	several error messages about the .COM and .EXE files being changed.
	
	
	Additional query words: 3.10 3.11 3rdparty vsafe.sys vsafe.com Anti- Virus utilities
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311 kbMSDOSSearch kbMSDOS621 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21; WINDOWS:3.1,3.11
	
	=============================================================================
	
