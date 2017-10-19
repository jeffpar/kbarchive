---
layout: page
title: "Q275438: NBA2000 Error Message: Invalid Page Fault in Module NBA2000.icd"
permalink: /kb/275/Q275438/
---

## Q275438: NBA2000 Error Message: Invalid Page Fault in Module NBA2000.icd

	Article: Q275438
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft NBA Inside Drive 2000, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start Microsoft NBA Inside Drive 2000, you may receive an
	error message similar to the following:
	
	   - NBA2000 caused an invalid page fault in module NBA2000.icd.
	
	   - NBA2000 caused an invalid page fault in module NBA2000.exe.
	
	CAUSE
	=====
	
	This behavior can occur if one or more of the following conditions are true:
	
	- Your monitor is configured improperly.
	
	- Your monitor or video adapter does not support a screen resolution of 800 x
	  600 pixels.
	
	- The video driver for your video adapter is outdated.
	
	- Insufficient video memory is installed on your video adapter.
	
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following methods in the order in which they are
	presented.
	
	Configure Your Monitor
	----------------------
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Display.
	
	3. Follow the appropriate steps for your version of Microsoft Windows:
	
	Microsoft Windows 95:
	
	  a. On the Settings tab, click Change Display Type.
	
	  b. Under Monitor Type, note the manufacturer and model of your current
	     monitor. If an incorrect monitor, Default Monitor, or Unknown Monitor is
	     displayed in the dialog box, click Change.
	
	  c. Click Show All Devices.
	
	Microsoft Windows 95 OEM Service Release 2 (OSR2):
	
	  a. On the Settings tab, click Advanced Properties.
	
	  b. On the Monitor tab, note the manufacturer and model of your current
	     monitor. If an incorrect monitor, Default Monitor, or Unknown Monitor is
	     displayed in the dialog box, click Change.
	
	  c. Click Show All Devices.
	
	Microsoft Windows 98:
	
	  a. On the Settings tab, click Advanced.
	
	  b. Click the Monitor tab.
	
	  c. Click to select the "Automatically detect Plug & Play monitors" check
	     box.
	
	  d. Note the manufacturer and model of your current monitor. If an incorrect
	     monitor, Default Monitor, or Unknown Monitor is displayed in the dialog
	     box, click Change.
	
	  e. Click Next.
	
	  f. Click "Display a list of all the drivers in a specific location, so you
	     can select the driver you want", and then click Next.
	
	  g. Click "Show all hardware."
	
	4. In the Manufacturers box, click the manufacturer of your monitor.
	
	5. In the Models box, click the model of your monitor, and then click OK, or
	  click Next, click Next again, and then click Finish.
	
	  NOTE: If you are prompted to verify that you want to change the monitor, click
	  Yes.
	
	6. Click Close, and then click Close again.
	
	Install an Updated Video Driver
	-------------------------------
	
	To determine the manufacturer and the model of your video adapter:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click System.
	
	3. Click the Device Manager tab.
	
	4. Double-click "Display adapters".
	
	  In the branch under "Display adapters", note the manufacturer and the model of
	  your video adapter.
	
	5. Close Control Panel.
	
	For information about how to contact the manufacturer of your video adapter,
	click the appropriate article number in the following list to view the article
	in the Microsoft Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	Verify That Your Video Adapter Meets Minimum Hardware Requirements
	------------------------------------------------------------------
	
	Verify that your video adapter meets the minimum requirement of 2 megabytes (MB)
	of video memory. To determine the amount of video memory that is installed on
	your video adapter, use the DirectX Diagnostic Tool:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type the following line (including the quotation marks), and
	  then click OK
	
	  "<drive>:\program files\directx\setup\dxdiag.exe"
	
	  where <drive> is the drive letter of the hard disk on which Microsoft
	  Windows is installed.
	
	3. Click the Display or Display 1 tab.
	
	4. Note the amount of video memory on the Approx. Total Memory line under
	  Device, and then click Exit.
	
	If less than 2 MB of video memory is installed on your video adapter, install
	additional video memory on your video adapter, or install a video adapter with
	more video memory.
	
	Additional query words: 1.00 msgame nba2k basketball gpf ipf
	
	======================================================================
	Keywords          :  
	Technology        : _IKkbbogus kbGamesSearch kbNBAInsideDrive2000
	Version           : :1.0
	
	=============================================================================
	
