---
layout: page
title: "Q162869: Taskbar and Part of Display is Missing"
permalink: /kb/162/Q162869/
---

## Q162869: Taskbar and Part of Display is Missing

	Article: Q162869
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbdisplay
	Last Modified: 21-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You are using a system with an S3 M65 Aurora display chipset. After you install
	or change display settings in Windows NT 4.0, part of the display area is
	missing, including the taskbar.
	
	CAUSE
	=====
	
	The Graphics mode is set to a resolution above 800x600.
	
	WORKAROUND
	==========
	
	To work around this problem, change the display resolution to a supported value
	less than or equal to 800x600 by performing the following steps:
	
	1. Click the Start button, point to Settings, click Control Panel, and then
	  double-click the Display icon.
	
	2. Click the Settings tab.
	
	3. Click to change the Desktop Area setting to 800x600 or less.
	
	4. Click Test.
	
	5. If the display settings are okay, accept the settings.
	
	RESOLUTION
	==========
	
	Support for the S3 M65 Aurora chipset has been added to the S3 miniport/display
	driver in Windows NT 4.0 Service Pack 2. You may either change the resolution
	setting to a supported value less than or equal to 800x600, or load the latest
	Service Pack for Microsoft Windows NT version 4.0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 4.0. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	The S3 miniport/display driver in Windows NT 4.0 does not correctly support the
	S3 M65 Aurora chipset.
	
	The S3 driver included with Windows NT 4.0 does not detect the size of the
	display area. When a resolution higher than the maximum supported by the display
	is selected, the display is expanded off of the viewable area of the screen.
	
	
	Additional query words: s3 resolution
	
	======================================================================
	Keywords          : kbdisplay 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
