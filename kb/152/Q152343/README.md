---
layout: page
title: "Q152343: How to Use a Custom Configuration File"
permalink: /kb/152/Q152343/
---

## Q152343: How to Use a Custom Configuration File

	Article: Q152343
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 15-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to use a custom configuration file. Visual FoxPro
	determines valid configuration file usage by both filename, format, and type.
	This allows multiple custom configuration files to exist in one location while
	having a system default.
	
	MORE INFORMATION
	================
	
	In order to ensure that Visual FoxPro uses a custom configuration file, the
	following items must be considered:
	
	1. The custom configuration file must have a type of "FFPM" and a creator of
	  "FOXX." These types can be set by using the FoxTools call FxSetType() or the
	  sample form :sample:tools:setconfig:setconfig.scx.
	
	2. The default configuration file, CONFIG.FPM, must not exist in either the
	  Visual FoxPro or the System Folder. If it does, it will always be used.
	
	3. The format of the configuration file must be text and it must adhere
	  syntactically to those conventions and limitations outlined for the default
	  configuration file.
	
	4. Visual FoxPro must be launched through the custom configuration file either
	  by dropping the custom configuration file onto Visual FoxPro or opening the
	  custom configuration file from the Finder.
	
	Additional query words: VFoxMac
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac
	Version           : MACINTOSH:3.0b
	
	=============================================================================
	
