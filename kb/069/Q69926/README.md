---
layout: page
title: "Q69926: Windows 3.0 HIMEM.SYS Requires /M:2 Switch on Tangent 486"
permalink: /kb/069/Q69926/
---

## Q69926: Windows 3.0 HIMEM.SYS Requires /M:2 Switch on Tangent 486

{% raw %}

	Article: Q69926
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
	
	According to Tangent technical support, you must use the /M:2 switch to force
	HIMEM.SYS to load properly on Tangent 486 computers. Examples of the switch are
	the following:
	
	     DEVICE=C:\HIMEM.SYS /M:2
	
	-or-
	
	     DEVICE=C:\HIMEM.SYS /M:ps2
	
	MORE INFORMATION
	================
	
	DASH 425 and DASH 433 motherboards require this switch to load HIMEM.SYS
	properly; these motherboards are used in Tangent 486 computers.
	
	For more information, contact Tangent technical support.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3.00 3.0 3.0a 3.00a KBHW 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
