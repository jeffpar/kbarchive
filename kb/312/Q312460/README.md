---
layout: page
title: "Q312460: FS2002: How to Change Autopilot to FS2000 Functionality"
permalink: /kb/312/Q312460/
---

## Q312460: FS2002: How to Change Autopilot to FS2000 Functionality

{% raw %}

	Article: Q312460
	Product(s): Microsoft Home Games
	Version(s): 
	Operating System(s): 
	Keyword(s): kbimu
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Flight Simulator 2002 
	- Microsoft Flight Simulator 2002 Professional Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The autopilot feature in Microsoft Flight Simulator 2002 is different from that
	in Microsoft Flight Simulator 2000. This article explains the differences and
	the steps to use to emulate Flight Simulator 2000 autopilot functionality.
	
	A single-axis autopilot holds steady on one axis (altitude, for example) while
	allowing you to change other axes at will, so that you can turn or bank while
	maintaining altitude.
	
	For example, a less-expensive private airplane might have a single-axis
	autopilot, which means that it can hold altitude but exert no control over
	heading and direction. Or, it might have just the opposite: a single-axis
	autopilot that can control heading and direction but exert no control over
	altitude.
	
	Although neither Flight Simulator 2002 nor Flight Simulator 2000 use an autopilot
	model that is based solely on the single-axis type, the Flight Simulator 2000
	autopilot feature can be made to function as though it has two single-axis
	autopilots that can work together. Although this model may be satisfying, it is
	not completely realistic.
	
	Flight Simulator 2002 has a more fully-modeled dual-axis autopilot. A dual-axis
	autopilot holds steady on more than one axis, such as both heading and altitude,
	and may require alternate input to make course or heading changes, such as by
	using the heading bug to "steer" the plane.
	
	Note that the autopilots in both Flight Simulator 2000 and Flight Simulator 2002
	are dual-axis. The major change in Flight Simulator 2002 is that you cannot
	choose just one mode at a time, as in Flight Simulator 2000. This is very much
	in-keeping with a real-world scenario with a dual-axis autopilot.
	
	MORE INFORMATION
	================
	
	To modify the Flight Simulator 2002 autopilot functionality to emulate that of
	Flight Simulator 2000, you need to edit the individual Aircraft.cfg file. To do
	this, follow these steps.
	
	NOTE: This file is usually located within the root folder of the aircraft folder.
	Additionally, these steps use the Lear45 aircraft as the sample aircraft.
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type the following (with the quotation marks)
	
	  "C:\Program Files\Microsoft Games\FS2002\aircraft\<lear45>"
	
	  where <lear45> represents the folder name of the aircraft that you are
	  wanting to make the configuration changes to.
	
	3. Right-click Aircraft.cfg, and then click "Open with".
	
	4. Under "Choose the program you want to use", click WORDPAD.
	
	5. Click to clear the "Always use this program to open this file" check box.
	
	6. Click OK.
	
	7. Add the following lines to the [Autopilot] section in the document:
	
	  use_no_default_pitch = 1 // 0 = Default to current pitch mode, 1 = No default pitch mode.
	  use_no_default_bank = 1 // 0 = Default to Wing Leveler mode, 1 = No default bank mode.
	
	8. Click File, and then click Save.
	
	9. Click File, and then click Exit.
	
	Additional query words: msgame
	
	======================================================================
	Keywords          : kbimu 
	Technology        : kbGamesSearch kbFlightSimSearch kbFlightSim2002 kbFlightSim2002Pro kbSimSearch
	Version           : :
	Issue type        : kbhowto kbinfo
	
	=============================================================================
	

{% endraw %}
