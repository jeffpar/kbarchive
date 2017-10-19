---
layout: page
title: "Q150724: Configuration Settings for Visual FoxPro for Macintosh"
permalink: /kb/150/Q150724/
---

## Q150724: Configuration Settings for Visual FoxPro for Macintosh

	Article: Q150724
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b
	Operating System(s): 
	Keyword(s): kb3rdparty kbenv
	Last Modified: 15-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article lists some configuration settings for Microsoft Visual FoxPro for
	Macintosh version 3.0b.
	
	MORE INFORMATION
	================
	
	Macscreen
	---------
	
	This setting controls whether the Visual FoxPro desktop is visible at startup. To
	prevent the desktop screen from appearing at startup, use the following setting
	in the Config.fpm file:
	
	     MACSCREEN=OFF
	
	Macdesktop
	----------
	
	Controls whether windows reside at the same level as the main FoxPro for
	Macintosh window. When Macdesktop is set to OFF, windows reside on the main
	FoxPro for Macintosh window. They cannot be moved outside the main FoxPro for
	Macintosh window, and behave in the same manner as windows in Visual FoxPro for
	Windows. This setting is useful when developing cross platform applications.
	
	Keycomp
	-------
	
	This setting controls the Visual FoxPro keystroke navigation. In FoxPro for
	Macintosh, you can specify the DOS, WINDOWS, or MAC (default) option. For more
	information about the keystrokes that the Keycomp setting controls, search for
	SET KEYCOMP in the online Help.
	
	Title
	-----
	
	This setting changes the title of the main Visual FoxPro window. You can use it
	in a executable (.EXE) file to control the name of the main window.
	
	A sample configuration file is as follows:
	
	     ******Sample Config.Fpm
	
	        MACSCREEN=OFF
	        TITLE=My Exe File
	        MACDESKTOP=OFF
	        DEFAULT="Macintosh HD:My Exe File"
	        KEYCOMP= Mac
	
	REFERENCES
	==========
	
	For more information about these settings, search for SET <setting> in the
	online Help.
	
	Additional query words: vfoxmac
	
	======================================================================
	Keywords          : kb3rdparty kbenv 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac
	Version           : MACINTOSH:3.0b
	
	=============================================================================
	
