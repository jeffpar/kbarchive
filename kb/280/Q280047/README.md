---
layout: page
title: "Q280047: Encarta: Cannot Print Image Colors Correctly"
permalink: kb/280/Q280047/
---

## Q280047: Encarta: Cannot Print Image Colors Correctly

	Article: Q280047
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 
	Operating System(s): 
	Keyword(s): kb3rdparty kbhw kbprint kbimu kbHardware
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta Africana 2000 
	- Microsoft Encarta Africana, Third Edition 
	- Microsoft Encarta Encyclopedia 2000 
	- Microsoft Encarta Encyclopedia Deluxe 2001 for Windows 
	- Microsoft Encarta Encyclopedia Standard 2001 for Windows 
	- Microsoft Encarta Interactive World Atlas 2001 
	- Microsoft Encarta Reference Suite 2000 
	- Microsoft Encarta Reference Suite 2001 
	- Microsoft Encarta Interactive World Atlas 2000 
	- Microsoft Encarta World English Dictionary 2001 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to print from any of the products listed at the beginning of
	this article, the images may be printed as a series of horizontal lines or the
	colors may be distorted.
	
	NOTE: Text may be printed correctly.
	
	CAUSE
	=====
	
	This behavior can occur if both of the following conditions are true:
	
	- You are attempting to print to a Canon BJC-3000 color printer.
	
	- Microsoft Windows is configured to use a High Color (16 bit) color palette.
	
	RESOLUTION
	==========
	
	To resolve this issue, configure Windows to use a different color palette:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Display.
	
	3. Click the Settings tab.
	
	4. In the Colors or Color Palette box, click one of the following color
	  palettes:
	
	   - 256 colors
	   - True Color (24 bit)
	   - True Color (32 bit)
	
	5. Click OK.
	
	6. Follow the instructions on the screen to change the color palette. If you are
	  prompted to restart the computer, do so.
	
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: multi multi-media media mm ee2001 ers2001 eiwa ewed
	
	======================================================================
	Keywords          : kb3rdparty kbhw kbprint kbimu kbHardware 
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbEncartaEncycSearch kbEncartaEnCyc2000 kbEncartaAfricana2000 kbEncartaAfricana300 kbEncartaReference2000 kbEncartaReference2001 kbEncartaWorldAtlas2001 kbEncartaWorldAtlas2000 kbEncartaWorldEngDict2001
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
