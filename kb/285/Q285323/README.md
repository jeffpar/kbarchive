---
layout: page
title: "Q285323: Crimson Skies Err Msg: Fatal Exception OE Has Occurred at  0028"
permalink: /kb/285/Q285323/
---

## Q285323: Crimson Skies Err Msg: Fatal Exception OE Has Occurred at  0028

{% raw %}

	Article: Q285323
	Product(s): Microsoft Home Games
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbimu
	Last Modified: 08-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Crimson Skies 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you play a mission in Microsoft Crimson Skies, you may receive the
	following error message:
	
	  Fatal exception oe has occurred at 0028:02800240
	
	CAUSE
	=====
	
	This behavior can occur if a Turtle Beach Santa Cruz sound card is installed in
	your computer.
	
	The Santa Cruz sound card is not fully compatible with Microsoft DirectX
	DirectSound.
	
	
	RESOLUTION
	==========
	
	To work around this issue, reduce the Effects volume in the game:
	
	1. Start Crimson Skies.
	
	2. On the main screen, click Preferences.
	
	3. Click Audio.
	
	4. Move the Effects Volume slider all the way to the left.
	
	5. Click Accept Changes.
	
	You may be able to work around this issue by downloading and installing the
	latest drivers from the following Turtle Beach Web site:
	
	  http://www.voyetra-turtle-beach.com/
	
	After you install the latest driver for the Santa Cruz sound card, disable Direct
	Sound Acceleration in the Santa Cruz Control Panel:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Santa Cruz Control Panel.
	
	3. Click the Other tab.
	
	4. Click to clear Enable Direct Sound Acceleration.
	
	5. Close Santa Cruz Control Panel.
	
	6. Restart the game.
	
	MORE INFORMATION
	================
	
	To determine the manufacturer and model of your sound card:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click System.
	
	3. Click the Device Manager tab.
	
	4. Click the PLUS SIGN (+) next to "Sound, video and game controllers" to expand
	  the branch.
	
	5. Note the manufacturer and model of the sound card that is listed in the
	  "Sound, video and game controllers" branch.
	
	6. Click OK, and then close Control Panel.
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: msgame 1.00 crimsonskies
	
	======================================================================
	Keywords          : kberrmsg kbimu 
	Technology        : kbHomeProdSearch kbGamesSearch kbCrimsonSkiesSearch
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
