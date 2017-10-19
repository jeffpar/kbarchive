---
layout: page
title: "Q259754: Zone Err Msg: Invalid Page Fault If a Player Shoots the Moon"
permalink: /kb/259/Q259754/
---

## Q259754: Zone Err Msg: Invalid Page Fault If a Player Shoots the Moon

	Article: Q259754
	Product(s): Microsoft Home Games
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbimu msgame
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Zone.com 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you play Hearts on the Zone, you may receive the following error message if
	a player successfully shoots the moon:
	
	  Lobby.exe caused an invalid page fault in module <filename>.
	
	where <filename> is a component of your video driver.
	
	CAUSE
	=====
	
	This behavior can occur if the video driver for your video adapter is outdated.
	
	RESOLUTION
	==========
	
	To resolve this issue, contact the manufacturer of your video adapter to inquire
	about how to obtain and install the latest version of the video driver for your
	video adapter.
	
	For information about how to contact the manufacturer of your video adapter,
	click the appropriate article number in the following list to view the article
	in the Microsoft Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	MORE INFORMATION
	================
	
	To work around this issue, change the Microsoft Windows color palette setting to
	256 colors:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Display.
	
	3. Click the Settings tab.
	
	4. In the Color Palette or Colors box, click 256 Colors.
	
	5. Click OK, and then click OK again.
	
	6. Close Control Panel.
	
	Additional query words: msgame igz msngz gpf ipf crash
	
	======================================================================
	Keywords          : kberrmsg kbimu msgame 
	Technology        : kbGamesSearch kbMSNSearch kbZone
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
