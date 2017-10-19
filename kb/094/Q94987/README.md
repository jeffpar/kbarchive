---
layout: page
title: "Q94987: Golf Hangs Using 16-Bit MediaVision Sound Drivers"
permalink: /kb/094/Q94987/
---

## Q94987: Golf Hangs Using 16-Bit MediaVision Sound Drivers

	Article: Q94987
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-1999
	
	kbusage
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Golf for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you are using the MediaVision 16-bit Pro-Audio sound card, Golf may appear
	to stop responding (hang) when short sounds are being played.
	
	The problem only occurs when sounds are enabled, and when drivers dated 11/06/92
	or earlier are being used for the card.
	
	The version 1.46 of the MediaVision drivers, corrects the problem. You can find
	the latest drivers in the following places:
	
	  MediaVision BBS: (510) 770-0968 (WIN144.ZIP)
	  MediaVision technical support: (510) 770-9905
	
	This problem does not occur using the 8-bit drivers provided with the card.
	
	MORE INFORMATION
	================
	
	Further experimentation using the Microsoft Windows Media Player, narrows the
	problem down to five waveform files: CHIP.WAV, PINHIT.WAV, PUTT.WAV,
	SHORSWG.WAV, and SPLASH.WAV. When playing these files with the Media Player, the
	files never stop, and remain playing indefinitely. This is what causes Golf to
	appear to hang.
	
	Additional query words: 1.00 media vision mediaplayer 8 16 bit wave lockup lock up freeze crash
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbGamesSearch kbGolfSearch kbGolf100
	Version           : WINDOWS:1.0
	Issue type        : kbinfo
	
	=============================================================================
	
