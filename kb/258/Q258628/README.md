---
layout: page
title: "Q258628: Baseball 2001: Field Radar Graphic Is Not Displayed Properly"
permalink: /kb/258/Q258628/
---

## Q258628: Baseball 2001: Field Radar Graphic Is Not Displayed Properly

{% raw %}

	Article: Q258628
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbdisplay kbui kbimu msgame
	Last Modified: 30-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Baseball 2001 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you play Microsoft Baseball 2001, the field radar graphic may be cut off,
	discolored, missing, or displayed in the wrong location.
	
	Normally, the field radar graphic is displayed in the upper-right corner of the
	game screen.
	
	CAUSE
	=====
	
	This behavior can occur if one of the following conditions is true:
	
	- A video adapter based on the 3Dfx Voodoo2 chip set is installed in your
	  computer.
	
	- An AccelStar 2 video adapter is installed in your computer.
	
	RESOLUTION
	==========
	
	To resolve this issue, press CTRL+F5 to refresh the game screen.
	
	NOTE: The screen refresh may take several seconds to complete.
	
	If the issue continues to occur, proceed to the appropriate method for your video
	adapter.
	
	Update the Video Driver for Your Voodoo2-based Video Adapter
	------------------------------------------------------------
	
	To resolve this issue, download and install the latest version of the video
	driver for your Voodoo2-based video adapter from the following 3Dfx Web site:
	
	  http://www.3Dfx.com/
	
	Update the Video Driver for Your AccelStar 2 Video Adapter
	----------------------------------------------------------
	
	To resolve this issue, download and install the latest version of the video
	driver (version 4.10.1.2105 or later) for the AccelStar 2 video adapter from the
	following 3Dlabs Web site:
	
	  http://www.3dlabs.com/
	
	MORE INFORMATION
	================
	
	If a Voodoo2-based video adapter is installed in your computer, you can turn off
	Gouraud Shading in Baseball 2001 to work around this issue:
	
	1. On the Baseball 2001 Home Plate screen, click Options.
	
	2. Click the Graphics tab.
	
	3. Click to set the Gouraud Shading option to Off, and then click OK.
	
	Additional query words: 1.00 msgame bball bb2001 base ball truncated window
	
	======================================================================
	Keywords          : kbdisplay kbui kbimu msgame 
	Technology        : kbHomeProdSearch kbGamesSearch kbBaseballSearch
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
