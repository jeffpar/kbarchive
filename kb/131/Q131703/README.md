---
layout: page
title: "Q131703: Read Errors with Texel (Plextor) Single-Speed CD-ROM Drive"
permalink: kb/131/Q131703/
---

## Q131703: Read Errors with Texel (Plextor) Single-Speed CD-ROM Drive

	Article: Q131703
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using a Texel (Plextor) single-speed CD-ROM drive, you may
	experience either of the following symptoms:
	
	- You receive read errors when you try to access a CD-ROM in the drive.
	
	- You are unable to play audio CDs.
	
	These problems are known to occur with the following Texel CD-ROM drives:
	
	- DM-3021
	
	CAUSE
	=====
	
	The Texel CD-ROM drive has a firmware version prior to 1.10.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, use either of the following methods:
	
	- Upgrade the firmware in the Texel CD-ROM drive to version 1.10 or higher. For
	  more information about this upgrade, please contact the manufacturer of the
	  drive.
	
	- If Windows 95 is loading protected-mode drivers for the SCSI controller that
	  the Texel CD-ROM drive is connected to, disable the protected- mode drivers.
	  To do so, follow these steps:
	
	  1. Use the right mouse button to click My Computer, then click Properties on
	     the menu that appears.
	
	  2. Click the Device Manager tab.
	
	  3. Click the SCSI controller, then click Properties. Note that you may need
	     to expand a branch of the hardware tree by double-clicking the branch, or
	     by clicking the plus sign (+) to the left of the branch, before you can
	     click the SCSI controller.
	
	  4. Click the Original Configuration (Current) check box to clear it, then
	     click OK.
	
	NOTE: For performance reasons, the first method (upgrading the drive's firmware
	version) is recommended.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
