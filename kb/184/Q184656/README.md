---
layout: page
title: "Q184656: Outwars: Strange Graphic Effects or Poor Graphic Performance"
permalink: /kb/184/Q184656/
---

## Q184656: Outwars: Strange Graphic Effects or Poor Graphic Performance

{% raw %}

	Article: Q184656
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbdisplay kbenv kbimu msgame
	Last Modified: 26-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outwars, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you play Outwars, you may occasionally move through a solid object or get
	stuck inside a solid object, or the graphics in the game may be slow or jumpy.
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these steps:
	
	1. Quit all programs that are running on your computer.
	
	2. Start Outwars.
	
	3. On the startup screen, click Options.
	
	4. On the Options screen, click Graphics.
	
	If a Direct3D-compatible 3D accelerator card is installed in the computer, follow
	these steps:
	
	1. Click the Use Direct3D box to light it.
	
	2. Click the up or down arrow to select the Direct3D driver you want to use. If
	  the computer has only one display adapter, Display is the only item in the
	  list of available Direct3D drivers. If you install an add-on Direct3D
	  accelerator card or an additional display adapter, Outwars adds it to the
	  list of available Direct3D drivers.
	
	  NOTE: When you enable Direct3D hardware acceleration, some lighting effects in
	  Outwars may not work.
	
	3. Click Back, and then click Back again.
	
	4. Start a single player mission. If the issue continues to occur, disable
	  Fogging. For information about how to disable Fogging in Outwars, see the
	  following article in the Microsoft Knowledge Base:
	
	  Q184588 Outwars: Frame Rate Is Reduced if You Enable Fogging
	
	If a Direct3D-compatible 3D accelerator card is not installed in the computer,
	follow these steps:
	
	1. In the Scene Detail box, click the Medium box or the Low box to light it.
	
	2. In the Resolution box, click the down arrow to select a lower screen
	  resolution.
	
	3. Click Back, and then click Back again.
	
	4. Start a single player mission. If the issue continues to occur, cancel the
	  mission, and then repeat these steps to select a lower scene detail setting
	  or resolution.
	
	If the issue continues to occur, contact your hardware manufacturer to inquire
	about obtaining the latest version of the driver for your display adapter or 3D
	accelerator card.
	
	Additional query words: 1.00 msgame outwar out wars video
	
	======================================================================
	Keywords          : kbdisplay kbenv kbimu msgame 
	Technology        : kbGamesSearch kbOutwarsSearch kbOutwars kbZNotKeyword3
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
