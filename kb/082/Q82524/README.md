---
layout: page
title: "Q82524: hDC Power Launcher Enhanced Wait Command Hangs"
permalink: /kb/082/Q82524/
---

## Q82524: hDC Power Launcher Enhanced Wait Command Hangs

{% raw %}

	Article: Q82524
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The enhanced Wait command included with hDC's Power version 1.0 may cause your
	system to stop (hang) when run with Windows version 3.1. This problem does not
	occur with Power Launcher version 2.0 or with Windows.
	
	MORE INFORMATION
	================
	
	The problem is not with Windows 3.1, but with hDC's use of an undocumented
	Windows call. hDC's incorrect use of this function goes unnoticed under Windows
	3.0, but fails under Windows 3.1.
	
	hDC corrected this problem in version 2.0 of their Power Launcher product.
	
	The hDC product included here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
