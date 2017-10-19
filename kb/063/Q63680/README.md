---
layout: page
title: "Q63680: AutoCAD 386 and Windows 3.0"
permalink: /kb/063/Q63680/
---

## Q63680: AutoCAD 386 and Windows 3.0

	Article: Q63680
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	AutoCAD 386 runs with Microsoft Windows version 3.00 in real mode only. This is
	because AutoCAD 386 uses VCPI (virtual control program interface) to access
	extended memory that comes into conflict with Windows in protected, standard,
	and enhanced mode.
	
	MORE INFORMATION
	================
	
	The VCPI specification allows MS-DOS applications to directly access extended
	memory on 80386 machines. Windows 3.0 uses the DPMI (DOS protected- mode
	interface) specification. The DPMI specification allows DOS applications to
	directly access memory on 80286 and 80386 machines. Not all programs that use
	the VCPI specification are limited to running with Windows in real mode. Many
	programs, including Lotus 1-2-3 version 3.0, that use the VCPI specification run
	correctly in Windows protected mode.
	
	The performance of an MS-DOS application that uses the VCPI specification depends
	on how closely the actual application follows the VCPI specification.
	
	NOTE: When running AutoCAD under Windows 3.0 in standard mode, erratic
	functioning can occur. It is therefore recommended that you do not run AutoCAD
	while running in standard mode.
	
	The AutoCAD product included here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 3.00 3.00a 3.0 3.0a 3RDPARTY auto cad
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
