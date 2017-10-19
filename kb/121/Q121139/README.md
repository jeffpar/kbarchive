---
layout: page
title: "Q121139: Space: Planets Have No Color"
permalink: /kb/121/Q121139/
---

## Q121139: Space: Planets Have No Color

	Article: Q121139
	Product(s): Microsoft Home Games
	Version(s): MS-DOS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Space Simulator for MS-DOS, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When changing views in Space Simulator, planets may be displayed with no color.
	
	MORE INFORMATION
	================
	
	Space Simulator unloads palette information for objects that are not currently
	active in one of the views. However, when cycling through views, Space Simulator
	may erroneously detect that a planet object is not currently active, and
	therefore will not load the color palette for that object.
	
	Toggling the current view to a new location and then back to the original view
	may force Space Simulator to re-evaluate which objects are active, and reload
	the palette information.
	
	Additional query words: 1.00 Spacesim sim dos ss1 D_spacesim
	
	======================================================================
	Keywords          :  
	Technology        : kbGamesSearch kbZNotKeyword3 kbSpaceSim100DOS
	Version           : MS-DOS:1.0
	Issue type        : kbinfo
	
	=============================================================================
	
