---
layout: page
title: "Q77918: ALR Business Veisa and Erratic Mouse Behavior in Windows"
permalink: /kb/077/Q77918/
---

## Q77918: ALR Business Veisa and Erratic Mouse Behavior in Windows

{% raw %}

	Article: Q77918
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may experience erratic mouse behavior in Microsoft Windows versions 3.0,
	3.0a, and 3.1 running on an ALR Business Veisa Machine using the Microsoft Mouse
	version 7.04 driver with a CMOS memory setting of "Infinity".
	
	CAUSE
	=====
	
	The ALR Business Veisa Machine has two memory settings: Infinity or 16 MB. If
	the memory is set for Infinity, it causes erratic mouse behavior with the
	Microsoft serial mouse driver version 7.04. This unstable behavior occurs in
	real, standard, and enhanced modes of Windows.
	
	RESOLUTION
	==========
	
	To solve this problem, run CMOS, go to the second page option, and choose the 16
	MB memory option.
	
	MORE INFORMATION
	================
	
	You should verify any CMOS setting procedures with the documentation that comes
	with the computer, or contact ALR technical support for further details.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3.00 3.0 3.00a 3.0a 3.1 3.10 3.11 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
