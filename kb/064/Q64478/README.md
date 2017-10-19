---
layout: page
title: "Q64478: Mathematica 387 and Mathlab 386 with Windows 3.0"
permalink: /kb/064/Q64478/
---

## Q64478: Mathematica 387 and Mathlab 386 with Windows 3.0

	Article: Q64478
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Mathematica 387 and Mathlab 386 do not run properly in Microsoft Windows version
	3.0 protected modes (standard and enhanced). These programs use the VCPI
	(virtual control program interface) to access extended memory that conflicts
	with Windows in protected mode (standard and enhanced).
	
	MORE INFORMATION
	================
	
	The VCPI specification allows MS-DOS applications to directly access extended
	memory on 80386 machines. Windows uses the DPMI (DOS protected mode interface)
	specification. The DPMI specification allows MS-DOS applications to directly
	access memory on 80286 and 80386 machines. Many programs that use the VCPI
	specification, including Lotus 123 version 3.0, run correctly in standard mode
	Windows. The performance of an MS-DOS application that uses the VCPI
	specification depends on how closely the actual application follows the VCPI
	specification.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3.00 3.0 3.0a 3.00a 3rdparty win30
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
