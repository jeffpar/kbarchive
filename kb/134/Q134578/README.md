---
layout: page
title: "Q134578: PIF File Properties Change After Use"
permalink: /kb/134/Q134578/
---

## Q134578: PIF File Properties Change After Use

{% raw %}

	Article: Q134578
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A PIF file's size and modification time may be different after you use the file.
	
	CAUSE
	=====
	
	Windows 95 saves a program's PIF file settings each time the program terminates.
	
	RESOLUTION
	==========
	
	To prevent Windows 95 from modifying a PIF file, set the file's Read-Only
	attribute. To do so, follow these steps:
	
	1. In Windows Explorer or My Computer, use the right mouse button to click the
	  PIF file, and then click Properties on the menu that appears.
	
	2. Click the Read-Only check box to select it.
	
	3. Click OK.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
