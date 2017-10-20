---
layout: page
title: "Q274622: Combat Flight Simulator 2: Slow Performance on High-End Computer"
permalink: /kb/274/Q274622/
---

## Q274622: Combat Flight Simulator 2: Slow Performance on High-End Computer

{% raw %}

	Article: Q274622
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbenv kbimu msgame
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Combat Flight Simulator 2: WWII Pacific Theater, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you play Microsoft Combat Flight Simulator 2 on a high-end computer, the
	performance of the game may be slow or less than satisfactory.
	
	CAUSE
	=====
	
	This behavior can occur if both of the following conditions are true:
	
	- The speed of the processor that is installed in the computer is greater than
	  700 megahertz (MHz).
	
	- 128 megabytes (MB) of random access memory (RAM) is installed in the
	  computer.
	
	Combat Flight Simulator 2 may erroneously detect that more than 128 MB of RAM is
	installed in the computer if the speed of the processor that is installed in the
	computer is greater than 700 MHz.
	
	When Combat Flight Simulator 2 detects more RAM than is actually installed in the
	computer, Combat Flight Simulator 2 configures the overall image quality to an
	inapropriately high setting. The higher settings are designed to take advantage
	of high powered computers and new technologies.
	
	RESOLUTION
	==========
	
	To work around this issue, reduce the overall image quality setting to 5 or
	lower in Combat Flight Simulator 2. To do this:
	
	1. Start Combat Flight Simulator 2.
	
	2. On the startup screen, click Settings.
	
	3. Under Display, move the "Overall image quality" slider to a setting of 5 or
	  lower.
	
	4. Click OK.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Combat Flight
	Simulator 2: WWII Pacific Theater, version 1.0.
	
	Additional query words: 1.00 msgame combatfs cfs2 pentium xeon performs slowly poorly
	
	======================================================================
	Keywords          : kbenv kbimu msgame 
	Technology        : kbHomeProdSearch _IKkbbogus kbGamesSearch kbCombatFlightSim2 kbCombatFlightSimSearch
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
