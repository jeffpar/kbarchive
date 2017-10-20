---
layout: page
title: "Q110835: Flight Simulator: Windows Don't Redraw When Sized or Moved"
permalink: /kb/110/Q110835/
---

## Q110835: Flight Simulator: Windows Don't Redraw When Sized or Moved

{% raw %}

	Article: Q110835
	Product(s): Microsoft Home Games
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-MAY-2002
	
	kbotehr
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Flight Simulator for MS-DOS, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Moving or sizing a window with the mouse causes a "smearing" effect and the
	window remains partially drawn at whatever location it has traversed.
	
	MORE INFORMATION
	================
	
	When sizing or moving a window with the mouse, a complete redraw does not occur
	until the action is completed.
	
	Follow these steps to reproduce this effect:
	
	1. Start Flight Simulator 5.0.
	
	2. Position the mouse cursor in the lower-right corner of view 1.
	
	3. Click and hold down the left mouse button.
	
	4. Drag the cursor up and to the left. Note that the window remains partially
	  drawn at its original location.
	
	5. Release the left mouse button. Note that the View 1 window now redraws
	  completely.
	
	Additional query words: 5.00 flightsim fltsim dos FS5 streak smudge wipe phantom trace
	
	======================================================================
	Keywords          :  
	Technology        : kbGamesSearch kbFlightSimSearch kbFlightSim500DOS kbSimSearch
	Version           : MS-DOS:5.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
