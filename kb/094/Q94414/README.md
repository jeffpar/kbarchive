---
layout: page
title: "Q94414: OLD_DOS.x Directory Created Even if You Can't Uninstall"
permalink: /kb/094/Q94414/
---

## Q94414: OLD_DOS.x Directory Created Even if You Can't Uninstall

	Article: Q94414
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Although you don't have the option to uninstall when you install Microsoft
	MS-DOS 6.x Upgrade on a system with a disk-compression program (such as
	Stacker), Setup still creates an OLD_DOS.x directory.
	
	Because you cannot uninstall, it is safe to delete the OLD_DOS.x directory using
	DELOLDOS.EXE.
	
	MORE INFORMATION
	================
	
	Setup uses the OLD_DOS.x directory to create temporary CONFIG.SYS and
	AUTOEXEC.BAT files when it modifies them. Setup does not copy any other MS-DOS
	files to this directory when you install MS-DOS 6 or 6.2 Upgrade over a
	disk-compression program.
	
	Additional query words: 6.22 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
