---
layout: page
title: "Q90417: PRB: Frequent System Errors in FoxBASE+/Mac"
permalink: kb/090/Q90417/
---

## Q90417: PRB: Frequent System Errors in FoxBASE+/Mac

	Article: Q90417
	Product(s): Microsoft Fox Miscellaneous Products
	Version(s): MACINTOSH:2.01
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxBASE+ for Macintosh, version 2.01 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Frequent system errors occur in FoxBASE+/Mac.
	
	CAUSE
	=====
	
	There are a number of causes for this error including:
	
	- The system is infected with a desktop virus.
	
	- The system is running low on memory.
	
	- The system has two INITs that conflict with each other.
	
	RESOLUTION
	==========
	
	The steps to address the three causes listed above are as follows:
	
	- Rebuild the desktop to remove the virus infection. To rebuild the desktop,
	  shut down the Finder. Press and hold down the COMMAND and OPTION keys
	  simultaneously and restart the system. Release the keys after the system
	  indicates that it will rebuild the desktop.
	
	- On a Macintosh with 1 megabyte of memory, allocate at least 840K to
	  FoxBASE+/Mac. If 840K is not available, verify that the system is running the
	  Finder and not the MultiFinder. Free additional memory by removing INITs from
	  the System Folder and by deleting unnecessary desk accessories, such as the
	  Clipboard or the Scrapbook.
	
	- Remove all INITs from the System Folder. On a machine with System 7
	  installed, press and hold down the SHIFT key when the system starts to
	  disable all INITs. Reinstall one INIT, shut down the system, and verify that
	  it starts correctly. Install subsequent INITs and boot the system after each
	  installation until the error occurs again. The last INIT installed is a
	  likely cause of the error.
	
	Additional query words: 2.01
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbFoxproSearch kbFoxBASE201Mac kbFoxBASESearch
	Version           : MACINTOSH:2.01
	
	=============================================================================
	
