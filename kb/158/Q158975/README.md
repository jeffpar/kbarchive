---
layout: page
title: "Q158975: Why Won't This Game Recognize My 3D Video Card?"
permalink: /kb/158/Q158975/
---

## Q158975: Why Won't This Game Recognize My 3D Video Card?

{% raw %}

	Article: Q158975
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbdisplaykbfaq
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Hellbender for Windows, version 1.0 
	- Microsoft Monster Truck Madness, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Sometimes games don't recognize that your video card three-dimensional (3D)
	capabilities.
	
	CAUSE
	=====
	
	These games require the following:
	
	- An updated video driver that supports Direct3D.
	
	- All Direct3D features supported in hardware on the video card.
	
	- Some games require you to set a game option to enable 3D functionality.
	
	RESOLUTION
	==========
	
	Updated Direct3D-compatible video drivers may be available from your hardware
	vendor. These drivers need to support all the 3D functions in hardware. DirectX
	certification or DirectDraw support is not the only requirement.
	
	After installing a compatible driver, set the 3D game option (if applicable). See
	you game's online Help or readme file for further instructions.
	
	MORE INFORMATION
	================
	
	Some video card drivers do not support all of the Direct3D features. This is not
	a problem for DirectX, which can emulate any missing features in software.
	Generally you do not need a DirectX-certified video card driver for Direct3D to
	work. However, the performance would be very slow, so each game has the option
	to reject emulated 3D. Hellbender does this. It queries DirectX to see if any 3D
	features are being emulated, and if so, will not allow you to use the 3D game
	option.
	
	If the game does not recognize the 3D capabilities of your card, you can continue
	to use the game in normal two-dimensional mode.
	
	Additional query words: 1.0 1.0a 2.0 2.0a 3.0 matrox diamond stb ati video directdraw 3-d three dimensional dimension
	
	======================================================================
	Keywords          : kbdisplay kbfaq
	Technology        : kbGamesSearch kbZNotKeyword kbMonsterTMSearch kbMonsterTM kbHellBender
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
