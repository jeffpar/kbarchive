---
layout: page
title: "Q93678: Differences Between SMARTDrive Version 4.0 and 4.1"
permalink: /kb/093/Q93678/
---

## Q93678: Differences Between SMARTDrive Version 4.0 and 4.1

	Article: Q93678
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following enhancements have been made to SMARTDrive version 4.1:
	
	- Corrections to minor problems for better handling bad sectors
	
	- SMARTDrive now supports DoubleSpace
	
	MORE INFORMATION
	================
	
	Corrections to Minor Problems for Better Handling Bad Sectors
	-------------------------------------------------------------
	
	SMARTDrive version 4.1 includes the following corrections:
	
	- SMARTDrive now correctly deals with bad sectors.
	
	- SMARTDrive now correctly handles the int 21 function 68h (Commit File) carry
	  flag.
	
	SMARTDrive Now Supports DoubleSpace
	-----------------------------------
	
	If a DoubleSpace volume is mounted before SMARTDrive version 4.1 is loaded, it
	caches the DoubleSpace host drives. This functionality is similar to the way
	SMARTDrive versions 4.0 and 4.1 work with Stacker. The caching of DoubleSpace
	through the host drive is accomplished using a special interface to the
	DoubleSpace components.
	
	If you specify a DoubleSpace drive on the SMARTDrive command line, you get the
	following message:
	
	  You must specify the host drive for a DoubleSpace drive.
	
	To use SMARTDrive with DoubleSpace, you must specify the host drive.
	
	If SMARTDrive is caching a DoubleSpace host drive, it lists DoubleSpace drives
	with asterisks (*) to indicate that that caching is really done via the host
	drive.
	
	
	Additional query words: 6.00 double space smart drive
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600
	Version           : MS-DOS:6.0
	
	=============================================================================
	
