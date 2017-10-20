---
layout: page
title: "Q122535: Arcade for Macintosh: No Sound Playback or Playback Distorted"
permalink: /kb/122/Q122535/
---

## Q122535: Arcade for Macintosh: No Sound Playback or Playback Distorted

{% raw %}

	Article: Q122535
	Product(s): Microsoft Home Games
	Version(s): MACINTOSH:1.0
	Operating System(s): 
	Keyword(s): kbsound kbimu msgamekbfaq
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Arcade for the Macintosh, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you play Arcade for Macintosh, game sounds may be distorted, or you may not
	hear any game sounds.
	
	CAUSE
	=====
	
	This behavior can occur if Macintosh Sound Manager 3.0 or later is not installed
	on your computer.
	
	RESOLUTION
	==========
	
	To resolve this issue, verify that Sound Manager version 3.0 or later is
	installed on your computer. To do this, follow these steps:
	
	NOTE: If you use Apple System 7.5.3 or later, Sound Manager 3.2 is already
	installed on your computer.
	
	1. On the desktop, double-click your hard disk.
	
	2. In the hard disk window, double-click System Folder.
	
	3. In the System Folder window, double-click Extensions.
	
	4. In the Extensions window, click Sound Manager.
	
	  If Sound Manager is not installed, run Arcade Setup to install Sound Manager
	  3.0.
	
	5. On the File menu, point to Get Info, and then click General Information.
	
	6. Verify that the value for the Version line is 3.0 or higher, and then close
	  the Sound Manager Info window.
	
	  If a version of Sound Manager earlier than 3.0 is installed on your computer,
	  drag it out of the Extensions window, drop it in the Trash, and then run
	  Arcade Setup to install Sound Manager version 3.0.
	
	MORE INFORMATION
	================
	
	You may notice some sound distortion when you run Arcade on certain Macintosh AV
	models, especially when you play Battlezone. The high-fidelity AV sound system
	exaggerates imperfections in the original arcade game sounds.
	
	Additional query words: 1.00 m_arcade audio static scratchy msgame kbfaq
	
	======================================================================
	Keywords          : kbsound kbimu msgame kbfaq
	Technology        : kbHWMAC kbOSMAC kbHomeProdSearch kbGamesSearch kbZNotKeyword kbArcadeSearch kbArcadeMac
	Version           : MACINTOSH:1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
