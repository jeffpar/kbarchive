---
layout: page
title: "Q121885: Mac Arcade: Centipede Stops Responding When You Start Game"
permalink: /kb/121/Q121885/
---

## Q121885: Mac Arcade: Centipede Stops Responding When You Start Game

{% raw %}

	Article: Q121885
	Product(s): Microsoft Home Games
	Version(s): MACINTOSH:1.0
	Operating System(s): 
	Keyword(s): kbenv kbimu msgamekbfaq
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Arcade for the Macintosh, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you play the Centipede game in Microsoft Arcade, the computer may stop
	responding (hang).
	
	CAUSE
	=====
	
	This behavior can occur on some 68040-based Macintosh computers if 32-bit
	addressing is disabled.
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these steps:
	
	1. On the Apple menu, point to Control Panels, and then click Memory.
	
	2. Under 32-bit Addressing, click On.
	
	3. On the Special menu, click Restart.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Arcade, version 1.0
	for the Macintosh.
	
	Additional query words: M_Arcade 1.00 lock hung freeze bomb msgame kbfaq
	
	======================================================================
	Keywords          : kbenv kbimu msgame kbfaq
	Technology        : kbHWMAC kbOSMAC kbHomeProdSearch kbGamesSearch kbZNotKeyword kbArcadeSearch kbArcadeMac
	Version           : MACINTOSH:1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
