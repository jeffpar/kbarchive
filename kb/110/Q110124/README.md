---
layout: page
title: "Q110124: How to Use Alternate CONFIG.FPM Files with FoxPro for Mac"
permalink: kb/110/Q110124/
---

## Q110124: How to Use Alternate CONFIG.FPM Files with FoxPro for Mac

	Article: Q110124
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for Macintosh, version 2.5b 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In FoxPro for Macintosh, the configuration file must be named CONFIG.FPM. Unlike
	in FoxPro for Windows and FoxPro for MS-DOS, alternate names cannot be
	specified. In order to use different configuration files, you must place them in
	separate folders.
	
	MORE INFORMATION
	================
	
	FoxPro for Macintosh determines which configuration file to use in the following
	manner:
	
	- If you double-click the Microsoft FoxPro icon, FoxPro looks for a CONFIG.FPM
	  file in the same folder and uses its settings.
	
	- If you double-click a CONFIG.FPM icon, FoxPro uses these settings.
	
	- If you double-click a FoxPro application in a folder, FoxPro uses the
	  CONFIG.FPM file in that folder. If none is available, FoxPro uses the
	  CONFIG.FPM file in the folder where FoxPro is located.
	
	FoxPro identifies the configuration file by its name, CONFIG.FPM. Therefore, in
	order to have multiple configuration files, you must store them in separate
	folders. If you double-click a FoxPro file that has configuration settings with
	a different name, FoxPro executes it if it is a program file or brings it up in
	a text-editing window if it is a text file.
	
	Additional query words: VFoxMac FoxMac
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250bMac kbVFP300bMac
	Version           : MACINTOSH:2.5b,3.0b
	
	=============================================================================
	
