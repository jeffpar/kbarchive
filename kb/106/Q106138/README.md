---
layout: page
title: "Q106138: Flight Simulator: Digitized Sounds Play Badly or Not at All"
permalink: /kb/106/Q106138/
---

## Q106138: Flight Simulator: Digitized Sounds Play Badly or Not at All

	Article: Q106138
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
	
	If you are using a Pro Audio Spectrum card with Flight Simulator, you may find
	that the digitized sounds play badly or not at all.
	
	RESOLUTION
	==========
	
	To correct this problem, follow these steps.
	
	NOTE: You may need to turn Use XMS Memory off in the Sound Preferences dialog box
	to get the desired results:
	
	1. Set your DMA (direct memory access) channel to 0, 1, or 3 and use an 8-bit
	  DMA channel rather than a 16-bit channel.
	
	2. Edit the MVSOUND.SYS line in the CONFIG.SYS file on your Flight Simulator
	  startup disk. The following is an example of how the MVSOUND.SYS line might
	  appear in your CONFIG.SYS file (there are optional switches not included in
	  this example):
	
	     DEVICE=C:\PASTUDIO\MVSOUND.SYS D:3 Q:11 S:0 J:1
	
	  Where D:# refers to the DMA channel setting, Q:# is the IRQ channel, S:#
	  indicates whether Sound Blaster emulation is set to On (1) or Off (0), and
	  J:# indicates if the Joystick port is Enabled (1) or Disabled (0).
	
	3. Save the CONFIG.SYS file, and restart using your Flight Simulator startup
	  disk.
	
	When you run Flight Simulator again, digitized sounds should play correctly.
	
	MORE INFORMATION
	================
	
	Be sure that you edit the CONFIG.SYS file on your Flight Simulator startup disk,
	not on your hard drive. If you edit the CONFIG.SYS on your hard drive, you may
	change settings that are necessary for other applications to run correctly.
	Multimedia applications, for example, may not be able to play sounds correctly
	with these settings.
	
	NOTE: To create a Flight Simulator startup disk, use the utility FSSYSTEM. This
	utility is included with Flight Simulator. Refer to the back inside cover of the
	Flight Simulator manual for instructions on creating a Flight Simulator startup
	disk.
	
	Additional query words: 5.00 flightsim fltsim dos bad quality playback boot soundblaster fs5
	
	======================================================================
	Keywords          :  
	Technology        : kbGamesSearch kbFlightSimSearch kbFlightSim500DOS kbSimSearch
	Version           : MS-DOS:5.0
	Issue type        : kbprb
	
	=============================================================================
	
