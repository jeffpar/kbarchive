---
layout: page
title: "Q113711: WSS Err Msg: The Device Is Being Used by Another Application"
permalink: /kb/113/Q113711/
---

## Q113711: WSS Err Msg: The Device Is Being Used by Another Application

	Article: Q113711
	Product(s): Miscellaneous Windows Products
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Sound System, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Voice Pilot icon is in the Startup group of Windows and the microphone
	is turned on in Voice Pilot, you may receive the following error messages when
	starting Windows:
	
	  The device is being used by another application
	  The device cannot write to aux.
	
	RESOLUTION
	==========
	
	To prevent the above error messages:
	
	1. Place another application in the Startup group before the Voice Pilot icon.
	  This will allow Windows enough time to initialize the Windows Sound System
	  card before Voice Pilot tries to use the card.
	
	  The icons placed in the Startup group load in the order they appear in the
	  window. Therefore, Clock or any other application would have to be above
	  and/or to the left of the Voice Pilot icon.
	
	-or-
	
	2. Turn the microphone off in Voice Pilot.
	
	Additional query words: 2.00 vp errors start up begins starts loads win mic mike
	
	======================================================================
	Keywords          :  
	Technology        : kbWinSoundSysSearch kbWinSoundSys200
	Version           : :2.0
	
	=============================================================================
	
