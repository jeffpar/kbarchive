---
layout: page
title: "Q169494: Minimized Program Does Not Open When Clicked"
permalink: kb/169/Q169494/
---

## Q169494: Minimized Program Does Not Open When Clicked

	Article: Q169494
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kbdisplay kbenv win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, you should first make a backup copy of the
	registry files (System.dat and User.dat). Both are hidden files in the
	Windows folder.
	
	SYMPTOMS
	========
	
	After you minimize a program, clicking the program's button on the taskbar may
	not restore or maximize the program. If you use the right mouse button to click
	the program's button on the taskbar, the Restore or Maximize command is
	available on the context menu for the program.
	
	CAUSE
	=====
	
	The program window may be stored in an unviewable area off the screen.
	
	RESOLUTION
	==========
	
	To resolve this issue, use one of the following methods:
	
	Method 1
	--------
	
	1. Click the program's button on the taskbar.
	
	2. Right-click the program's button on the taksbar, and then click Move on the
	  menu that appears.
	
	3. Move the mouse pointer to the middle of the screen.
	
	4. Use the ARROW keys on the keyboard to move the program window to a viewable
	  area on the screen.
	
	5. Press ENTER.
	
	6. Resize the window if necessary.
	
	Method 2
	--------
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Display, and then click the Settings tab.
	
	3. Under Desktop Area, move the slider to the right. If you are unable to move
	  the slider to the right, the display is already at the highest resolution
	  supported by your display adapter and monitor.
	
	4. Click Apply, and then click OK when you are prompted to change your display
	  settings.
	
	5. If you are satisfied with the display resolution, click Yes when you are
	  prompted to save the settings, and then click OK.
	
	6. Restart your computer.
	
	7. Start the program. If the program is in a viewable area on the screen, move
	  the program window to the center of the screen.
	
	8. Quit the program, and the follow steps 1-6 to change your display settings
	  back to your original display settings.
	
	Method 3
	--------
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows 95. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	NOTE: For information about how to edit the registry, view the Changing Keys And
	Values online Help topic in Registry Editor (Regedit.exe). Note that you should
	make a backup copy of the registry files (System.dat and User.dat) before you
	edit the registry.
	
	1. Use the right mouse button to click the program's button on the taskbar, and
	  then click Close on the menu that appears. If the Close command is not
	  available, click Maximize, and then quit the program.
	
	2. Quit all other running programs.
	
	3. Use Registry Editor to delete the Settings value from the appropriate
	  registry key for the program you are using. For example, if you are using
	  Microsoft Word, delete the Settings value from the following registry key:
	
	     Hkey Current User\Software\Microsoft\Word\<version>\Data
	
	4. Quit Registry Editor.
	
	5. Start the program.
	
	
	Additional query words: data office key launch open word opens launches minimized
	
	======================================================================
	Keywords          : kbdisplay kbenv win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	Issue type        : kbprb
	
	=============================================================================
	
