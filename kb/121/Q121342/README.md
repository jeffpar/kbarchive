---
layout: page
title: "Q121342: Z Order Problems in Space Simulator"
permalink: /kb/121/Q121342/
---

## Q121342: Z Order Problems in Space Simulator

{% raw %}

	Article: Q121342
	Product(s): Microsoft Home Games
	Version(s): MS-DOS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-JUN-1999
	
	kbgraphic
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Space Simulator for MS-DOS, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Z order of objects in Space Simulator may appear to be incorrect in some
	instances. When viewed from above, an object that is positioned beneath another
	object may be drawn as if it were above.
	
	CAUSE
	=====
	
	Space Simulator treats all objects as spherical, with a diameter encompassing
	the largest dimension of the object. For example, the Zander Freighter that has
	a length of 1100 meters is treated by the program as if it were a sphere with a
	diameter of 1100 meters. When Space Simulator is required to display two objects
	very close to one another, the spherical boundaries of the objects may overlap.
	Whichever edge of the spherical boundaries is closer to the view perspective
	determines which object is drawn in the foreground, and which is drawn in the
	background.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Position the Galactic Explorer so that the cockpit of the craft is between
	  the rings of the Ring Station.
	
	2. Switch to Chase view.
	
	3. Position the Chase craft so that it is looking down on the Ring Station from
	  above.
	
	The Galactic Explorer is displayed as if it were above the Ring Station, rather
	than between its rings. This occurs because the spherical scenery boundary of
	the Galactic Explorer is closer to the Chase craft than the spherical scenery
	boundary of the Ring Station. As a result, the program determines that the Ring
	Station is below the Galactic Explorer when viewed from this angle.
	
	This behavior is consistent throughout the program. Z order problems may be
	visible when viewing any two objects that are positioned very close to one
	another.
	
	Additional query words: 1.00 Spacesim sim dos ss1 D_SpaceSim
	
	======================================================================
	Keywords          :  
	Technology        : kbGamesSearch kbZNotKeyword3 kbSpaceSim100DOS
	Version           : MS-DOS:1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
