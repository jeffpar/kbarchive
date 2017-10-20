---
layout: page
title: "Q84220: Windows 3.1 Setup May Not Detect Incompatible TSRs"
permalink: /kb/084/Q84220/
---

## Q84220: Windows 3.1 Setup May Not Detect Incompatible TSRs

{% raw %}

	Article: Q84220
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Windows operating system version 3.1 Setup program does not detect
	incompatible terminate-and-stay-resident (TSR) programs if they were loaded into
	upper memory with Quarterdeck's load high command. If this occurs, problems may
	arise during Windows installation and operation.
	
	MORE INFORMATION
	================
	
	Quarterdeck's load high utilities are LOADHI.COM and LOADHI.SYS. If these
	commands were used, a statement similar to the following may appear in the
	AUTOEXEC.BAT file:
	
	     LOADHI /R:2 PC-CACHE
	
	The above statement loads PC-CACHE.COM into upper memory.
	
	To deactivate the TSR, place "REM" in front of the LOADHI statement or remove the
	whole line from the AUTOEXEC.BAT or CONFIG.SYS file. Restart the computer to
	make the changes take effect.
	
	LOADHI.COM and LOADHI.SYS are manufactured by Quarterdeck, vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words: 3.10 3.11 3rdpartyQEMM QEMM386
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
