---
layout: page
title: "Q92904: Windows and Quarterdeck QEMM386 Require WINHIRAM.VXD File"
permalink: /kb/092/Q92904/
---

## Q92904: Windows and Quarterdeck QEMM386 Require WINHIRAM.VXD File

	Article: Q92904
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use the Quarterdeck QEMM386 memory manager with Windows, you may receive
	the following error when you try to start Windows in 386 enhanced mode:
	
	  CANNOT FIND A DEVICE FILE THAT MAY BE NEEDED TO RUN WINDOWS IN 386 ENHANCED
	  MODE
	
	  YOU NEED TO RUN SETUP AGAIN.
	
	  C:\WINHIRAM.VXD
	
	  PRESS ANY KEY TO CONTINUE
	
	CAUSE
	=====
	
	This error message is displayed because QEMM386 and Windows require the
	WINHIRAM.VXD file to transfer memory control when Windows loads.
	
	MORE INFORMATION
	================
	
	The WINHIRAM.VXD file is copied to the QEMM directory when you install QEMM386.
	The above error normally occurs when the QEMM386.SYS file is moved to another
	subdirectory without the WINHIRAM.VXD file. To correct this problem, copy the
	WINHIRAM.VXD file to the same subdirectory as the QEMM386.SYS file. If this does
	not correct the problem, try adding the subdirectory that contains these files
	to the MS-DOS path.
	
	For more information call Quarterdeck technical support.
	
	QEMM386 is manufactured by Quarterdeck Office Systems, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
