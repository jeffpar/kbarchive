---
layout: page
title: "Q82714: Available Conventional Memory for MS-DOS"
permalink: kb/082/Q82714/
---

## Q82714: Available Conventional Memory for MS-DOS

	Article: Q82714
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Running under a system that has very little loaded into conventional memory (a
	"bare-bones" system), the Microsoft Windows operating system versions 3.1 and
	3.0 operating in enhanced mode will reduce the amount of memory available to
	MS-DOS programs by 4K to 16K.
	
	MORE INFORMATION
	================
	
	A combination of the following can force Windows in enhanced mode to use more
	conventional memory:
	
	- Memory for an MS-DOS virtual machine (VM) must start at a 4K page boundary
	  (because of the paging mechanism that the 80386 processor uses.) In the worst
	  case, this can cause slightly more than 3K of memory address space to go
	  unused.
	
	- Some machines have an additional data area used by the machine's system ROM
	  BIOS called the EBIOS data area. This data area usually resides at the top of
	  the conventional memory (near the 640K boundary). Because the 80386 paging
	  mechanism deals with 4K pages of memory, the EBIOS data area occupies 4K of
	  space in Windows in enhanced mode. (Normally, when Windows is not being run,
	  the EBIOS area takes up only about 1K of memory because there is no
	  limitation of 4K-sized memory pages.)
	
	- When an MS-DOS prompt is started from within Windows, a second copy of the
	  MS-DOS command interpreter, COMMAND.COM, is being started. This can account
	  for an additional memory loss of 4K.
	
	Additional query words: 3.10 3.00 3.00a 3.0a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
