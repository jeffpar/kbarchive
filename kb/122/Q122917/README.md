---
layout: page
title: "Q122917: Golf 2.0 Err Msg: Win32s - Error. Improper Installation..."
permalink: kb/122/Q122917/
---

## Q122917: Golf 2.0 Err Msg: Win32s - Error. Improper Installation...

	Article: Q122917
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 12-JUN-2001
	
	2.00
	WINDOWS
	kberrmsg kbfaq
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Golf for Windows, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When running under Windows 3.1, if a temporary or permanent swap file does not
	exist on your computer, the following error message occurs after you
	double-click the Golf icon:
	
	  Win32s - Error
	  Improper Installation.
	  Win32s requires Windows to run with virtual memory enabled.
	  Re-Install Win32s
	
	When running under Windows 95, if you disable virtual memory, or if you specify
	your own virtual memory setting and the setting is not large enough, the
	following error message will occur after you start playing a game:
	
	  This program performed an illegal operation
	
	If you click on details receive the message:
	
	  GLFMOD20 caused an invalid page fault in module GLFANI32.DLL
	
	If you choose the close button, you are returned to the desktop.
	
	RESOLUTION
	==========
	
	Under Windows 3.1, the conflict can be corrected by creating a temporary or
	permanent swap file. A temporary or permanent swap file must exist in order for
	Golf 2.0 to run. To correct this problem, close all applications, and then
	perform the following steps to create the swap file:
	
	1. Double-click the 386 Enhanced icon from the Control Panel.
	
	2. Click Virtual Memory.
	
	3. Click Change.
	
	4. Select the setting for a permanent or temporary swap file.
	
	5. Click OK, restart Windows.
	
	Under Windows 95, the conflict can be corrected by lettings Windows manage your
	virtual memory. To correct this problem, close all applications, and then
	perform the following steps to create the swap file:
	
	1. Click Start, point to Settings, then click Control Panel.
	
	2. Double-click the System icon.
	
	3. Click the Performance tab, then click Virtual Memory.
	
	4. In the Virtual Memory box, select the option that allows Windows to manage
	  the virtual memory.
	
	5. Click OK. Windows will restart.
	
	In both situations, Golf 2.0 should now run properly.
	
	Additional query words: 2.00 win32s win32 virtual memory err msg faq
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbHomeProdSearch kbGamesSearch kbGolfSearch kbGolf200
	Version           : WINDOWS:2.0
	Issue type        : kbprb
	
	=============================================================================
	
