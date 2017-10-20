---
layout: page
title: "Q156822: Tseng Labs ET4000-W32I Chipset Only Supports 65K Colors"
permalink: /kb/156/Q156822/
---

## Q156822: Tseng Labs ET4000-W32I Chipset Only Supports 65K Colors

{% raw %}

	Article: Q156822
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Any Video card using the Tseng Labs ET4000-W32I chipset under Windows NT 4.0
	will only be able to support 65K colors. This is a change from Windows NT 3.5x,
	which allowed for 16.7M colors using the same chip set.
	
	
	The W32I chipset uses a banked video memory system. The 16.7M color mode requires
	24 bits per pixel, which is difficult to implement on a banked video system.
	Windows NT 3.51 emulated a linear (non-banked) video system by using a
	page-fault driven banking scheme. In Windows NT 4.0, the Graphics Device
	Interface (GDI) and the video drivers were moved into the kernel. This move
	makes it impossible to implement non-banked emulation and, therefore, can only
	support 65K colors.
	
	MORE INFORMATION
	================
	
	Full 24-bit, 16.7M color is supported with video cards using the Tseng Labs
	ET6000 chipset.
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	

{% endraw %}
