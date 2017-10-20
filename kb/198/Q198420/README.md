---
layout: page
title: "Q198420: Combat FS: Converted FS98 Aircraft Use Incorrect Flap Sounds"
permalink: /kb/198/Q198420/
---

## Q198420: Combat FS: Converted FS98 Aircraft Use Incorrect Flap Sounds

{% raw %}

	Article: Q198420
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbsound kbimu
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Combat Flight Simulator: WWII Europe Series, version 1.0 
	- Microsoft Combat Flight Simulator 2: WWII Pacific Theater, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use converted Microsoft Flight Simulator 98 aircraft in Microsoft Combat
	Flight Simulator or Microsoft Combat Flight Simulator 2, you may hear incorrect
	flap sounds when you raise or lower the flaps of the converted aircraft.
	
	CAUSE
	=====
	
	This behavior can occur because Combat Flight Simulator is incompatible with
	Flight Simulator 98 aircraft flap sounds that use three cross-faded files.
	
	NOTE: To determine if Flight Simulator 98 aircraft flap sounds use three
	cross-faded files, use a text editor to open the Sound.cfg file for that
	aircraft. If the file contains three [flaps] sections, the aircraft flap sounds
	use three cross-faded files.
	
	MORE INFORMATION
	================
	
	If Flight Simulator 98 aircraft flap sounds use three cross-faded files, Combat
	Flight Simulator or Combat Flight Simulator 2 plays the default flap sounds for
	the Messerschmitt Bf 109E aircraft when you raise or lower the flaps of the
	converted aircraft.
	
	Additional query words: 1.00 msgame combatfs cfs
	
	======================================================================
	Keywords          : kbsound kbimu 
	Technology        : _IKkbbogus kbGamesSearch kbCombatFlightSim2 kbCombatFlightSim kbCombatFlightSimSearch kbSimSearch
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
