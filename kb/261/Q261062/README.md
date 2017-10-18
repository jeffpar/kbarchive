---
layout: page
title: "Q261062: MCM2: Cannot Select Video Adapter When You Use Multiple Monitors"
permalink: kb/261/Q261062/
---

## Q261062: MCM2: Cannot Select Video Adapter When You Use Multiple Monitors

	Article: Q261062
	Product(s): Microsoft Home Games
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbgraphxlinkcritical
	Last Modified: 01-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Motocross Madness 2, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start Microsoft Motocross Madness 2 on a computer that is
	configured to use multiple monitors, the list of available video adapters may be
	incorrect.
	
	CAUSE
	=====
	
	This behavior can occur if a 2-D video adapter is installed in your computer as
	the primary video adapter and a 3-D video adapter is installed in your computer
	as the secondary video adapter.
	
	NOTE: Motocross Madness 2 recognizes only the primary video adapter that is
	installed in your computer.
	
	RESOLUTION
	==========
	
	To work around this issue, select the Software Rasterization option when you
	start Motocross Madness 2.
	
	If you are not prompted to choose the 3-D card when you start Motocross Madness
	2:
	
	1. Start Motocross Madness 2.
	
	2. On the Motocross Madness 2 startup screen, click Options ([GRAPHIC:the three
	  gears]).
	
	3. Click Advanced.
	
	4. Click to select the "Show 3-D Renderer Selector at Startup" check box.
	
	5. Click Back ([GRAPHIC:the pointing hand]) until you return to the Motocross
	  Madness 2 startup screen.
	
	6. Click the X button to quit Motocross Madness 2.
	
	7. Quit and then restart Motocross Madness 2.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Motocross Madness 2.
	
	Additional query words: 2.00 msgame mcm2 motorcross display multimon kbgraphx
	
	======================================================================
	Keywords          : kbgraphxlinkcritical 
	Technology        : kbGamesSearch kbMotocrossSearch kbMotocrossM2
	Version           : :2.0
	
	=============================================================================
	
