---
layout: page
title: "Q111463: Err Msg on TI 4000 with DOS 6 BATTERY.PRO &amp; 32-Bit Disk Access"
permalink: kb/111/Q111463/
---

## Q111463: Err Msg on TI 4000 with DOS 6 BATTERY.PRO &amp; 32-Bit Disk Access

	Article: Q111463
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using 32-bit disk access and you try to start Windows for
	Workgroups, you receive the following error message:
	
	  This program tried to access your hard disk in a way that is incompatible
	  with the 32-bit disk-access feature. (wdctrl)
	
	CAUSE
	=====
	
	This error can occur if BATTERY.PRO is specified in the CONFIG.SYS file on a
	Texas Instruments (TI) model 4000 laptop computer running TI DOS version 6.0.
	
	This error can also occur on other computers that use a 1993 AMI GreenCache 486
	system BIOS chip set if the power management options are enabled in the
	computer's CMOS setup. The error occurs if the computer's hardware does not
	fully support the power management features.
	
	RESOLUTION
	==========
	
	To correct this problem, use any one of the following methods:
	
	- Disable 32-bit disk access in Windows Control Panel.
	
	- Remove or remark the BATTERY.PRO line in the CONFIG.SYS file.
	
	  WARNING: According to Texas Instruments, removing or remarking the BATTERY.PRO
	  line in the CONFIG.SYS file may cause the TI 4000 to over- heat. Contact TI
	  Technical Support for more information.
	
	- Disable the GreenCache power management options in the CMOS setup.
	
	MORE INFORMATION
	================
	
	BATTERY.PRO is the advanced power management (APM) utility for TI laptop
	computers. It extends battery life when the laptop computer is not connected to
	the docking station.
	
	Additional query words: 3.11 Cyrix cx486dx40 green cache
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
