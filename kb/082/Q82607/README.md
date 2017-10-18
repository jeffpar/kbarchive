---
layout: page
title: "Q82607: Standard Mode Fails to Boot with XMS Handles of 2 or 3"
permalink: kb/082/Q82607/
---

## Q82607: Standard Mode Fails to Boot with XMS Handles of 2 or 3

	Article: Q82607
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If Qualitas' 386MAX program is loaded with the XMSHNDL (extend memory handles)
	parameter set to 2 or 3, Microsoft Windows operating system version 3.1 will not
	load. Other extended memory managers have similar parameters that can prevent
	Windows from loading.
	
	Windows generates a message saying that it cannot start in standard mode. There
	is no mention of extended memory.
	
	MORE INFORMATION
	================
	
	386MAX is a high memory manager that replaces Microsoft's HIMEM.SYS. By
	specifying a low number of extended memory handles, 386MAX is limited to the
	number of requests it can make for extended memory. Windows will not run if it
	cannot allocate enough blocks of extended memory.
	
	To correct the number of extended memory handles, increase the number of
	available handles, or remove the parameter and accept the default. According to
	the 386MAX documentation, each XMS handle only occupies 6 bytes of memory, so
	decreasing the handle count does not save enough memory to matter.
	
	NOTE: You can run into the same problem with Microsoft's HIMEM.SYS if you limit
	the number of handles using the NUMHANDLES switch on the HIMEM.SYS command line
	in the CONFIG.SYS file.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3.10 3.11 XMS crash lock 3.1
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
