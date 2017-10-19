---
layout: page
title: "Q135534: Adding Media Vision ProAudio Spectrum Decreases Performance"
permalink: /kb/135/Q135534/
---

## Q135534: Adding Media Vision ProAudio Spectrum Decreases Performance

	Article: Q135534
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
	
	After you add a Media Vision ProAudio Spectrum sound card to your computer,
	Windows 95 performance may seem to decrease.
	
	CAUSE
	=====
	
	There may be a DMA conflict between the sound card and another device.
	
	ProAudio Spectrum sound cards have a Thunder chip set that can use only DMA
	channel 1. If another device is already using DMA channel 1, there is a resource
	conflict.
	
	
	RESOLUTION
	==========
	
	Because the ProAudio Spectrum sound card must use DMA channel 1, you must
	reconfigure the other conflicting device to use a different DMA channel.
	
	Additional query words: mvpas trantor
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
