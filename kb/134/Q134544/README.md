---
layout: page
title: "Q134544: GP Fault Pressing CTRL+ESC in 3 Balloons Program"
permalink: /kb/134/Q134544/
---

## Q134544: GP Fault Pressing CTRL+ESC in 3 Balloons Program

{% raw %}

	Article: Q134544
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you press CTRL+ESC to switch tasks in the program 3 Balloons - Alphabet,
	Numbers, and Shapes, you may receive the following error message:
	
	  BALLOONS caused a general protection fault in module QCMC.QTC at
	  0002:00000819.
	
	CAUSE
	=====
	
	The 3 Balloons program is not completely compatible with the asynchronous task
	switching used in Windows 95.
	
	RESOLUTION
	==========
	
	Do not press CTRL+ESC to switch away from the 3 Balloons program. Instead, press
	ALT+TAB, or click a program on the taskbar.
	
	MORE INFORMATION
	================
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: gpf
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	

{% endraw %}
