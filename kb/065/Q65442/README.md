---
layout: page
title: "Q65442: ATI-VIP and ATI EGA Wonder Cards Switch Settings for Windows"
permalink: kb/065/Q65442/
---

## Q65442: ATI-VIP and ATI EGA Wonder Cards Switch Settings for Windows

	Article: Q65442
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The EGA and VIP Wonder cards are compatible with Microsoft Windows. However, you
	should set dip switch #8 on the card to OFF to ensure compatibility with the
	Windows VGA driver. To verify that switch #8 is OFF, make sure that the switch
	is pointing towards the left, away from #8. For the VIP Wonder card, verify that
	you are using the "QUADVGA, ATI VIP VGA, 82C441 VGA's" as the Windows Display
	driver.
	
	MORE INFORMATION
	================
	
	Dip switch #8 enables or disables the enhanced features for both the VIP and the
	EGA Wonder cards.
	
	The following occurs when switch #8 is set to ON for analog monitors:
	
	1. VIP becomes compatible with the IBM Display Adapter (VGA); the IBM EGA, CGA,
	  and Monochrome Adapter; and the Hercules Graphics Card.
	
	2. High-resolution 800 x 560 color/graphics and 132 columns are available on
	  MultiSync monitors.
	
	3. Softsense Automatic Mode Switching is enabled.
	
	4. Low-resolution 8 x 8 text of CGA software is converted into high-resolution 8
	  x 16 VGA quality text.
	
	The following occurs when switch #8 is set to ON for digital monitors:
	
	1. VIP becomes compatible to the IBM EGA, CGA, and Monochrome Adapter, and the
	  Hercules Graphics Card.
	
	2. VIP can run EGA, CGA, MDA and Hercules software on EGA, RGB, Composite, TTL
	  Monochrome, and COMPAQ portable monitors. (COMPAQ monitors run via the
	  optional COMPAQ Expansion Module.)
	
	3. 132 columns are available.
	
	4. VIP maximizes the monitor's display quality.
	
	5. Softsense Automatic Mode Switching is enabled.
	
	Switch #8 Set to OFF for Analog and Digital Monitors
	----------------------------------------------------
	
	All enhanced features listed above are disabled. For analog monitors connected to
	the 15-pin connector, the VIP becomes compatible to the IBM Display Adapter
	(VGA). On digital monitors connected to the 9-pin connector, the VIP becomes
	identical to the IBM EGA.
	
	VIP has an automatic SafetySwitch that prevents accidental damage to the monitor
	when switch #8 is set to OFF.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: wondercard 3.00 3.0 3.0a 3.00a 3.1 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
