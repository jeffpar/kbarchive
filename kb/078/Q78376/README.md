---
layout: page
title: "Q78376: Paradise 8514/A Combo and Windows Needs EMMEXCLUDE"
permalink: /kb/078/Q78376/
---

## Q78376: Paradise 8514/A Combo and Windows Needs EMMEXCLUDE

{% raw %}

	Article: Q78376
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Paradise 8514/A Combo card requires an EMMEXCLUDE statement to properly work
	with Microsoft Windows enhanced mode. This card uses our 8514/A driver.
	
	In Windows 3.0 and 3.0a, this exclude must be done in the SYSTEM.INI's [386Enh]
	section. In Windows 3.1 or 3.11, you should exclude with EMM386.EXE if you are
	using it.
	
	MORE INFORMATION
	================
	
	The Paradise 8514/A Combo card has four dip switches on the back of the card
	that allow you to configure the card. The first dip switch allows you to control
	the range of upper memory blocks (UMB) used by the card.
	
	On the back of the card are the following switches:
	
	  Switch 1 =      Extended Video ROM
	  Switch 2 =      Monitor Type
	  Switch 3 =      Monitor Type
	  Switch 4 =      Syncing
	
	If Switch 1 is in the ON position, then the card is using the area from
	A000-C9FF. If you are using Windows 3.0, the following line needs to be added to
	the SYSTEM.INI's [386Enh] section:
	
	  EMMExclude=A000-C9FF
	
	If Switch 1 is in the OFF position, then the card is using the area from
	A000-D9FF. If you are using Windows 3.0, the following line needs to be added to
	the SYSTEM.INI's [386Enh] section:
	
	  EMMExclude=A000-D9FF
	
	This Western Digital/Paradise card is configured as an 8514/A card with VGA
	hardware included on it. This is an 8- or 16-bit card that comes with 512K VRAM
	expandable to 1024K VRAM.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3.00 3.00a 3.0a 3.0 3.1 3.10 win31 win30 3.11 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
