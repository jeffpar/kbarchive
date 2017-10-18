---
layout: page
title: "Q121548: Problems with Snap To and Focus Enabled with IntelliPoint 1.0"
permalink: kb/121/Q121548/
---

## Q121548: Problems with Snap To and Focus Enabled with IntelliPoint 1.0

	Article: Q121548
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): 1.0,3.1,3.11
	Operating System(s): 
	Keyword(s): win31
	Last Modified: 23-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups 
	- Microsoft IntelliPoint software, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Erratic behavior occurs in Windows or Windows for Workgroups when you enable
	both the Snap-to option (with Return To Previous Position selected) and the
	Focus option in Microsoft IntelliPoint Tools & Controls.
	
	RESOLUTION
	==========
	
	To eliminate these problems, disable one of these options, or deselect the
	Return To Previous Position option.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Examples of erratic behavior include the following:
	
	- If a window with a default button and any other window are open
	  simultaneously, problems may occur when you try to switch between the two by
	  moving the mouse pointer over the title bars. Specifically, after moving the
	  pointer to the title bar of the second window and then to the title bar of
	  the window with the default button, any subsequent attempts to return to the
	  title bar of the second window result in the mouse pointer snapping to the
	  default button on the first window.
	
	- In the previous scenario, if the second window (the window without the
	  default button) is minimized, slightly different behavior results. After
	  moving the pointer to the minimized window, any attempts to go to the title
	  bar of the window with the default button result in the mouse pointer
	  snapping to the minimized second window.
	
	- If two windows with default buttons are open simultaneously, similar problems
	  may arise when attempting to switch between the two by moving the mouse
	  pointer over the title bars. In this case, after moving between the title
	  bars of the two windows once, any subsequent attempts to do so result in the
	  mouse pointer continuously switching between the two windows.
	
	Additional query words:
	
	======================================================================
	Keywords          : win31 
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbIntellipointSearch kbWin310 kbWin311 kbIntelliPoint100
	Version           : :1.0,3.1,3.11
	
	=============================================================================
	
