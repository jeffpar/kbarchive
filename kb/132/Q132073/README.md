---
layout: page
title: "Q132073: FLTSIM 5.1: FFSYSTEM ERROR When Creating Startup Disk"
permalink: /kb/132/Q132073/
---

## Q132073: FLTSIM 5.1: FFSYSTEM ERROR When Creating Startup Disk

	Article: Q132073
	Product(s): Microsoft Home Games
	Version(s): MS-DOS:5.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-MAY-2002
	
	kbsetup kbhw kbprb
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Flight Simulator for MS-DOS, version 5.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to create a startup disk for Flight Simulator, you receive the
	following error message.
	
	  Installation Aborted!
	
	  The following condition has been detected... FSSYSTEM ERROR or file not found.
	  Press any key to return to DOS.
	
	This error occurs if you try use a low-density disk for a startup disk.
	
	When you try to run FSSYSTEM.EXE from the Flight Simulator directory with a
	low-density disk in the floppy disk drive, you receive the following error
	message:
	
	  Invalid media or Track 0 bad - disk unusable
	
	  Format terminated
	
	CAUSE
	=====
	
	Flight Simulator requires a high-density floppy disk startup disk.
	
	RESOLUTION
	==========
	
	Create your startup disk on a high-density floppy disk.
	
	MORE INFORMATION
	================
	
	To run Microsoft Flight Simulator 5.1, you need a computer with at least 500
	kilobytes (500K) of free conventional memory. If your computer does not have an
	expanded memory manager (EMM), you need 560K of free conventional memory. Flight
	Simulator displays a message if your computer has insufficient conventional
	memory, and you cannot run the program. Please refer to the "Troubleshooting
	Guide for Setup" in Chapter 24 of the Flight Simulator Pilot's Handbook for tips
	on optimizing your system performance.
	
	Additional query words: 5.10 diskette hd floppie flightsim fltsim dos d_fltsim
	
	======================================================================
	Keywords          :  
	Technology        : kbGamesSearch kbFlightSimSearch kbFlightSim510DOS kbSimSearch
	Version           : MS-DOS:5.1
	Issue type        : kbprb
	
	=============================================================================
	
