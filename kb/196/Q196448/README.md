---
layout: page
title: "Q196448: Print Screen Fails When Pasting into Paint"
permalink: kb/196/Q196448/
---

## Q196448: Print Screen Fails When Pasting into Paint

	Article: Q196448
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you press ALT-PRINT SCREEN to take a screen shot and then attempt to paste
	it into Paint, the image pastes in as an empty white box.
	
	CAUSE
	=====
	
	This problem occurs when the video driver is set to 16 colors.
	
	RESOLUTION
	==========
	
	You can use one of the following methods to work around this problem.
	
	Method 1
	--------
	
	1. In Control Panel, double-click Display and then click the Settings tab.
	
	2. Set the Color Palette option to a setting greater than 16 colors.
	
	Method 2
	--------
	
	1. Open Paint.
	
	2. On the Options menu, click Draw Opaque.
	
	3. Paste in the image.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Version 4.0. We are
	researching this problem and will post additional information here in the
	Microsoft Knowledge Base as it becomes available.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
