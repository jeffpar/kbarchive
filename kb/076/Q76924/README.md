---
layout: page
title: "Q76924: Running Borland Reflex Under Windows"
permalink: /kb/076/Q76924/
---

## Q76924: Running Borland Reflex Under Windows

{% raw %}

	Article: Q76924
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Borland Reflex runs considerably slower under Microsoft Windows enhanced mode.
	
	Under Windows 3.1, the mouse and general operations under Reflex version 2.0
	performs very slowly when run in a window.
	
	CAUSE
	=====
	
	This is caused by the application's method of enhancing hard drive performance.
	
	RESOLUTION
	==========
	
	You can correct this problem by placing a statement in the [386Enh] section of
	the SYSTEM.INI file. For example:
	
	     [386Enh]
	     virtualhdirq=off
	
	The Borland product included here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 3.00 3.0 3.00a 3.0a 3.1 3.10 3.11 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
