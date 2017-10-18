---
layout: page
title: "Q162216: Flight Sim 95: Err Msg: Invalid Page Fault in Weatherm.dll"
permalink: kb/162/Q162216/
---

## Q162216: Flight Sim 95: Err Msg: Invalid Page Fault in Weatherm.dll

	Article: Q162216
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-MAY-2002
	
	6.0
	WINDOWS
	kberrmsg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Flight Simulator for Windows 95, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When creating weather areas in Microsoft Flight Simulator for Windows 95,
	version 6.0, you may receive the following error messages:
	
	  Invalid Page Fault in Weatherm.dll.
	
	  -or-
	
	  Invalid Page Fault in Kernel32.dll.
	
	You will receive this error message when attempting to create multiple weather
	areas using the Advanced Weather dialog box.
	
	STEPS TO REPRODUCE PROBLEM
	--------------------------
	
	The following steps contain information to reproduce the problem. If are
	experiencing this
	
	1. Turn on the Advanced Weather option as follows:
	
	  a. In Flight Simulator for Windows 95, click Options.
	
	  b. Click Preferences.
	
	  c. Click Use Advanced Weather Dialog.
	
	2. Add multiple weather areas as follows:
	
	  a. On the World menu, click Weather Areas.
	
	  b. Click Add Area.
	
	  c. Click OK to exit the dialog box.
	
	To create multiple weather areas, repeat the steps above for each area.
	
	3. Add details for each weather area as follows:
	
	  a. On the World menu, click Weather.
	
	  b. In the Advanced Weather dialog box notice the five topic tabs.
	
	  c. Click the Clouds tab, and then click Add Layer. Any setting is OK.
	
	  d. Click the Windows tab, and then click Add Layer. Any setting is OK.
	
	  e. Click the Temperature tab, and the click Add Layer. Any setting is OK.
	
	  f. Click the Visibility tab and set the visibility. Any setting is OK.
	
	  g. Click the Pressure tab, and then click Drift.
	
	Do this for each weather area. Any setting is OK, but make sure the Drift button
	is clicked.
	
	When all weather area details are set, click OK to exit the Advanced Weather
	dialog box. You will now receive one of the error messages listed at the top of
	this article.
	
	RESOLUTION
	==========
	
	To resolve this error message, leave the Drift set to off, or set the Transition
	to 000.
	
	The Drift button is set to off by default. Leaving it off will prevent the error
	message.
	
	Transition can be set to 000 by editing the Weather Area.
	
	To edit a weather area, do the following:
	
	1. Click Weather Areas on the World menu.
	
	2. Change the Transition number to 000.
	
	You can also set the Transition to 000 in the initial creation of the weather
	area.
	
	Additional query words: 1.00 6.00 flightsim fs6 fs95 transition weather weatherm kernel32.dll IPF get
	
	======================================================================
	Keywords          :  
	Technology        : _IKkbbogus kbGamesSearch kbFlightSimSearch kbFlightSim95 kbSimSearch
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	
