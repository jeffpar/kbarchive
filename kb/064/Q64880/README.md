---
layout: page
title: "Q64880: Using HIMEM.SYS with AT&amp;T 6300 and AT&amp;T 6300 Plus"
permalink: /kb/064/Q64880/
---

## Q64880: Using HIMEM.SYS with AT&amp;T 6300 and AT&amp;T 6300 Plus

{% raw %}

	Article: Q64880
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The HIMEM.SYS file does not work on an AT&T 6300 because the AT&T 6300
	uses an 8086 processor and only an 80286 or greater processor can access
	extended memory.
	
	HIMEM.SYS is an extended memory manager that allows Microsoft Windows to access
	the extended memory on your 80286, 80386, or 80486 computer.
	
	MORE INFORMATION
	================
	
	HIMEM.SYS works on an AT&T 6300 PLUS. However, you must use the
	"/M:att6300plus" or "/M:5" switch to access extended memory on this machine. For
	example, your CONFIG.SYS file should contain the following line:
	
	     DEVICE=C:\HIMEM.SYS /M:5
	
	  -or-
	
	     DEVICE=C:\HIMEM.SYS /M:AT&T6300PLUS
	
	If you are using the AT&T 6300 PLUS with an Intel Above Board, you may have
	to make modifications to use the RAMDRIVE.SYS file. If you experience a problem,
	contact AT&T.
	
	AT&T suggests using BIOS version 1.43 or later with the AT&T 6300. You
	can obtain a more recent version of the ROM BIOS from the AT&T National
	Parts Center.
	
	The AT&T products included here are manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words: 3.00 3.0 3.0a 3.00a ATT American Telephone Telegraph 3.11 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
