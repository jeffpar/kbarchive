---
layout: page
title: "Q51870: Dual-Monitor Requires 8-Bit Data Paths for Both Monitors"
permalink: /kb/051/Q51870/
---

## Q51870: Dual-Monitor Requires 8-Bit Data Paths for Both Monitors

{% raw %}

	Article: Q51870
	Product(s): Microsoft Programming Utilities
	Version(s): 2.2,3.0,3.05,3.06,3.07,3.11,3.14,4.0,4.01,4.05,4.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbCodeView kbDebug kbVC
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft CodeView for MS-DOS, versions 2.2, 3.0, 3.11, 3.14, 4.0, 4.01, 4.05, 4.1 
	- Microsoft CodeView for Windows, versions 3.0, 3.05, 3.06, 3.07, 4.0, 4.01, 4.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you configure a system for dual-monitor debugging, verify that both the
	monochrome monitor and the color monitor use an 8-bit data path. Any
	dual-monitor write scheme requires a common data path to each display card
	(either both 8-bit or both 16-bit). Monochrome adapters available today use an
	8-bit path exclusively.
	
	Many display cards that support 16-bit mode automatically sense that they are
	addressed in a dual-monitor mode. However, some cards, such as the ATI VGA
	Wonder card, do not sense this situation. You must manually configure these
	cards to use an 8-bit data path.
	
	MORE INFORMATION
	================
	
	If you use dual monitors and experience strange behavior, such as random or
	blinking characters on the monochrome screen, verify that your 16-bit color
	video card is running in 8-bit mode.
	
	The most common use for a dual-monitor setup is to debug a graphics application
	with CodeView.
	
	Additional query words: kbinf 2.20 2.30 3.00 3.50 4.00 4.10 no32bit
	
	======================================================================
	Keywords          : kb16bitonly kbCodeView kbDebug kbVC 
	Technology        : kbAudDeveloper kbCodeView kbZNotKeyword3 kbCodeView220DOS kbCodeView300DOS kbCodeView311DOS kbCodeView314DOS kbCodeView400DOS kbCodeView401DOS kbCodeView405DOS kbCodeView410DOS kbCodeView300 kbCodeView305 kbCodeView306 kbCodeView307 kbCodeView400 kbCodeView401 kbCodeView410
	Version           : :2.2,3.0,3.05,3.06,3.07,3.11,3.14,4.0,4.01,4.05,4.1
	
	=============================================================================
	

{% endraw %}
