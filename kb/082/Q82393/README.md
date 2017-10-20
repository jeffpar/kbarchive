---
layout: page
title: "Q82393: VRAM386.SYS, HRAMDEV.SYS Incompatible with Windows"
permalink: /kb/082/Q82393/
---

## Q82393: VRAM386.SYS, HRAMDEV.SYS Incompatible with Windows

{% raw %}

	Article: Q82393
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	VRAM386.SYS and HRAMDEV.SYS may cause Microsoft Windows to stop responding
	(hang) during setup or execution of Windows.
	
	MORE INFORMATION
	================
	
	VRAM386.SYS is similar to EMM386.EXE. It converts extended memory to to the
	Expanded Memory Specification (EMS) LIM version 4.0 standard.
	
	HRAMDEV.SYS can create up to 944K of conventional memory depending on the
	hardware configuration. HRAM.SYS and HRAM.EXE function as loaders equivalent to
	the MS-DOS DEVICEHIGH and LOADHIGH functions.
	
	These memory manager tools are not compatible with Windows 3.1. Microsoft
	recommends using EMM386.EXE instead.
	
	
	Additional query words: 3.1 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
