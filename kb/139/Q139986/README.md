---
layout: page
title: "Q139986: CD-ROM Drive Not Recognized After Installing Windows NT"
permalink: kb/139/Q139986/
---

## Q139986: CD-ROM Drive Not Recognized After Installing Windows NT

	Article: Q139986
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbhw kbsetup kbHardwarekbfaq
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you install Windows NT, your IDE CD-ROM drive is not recognized.
	
	CAUSE
	=====
	
	This behavior can occur if your IDE CD-ROM drive is connected to the IDE
	interface on a Creative Labs Sound Blaster sound card and the IDE interface on
	the sound card is not ATAPI 1.2 compliant.
	
	RESOLUTION
	==========
	
	To resolve this problem, follow these steps:
	
	1. Connect your CD-ROM drive to an available port on your computer's IDE
	  controller.
	
	  NOTE: Your computer's IDE controller and the CD-ROM drive must be ATAPI 1.2
	  compliant.
	
	2. Disable the IDE interface on the Sound Blaster sound card. For information
	  about configuring or disabling your CD-ROM drive or your Sound Blaster sound
	  card, consult your hardware documentation or contact your hardware
	  manufacturer.
	
	MORE INFORMATION
	================
	
	There are a number of different models of Creative Labs Sound Blaster sound
	cards with different CD-ROM interfaces. If you are uncertain what model of card
	you have or what type of CD-ROM drive is attached to the sound card, the CD-ROM
	interface on the sound card is labeled with the CD- ROM drive type it is
	designed to support.
	
	
	Sound Blaster sound cards are manufactured by Creative Labs, a vendor independent
	of Microsoft; we make no warranty, implied or otherwise, regarding this
	product's performance or reliability.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbhw kbsetup kbHardware kbfaq
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	
