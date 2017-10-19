---
layout: page
title: "Q89726: Task Swapping with UltraVision and MS-DOS"
permalink: /kb/089/Q89726/
---

## Q89726: Task Swapping with UltraVision and MS-DOS

	Article: Q89726
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	According to Personics technical support, you must replace the file DOSSHELL.VID
	with SCREEN.VID from their distribution disk to make the MS-DOS Shell Task
	Swapper work correctly on the UltraVision Laptop computer.
	
	MORE INFORMATION
	================
	
	Use the following procedure to replace the DOSSHELL.VID file:
	
	1. Change to the directory that contains the Shell files (usually the \DOS
	  directory).
	
	2. Rename the DOSSHELL.VID file with the following command:
	
	     rename dosshell.vid dosshell.1st
	
	3. Copy the file SCREEN.VID from the UltraVision disk to DOSSHELL.VID as
	  follows:
	
	     copy a:screen.vid c:\dos\dosshell.vid
	
	REFERENCES
	==========
	
	Personics technical support: (508) 897-1519
	
	The product included here, UltraVision Laptop, is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: 5.00 6.00 5.00a dos 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0
	
	=============================================================================
	
