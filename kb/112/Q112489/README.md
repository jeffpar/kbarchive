---
layout: page
title: "Q112489: Multimedia: Display Looks Bad with Orchid Fahrenheit 1280"
permalink: /kb/112/Q112489/
---

## Q112489: Multimedia: Display Looks Bad with Orchid Fahrenheit 1280

	Article: Q112489
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Multimedia Schubert for Windows, version 1.0 
	- Microsoft Multimedia Mozart for Windows, version 1.0 
	- Microsoft Multimedia Stravinsky for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you install Schubert, Mozart, or Stravinsky on a computer that is using the
	Orchid Fahrenheit 1280 16-color video driver, the display may look strange. For
	example, Schubert may display primarily in black and yellow. Also, when you
	enter some chapters (such as Close Reading in Schubert) buttons and controls may
	leave outlines behind on the screen when you switch pages.
	
	This problem occurs because the installation program does not correctly detect
	that Windows is running in 16 colors, and instead installs the 256-color version
	of the application. The 256-color screens cannot display properly on a system
	that is running in 16-color mode.
	
	The installation program should detect that the system is running in 16-color
	mode and install the 16-color version of the application.
	
	Microsoft has confirmed this to be a problem in Schubert version 1.0, Stravinsky
	version 1.0, and Mozart version 1.0. We are researching this problem and will
	post new information here in the Microsoft Knowledge Base as it becomes
	available.
	
	RESOLUTION
	==========
	
	If possible, switch to a 256-color video driver that supports your video card.
	256 colors is the recommended color mode for Schubert, Mozart, and Stravinsky.
	
	If a 256-color video driver is not available, load the Windows 3.1 VGA video
	driver, through Windows Setup, and re-install the application. Running the Setup
	program with the VGA driver loaded will ensure that the 16-color mode is
	correctly detected and thus the 16-color version of the application will be
	installed.
	
	For information about changing your video mode, refer to pages 557-560 of the
	"Microsoft Windows User's Guide" for Windows 3.1.
	
	REFERENCES
	==========
	
	- The README.TXT file included with Multimedia Schubert version 1.0
	
	- "Microsoft Windows User's Guide," version 3.1, pages 557-560
	
	Additional query words: 1.0 multi media multimedia multi-media palette incorrect ugly weird odd unusual monitor video
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbHomeMMsearch kbZNotKeyword kbMMSchubert kbMMStravinsky kbMMMozart100
	Version           : WINDOWS:1.0
	
	=============================================================================
	
