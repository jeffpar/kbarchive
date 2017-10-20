---
layout: page
title: "Q274655: CFS2: Aircraft Fly Past Target and Continue with Mission"
permalink: /kb/274/Q274655/
---

## Q274655: CFS2: Aircraft Fly Past Target and Continue with Mission

{% raw %}

	Article: Q274655
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbenv kbimu
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Combat Flight Simulator 2: WWII Pacific Theater, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you play a custom mission in Microsoft Combat Flight Simulator 2 that was
	built using Mission Builder, aircraft may not "search and destroy" a waypoint
	correctly.
	
	The aircraft fly past the waypoint, do not attack the target, and then continue
	with the mission.
	
	CAUSE
	=====
	
	This behavior can occur if the aircraft in the mission are armed with any
	ordinance other than bombs.
	
	RESOLUTION
	==========
	
	To prevent this issue from occurring, use Mission Builder to arm the aircraft in
	the mission with bombs.
	
	MORE INFORMATION
	================
	
	When your mission is to attack a waypoint, the Artificial Intelligence (AI) in
	Combat Flight Simulator 2 searches for targets within a 6 kilometer radius, and
	then attacks the target at the waypoint by using the ordnance that you specify
	in Mission Builder.
	
	Additional query words: 1.00 msgame combatfs cfs2 payload
	
	======================================================================
	Keywords          : kbenv kbimu 
	Technology        : kbHomeProdSearch _IKkbbogus kbGamesSearch kbCombatFlightSim2 kbCombatFlightSimSearch
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
