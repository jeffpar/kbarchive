---
layout: page
title: "Q150743: Cannot Use DISKCOPY Command on Identical 3.5-Inch Disk Drives"
permalink: kb/150/Q150743/
---

## Q150743: Cannot Use DISKCOPY Command on Identical 3.5-Inch Disk Drives

	Article: Q150743
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kberrmsg kbhw win95 win98 kbHardware
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to run the DISKCOPY command from the Run command on the Start menu
	to copy from one 3.5-inch floppy disk drive to another identical drive, you may
	receive the following error message:
	
	  Unrecoverable read error on drive A: side 0, track 64 Unrecoverable write
	  error on drive B: side 0, track 64 Target diskette may be unusable.
	
	RESOLUTION
	==========
	
	To work around this behavior, use any one of the following methods:
	
	Method 1
	--------
	
	Run the DISKCOPY command in MS-DOS mode. To do so, follow these steps:
	
	1. Click Start, and then click Shut Down.
	
	2. Click "Restart the computer in MS-DOS mode," and then click Yes.
	
	3. At the command prompt, type the DISKCOPY command you want to use. For
	  example, type the following line, and then press ENTER:
	
	  " diskcopy a: b: " (without the quotation marks)
	
	4. When the copy operation is finished, type the following line and then press
	  ENTER:
	
	  " exit " (without the quotation marks)
	
	Method 2
	--------
	
	Disable protected-mode support for the floppy disk controller. This causes the
	floppy disk drives to operate in MS-DOS Compatibility mode. To do so, follow
	these steps:
	
	1. Click Start, point to Settings, click Control Panel, and then double- click
	  System.
	
	2. Click the Device Manager tab.
	
	3. Double-click the Floppy Disk Controllers branch to expand it, and then
	  double-click Standard Floppy Disk Controller.
	
	4. Click the Original Configuration (Current) check box to clear it, and then
	  click OK.
	
	5. When you are prompted to restart your computer, do so.
	
	Method 3
	--------
	
	Manually copy the information from the source disk to the destination disk.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	This problem does not occur on computers with one 3.5-inch floppy disk drive and
	one 5.25-inch floppy disk drive, or on computers with two 5.25- inch floppy disk
	drives.
	
	
	======================================================================
	Keywords          : kberrmsg kbhw win95 win98 kbHardware 
	Technology        : kbWin95search kbWin98search kbWin95 kbWin98
	Version           : 95
	Issue type        : kbprb
	
	=============================================================================
	
