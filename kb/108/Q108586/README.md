---
layout: page
title: "Q108586: Erratic Serial Mouse Behavior in Microsoft Diagnostics (MSD)"
permalink: /kb/108/Q108586/
---

## Q108586: Erratic Serial Mouse Behavior in Microsoft Diagnostics (MSD)

	Article: Q108586
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Microsoft Diagnostics (MSD) version 2.0, 2.0a, or 2.01, your serial
	mouse may behave erratically.
	
	CAUSE
	=====
	
	This problem occurs when MSD un-synchronizes the mouse during its hardware scan
	of the serial ports.
	
	RESOLUTION
	==========
	
	Using the MSD /I switch usually allows the mouse to continue functioning in MSD
	until you choose either the COM Ports button or IRQ Status button.
	
	To work around this problem, run MSD with the /I switch, or use the keyboard in
	MSD. In either case, you should restart your computer after you exit MSD to
	restore the serial port and IRQ states.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MSD versions 2.0, 2.0a, and
	2.01. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: 6.22 6.20 2.00a 2.00 msd.com msd.exe
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
