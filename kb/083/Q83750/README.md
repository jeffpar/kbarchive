---
layout: page
title: "Q83750: Sharing Violation with Identical OEMSETUP.INF Files"
permalink: /kb/083/Q83750/
---

## Q83750: Sharing Violation with Identical OEMSETUP.INF Files

	Article: Q83750
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When installing third-party display drivers in Microsoft Windows version 3.1,
	you may receive a Sharing Violation error and then a general protection (GP)
	fault if multiple OEMx.INF files exist in the Windows\SYSTEM subdirectory. This
	only occurs when you run Windows Setup to make changes or additions to your
	system (that is, when you run Setup in maintenance mode).
	
	CAUSE
	=====
	
	This problem occurs if all of the following conditions are true:
	
	- Windows Setup is run in maintenance mode.
	
	- MS-DOS 5.0 or 6.0 SHARE.EXE is loaded.
	
	- Multiple OEMx.INF (OEM0.INF, OEM1.INF, and so on) files exist that contain
	  identical description strings and one of these identical descriptions is
	  selected.
	
	WORKAROUND
	==========
	
	To eliminate the error, rename all OEMx.INF files located in the Windows\SYSTEM
	directory by typing the following, and then install the requested video driver
	from the OEM-supplied disks.
	
	  REN OEM*.INF OEM*.OLD
	
	This causes Setup to create a new OEMx.INF file in the Windows\SYSTEM directory.
	If you have other drivers listed in the renamed OEMx.INF files that you later
	need, you must rename them to a valid OEMx.INF filename to make the drivers
	available.
	
	NOTE: Microsoft recommends that you install third-party video drivers using the
	MS-DOS-based maintenance Setup.
	
	MORE INFORMATION
	================
	
	When each third-party video driver is installed into Windows 3.1, its
	OEMSETUP.INF file is renamed to OEMx.INF and stored in the Windows\SYSTEM
	subdirectory so it can to be read by Windows maintenance mode Setup. These
	OEMx.INF files are linked to the Windows SETUP.INF file, so that all available
	display options are listed in one place. If two of the OEMx.INF files have the
	same video driver description strings, and one is selected, then the Sharing
	Error and GP fault occur.
	
	Additional query words: 3.10 isv oem
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
