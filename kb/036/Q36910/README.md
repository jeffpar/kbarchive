---
layout: page
title: "Q36910: TI 855 Prints Garbage if Switch 4 Is Not Off"
permalink: /kb/036/Q36910/
---

## Q36910: TI 855 Prints Garbage if Switch 4 Is Not Off

{% raw %}

	Article: Q36910
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:2.x,3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 2.03, 2.1, 2.11, 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your Texas Instruments TI 855 line printer prints garbage characters when you
	print from applications running under Microsoft Windows.
	
	CAUSE
	=====
	
	The printer dip switch settings are incorrect.
	
	RESOLUTION
	==========
	
	The following are the recommended dip-switch settings for the TI 855 line
	printer for use with Micorosoft Windows.
	
	  1     2     3     4     5     6     7     8
	  on    on   off   off    on    on    on    on
	
	Switch number 4 switches between word-processor mode and daisywheel mode. If this
	switch is not set in the off position, Windows applications produce garbled
	characters.
	
	MORE INFORMATION
	================
	
	The Texas Instruments product included here is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: 3.00 3.0 3.0a 3.00a 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin203 kbWin210 kbWin211 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:2.x,3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
