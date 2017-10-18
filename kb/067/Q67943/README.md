---
layout: page
title: "Q67943: System Doesn't Save Time and Date Changes"
permalink: kb/067/Q67943/
---

## Q67943: System Doesn't Save Time and Date Changes

	Article: Q67943
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.20,3.21,3.3,3.3a,4.0,4.01,5.0,5.0a,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.20, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You use the MS-DOS TIME and DATE commands to change the time and date on your
	system, but the system time and date are not saved when you reboot.
	
	CAUSE
	=====
	
	This error occurs if you are using a version of MS-DOS earlier than 3.3.
	Versions of MS-DOS earlier than version 3.3 do not update the CMOS time/date
	chip.
	
	RESOLUTION
	==========
	
	If you are using a version of MS-DOS earlier than 3.3, you can use the CMOS
	setup utility provided by the computer manufacturer to change CMOS settings.
	
	MORE INFORMATION
	================
	
	Only AT-class machines store the time/date information in standard CMOS memory.
	XT-class machines do not have a built-in mechanism for storing the time and
	date. Manufacturers of XT-class machines sometimes add a clock/calendar chip to
	their systems. MS-DOS does not recognize this hardware unless the system is
	running a version of MS-DOS that has been modified by the manufacturer to work
	with their hardware.
	
	If an AT-class system running MS-DOS 3.3 or later continually loses the time and
	date, the battery that powers the CMOS memory may need to be replaced.
	
	Additional query words: 6.22 3.20 3.21 3.30 3.30a 4.00 4.01 5.00 5.00a 6.00 6.20 \* yeswin4
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:3.20,3.21,3.3,3.3a,4.0,4.01,5.0,5.0a,6.0,6.2,6.21,6.22
	
	=============================================================================
	
