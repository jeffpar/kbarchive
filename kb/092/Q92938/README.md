---
layout: page
title: "Q92938: Packard Bell Packmate Requires HIMEM.SYS /m:1"
permalink: /kb/092/Q92938/
---

## Q92938: Packard Bell Packmate Requires HIMEM.SYS /m:1

{% raw %}

	Article: Q92938
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	To ensure proper operation with Windows 3.1, If you are using Microsoft Windows
	on a Packard Bell Packmate 300 SX, 386/33 or 486/33 DX computer, you may
	experience general protection faults and memory parity errors in both
	Windows-based and MS-DOS-based applications running under Windows.
	
	CAUSE
	=====
	
	To ensure proper operation with Windows 3.1, the Packard Bell Packmate 386/33
	and 486/33 DX computers require that the A20 handler number 1 is installed. If
	the /M:1 parameter is not included on the HIMEM.SYS line in the CONFIG.SYS file,
	A20 handler number 3 may be incorrectly installed, which can cause the symptoms
	above.
	
	WORKAROUND
	==========
	
	To correct this problem, change the following line in the CONFIG.SYS file
	
	       DEVICE=<drive><path>HIMEM.SYS
	
	-to-
	
	       DEVICE=<drive><path>HIMEM.SYS /M:1
	
	
	The Packmate 486/33 DX is manufactured by Packard Bell, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: gpf 3.10 PB 3rdparty 486 386 300sx PACK MATE
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
