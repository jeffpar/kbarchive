---
layout: page
title: "Q252620: Allegiance: Unable to Run Program in a Window"
permalink: /kb/252/Q252620/
---

## Q252620: Allegiance: Unable to Run Program in a Window

	Article: Q252620
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbdisplay kbtool igz kbimu msgamekbfaq
	Last Modified: 12-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Allegiance, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you play Microsoft Allegiance, you may experience the following symptoms:
	
	- When you press ALT+ENTER to run the program in a window, the program may not
	  run in a window.
	
	- When you start Allegiance using the -windowed command line option, the
	  program may not run in a window.
	
	- The pointing device pointer may disappear.
	
	CAUSE
	=====
	
	This behavior can occur if the following conditions are true:
	
	- The Microsoft Windows color palette setting is not set to High Color (16
	  bit).
	
	- The video driver for your video adapter is outdated.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following methods in the order in whcih they are
	presented.
	
	Set the Windows Color Palette to High Color (16 bit)
	----------------------------------------------------
	
	To set the Windows color palette setting to High Color (16 bit):
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Display.
	
	3. Click the Settings tab.
	
	4. In the Color Palette or Colors box, click High Color (16 bit).
	
	5. Click OK, and then click OK again.
	
	6. Close Control Panel.
	
	Update Your Video Driver
	------------------------
	
	If the High Color (16 bit) setting is unavailable in the Color Palette or Colors
	box, the video driver for your video adapter is outdated.
	
	In this case, contact the manufacturer of your video adapter to find out if an
	updated video driver that supports a 16-bit color palette is available for your
	video adapter.
	
	For a list of video adapter manufacturers, see the "More Information" section of
	this article.
	
	MORE INFORMATION
	================
	
	To determine the manufacturer and model of your video adapter:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click System.
	
	3. Click Device Manager.
	
	4. Click the PLUS SIGN (+) next to "Display adapters" to expand the branch.
	
	  In the branch under "Display adapters", the manufacturer and model of your
	  video adapter should be displayed.
	
	5. Close Control Panel.
	
	For information about how to contact the manufacturer of your video adapter,
	click the appropriate article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	Additional query words: 1.00 msgame igz msngz
	
	======================================================================
	Keywords          : kb3rdparty kbdisplay kbtool igz kbimu msgame kbfaq
	Technology        : _IKkbbogus kbGamesSearch kbAllegianceSearch kbAllegiance
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	
