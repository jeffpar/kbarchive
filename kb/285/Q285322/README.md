---
layout: page
title: "Q285322: Pinball Arcade Hangs When You Attempt to Select a Pinball Table"
permalink: /kb/285/Q285322/
---

## Q285322: Pinball Arcade Hangs When You Attempt to Select a Pinball Table

{% raw %}

	Article: Q285322
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbenv kbimu
	Last Modified: 12-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Pinball Arcade, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to select a pinball table in Microsoft Pinball Arcade, your
	computer may stop responding (hang).
	
	CAUSE
	=====
	
	This behavior can occur if you start Pinball Arcade while Microsoft NetMeeting
	is running on your computer.
	
	NOTE: Pinball Arcade attempts to change the screen resolution on your computer
	when you start the game, but you cannot change the screen resolution while
	NetMeeting is running.
	
	RESOLUTION
	==========
	
	To resolve this issue, quit NetMeeting before you start Pinball Arcade.
	
	To remove NetMeeting from your Startup Group:
	
	1. Click Start, point to Settings, and then click Taskbar & Start Menu.
	
	2. Click the Start Menu Programs tab or click Advanced.
	
	3. Click Remove.
	
	4. Under Programs, click the PLUS SIGN (+) next to Startup.
	
	5. Click NetMeeting, and then click Remove.
	
	6. Click Close, and then click OK.
	
	To start a NetMeeting session manually, click Start, point to Programs, point to
	Accessories, point to Communications, and then click NetMeeting.
	
	MORE INFORMATION
	================
	
	If you attempt to change your screen resolution by using the Display tool in
	Control Panel while NetMeeting is running, you may receive the following error
	message:
	
	  The display control panel is unable to change the display settings. Please
	  check your display hardware in Device Manager.
	
	Additional query words: msgame
	
	======================================================================
	Keywords          : kbenv kbimu 
	Technology        : kbGamesSearch kbZNotKeyword kbPinballArc kbArcadeSearch
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
