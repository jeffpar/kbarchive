---
layout: page
title: "Q265407: Motocross Madness 2: Certain Sounds Are Not Played in the Game"
permalink: /kb/265/Q265407/
---

## Q265407: Motocross Madness 2: Certain Sounds Are Not Played in the Game

{% raw %}

	Article: Q265407
	Product(s): Microsoft Home Games
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbsound kbimu msgame
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Motocross Madness 2, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you play Microsoft Motocross Madness 2, certain sounds in the game, such as
	the sound of motorcycle engines, may not be played.
	
	CAUSE
	=====
	
	This problem can occur if either of the following conditions is true:
	
	- The sound driver for your sound card is outdated.
	
	- Your sound card does not support the necessary hardware features that are
	  needed to play the game.
	
	RESOLUTION
	==========
	
	To resolve this issue, contact the manufacturer of your sound card to inquire
	about how to obtain and install the latest version of the sound driver for your
	sound card.
	
	For information about how to contact the manufacturer of your sound card, click
	the appropriate article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	If the issue continues to occur, use the following methods in the order in which
	they are presented.
	
	Turn Off Hardware Sound Acceleration
	------------------------------------
	
	To turn off hardware sound acceleration:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "dxdiag" (without the quotation marks), and then click
	  OK.
	
	3. Click the Sound tab.
	
	4. Under DirectX Features, move the Hardware Sound Acceleration Level slider all
	  the way to the left (to the "No acceleration" setting).
	
	5. Click Exit.
	
	NOTE: These steps require that Microsoft DirectX 7.0 or later be installed on the
	computer. Motocross Madness cannot function unless DirectX 7.0a is installed on
	the computer.
	
	Change the Preferred Playback Device to the Game Compatible Device
	------------------------------------------------------------------
	
	To do this:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Multimedia.
	
	3. Under Playback on the Audio tab, click Game Compatible Device in the
	  "Preferred device" box.
	
	  NOTE: If Game Compatible Device is not listed in the "Preferred device" box,
	  please see the "More Information" section of this article for information
	  about how to install it.
	
	4. Click to select the "Use only preferred devices" check box, and then click
	  OK.
	
	5. Close Control Panel.
	
	6. Restart the computer.
	
	MORE INFORMATION
	================
	
	To install the Game Compatible Device:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Modems.
	
	3. If a modem is not already installed in your computer, proceed to step 4.
	
	  If a modem is installed in your computer, click Add in the Modems Properties
	  dialog box.
	
	4. Click to select the "Don't detect my modem; I will select it from a list"
	  check box, and then click Next.
	
	5. In the Manufacturers box, click 3X.
	
	  NOTE: 3X is not included with some versions of Microsoft Windows.
	
	6. In the Models box, click 3X 14.4 Data Fax Modem Voice.
	
	7. Click Next.
	
	8. Click any port, and then click Next.
	
	9. Follow the instructions on the screen to finish installing the Game
	  Compatible Device.
	
	10. Click Finish, and then click Close.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: 2.00 msgame mcm2 motorcross silent background noise
	
	======================================================================
	Keywords          : kb3rdparty kbsound kbimu msgame 
	Technology        : kbGamesSearch kbMotocrossSearch kbMotocrossM2
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
