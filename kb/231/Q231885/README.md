---
layout: page
title: "Q231885: Midtown Madness: Display Adapters Redetected When You Start Game"
permalink: /kb/231/Q231885/
---

## Q231885: Midtown Madness: Display Adapters Redetected When You Start Game

{% raw %}

	Article: Q231885
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbdisplay kbenv kbimu msgame kbFAQ
	Last Modified: 23-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Midtown Madness, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you play Microsoft Midtown Madness on a Microsoft Windows 98-based computer
	configured to use multiple monitors, Midtown Madness may attempt to redetect the
	video adapters installed in the computer each time you start a game.
	
	CAUSE
	=====
	
	This behavior can occur if one or more video adapters installed in the computer
	does not support Microsoft DirectDraw.
	
	RESOLUTION
	==========
	
	You may be able to resolve this issue by installing the latest version of the
	video driver available for each of your video adapters. Contact your hardware
	manufacturer for information about how to obtain the latest video drivers for
	your video adapters.
	
	For additional information about how to contact your hardware manufacturer,
	please see the following articles in the Microsoft Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	To work around this issue, disable the secondary video adapter installed in the
	computer to prevent Midtown Madness from redetecting the video adapters. To do
	this, follow these steps:
	
	1. On the Midtown Madness startup screen, click Options.
	
	2. Click Graphics Options.
	
	3. Under Renderer, note the video adapters detected by Midtown Madness.
	
	4. Click Done.
	
	5. Click Start, point to Settings, and then click Control Panel.
	
	6. Double-click System.
	
	7. On the Device Manager tab, click the PLUS SIGN (+) next to Display Adapters
	  to expand the branch.
	
	8. Click the video adapter you want to disable, and then click Properties.
	
	9. Click to clear the Disable In This Hardware Profile check box.
	
	10. Click OK, and then click OK again.
	
	11. Close Control Panel.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Midtown Madness,
	version 1.0.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	Additional query words: 1.00 mid-town midmad multimon card detection
	
	======================================================================
	Keywords          : kb3rdparty kbdisplay kbenv kbimu msgame kbFAQ 
	Technology        : kbHomeProdSearch kbGamesSearch kbMidtownMadSearch kbMidtownMadness
	Version           : WINDOWS:1.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
