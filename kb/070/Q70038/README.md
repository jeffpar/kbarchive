---
layout: page
title: "Q70038: Using QRAM.SYS with Microsoft Windows 3.0"
permalink: /kb/070/Q70038/
---

## Q70038: Using QRAM.SYS with Microsoft Windows 3.0

{% raw %}

	Article: Q70038
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You try to use QRAM.SYS with Windows 3.0 on a 386 machine and the following
	error message is displayed:
	
	  Extended memory manager already present
	
	CAUSE
	=====
	
	The entries in your CONFIG.SYS file are in the wrong order.
	
	RESOLUTION
	==========
	
	To correct the problem, place HIMEM.SYS before QRAM.SYS in the CONFIG.SYS file.
	HIMEM.SYS mistakes QRAM.SYS for an extended memory manager.
	
	MORE INFORMATION
	================
	
	Quarterdeck's QRAM program is an expanded memory manager for 286-based
	machines.
	
	NOTE: Quarterdeck also ships QEXT.SYS with QRAM for 286 machines. This extended
	memory manager should not be used with Windows 3.0.
	
	Additional query words: 3.00 3.0 3.0a 3.00a 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
