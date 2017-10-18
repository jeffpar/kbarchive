---
layout: page
title: "Q68725: Hard Drives That Require VirtualHDIrq=off Switch in SYSTEM.INI"
permalink: kb/068/Q68725/
---

## Q68725: Hard Drives That Require VirtualHDIrq=off Switch in SYSTEM.INI

	Article: Q68725
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Windows 3.0 may have problems operating in 386 enhanced mode with some
	nonstandard hard disks and hard disk controllers. It may be necessary to use
	the
	
	  VirtualHDIrq=
	
	switch in the SYSTEM.INI file to enable Windows to run in 386 enhanced mode.
	
	MORE INFORMATION
	================
	
	The VirtualHDIrq=<Boolean> switch allows Windows in 386 enhanced mode to
	terminate interrupts from the hard disk controller, bypassing the ROM routine
	that handles these interrupts. Some hard drives might require that this setting
	be disabled in order for interrupts to be processed correctly. If this setting
	is disabled, the ROM routine handles the interrupts.
	
	To disable Windows from handling the hard disk termination interrupt routines,
	place the following line in the SYSTEM.INI file under the [386Enh] section:
	
	  VirtualHDIRQ=off
	
	The following is a list of hard drives that are known to require the
	VirtualHDIrq=off switch in the SYSTEM.INI file:
	
	  Drive                              Size          Type
	  -----                              ----          ----
	
	  Seagate Wren Swift 94354                         ESDI
	  Microscience HH-1090               80 MB         MFM
	  Western Digital (WD) Caviar 280    80 MB         IDE
	
	In addition, Ontrack's Disk Manager partitioning utility may need this switch.
	
	REFERENCES
	==========
	
	SYSINI3.TXT, Windows 3.00, directory where Windows is installed (generally the
	WINDOWS directory).
	
	Additional query words: 3.00 3.00a KBHW
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
