---
layout: page
title: "Q94815: MSD Err Msg: Error Writing Bad File Number"
permalink: /kb/094/Q94815/
---

## Q94815: MSD Err Msg: Error Writing Bad File Number

	Article: Q94815
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to print a Microsoft Diagnostics (MSD) report, you receive the
	following error message:
	
	  Error Writing Bad File Number
	
	CAUSE
	=====
	
	This error occurs when one of the following conditions exists:
	
	- You try to print to an inactive port.
	
	- You try to print to a port that is configured for the incorrect bit rate.
	
	- The printer has insufficient memory.
	
	- You load Central Point Software's VWATCH anti-virus terminate-and-stay-
	  resident (TSR) program before the Compact Autoswitch CASTR TSR program in
	  your AUTOEXEC.BAT file.
	
	WORKAROUND
	==========
	
	To work around this problem, use the appropriate method below:
	
	- Print to an active port.
	
	- Use MODE to set the correct bit rate for the port.
	
	- Use MODE to set the port for an infinite retry as follows:
	
	  MODE LPT1,,p
	
	- Load VWATCH after CATSR in your AUTOEXEC.BAT file.
	
	
	Additional query words: 6.00 6.20 "error loading bad file number" low parallel printer shared PCs pc auto switch
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
