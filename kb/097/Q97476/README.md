---
layout: page
title: "Q97476: ATI Ultra Pro Video Card May Not Work with 8514 Driver"
permalink: /kb/097/Q97476/
---

## Q97476: ATI Ultra Pro Video Card May Not Work with 8514 Driver

{% raw %}

	Article: Q97476
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you set up Windows with an ATI Ultra Pro video board, Setup may
	automatically detect the video board as an 8514 adapter. Setup may stop
	responding (hang) when it actually starts Windows (a gray screen is displayed at
	this point) if the board is set up incorrectly.
	
	CAUSE
	=====
	
	According to ATI Technologies, the ATI Ultra Pro video card, which uses the Mach
	32 chip set, is fully compatible with the IBM 8514 adapter and should work with
	the Windows 8514 video driver if set up properly.
	
	Windows hangs if the video card is set up incorrectly. When you set up the Mach
	32 board with the installation program, you use the Set Power-Up Configuration
	option. In the Set Power-Up Configuration dialog box, you set the VGA Memory
	Size option. This option tells the card how much memory to dedicate for the VGA
	portion of the adapter.
	
	According to ATI Technical Support, it is a common mistake to set up this option
	to use all the memory on the adapter. Doing so causes Windows to hang if you are
	using an 8514 driver. This option should be set to half the total memory on the
	board (which is usually 512 kilobytes [K] because most Mach 32 boards come with
	1 megabyte [MB] of VRAM. The configuration can also be set to "Shared," which
	allows VGA and 8514 programs to share the VRAM on the card; however, this
	setting may not always correct the problem. Specifying the amount of memory is
	the most reliable way to ensure Windows does not hang.
	
	The ATI Ultra Pro is manufactured by ATI Technologies, Inc., a vendor independent
	of Microsoft; we make no warranty, implied or otherwise, regarding this
	products' performance or reliability.
	
	Additional query words: 3.1 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
