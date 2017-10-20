---
layout: page
title: "Q76805: Clicking Noises While Playing Sounds on Sound Blaster Feature"
permalink: /kb/076/Q76805/
---

## Q76805: Clicking Noises While Playing Sounds on Sound Blaster Feature

{% raw %}

	Article: Q76805
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows with Multimedia Extensions, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While playing some sounds on the Sound Blaster card, you may notice periodic
	popping or clicking sounds. This generally occurs only when running under
	enhanced mode Multimedia Windows.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	CAUSE
	=====
	
	If a Sound Blaster board with versions 1.x of the Digital Signal Processor (DSP)
	is installed and Multimedia Windows is running in enhanced mode, a periodic
	click is audible when playing a wave file. This is caused by interrupt latency,
	meaning that interrupts are not serviced immediately. This causes the Sound
	Blaster to click because the versions 1.x DSPs produce an interrupt when the
	current Direct Memory Access (DMA) buffer is exhausted. The click is the time it
	takes for the interrupt to be serviced by the Sound Blaster driver (which is
	delayed by enhanced mode Windows).
	
	MORE INFORMATION
	================
	
	The click is still present in standard mode, although it is much less pronounced
	because the interrupt latency is less. The click is more pronounced for pure
	tones.
	
	The version 2.0 DSP solves this problem by using the auto-initialize mode of the
	DMA controller (the 8237). In this mode, the DMA controller automatically
	reloads the start address and count registers with the original values. In this
	way, the Sound Blaster driver can allocate a 4K DMA buffer; using the lower 2K
	as the "ping" buffer and the upper 2K as the "pong" buffer.
	
	While the DMA controller is working on the ping buffer, the pong buffer can be
	updated; and vice versa. Therefore, when the DMA controller auto-initializes, it
	will already have valid data available. This removes the click from the output
	sound.
	
	However, Windows 3.0 enhanced mode does not support the auto-initialize mode of
	the DMA controller. Therefore, Multimedia Windows provides a virtual device
	driver (VxD) called VADMAD.386 (virtual auto-initialize DMA device) that
	attaches itself to the virtual DMA device (VDMAD). Its purpose, as the name
	implies, is to support the auto-initialize mode of the DMA controller. However,
	VADMAD.386 does not FULLY support this mode -- it was designed only to correct
	the problem with the Sound Blaster.
	
	
	Sound Blaster is manufactured by Creative Labs, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	KBCategory: kbmm kbsound
	KBSubcategory: win31
	
	Additional query words: 1.00 auto initialize autoinitialize MMWIN
	
	======================================================================
	Keywords          :  
	Technology        : kbWinMultiXSearch kbWinMultiX100
	Version           : :1.0
	
	=============================================================================
	

{% endraw %}
