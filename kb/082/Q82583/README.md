---
layout: page
title: "Q82583: Sound Blaster Drivers Are for Specific Sound Blaster Cards"
permalink: kb/082/Q82583/
---

## Q82583: Sound Blaster Drivers Are for Specific Sound Blaster Cards

	Article: Q82583
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Sound Blaster cards should be used with the appropriate drivers, as listed
	below. This information is based on the Digital Sound Processor (DSP) version of
	the sound card you have.
	
	Sound Blaster Cards
	-------------------
	
	  DSP     Windows Driver Description    Windows Driver
	  ---     --------------------------    --------------
	
	  1.x     Sound Blaster 1.0             SNDBLST.DRV
	  2.x     Sound Blaster 1.5             SNDBLST2.DRV
	  3.x*    Sound Blaster 1.5             SNDBLST2.DRV
	
	
	Thunder Board users should install the Sound Blaster 1.5 driver.
	
	MORE INFORMATION
	================
	
	How to Determine the DSP Version
	--------------------------------
	
	The best way to tell which Sound Blaster card you have is to run the program
	TEST-SBC.EXE (for the standard Sound Blaster) or TEST-SBP.EXE (for the Sound
	Blaster Pro) that comes with the sound card. After verifying the port and
	interrupt request line (IRQ) settings of your card, TEST-SBC and TEST-SBP will
	display the DSP version.
	
	Windows Drivers Messages
	------------------------
	
	You'll see these messages only when you configure the driver (that is, when you
	set the port and IRQ).
	
	If you try to load the Sound Blaster 1.5 driver on a system that has a Sound
	Blaster board with DSP versions 1.x (run the TEST-SBC.EXE program that comes
	with the card to find out what DSP you have), you'll get a message telling you
	need an upgraded board to use this driver.
	
	If you have a Sound Blaster Pro card (these have DSP versions 3.x), you'll be
	able to use SNDBLST2.DRV, but you'll receive a warning message when setting the
	port and IRQ saying that you should get drivers from Creative Labs, the maker of
	Sound Blaster, when using a Sound Blaster Pro card.
	
	If you have a Thunder Board, you'll receive a message stating that you should get
	updated drivers from Media Vision.
	
	Sound Blaster and Thunder Board are manufactured by vendors independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words: 3.10 3.11 3.1 sndblst sonic thundercard soundblaster thunderboard
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
