---
layout: page
title: "Q64037: ATI SX Motherboards and Windows 3.0"
permalink: /kb/064/Q64037/
---

## Q64037: ATI SX Motherboards and Windows 3.0

{% raw %}

	Article: Q64037
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Some computers currently being sold with 386 SX processors may contain 286 BIOS
	chips. This prevents these computers from operating in 386 enhanced mode under
	Microsoft Windows version 3.0. An example of a motherboard that has a 286 BIOS
	is the ATI SX motherboard. To run in enhanced mode with the ATI SX requires a
	386 BIOS upgrade and change in jumper settings on the motherboard.
	
	MORE INFORMATION
	================
	
	To upgrade an ATI motherboard containing 286 BIOS chips, follow these steps:
	
	1. Replace existing 286 BIOS chips with 386 compatible ATI BIOS chips.
	
	2. It may be necessary to reset the existing jumper settings on the motherboard.
	  J8 and J9 need to be set to 32K page memory allocation not 16K. (Note: Please
	  refer to ATI Technical Support or your ATI user's manual to verify these
	  settings.)
	
	Windows needs 32K pages and/or boundaries to run in enhanced mode. By using a 286
	BIOS, Windows is forced to use 16K pages.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3.00 3.0 3.0a 3.00a KBHW
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
