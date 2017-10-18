---
layout: page
title: "Q75710: &quot;SYS2090&quot; Error with Novell Btrieve Utility"
permalink: kb/075/Q75710/
---

## Q75710: &quot;SYS2090&quot; Error with Novell Btrieve Utility

	Article: Q75710
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.0,3.1,3.2,3.3,4.01,5.0
	Operating System(s): 
	Keyword(s): msdos
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.0, 3.1, 3.2, 3.3, 4.01, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	According to Novell technical support, the error message
	
	  SYS2090 - system failed to load program
	
	comes from the Novell Btrieve utility. This is not a DOS error message, but it
	results from the use of Novell's BUTIL.EXE without having BTRIEVE.EXE properly
	loaded.
	
	MORE INFORMATION
	================
	
	Btrieve for DOS is a record management system designed for high performance data
	handling and improved programming productivity. The Btrieve utility is a self
	contained executable program that applications access via function calls.
	BTRIEVE.EXE remains in memory as a terminate-and-stay-resident (TSR) program for
	BUTIL.EXE to access as needed.
	
	The BUTIL.EXE utility, used with Btrieve, allows you to re-create and manage the
	data files created with Btrieve. The error message "SYS2090 - system failed to
	load program" is a result of BTRIEVE.EXE not being loaded prior to BUTIL.EXE.
	BTRIEVE.EXE can be loaded in the AUTOEXEC.BAT file as follows:
	
	  lh [drive:][path]btrieve
	
	  -or-
	
	  loadhigh [drive:][path]btrieve
	
	If BTRIEVE.EXE is loaded low, it is recommended to use the /E switch to force
	Btrieve buffers low. For example:
	
	  [drive:][path]btrieve /e
	
	However, when BTRIEVE.EXE is loaded high, the /E switch is not necessary.
	
	REFERENCES
	==========
	
	Novell technical support: (512) 346-8380, (800) 729-4357
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3.00 3.10 3.20 3.30 4.01 5.00
	
	======================================================================
	Keywords          : msdos 
	Technology        : kbMSDOSSearch kbMSDOS300 kbMSDOS320 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401
	Version           : MS-DOS:3.0,3.1,3.2,3.3,4.01,5.0
	
	=============================================================================
	
