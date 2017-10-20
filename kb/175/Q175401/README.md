---
layout: page
title: "Q175401: Age Of Empires: Game Hangs with Sound Blaster AWE 64"
permalink: /kb/175/Q175401/
---

## Q175401: Age Of Empires: Game Hangs with Sound Blaster AWE 64

{% raw %}

	Article: Q175401
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbsound kburl kbtlc aoe msgamekbfaq
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Age of Empires, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you play Age of Empires, the game may stop responding (hang) after several
	minutes of game play.
	
	CAUSE
	=====
	
	This behavior can occur if both of the following conditions are true:
	
	- A Creative Labs Sound Blaster AWE 64 sound card is installed in your
	  computer.
	
	- You are using outdated sound drivers for your sound card.
	
	RESOLUTION
	==========
	
	To resolve this issue, contact Creative Labs to inquire about how to obtain and
	install the latest version of the sound drivers for the Sound Blaster AWE 64, or
	download and install the latest version of the drivers from the following
	Creative Labs Web site:
	
	  http://www.soundblaster.com
	
	If the issue continues to occur, add the Msync parameter to the command line in
	the Age Of Empires shortcut. To do this, follow these steps:
	
	1. Right-click Start, and then click Open (Windows 95/98) or Open All Users
	  (Windows NT 4.0).
	
	2. Double-click the Programs folder.
	
	3. Double-click the Microsoft Gamesfolder, and then double-click the Age of
	  Empires folder.
	
	4. Right-click the Age of Empires shortcut, and then click Properties.
	
	5. Click the Shortcut tab.
	
	6. Click the command line in the Target box, press END, press the SPACEBAR, type
	  "msync" (without the quotation marks), and then click OK.
	
	7. Close all open windows.
	
	MORE INFORMATION
	================
	
	For additional information about command line parameters in Age of Empires,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q175347 Age of Empires: Command Line Parameters
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	Additional query words: 1.00 aoe ror hang tshoot ts freeze lock msgame kbfaq
	
	======================================================================
	Keywords          : kbsound kburl kbtlc aoe msgame kbfaq
	Technology        : kbHomeProdSearch kbAOE kbGamesSearch kbZNotKeyword kbAOESearch
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
