---
layout: page
title: "Q87282: VESA Local Bus Diamond Stealth May Cause Hardware Conflict"
permalink: /kb/087/Q87282/
---

## Q87282: VESA Local Bus Diamond Stealth May Cause Hardware Conflict

{% raw %}

	Article: Q87282
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The VESA Local Bus Diamond Stealth video card may conflict with other hardware
	devices because of the hardware I/O address or IRQ.
	
	NOTE: This information may also apply to other video cards using the S3 video
	chip set, such as the Orchid Fahrenheit card, or other graphics coprocessor
	cards, such as the ATI Ultra series.
	
	Hardware I/O Address
	--------------------
	
	The Diamond Stealth S3-based video card has a hardware I/O address of 02E8, which
	cannot be changed. This may cause a conflict with other hardware devices using
	this same address. By default, many serial cards and internal modems use this
	address for COM4. Some ARCnet cards also use this address.
	
	- If there is a conflict, it may result in garbled TrueType font output when
	  printing.
	
	- If the conflict is with a network card, then you may not be able to run in
	  386 enhanced mode.
	
	To correct these problems, change the I/O address of the device conflicting with
	the Stealth video card.
	
	Hardware IRQ
	------------
	
	By default, the Diamond Stealth comes configured to use IRQ2. This is the
	cascading IRQ to the second Intel 8259 Programmable Interrupt Chip (PIC).
	
	- If another device is also using this IRQ, you may receive garbled TrueType
	  fonts when printing.
	
	- If there is a conflict, you may be prevented from running in 386 enhanced
	  mode in Windows 3.0 and 3.1.
	
	- If there is no conflict, you still may not be able to run in 386 enhanced
	  mode from Windows 3.0.
	
	To correct this problem, you can disable the Stealth's use of IRQ2 by removing a
	jumper from the video card. Please refer to your Diamond Stealth user's guide
	for the procedure.
	
	
	Additional query words: 3.10 1280 8514 stelth windrvr ATIPRO VESA Local Bus card video accelerator cards
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
