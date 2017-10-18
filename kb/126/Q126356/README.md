---
layout: page
title: "Q126356: GSI IDE Controller Forces Real-Mode Drivers"
permalink: kb/126/Q126356/
---

## Q126356: GSI IDE Controller Forces Real-Mode Drivers

	Article: Q126356
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): diskmem win95 kbDiskMemory
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install a GSI IDE controller in a computer running Windows 95,
	protected-mode IDE controller support may not be loaded.
	
	CAUSE
	=====
	
	The GSI IDE controller BIOS forces you to remove hard disks on the primary
	controller in the computer's CMOS settings. Windows 95 Setup does not always
	detect the GSI controller.
	
	RESOLUTION
	==========
	
	To use a protected-mode IDE controller driver with a GSI IDE controller, follow
	these steps:
	
	1. In Control Panel, double-click the Add New Hardware icon.
	
	2. Follow the instructions in the Add New Hardware Wizard. Let the wizard detect
	  the new controller automatically and install the driver.
	
	MORE INFORMATION
	================
	
	This problem has been confirmed to occur with the following IDE controllers:
	
	- GSI model 4C
	
	- GSI model 18
	
	- GSI model 21V
	
	GSI states that with a primary hard disk controller, the hard disk must be listed
	as type 1 in the computer's CMOS settings for their controller to work.
	
	GSI also states that if there is any device on the secondary IDE controller, the
	CMOS settings must not list the hard disk drives at all.
	
	
	To determine whether Windows 95 is using a protected-mode IDE controller driver,
	follow these steps:
	
	1. Use the right mouse button to click My Computer, and then click Properties on
	  the menu that appears.
	
	2. Click the Performance tab. If your computer is using a protected-mode driver,
	  the status for File System reads "32-bit."
	
	Note that the File System status is intended to represent whether both
	protected-mode IDE controller support (FastDisk or 32-bit disk access) and
	32-bit file access (VFAT) is being provided. VFAT is always provided in Windows
	95, so the file system operates entirely in 32-bit mode if protected-mode IDE
	controller support is provided.
	
	======================================================================
	Keywords          : diskmem win95 kbDiskMemory 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
