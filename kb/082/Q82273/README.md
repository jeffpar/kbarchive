---
layout: page
title: "Q82273: AST 386 FastBoard May Cause EMM386 Error"
permalink: /kb/082/Q82273/
---

## Q82273: AST 386 FastBoard May Cause EMM386 Error

	Article: Q82273
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	AST Research has confirmed that loading MS-DOS 5.0 and later EMM386.EXE on an
	AST Premium 286 computer with an AST 386 FastBoard upgrade may cause the
	following error message on startup:
	
	  EMM386 Privileged Operation Error #01
	  Deactivate EMM386 and Continue(C) or reBoot(B):
	
	CAUSE
	=====
	
	The AST 386 FastBoard is an 80386 upgrade for AST 80286 motherboards. This error
	may occur if the 386 FastBoard driver FB386.SYS is not loaded before EMM386.EXE
	in the CONFIG.SYS file.
	
	WORKAROUND
	==========
	
	Loading the 386 FastBoard device driver, FB386.SYS, before EMM386.EXE in the
	CONFIG.SYS file may correct the error. The following is an example of how the
	drivers should be loaded in the CONFIG.SYS file:
	
	  device=c:\fb386.sys
	  device=c:\dos\himem.sys
	  device=c:\dos\emm386.exe
	
	MORE INFORMATION
	================
	
	The product included here (AST 386 FastBoard) is manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20 3RDPARTY
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
