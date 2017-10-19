---
layout: page
title: "Q103600: How Menu Events Are Handled by Windows &amp; Macintosh"
permalink: /kb/103/Q103600/
---

## Q103600: How Menu Events Are Handled by Windows &amp; Macintosh

	Article: Q103600
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5x,2.6a,2.6x,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5x, 2.6a, 2.6x 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When a menu popup is active, the operating environment's (Windows or Macintosh)
	event manager handles all events. This means that FoxPro will not be able to
	"see" certain events, such as ON KEY LABEL commands, so some code transported
	from FoxPro for MS-DOS may no longer work. For example, the following procedure
	will cause a wait window to display in FoxPro for MS-DOS but not in FoxPro for
	Windows:
	
	1. From the Command window, issue the follow command:
	
	  ON KEY LABEL F8 WAIT WINDOW "Hello"
	
	2. Click any menu pad and leave the menu popup in the open state.
	
	3. When you press F8, the wait window will not appear in FoxPro for Windows
	  because the key press was intercepted by the Windows event manager, not by
	  FoxPro for Windows.
	
	Note that the same behavior occurs for user-defined menus; it is not restricted
	only to the system menu.
	
	NOTE: This behavior occurs in FoxPro for Macintosh when a menu popup is opened by
	using the shortcut key combination, for example pressing COMMAND+N to open the
	File, New menu dialog box.
	
	Additional query words: FoxWin VFoxWin FoxMac 2.50 2.50a 2.50b 2.50c 2.60 access key hot
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260a kbVFP300
	Version           : WINDOWS:2.5x,2.6a,2.6x,3.0
	
	=============================================================================
	
