---
layout: page
title: "Q65449: EMM386.SYS &quot;d=48&quot; Parameter Not Required"
permalink: kb/065/Q65449/
---

## Q65449: EMM386.SYS &quot;d=48&quot; Parameter Not Required

	Article: Q65449
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The README.TXT file included with Microsoft Windows version 3.0 includes the
	following incorrect note:
	
	  Setting the D= Switch for EMM386
	  --------------------------------
	  If you install EMM386, before you can start Windows in 386
	  enhanced mode, you must include the following setting on your
	  EMM386 command line:
	
	     d=48
	
	The "d=" command-line parameter for EMM386 sets the size of its local DMA buffer.
	This parameter is not required to run Windows 3.0 in enhanced mode.
	
	MORE INFORMATION
	================
	
	Setting the "d=" parameter is only necessary if you receive a fatal error from
	EMM386 telling you to set this parameter to a specific value. Unless you receive
	such a message, do not use this parameter.
	
	Additional query words: 3.00 3.0 3.0a 3.00a docerr winmem
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
