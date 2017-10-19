---
layout: page
title: "Q136555: Delay Occurs Accessing Phillips CD-ROM Drive"
permalink: /kb/136/Q136555/
---

## Q136555: Delay Occurs Accessing Phillips CD-ROM Drive

	Article: Q136555
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using Windows 95 on a computer with a Philips CD-ROM drive
	connected to a Media Vision Fusion 16 sound card, you may experience delays when
	you start Media Player or CD Player. The length of the delay varies from 5
	seconds to 1 minute, and is typically longer when a data CD-ROM is in the CD-ROM
	drive, or the drive is empty.
	
	CAUSE
	=====
	
	This problem is known to occur with this hardware configuration when the sound
	card is configured to use IRQ 11 or IRQ 15. The problem appears to be caused by
	a resource conflict, although the problem is not IRQ-specific and may occur even
	when no other device is configured to use the same IRQ as the sound card.
	
	RESOLUTION
	==========
	
	To work around this problem, configure the Media Vision Fusion 16 sound card to
	use a different IRQ. Make sure to choose an IRQ that is not used by another
	device. For information about changing the sound card's IRQ setting, please
	contact the hardware manufacturer.
	
	MORE INFORMATION
	================
	
	When you are using a Philips CD-ROM drive connected to a Media Vision Fusion 16
	sound card, real-mode drivers for the CD-ROM drive must be loaded in the
	Config.sys and Autoexec.bat files.
	
	
	Additional query words: slow hang
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
