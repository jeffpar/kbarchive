---
layout: page
title: "Q283652: Games: Black Screen During Movies While Audio Plays Correctly"
permalink: /kb/283/Q283652/
---

## Q283652: Games: Black Screen During Movies While Audio Plays Correctly

{% raw %}

	Article: Q283652
	Product(s): Microsoft Home Games
	Version(s): 1.0,4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbdisplay kbimu
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Combat Flight Simulator 2: WWII Pacific Theater, version 1.0 
	- Microsoft Crimson Skies, version 1.0 
	- Microsoft MechWarrior 4: Vengeance, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start one of the games listed at the beginning of this
	article, you may be able to hear the audio for the introductory movie, however
	the screen may be blank.
	
	CAUSE
	=====
	
	This behavior can occur if the Ligos MPEG Player is installed on your computer
	and is configured to control MPEG-1 playback.
	
	RESOLUTION
	==========
	
	To resolve the issue:
	
	1. Click Start, point to Programs, and then click LSX-MPEG Player.
	
	2. Click LSX-MPEG Configuration.
	
	3. Click to select the "Play MPEG-2 Only" check box.
	
	4. Click OK.
	
	
	MORE INFORMATION
	================
	
	The Ligos MPEG Splitter sends the video to the Ligos MPEG Video decoding filter
	for playback and sends the audio stream to the Windows default audio decoder.
	However, the games listed at the beginning of this article rely upon the default
	DirectShow filter to render MPEG-1 streams, and are not compatible with the
	Ligos MPEG Splitter.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: msgame blank black no video audio ok mpg avi
	
	======================================================================
	Keywords          : kb3rdparty kbdisplay kbimu 
	Technology        : kbHomeProdSearch _IKkbbogus kbGamesSearch kbCrimsonSkiesSearch kbCombatFlightSim2 kbCombatFlightSimSearch kbCrimsonSkies kbMechWarrior4 kbSimSearch
	Version           : :1.0,4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
