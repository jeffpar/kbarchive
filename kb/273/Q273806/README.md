---
layout: page
title: "Q273806: Midtown Madness 2: Distorted Sound Effects When Playing the Game"
permalink: /kb/273/Q273806/
---

## Q273806: Midtown Madness 2: Distorted Sound Effects When Playing the Game

{% raw %}

	Article: Q273806
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbsound kbimu msgame
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Midtown Madness 2, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you play Microsoft Midtown Madness 2, some of the sound effects in the game
	may be distorted or may not be played.
	
	CAUSE
	=====
	
	This behavior can occur if both of the following conditions are true:
	
	- Midtown Madness 2 is installed on a Microsoft Windows 2000-based computer.
	
	- A Turtle Beach Montego II PCI sound card is installed in the computer.
	
	RESOLUTION
	==========
	
	To resolve this issue, reduce audio hardware acceleration in Windows 2000:
	
	1. Click Start, Settings, and then click Control Panel.
	
	2. Double-click "Sounds and Multimedia".
	
	3. Click the Audio tab.
	
	4. Under Sound Playback, click Advanced.
	
	5. Click the Performance tab.
	
	6. Move the Hardware Acceleration slider to the left until it is set to the
	  "Basic acceleration" setting.
	
	7. Click OK, and then click OK again.
	
	8. Close Control Panel.
	
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	For additional information about how to troubleshoot sound-related issues in
	Midtown Madness 2, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q273828 Midtown Madness 2: Game Sounds Are Not Played Correctly
	
	Additional query words: 2.00 msgame mm2 midmad audio garbled silent win2k
	
	======================================================================
	Keywords          : kb3rdparty kbsound kbimu msgame 
	Technology        : kbHomeProdSearch kbGamesSearch kbMidtownMadSearch kbMidtownMadness2
	Version           : WINDOWS:2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
