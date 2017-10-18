---
layout: page
title: "Q94387: Setup Creates OLD_DOS.x Directory with /G &amp; /H Switches"
permalink: kb/094/Q94387/
---

## Q94387: Setup Creates OLD_DOS.x Directory with /G &amp; /H Switches

	Article: Q94387
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Although you don't have the option to uninstall if you install Microsoft MS- DOS
	6 or later Upgrade using the /G and /H switches together, Setup still creates an
	OLD_DOS.x directory. Because you cannot uninstall, it is safe to delete the
	OLD_DOS.x directory using DELOLDOS.EXE.
	
	MORE INFORMATION
	================
	
	Setup /G disables the Uninstall feature of MS-DOS. Setup /H installs MS-DOS with
	very few prompts for user input and cannot be used without the /G switch.
	
	Setup uses the OLD_DOS.x directory to create temporary CONFIG.SYS and
	AUTOEXEC.BAT files when it modifies them. Setup does not copy any other MS-DOS
	files to this directory when you install MS-DOS 6 or later Upgrade using the /G
	and /H switches together.
	
	Additional query words: 6.22 6.00 6.2
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
