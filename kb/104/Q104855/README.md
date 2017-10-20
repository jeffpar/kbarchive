---
layout: page
title: "Q104855: Flight Simulator: Sound Problems with Sound Blaster"
permalink: /kb/104/Q104855/
---

## Q104855: Flight Simulator: Sound Problems with Sound Blaster

{% raw %}

	Article: Q104855
	Product(s): Microsoft Home Games
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-MAY-2002
	
	kbusage
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Flight Simulator for MS-DOS, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Sounds stutter or sound choppy when using Sound Blaster or Sound Blaster Pro by
	Creative Labs.
	
	RESOLUTION
	==========
	
	The sounds may be choppy because the interrupt specified in Options,
	Preferences, Sound may be incorrect.
	
	MORE INFORMATION
	================
	
	To determine what interrupt is being used by the Sound Blaster device, use the
	test utility provided by Creative Labs.
	
	1. Switch to the directory created by the Creative Labs software installation
	  routine. (The default directory for Sound Blaster is C:\SB. The default
	  directory for Sound Blaster pro is C:\SBPRO.)
	
	2. Start the test utility. (For Sound Blaster, the command to start the test
	  utility is TEST-SB. For Sound Blaster Pro, the command is TEST-SBP.)
	
	3. Follow the on-screen prompts and make a note of the settings shown.
	
	Contact Creative Labs for further information or assistance.
	
	To set the correct sound settings for Flight Simulator 5.0:
	
	1. From the Flight Simulator Options menu, choose Preferences.
	
	2. From the Preferences menu, choose Sound.
	
	3. Provide the correct settings for Base Address, Interrupt, and DMA Channel as
	  noted in the step above.
	
	4. Exit and Restart Flight Simulator.
	
	Additional query words: 5.00 flightsim fltsim dos fs5 soundblaster blasterpro
	
	======================================================================
	Keywords          :  
	Technology        : kbGamesSearch kbFlightSimSearch kbFlightSim500DOS kbSimSearch
	Version           : MS-DOS:5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
