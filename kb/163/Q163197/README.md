---
layout: page
title: "Q163197: Some Western Digital Chipsets Do Not Support 65,000 Colors"
permalink: /kb/163/Q163197/
---

## Q163197: Some Western Digital Chipsets Do Not Support 65,000 Colors

{% raw %}

	Article: Q163197
	Product(s): Microsoft Windows NT
	Version(s): WINNT:.0
	Operating System(s): 
	Keyword(s): kbdisplay
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When installing the video driver for the Western Digital 90C31 chipset, the
	option for 65,000 colors is not displayed. This problem may also occur with the
	other Western Digital chipsets.
	
	MORE INFORMATION
	================
	
	Windows NT cannot support 16 bits per pixel (bpp) because the hardware itself
	does not support the mode. The only Western Digital chipset on the Windows NT
	Hardware Compatibility List (HCL) included on the Windows NT 4.0 media that has
	the capability of supporting this mode is Western Digital 90C24A. This chipset
	commonly comes standard in laptop computers, and can support 65,000 colors (16
	bpp) if the computer's onboard video BIOS supports this mode.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: WD prodnt chip set K thousand
	======================================================================
	Keywords          : kbdisplay 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WINNT:.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
