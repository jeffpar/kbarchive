---
layout: page
title: "Q160965: Flight Simulator: Fuel Tanks Do Not Switch Automatically"
permalink: /kb/160/Q160965/
---

## Q160965: Flight Simulator: Fuel Tanks Do Not Switch Automatically

{% raw %}

	Article: Q160965
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-MAY-2002
	
	1.0
	WINDOWS
	kbother
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Flight Simulator for Windows 95, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you fly the default 737 in Flight Simulator, the fuel tanks will not switch
	automatically when they run out of fuel.
	
	CAUSE
	=====
	
	This problem occurs if you click the Engine Stops When Out Of Fuel button when
	you select your aircraft. (See the "More Information" section below for more
	details.)
	
	RESOLUTION
	==========
	
	To solve this problem, do not select the Engine Stops When Out Of Fuel option.
	
	MORE INFORMATION
	================
	
	The following are the steps that cause this problem.
	
	Steps to Reproduce Problem:
	
	1. In Flight Simulator, click Select Aircraft on the Aircraft menu.
	
	2. In the Select Aircraft dialog box, click Boeing 737-400. Click OK.
	
	3. On the Aircraft menu, click Realism & Reliability.
	
	4. Click Engine Stops When Out Of Fuel. (This causes the problem.)
	
	5. Click the Fuel tab.
	
	6. Set the Left Aux tank to 3%. Set the Right Aux tank to 3%.
	
	7. Click OK to continue.
	
	8. Take off, the plane crashes within minutes of takeoff.
	
	This action is unexpected. You would expect the tanks to automatically switch
	when required. The Engines Stops When Out of Fuel button makes the engines stop
	before the switch.
	
	Additional query words: 1.00 6.00 flightsim fltsim fs95 fs6 fuel crash switch tanks aux stop taking off landing crashes plane
	
	======================================================================
	Keywords          :  
	Technology        : _IKkbbogus kbGamesSearch kbFlightSimSearch kbFlightSim95 kbSimSearch
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
