---
layout: page
title: "Q258640: Baseball 2001: Slow Frame Rate and Poor Graphics Performance Dur"
permalink: /kb/258/Q258640/
---

## Q258640: Baseball 2001: Slow Frame Rate and Poor Graphics Performance Dur

{% raw %}

	Article: Q258640
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbdisplay kbimu msgame
	Last Modified: 01-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Baseball 2001 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you play Microsoft Baseball 2001, you may experience a slow video frame
	rate and poor graphics performance in the game.
	
	CAUSE
	=====
	
	This behavior can occur if a video adapter based on the nVIDIA Riva TNT chip set
	is installed in your computer.
	
	RESOLUTION
	==========
	
	To resolve this issue, download and install the latest version of the video
	driver for your video adapter from your hardware manufacturer's Web site, or
	download and install the nVIDIA reference driver from the following nVIDIA Web
	site:
	
	  http://www.nvidia.com/
	
	NOTE: After you install the nVIDIA reference driver, you may experience
	additional video-related issues. To resolve these issues or prevent them from
	occurring:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Display.
	
	3. On the Settings tab, click Advanced.
	
	4. Click the tab for your Riva TNT video adapter.
	
	5. Change the Automatic MIP Mapping and the PCI Memory Allocation settings to
	  zero (0).
	
	6. If video performance is still slow, or if the crowd textures in Baseball 2001
	  are blurred, disable the Anti-aliasing feature.
	
	7. Click OK until you return to Control Panel, and then close Control Panel.
	
	Additional query words: 1.00 bball bb2001 base ball choppy jumpy
	
	======================================================================
	Keywords          : kbdisplay kbimu msgame 
	Technology        : kbHomeProdSearch kbGamesSearch kbBaseballSearch
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
