---
layout: page
title: "Q90190: Changes Made to SYSTEM.INI by Sound Master II Board"
permalink: /kb/090/Q90190/
---

## Q90190: Changes Made to SYSTEM.INI by Sound Master II Board

{% raw %}

	Article: Q90190
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Sound Master II, manufactured by Covox Tympanum Corporation in Eugene Oregon,
	emulates an Adlib MIDI card. Windows 3.1 digitized sound drivers for the Sound
	Master II card are available from the Covox bulletin board service (BBS).
	
	MORE INFORMATION
	================
	
	Installation of the Covox drivers and support files make the following changes
	to the SYSTEM.INI file.
	
	     [drivers]
	     midi=cvxmidi.drv (MIDI option)
	     wave=cvxdma.drv (Waveform option)
	
	     [cvxmidi.drv]
	     PORT=330 (MIDI option)
	     IRQ=3 (MIDI option)
	
	     [DMAMME.DRV]
	     PORT=220 (Waveform option)
	     IRQ=7 (Waveform option)
	     DMA=1 (Waveform option)
	
	Troubleshooting Tips
	--------------------
	
	If you have problems starting Windows after the Covox DMA Waveform driver is
	added, you may need to change the jumpers on the Covox Sound board and manually
	edit the SYSTEM.INI file to reflect the changes you made to the PORT, IRQ, and
	DMA jumpers.
	
	For more information, contact Covox technical support at the following numbers:
	
	  Covox technical support: (503) 342-1271
	  Covox BBS 2400 BPS       (503) 342-4135
	  Covox BBS 14.4K BPS:     (503) 342-8261
	
	The products included here are manufactured by a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3.10 3.11 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
