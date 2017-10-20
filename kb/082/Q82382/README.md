---
layout: page
title: "Q82382: InPort Mouse Not Functioning Correctly on IRQ2"
permalink: /kb/082/Q82382/
---

## Q82382: InPort Mouse Not Functioning Correctly on IRQ2

{% raw %}

	Article: Q82382
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the Microsoft InPort (BUS) mouse on IRQ2 in Microsoft Windows has
	reportedly caused the mouse not to function correctly in both standard and
	enhanced modes on some systems.
	
	CAUSE
	=====
	
	This may be due to an interrupt conflict. IRQ2 also cascades to the second Intel
	8259 PIC chip. By default, these boards are set to IRQ2.
	
	RESOLUTION
	==========
	
	To correct this problem, change the IRQ to an open IRQ. IRQ 5 is usually free on
	AT class machines (except the original IBM AT).
	
	Additional query words: 3.10 3.1 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
