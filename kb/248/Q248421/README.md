---
layout: page
title: "Q248421: Fighter Ace II: Textures Are Translucent and Appear Blue"
permalink: /kb/248/Q248421/
---

## Q248421: Fighter Ace II: Textures Are Translucent and Appear Blue

{% raw %}

	Article: Q248421
	Product(s): Microsoft Home Games
	Version(s): 
	Operating System(s): 
	Keyword(s): kb3rdparty kbdisplay kbimu msgame
	Last Modified: 09-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fighter Ace II 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you play Microsoft Fighter Ace II, the textures in the game may be
	translucent and appear blue on the screen.
	
	CAUSE
	=====
	
	This behavior can occur if the following conditions are true:
	
	- A 3Dfx Velocity 100 video adapter is installed in the computer.
	
	- Fighter Ace II is configured to use the Glide display setting.
	
	RESOLUTION
	==========
	
	To resolve this issue, configure Fighter Ace II to use the Direct3D display
	setting:
	
	1. Start Fighter Ace II.
	
	2. On the startup screen, click the Settings tab.
	
	3. Under Display, click Direct 3D.
	
	If the issue continues to occur, configure Fighter Ace II to use software
	rendering:
	
	1. Start Fighter Ace II.
	
	2. On the startup screen, click the Settings tab.
	
	3. Under Display, click Software.
	
	MORE INFORMATION
	================
	
	The 3Dfx Velocity 100 video adapter does not properly support the Glide display
	setting.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: 2.00 msgame fa msngz igz transparent chipset
	
	======================================================================
	Keywords          : kb3rdparty kbdisplay kbimu msgame 
	Technology        : kbGamesSearch kbMSNSearch kbFighterAceSearch kbFighterAce2
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
