---
layout: page
title: "Q89805: Cinemania: Audio Failed Error Message"
permalink: kb/089/Q89805/
---

## Q89805: Cinemania: Audio Failed Error Message

	Article: Q89805
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1992 editions,1994 editions
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Cinemania, versions 1992 editions, 1994 editions 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Cinemania, you receive a dialog box with the following error message:
	
	  Audio Failed
	
	CAUSE
	=====
	
	This occurs if the following driver is not loaded:
	
	  [MCI] Sound
	
	RESOLUTION
	==========
	
	To check that the [MCI] Sound driver is loaded, choose the Drivers icon from the
	Control Panel and verify that the list of installed drivers contains [MCI]
	Sound. To install the driver, click add, select [MCI] Sound, then press ENTER.
	
	To check that a loaded [MCI] Sound driver is functioning properly, use the
	following steps:
	
	Windows 3.x
	-----------
	
	1. Run the Media Player from the Accessories group.
	
	2. From the Device menu, choose Sound.
	
	3. Select one of the default wave files listed from the Open dialog box
	  (CHIMES.WAV, CHORD.WAV, DING.WAV, TADA.WAV).
	
	Windows 95
	----------
	
	1. Click the Start button, point to Settings, and then click Control Panel.
	
	2. Double-click Multimedia.
	
	3. Click the Advanced tab.
	
	4. Double-click Media Control Devices, and then click on Wave Audio Device.
	
	5. Click Properties, and then select Use This Media Control Device. Click OK.
	
	6. Close Control Panel.
	
	7. Click the Start button, click Shutdown, and then click Restart The Computer.
	
	Additional query words: low level viewer sound 1.00 1.0 2.00 2.0 1992 1994
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbHomeMMsearch kbCineManiaSearch kbCinemania1994 kbCinemania1992
	Version           : :1992 editions,1994 editions
	
	=============================================================================
	
