---
layout: page
title: "Q86924: DOCERR: HELPWININFO Data Structure Documented Incorrectly"
permalink: /kb/086/Q86924/
---

## Q86924: DOCERR: HELPWININFO Data Structure Documented Incorrectly

{% raw %}

	Article: Q86924
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The "Microsoft Windows Software Development Kit: Programmer's Reference, Volume
	3: Messages, Structures and Macros" manual for version 3.1 incorrectly documents
	the HELPWININFO data structure on pages 299 and 300.
	
	According to the documentation, the wMax member of the HELPWININFO structure has
	the value 0 (zero) to specify a normal-size window or 1 to specify a maximized
	window. This information is incorrect; the wMax member can assume any one of ten
	different values, as follows:
	
	        Corresponding
	  Value  Windows Constant    Action
	  -----  ----------------    ------
	
	    0    SW_HIDE             Hides the window and passes activation to
	                             another window.
	
	    1    SW_SHOWNORMAL       Activates and displays a window. If the
	                             window is minimized or maximized, Windows
	                             restores it to its original size and
	                             position.
	
	    2    SW_SHOWMINIMIZED    Activates the window and displays it as
	                             an icon.
	
	    3    SW_SHOWMAXIMIZED    Activates the window and displays it as a
	                             maximized window.
	
	    4    SW_SHOWNOACTIVATE   Displays a window in its most recent size
	                             and position. The window that is currently
	                             active remains active.
	
	    5    SW_SHOW             Activates a window and displays it in its
	                             current size and position.
	
	    6    SW_MINIMIZE         Minimizes the specified window and
	                             activates the top-level window in the
	                             window manager's list.
	
	    7    SW_SHOWMINNOACTIVE  Displays the window as an icon. The
	                             window that is currently active remains
	                             active.
	
	    8    SW_SHOWNA           Displays the window in its current state.
	                             The window that is currently active
	                             remains active.
	
	    9    SW_RESTORE          Same as SW_SHOWNORMAL.
	
	Note that these constants are valid only for Windows Help running with Microsoft
	Windows. These constants may change if Help is ported to another platform.
	
	Additional query words: no32bit 3.10 docerr
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
