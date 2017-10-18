---
layout: page
title: "Q131651: MIDI-in Port Does Not Work on SB Pro Card with WSS 2.0 Drivers"
permalink: kb/131/Q131651/
---

## Q131651: MIDI-in Port Does Not Work on SB Pro Card with WSS 2.0 Drivers

	Article: Q131651
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
	
	When you use the MIDI-in port on a Creative Labs Sound Blaster Pro sound card
	using Microsoft Windows Sound System version 2.0 drivers, the sound card drops
	notes during recording sessions.
	
	CAUSE
	=====
	
	Windows Sound System 2.0 drivers are not fully compatible with the Sound Blaster
	Pro sound card.
	
	RESOLUTION
	==========
	
	Re-install the drivers provided by Creative Labs for the Sound Blaster Pro sound
	card. To install these drivers, please refer to the Sound Blaster Pro
	documentation or contact Creative Labs.
	
	For information about removing the Windows Sound System software, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q90025 How to Uninstall Windows Sound System
	
	STATUS
	======
	
	Microsoft is aware of this issue and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Although the Windows Sound System software (with the exception of the Audio
	Control utilities) should work with the Sound Blaster Pro sound card, you must
	use the drivers supplied by Creative Labs for MIDI support.
	
	When you are using the Windows Sound System drivers with a musical keyboard
	attached to the sound card's MIDI-in port, notes may be lost over time when you
	are recording. Re-initializing the port may stop the problem temporarily, but
	does not resolve the problem.
	
	The third-party products discussed in this article are manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: 2.00 soundblaster
	
	======================================================================
	Keywords          :  
	Technology        : kbWinSoundSysSearch kbWinSoundSys200
	Version           : :2.0
	
	=============================================================================
	
