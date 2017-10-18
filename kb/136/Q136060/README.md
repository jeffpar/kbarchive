---
layout: page
title: "Q136060: Green Caching VLB IDE Controller Incompatible with Windows 95"
permalink: kb/136/Q136060/
---

## Q136060: Green Caching VLB IDE Controller Incompatible with Windows 95

	Article: Q136060
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you install Windows 95 on a computer with a Green Caching VLB IDE controller,
	you may receive the following error message when you start the computer:
	
	  Your machine is not configured for its fastest performance, click Details for
	  more information.
	
	If you click Details, you see the following information:
	
	  Drive C: using MS-DOS compatibility mode.
	
	
	CAUSE
	=====
	
	The Windows 95 protected-mode Standard IDE/ESDI Hard Disk Controller driver is
	not compatible with Green Caching VLB IDE controllers and other related
	controllers.
	
	RESOLUTION
	==========
	
	To work around this behavior, disable the Standard IDE/ESDI Hard Disk Controller
	in Device Manager and enable the vendor-provided FastDisk driver. To do so,
	follow these steps:
	
	1. Use any editor (such as Notepad) to edit the System.ini file. Add the
	  following line to the [386Enh] section of the file
	
	  device=<path>\<FastDisk driver>
	
	  where <path> is the path to the vendor-provided FastDisk driver, and
	  <FastDisk driver> is the name of the FastDisk driver file. For example,
	  if the FastDisk driver file is named Wdctrl32.386, and it is located in the
	  C:\Drivers folder, enter the following line:
	
	  device=c:\drivers\wdctrl32.386.
	
	2. Save and then close the file.
	
	3. In Control Panel, double-click the System icon.
	
	4. On the Device Manager tab, double-click Hard Disk Controllers.
	
	5. Click the Standard IDE/ESDI Hard Disk Controller device, and then click
	  Properties.
	
	6. Click the Original Configuration (Current) check box to clear it, and then
	  click OK. Click OK until you return to Control Panel.
	
	7. When you are prompted to restart your computer, do so.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
