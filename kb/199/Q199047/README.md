---
layout: page
title: "Q199047: Cannot Start Program When NetMeeting Is Running"
permalink: /kb/199/Q199047/
---

## Q199047: Cannot Start Program When NetMeeting Is Running

{% raw %}

	Article: Q199047
	Product(s): Microsoft Home Games
	Version(s): 1.0,2.0
	Operating System(s): 
	Keyword(s): kberrmsg kbinterop aoe kbimu msgame
	Last Modified: 29-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Age of Empires, version 1.0 
	- Microsoft Age of Empires Expansion: The Rise of Rome, version 1.0 
	- Microsoft Age of Empires II: The Age of Kings, version 2.0 
	- Microsoft Age of Empires II Expansion: The Conquerors 
	- Microsoft Baseball 2000 
	- Microsoft Baseball 2001 
	- Microsoft Baseball 3D, version 1.0 
	- Microsoft Dungeon Siege, version 1.0 
	- Microsoft Links LS 2000 
	- Microsoft Links 2001 
	- Microsoft Motocross Madness, version 1.0 
	- Microsoft Motocross Madness 2, version 2.0 
	- Microsoft StarLancer, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start any of the programs listed at the beginning of this
	article, you may receive one of the following error messages:
	
	  Could not initialize graphics system. Make sure that your video card and
	  driver are compatible with DirectDraw.
	
	  -or-
	
	  Failed to initialize graphics system.
	
	  -or-
	
	  Unable to enumerate any DirectDraw devices installed on this system.
	
	CAUSE
	=====
	
	This behavior can occur if you attempt to start the program when Microsoft
	NetMeeting is running on your computer.
	
	You cannot change your screen resolution when NetMeeting is running. All of the
	programs listed at the beginning of this article may need to change your screen
	resolution when you start the program.
	
	RESOLUTION
	==========
	
	To resolve this issue, quit NetMeeting before you attempt to start any of the
	programs listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	If you attempt to change your screen resolution by using the Display tool in
	Control Panel when NetMeeting is running, you may receive the following error
	message:
	
	  The display control panel is unable to change the display settings. Please
	  check your display hardware in Device Manager.
	
	
	Additional query words: 1.00 msgame aoe ageofempires ages expansion pack
	
	======================================================================
	Keywords          : kberrmsg kbinterop aoe kbimu msgame 
	Technology        : kbHomeProdSearch _IKkbbogus kbLinkGolfSearch kbAOE kbGamesSearch kbZNotKeyword kbGolfSearch _IK kbMotocrossSearch kbStarlancerSearch kbBaseballSearch kbAOESearch kbDungeonSiege kbStarlancer kbAOEExpRome kbAOE2ExpConquerors kbAOE2Kings kbBaseBall2001 kbMotocrossM kbMotocrossM2 kbBaseBall3D kbLinks2001 kbLinksLS2000 kbBaseBall2000
	Version           : :1.0,2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
