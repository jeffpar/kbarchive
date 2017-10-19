---
layout: page
title: "Q264374: Motocross Madness 2: Textures Are Distorted on Windows 2000"
permalink: /kb/264/Q264374/
---

## Q264374: Motocross Madness 2: Textures Are Distorted on Windows 2000

	Article: Q264374
	Product(s): Microsoft Home Games
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbdisplay kbimu msgame kbgraphxlinkcritical
	Last Modified: 01-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Motocross Madness 2, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start a race in Microsoft Motocross Madness 2, textures on the
	motorcycles and riders may be distorted. In addition, textures and colors in the
	background may also be distorted.
	
	CAUSE
	=====
	
	This behavior can occur if both of the following conditions are true:
	
	- A video adapter based on the 3DLabs Permedia 2 chip set is installed in your
	  computer
	
	- You installed Motocross Madness 2 on a Microsoft Windows 2000-based computer.
	
	RESOLUTION
	==========
	
	To work around this issue, configure the 3-D renderer to use Software
	Rasterization.
	
	To do this, click Software Rasterization in the "Please Choose a 3-D Card" dialog
	box that is displayed on the screen when you start the game.
	
	If you do not see this dialog box when you start the game:
	
	1. On the Motocross Madness 2 startup screen, click Options ([GRAPHIC:the three
	  gears]).
	
	2. Click Advanced.
	
	3. Click to select the "Show 3-D Renderer Selector at Startup" check box.
	
	4. Click Back ([GRAPHIC:the pointing hand]) until you return to the Motocross
	  Madness 2 startup screen.
	
	5. Quit and then restart Motocross Madness 2.
	
	STATUS
	======
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	MORE INFORMATION
	================
	
	This issue has been reported with the Diamond Fire GL 1000 Pro video adapter,
	which is based on the 3DLabs Permedia 2 chip set.
	
	Additional query words: 2.00 msgame mcm2 display scrambled corrupt kbgraphx
	
	======================================================================
	Keywords          : kb3rdparty kbdisplay kbimu msgame kbgraphxlinkcritical 
	Technology        : kbGamesSearch kbMotocrossSearch kbMotocrossM2
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	
