---
layout: page
title: "Q76855: Sound Driver Plays Portion of Sound, Then Stops"
permalink: /kb/076/Q76855/
---

## Q76855: Sound Driver Plays Portion of Sound, Then Stops

	Article: Q76855
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows with Multimedia Extensions, version 1.0 
	-------------------------------------------------------------------------------
	
	If the sound interrupt is not set correctly, the sound driver plays
	only the first part of the sound, represented by the first 2K of data.
	If the sound is being played synchronously, Windows may hang as the
	application waits for an event that will never occur.
	
	You should make sure that the interrupt from the Sound Blaster card is
	correctly specified in the Driver Setup in the Control Panel. Also,
	make sure that the interrupt selected for the Sound Blaster does not
	conflict with any other interrupt on your system.
	
	Additional query words: MMWIN
	
	======================================================================
	Keywords          :  
	Technology        : kbWinMultiXSearch kbWinMultiX100
	Version           : :1.0
	
	=============================================================================
	
