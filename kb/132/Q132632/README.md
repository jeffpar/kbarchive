---
layout: page
title: "Q132632: No Digitized Sound Running BloodNet"
permalink: kb/132/Q132632/
---

## Q132632: No Digitized Sound Running BloodNet

	Article: Q132632
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are running the MS-DOS-based program BloodNet, the program may not
	product digital sound on a Pro Audio Spectrum 16 sound card.
	
	CAUSE
	=====
	
	BloodNet tries to reconfigure the sound card to use high DMA channel 7. To
	maintain system stability, the device driver for the card prevents this
	reconfiguration.
	
	RESOLUTION
	==========
	
	To resolve this issue, use any one of the following methods:
	
	- Use Sound Blaster-compatible mode for digital audio.
	
	- Reconfigure the sound card to use high DMA channel 7.
	
	- Configure the program to run in MS-DOS mode.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
