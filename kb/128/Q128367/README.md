---
layout: page
title: "Q128367: PC Win SPlus: Err Msg: File Error: Cannot Find XXXX.DRV"
permalink: kb/128/Q128367/
---

## Q128367: PC Win SPlus: Err Msg: File Error: Cannot Find XXXX.DRV

	Article: Q128367
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:1.0,3.0,3.2,3.2a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.2, 3.2a 
	- Microsoft Schedule+ for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to print from version 3.2 of Microsoft Mail for Windows or
	version 1.0 of Microsoft Schedule+ for Windows, and the default printer driver
	you are using is in the C:\WINDOWS directory, you will get the following error
	message,
	
	  File error: Cannot find xxxx.drv.
	
	where xxxx.drv is your default printer driver filename. (i.e. hppcl5e.drv)
	
	If you choose OK or CANCEL, the message will disappear, and your file will print
	correctly.
	
	CAUSE
	=====
	
	When new or additional printers are added in Microsoft Windows versions 3.1 or
	Microsoft Windows for Workgroups version 3.11, the printer driver file will be
	put in the \WINDOWS\SYSTEM by default. This is the location that Mail for
	Windows and Schedule+ attempts to look for these drivers. If you move these
	drivers to another location (for example, \WINDOWS), you will get the above
	error.
	
	RESOLUTION
	==========
	
	Use one of the following steps to resolve this problem:
	
	- Move the .DRV file associated with your printer to the WINDOWS\SYSTEM
	  subdirectory.
	
	-or-
	
	- You can edit the following MSMAIL.INI or SCHDPLUS.INI line:
	
	  Printer=HP LaserJet 4/4M,HPPCL5E,LPT1:
	
	  Change it to:
	
	  Printer=HP LaserJet 4/4M,C:\WINDOWS\HPPCL5E,LPT1:
	
	MORE INFORMATION
	================
	
	When you attempt to print from Schedule+ or Mail for Windows, the program will
	look at the SCHDPLUS.INI or the MSMAIL.INI, and determine what printer driver is
	being used. Then the SCHDPLUS.PRT or MSMAIL.PRT file is checked.
	
	The .PRT files are small, encrypted files that contain printer configuration
	information. They will be modified if the printer setup via Windows is changed.
	If the .PRT file gets deleted, Mail for Windows and Schedule+ will re-create it.
	The appropriate .DRV files are found in the \WINDOWS\SYSTEM subdirectory.
	
	For additional information, please see the "Windows for Workgroups Resource Kit,"
	pages 4-3 and 4-8.
	
	Additional query words: 1.00 3.00 3.20 3.20a
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbScheduleSearch kbZNotKeyword3 kbSchedule100 kbMail300 kbMail320 kbMail320a
	Version           : WINDOWS:1.0,3.0,3.2,3.2a
	
	=============================================================================
	
