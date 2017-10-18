---
layout: page
title: "Q228514: Baseball 2000: Game Quits and You Are Returned to the Desktop"
permalink: kb/228/Q228514/
---

## Q228514: Baseball 2000: Game Quits and You Are Returned to the Desktop

	Article: Q228514
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbdisplay kbui kbimu msgamekbfaq
	Last Modified: 10-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Baseball 2000, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to play Microsoft Baseball 2000, the game may not start and you
	may be returned to the Windows desktop.
	
	CAUSE
	=====
	
	This behavior can occur if the following conditions are true:
	
	- A Matrox Millennium or Matrox Mystique 220 video adapter is installed in your
	  computer.
	
	- The 3D Hardware graphics option is enabled in Baseball 2000.
	
	RESOLUTION
	==========
	
	To resolve this issue, disable the 3D Hardware graphics option in Baseball 2000.
	To do this, follow these steps:
	
	1. Start Baseball 2000.
	
	2. On the Home Plate screen, click Options.
	
	3. Click the Graphics tab.
	
	4. Under Video Card, click Software.
	
	5. Click OK.
	
	NOTE: If a Matrox Millennium video adapter is installed in your computer, you
	must select the Software graphics option because Baseball 2000 detects the
	Matrox Millennium as a 3D video adapter and enables the 3D Hardware graphics
	option by default.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: 1.00 msgame bball2000 bball2k display card close quits
	
	======================================================================
	Keywords          : kb3rdparty kbdisplay kbui kbimu msgame kbfaq
	Technology        : kbHomeProdSearch kbGamesSearch kbBaseballSearch kbBaseBall2000
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	
