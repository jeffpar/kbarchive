---
layout: page
title: "Q63347: PRB: Clicking Noises While Playing Sounds on SoundBlaster Card"
permalink: kb/063/Q63347/
---

## Q63347: PRB: Clicking Noises While Playing Sounds on SoundBlaster Card

	Article: Q63347
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While playing some sounds on earlier models of the SoundBlaster card, some
	periodic popping or clicking sounds may occur. These cards are generally
	referred to as the 1.0 DSP (digital sound processing) design. Cards using the
	version 2.0 DSP design can use version 1.5 of the SoundBlaster Multimedia Device
	Driver (SNDBLST2.DRV), which eliminates this situation.
	
	CAUSE
	=====
	
	This problem generally occurs only when running under enhanced mode Windows. It
	is a result of the current design of the SoundBlaster hardware, in conjunction
	with the interrupt latency inherent in enhanced mode Windows.
	
	The SoundBlaster uses DMA (direct memory access) to transfer small pieces of the
	sound data from main memory to the card, and generates a hardware interrupt only
	when its buffer becomes empty. Upon receipt of this interrupt, the SoundBlaster
	driver prepares the next piece of sound data and initiates another DMA transfer.
	This process continues until the sound has been completely played out.
	
	When running in Windows enhanced mode, the interrupt latency is often more than a
	few sample periods, which results in the noises discussed earlier.
	
	RESOLUTION
	==========
	
	Creative Labs has corrected the problem with version 2.0 DSP along with version
	1.5 of the Sound Blaster Multimedia Device Driver. In addition, the new card
	from Creative Labs, the Sound Blaster Pro, does not exhibit the clicking
	problem. Contact Creative Labs to update earlier Sound Blaster cards to version
	2.0 DSP.
	
	For testing purposes, this problem can be resolved by running in Windows standard
	mode, where interrupt latencies are lower.
	
	Additional query words: 3.00 3.10 no32bit
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
