---
layout: page
title: "Q161373: Background Color Changes When Exiting MS-DOS Prompt"
permalink: kb/161/Q161373/
---

## Q161373: Background Color Changes When Exiting MS-DOS Prompt

	Article: Q161373
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you exit from a full-screen MS-DOS prompt, the background color on your
	desktop computer changes.
	
	CAUSE
	=====
	
	This problem has been known to occur when the following three conditions hold
	true simultaneously:
	
	1. The computer's video card uses a Cirrus Logic chip set.
	
	2. The MS-DOS prompt has been configured to open to full screen as the default.
	
	3. The Cirrus Logic video driver included on the Windows NT 4.0 compact disc is
	  being used.
	
	RESOLUTION
	==========
	
	Contact Cirrus Logic Technical Support for information concerning availability
	of an updated video driver.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	To restore the previous desktop color, open the MS-DOS prompt full screen and
	press ALT-ENTER to switch the MS-DOS prompt to a window. The desktop color is
	restored. Exit the MS-DOS prompt from the window. Go to Control Panel, MS-DOS
	Console, and change the display options to "Window."
	
	As stated, this problem will only occur if the video card uses a Cirrus Logic
	chip set AND the MS-DOS prompt has been configured to open as full screen. If an
	MS-DOS prompt is opened as a window first and then switched to full screen,
	exiting from the full-screen DOS prompt will not cause this problem.
	
	
	Additional query words: winnt box msdos
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
