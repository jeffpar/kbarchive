---
layout: page
title: "Q137681: HOWTO: Control the Screen Size of an .Exe File at Startup"
permalink: kb/137/Q137681/
---

## Q137681: HOWTO: Control the Screen Size of an .Exe File at Startup

	Article: Q137681
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbsetup kbHWMAC kbvfp300 kbvfp500 kbvfp600
	Last Modified: 09-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	By default, when you run a Visual FoxPro application's .exe file, the
	application opens in a screen or window that is not maximized. This article
	gives two methods you can use to change this behavior to force the application
	to run maximized. You can do it by using a command in the main program or by
	setting a property for the .exe file at the level of the operating system.
	
	MORE INFORMATION
	================
	
	Using Commands in the Main Program
	----------------------------------
	
	To maximize the screen by using a command in the main program file, enter one of
	the following two commands in the main program of the application:
	
	     zoom window screen max
	
	  -or-
	
	     _screen.windowstate = 2
	
	In the first case, the command treats the desktop screen like a window and
	maximizes it the way it would any other window.
	
	In the latter case, because the Visual FoxPro desktop screen (_screen) is itself
	created as an object, you can manipulate its properties. The command resets the
	screen's WindowState property, which controls whether the screen (or window) is
	run as normal (0), minimized (1), or maximized (2).
	
	NOTE: these commands have no effect if issued from the Config.fpw file. They take
	effect only if issued from the program's main program file. This means that the
	desktop screen will always first appear as not maximized. The screen will then
	be resized by whichever command is issued in the main program and the user will
	see the resize taking place. These commands do not hide the resizing from the
	user.
	
	Using the Operating System
	--------------------------
	
	Alternatively, you can change the size of the opening screen at the Operating
	system level. In Windows version 3.11 and Windows NT, in the program item
	properties, you can specify that the .exe file be run minimized. This will hide
	the screen from users when it first is run. Then you can use the zoom window
	command or _screen.windowstate to maximize the screen. This may be most
	effective on faster computers.
	
	In Windows 95, you can create a shortcut for the .exe file, and set the run
	property to maximized. To do this, create a shortcut, right-click the shortcut,
	click Properties, click the Shortcut tab, and click Maximized. If you use this
	alternative, you don't need to use a command in the main program to run the
	application maximized.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbHWMAC kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac kbVFP300 kbVFP500 kbVFP600
	Issue type        : kbhowto
	
	=============================================================================
	
