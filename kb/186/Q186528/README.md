---
layout: page
title: "Q186528: Document Window Problem in 16-Bit Internet Explorer 3.x"
permalink: kb/186/Q186528/
---

## Q186528: Document Window Problem in 16-Bit Internet Explorer 3.x

	Article: Q186528
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The document window in the 16-bit version of Internet Explorer 3.x may not be
	displayed or "painted," when the application is started with its window
	maximized. The document window is the area of the Internet Explorer display
	where HTML pages are displayed. It is located between the Toolbar and Status
	bar. This document describes the problem and its resolution.
	
	CAUSE
	=====
	
	Internet Explorer's document window may be either transparent or a solid color,
	and HTML documents are not displayed until the Internet Explorer window is
	minimized, then maximized.
	
	This problem is not specific to Terminal Server or Terminal Server Client,
	because it is reproducible on Windows 3.1 and Windows NT 3.51 when using the
	16-bit version of Internet Explorer. The problem does not occur with the 32-bit
	version (supported under Windows 95 and Windows NT 4.0 only). The simple
	solution is to use the 32-bit version, if possible.
	
	The problem is related to settings in Internet Explorer's Iexplore.ini, located
	in each user's home directory in the Windows subdirectory. The settings that
	control the size of the Internet Explorer window are stored in the section
	[Document Windows]. This section contains settings similar to:
	
	  [Document Windows]
	  x=110
	  y=122
	  width=375
	  height=221
	  maximize=0
	
	These values define the screen when Internet Explorer is started in windowed mode
	(not maximized):
	
	The "x" and "y" values define the pixel coordinates of the upper-left corner of
	the Internet Explorer window. These values are relative to the upper-left corner
	of the display screen, with "x" being horizontal and "y" vertical.
	
	The "width" value defines the horizontal dimension in pixels of the Internet
	Explorer window.
	
	The "height" value defines the vertical dimension in pixels of the Internet
	Explorer window.
	
	The "maximize" value defines whether Internet Explorer starts with its window
	maximized or not. Possible values are "1" (maximized) or "0" (windowed).
	
	The document window problem occurs when the width and height values both exceed
	the current display dimensions by eight pixels or more. For example, if the
	current display resolution is 640x480, the problem will occur if width is 648 or
	more, and height is 488 or more. If the current display is 800x600, the problem
	occurs when width is 808 or more, and height is 608 or more.
	
	RESOLUTION
	==========
	
	To resolve the problem, either manually edit the values in Iexplore.ini, or
	follow these steps:
	
	1. "Un-maximize" the Internet Explorer window by clicking its "Restore" button.
	  The restore button is located in the upper-right corner of the window.
	
	2. Resize the Internet Explorer window until it fits the current display,
	  without exceeding the display boundaries.
	
	3. Exit Internet Explorer. This writes the new width and height values. It also
	  sets the maximize value to 0 (zero).
	
	4. Restart Internet Explorer.
	
	5. Maximize the window.
	
	6. Exit Internet Explorer. If Internet Explorer is closed while its window is
	  maximized, only the maximize value is modified. It will be set to 1. Restart
	  Internet Explorer. You will notice that it starts in maximized mode, but the
	  document window is displayed correctly.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
