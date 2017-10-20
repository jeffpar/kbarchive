---
layout: page
title: "Q162255: Flight Simulator 95: Err Msg: Invalid Page Fault in G3d.dll"
permalink: /kb/162/Q162255/
---

## Q162255: Flight Simulator 95: Err Msg: Invalid Page Fault in G3d.dll

{% raw %}

	Article: Q162255
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-MAY-2002
	
	6.0
	WINDOWS
	kberrmsg kbdisplay kb3rdparty
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Flight Simulator for Windows 95, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you load Flight Simulator for Windows 95, version 6.0, you may receive the
	following error message
	
	  Invalid Page Fault in G3d.dll.
	
	You may also receive this error message when you attempt to load third party
	scenery.
	
	RESOLUTION
	==========
	
	To resolve this problem, turn off the Dynamic scenery as follows:
	
	1. On the World menu, click Dynamic Scenery.
	
	2. Clear all the check boxes.
	
	3. Set the Scenery Frequency to Very Sparse, and then click OK.
	
	MORE INFORMATION
	================
	
	G3d.dll is the three-dimensional portion of the graphics engine used in Flight
	Simulator version 6.0. It contains the BGL interpreter for Flight Simulator.
	
	Exceeding array boundaries or accessing memory outside of allocated buffers are
	typical causes of invalid page faults. Scenery created for previous versions of
	Flight Simulator may not handle memory access or variables in the code the same
	as scenery designed for the Windows version. The most common occurrence of this
	happens in the Dynamic Scenery. Turning it off has been the most effective means
	of preventing this error message from occurring.
	
	In some cases, Hardware acceleration has also been an issue. Turning down the
	acceleration may help. Some accelerator cards come equipped with their own
	control panel. This control panel may contain settings that affect device or
	item caching, and acceleration. Turning off these caching items has prevented
	similar problems. It is recommended that you consult with the video card
	manufacturer for more information on these settings.
	
	Additional query words: 1.00 6.00 flightsim fltsim g3d ipf invalid page fault fs6 fs95 display errors
	
	======================================================================
	Keywords          :  
	Technology        : _IKkbbogus kbGamesSearch kbFlightSimSearch kbFlightSim95 kbSimSearch
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
