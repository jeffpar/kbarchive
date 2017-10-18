---
layout: page
title: "Q105292: Defective Parallel Port Card May Cause .WAV Sounds to Repeat"
permalink: kb/105/Q105292/
---

## Q105292: Defective Parallel Port Card May Cause .WAV Sounds to Repeat

	Article: Q105292
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you play a .WAV file on a Sound Blaster 2.0 sound card (or a compatible
	card, such as Media Concepts), repeating sounds may occur.
	
	CAUSE
	=====
	
	If the driver settings for the sound card are known to be correct but .WAV
	sounds still repeat, the problem may be caused by a defective parallel port
	card.
	
	If the repeating sound occurs after the sound card has been used several times, a
	defective parallel port card is a likely cause. With a defective parallel card,
	the IRQ conflict arises because the interrupt lines are locked by the defective
	card so that the controller cannot correctly receive interrupt signals from the
	sound card. Other peripherals (such as serial ports) may be affected as well.
	The defect shows as an inability to properly use devices that require interrupt
	control (for example, modems) under Windows 3.1.
	
	NOTE: The interrupt settings on the parallel port card do not have to be the same
	as the Sound Blaster settings for this problem to occur. The defective parallel
	port card may or may not affect Sound Blaster from an MS-DOS-based program.
	
	The same repeating sound problem occurs when the sound card interrupt setting and
	the interrupt chosen when setting up the sound card driver in Windows 3.1 are
	not the same.
	
	Additional query words: 3.10 soundblaster wav repeat echo media
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
