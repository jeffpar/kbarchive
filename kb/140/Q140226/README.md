---
layout: page
title: "Q140226: Encarta 96 World Atlas: Unable to Continue Running..."
permalink: kb/140/Q140226/
---

## Q140226: Encarta 96 World Atlas: Unable to Continue Running...

	Article: Q140226
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbinterop kbimukbfaq
	Last Modified: 14-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta 96 World Atlas for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to run Encarta World Atlas for Windows, you may receive the
	following error message:
	
	  Microsoft Encarta 96 World Atlas. Encarta '96 World Atlas is unable to
	  continue running. The problem may be the result of low system resources such
	  as memory or disk space. Try closing other running applications or freeing up
	  disk space before restarting World Atlas.
	
	After you click OK, World Atlas continues to run and then the error message
	reappears.
	
	This symptom can also occur if you click the compass over a point on the world
	map, and then click it a second time on any point. In this case, the program
	quits after you click OK.
	
	CAUSE
	=====
	
	This issue can occur for any of the following reasons:
	
	- Your video card color palette is set to 32-bit color.
	
	- The FlexiCD program is running. If FlexiCD is installed and running, the
	  program is visible on the taskbar.
	
	- CD-ROM drive caching is configured incorrectly.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following methods.
	
	Change the Color Palette
	------------------------
	
	Change the color palette to True Color (24-bit) or 256 colors:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Display.
	
	3. Click the Settings tab.
	
	4. In the Color Palette or Colors box, click True Color (24-bit) or 256 Colors.
	
	5. Click OK, and then follow the instructions on the screen to keep the new
	  color palette setting.
	
	Quit FlexiCD
	------------
	
	If you are using FlexiCD, a CD-ROM icon appears next to the clock on the Windows
	taskbar.
	
	To resolve this issue, quit or remove FlexiCD.
	
	For information about how to quit or remove FlexiCD, please see the "More
	Information" section later in this article.
	
	Properly Configure CD-ROM Drive Caching
	---------------------------------------
	
	To end CD-ROM caching problems, turn off CD-ROM caching or modify the CD-ROM
	caching settings. For information about how to perform this task in Windows, see
	your Windows printed documentation or online Help.
	
	For more information, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q140583 How To Configure CD-ROM Caching For Windows 95
	
	MORE INFORMATION
	================
	
	FlexiCD is a program included with the PowerToys package. PowerToys includes a
	notice that its programs do not have product support, and are to be used only at
	your own risk.
	
	To quit FlexiCD, with the right mouse button click the FlexiCD icon on the
	Taskbar, and then click Exit.
	
	To remove FlexiCD:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. On the Install/Uninstall tab, double-click FlexiCD. The Updating Shortcuts
	  message appears.
	
	4. Close the Add/Remove Programs window.
	
	5. Restart Windows.
	
	Memory Requirements
	-------------------
	
	World Atlas works best with at least 32 megabytes (MB) of free hard disk space if
	you use Windows with the default settings and have Windows manage the memory.
	The following is a list of minimum requirements, based on the amount of RAM
	installed on your computer:
	
	- 8 MB or less of RAM: you must have 24 MB of free disk space.
	
	- 9 to 16 MB of RAM: you must have 16 MB of free disk space.
	
	- Greater than 16 MB of RAM: you must have 8 MB of free disk space.
	
	
	Additional query words: 1996 multi media multimedia multi-media mmtitles kbmm flexcd flex flexicd
	
	======================================================================
	Keywords          : kbenv kberrmsg kbinterop kbimu kbfaq
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbEncartaWorldAtlas1996
	Version           : WINDOWS:
	
	=============================================================================
	
