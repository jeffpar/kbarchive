---
layout: page
title: "Q126781: Cinemania: Film Clips Do Not Play on Reveal TV 300 Card"
permalink: /kb/126/Q126781/
---

## Q126781: Cinemania: Film Clips Do Not Play on Reveal TV 300 Card

	Article: Q126781
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1995 edition,1996 edition
	Operating System(s): 
	Keyword(s): kb3rdparty kbdisplay kbenv kbimu
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Cinemania for Windows versions 1995 edition, 1996 edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you attempt to play a film clip in Microsoft Cinemania on a computer with a
	Reveal TV 300 card installed, the video playback may be jumbled or the viewing
	window may be empty.
	
	Sound is not affected and no error message appears.
	
	CAUSE
	=====
	
	This behavior can occur if the Reveal TV 300 Compression driver is not
	configured properly.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the appropriate method for your operating system.
	
	Microsoft Windows 3.x
	---------------------
	
	To configure the Reveal TV 300 driver, follow these steps:
	
	1. In Program Manager, double-click the Main group.
	
	2. Double-click Control Panel, and then double-click Drivers.
	
	3. Click the Reveal TV 300 Compression Driver, and then click Setup.
	
	4. Click the Play All AVI Files Through VGA option, and then click OK.
	
	5. Close Control Panel.
	
	Microsoft Windows 95/98
	-----------------------
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Multimedia, and then click the Advanced tab.
	
	  NOTE: If you are using Windows 98, click the Devices tab.
	
	3. Click the PLUS SIGN (+) beside Video Compression Codecs to expand the branch,
	  and then click the Reveal TV 300 Compression Driver.
	
	4. Click Properties.
	
	  NOTE: If you are using Windows 98, click Properties, and then click Settings.
	
	5. Click the Play All AVI Files Through VGA option, and then click OK.
	
	6. Close Control Panel.
	
	You should now be able to play film clips in Cinemania.
	
	MORE INFORMATION
	================
	
	The Reveal TV 300 card is directly linked to the display adapter in your
	computer. Video data is passed from the display adapter through the Reveal TV
	card, and then to your monitor.
	
	The third-party product discussed here are manufactured by a vendor independent
	of Microsoft; we make no warranty, implied or otherwise, regarding this
	product's performance or reliability.
	
	Additional query words: 1995 1996 kbmm multi multi-media media mmtitles television scrambled distorted
	
	======================================================================
	Keywords          : kb3rdparty kbdisplay kbenv kbimu 
	Technology        : kbHomeProdSearch kbHomeMMsearch kbCineManiaSearch kbCinemania1995 kbCinemania1996
	Version           : :1995 edition,1996 edition
	Issue type        : kbprb
	
	=============================================================================
	
