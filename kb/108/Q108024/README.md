---
layout: page
title: "Q108024: System Hangs When Booting with FSSYSTEM Disk"
permalink: /kb/108/Q108024/
---

## Q108024: System Hangs When Booting with FSSYSTEM Disk

	Article: Q108024
	Product(s): Microsoft Home Games
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-MAY-2002
	
	kbusage
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Flight Simulator for MS-DOS, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you create a startup (boot) disk using FSSYSTEM.EXE, and then start your
	computer using that disk, your system may stop responding (hang) if you are
	running MS-DOS 6.0 and have an earlier or incompatible version of MOUSE.COM.
	
	MOUSE.COM is copied from your hard drive to drive A when you make the startup
	disk using the FSSYSTEM.EXE program. The mouse driver is loaded by the
	AUTOEXEC.BAT file during startup. FSSYSTEM searches all directories in your PATH
	and copies the latest version of the mouse driver.
	
	RESOLUTION
	==========
	
	1. Remove the following line from the AUTOEXEC.BAT file on drive A:
	
	     lh a:\mouse
	
	  NOTE: If you choose this option, your mouse will not function in Flight
	  Simulator.
	
	  -or-
	
	2. Copy an updated version of MOUSE.COM to drive A.
	
	Additional query words: 5.00 fltsim flt sim fs5
	
	======================================================================
	Keywords          :  
	Technology        : kbGamesSearch kbFlightSimSearch kbFlightSim500DOS kbSimSearch
	Version           : MS-DOS:5.0
	Issue type        : kbprb
	
	=============================================================================
	
