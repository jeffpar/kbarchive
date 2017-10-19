---
layout: page
title: "Q82711: How EMM386 and Windows 3.1 Relate"
permalink: /kb/082/Q82711/
---

## Q82711: How EMM386 and Windows 3.1 Relate

	Article: Q82711
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how Microsoft Windows handles memory on a system running
	EMM386.EXE.
	
	MORE INFORMATION
	================
	
	Include/Exclude Precedence
	--------------------------
	
	An X= parameter added to the EMM386.EXE device line is directly adopted by
	Windows. Any EMMInclude= or EMMExclude= entry is overridden by any X= parameter
	on the EMM386.EXE device line in the CONFIG.SYS file. For example, the following
	line in your CONFIG.SYS takes precedence over any conflicting entry:
	
	       device=c:\windows\emm386.exe X=C000-CFFF noems
	
	When Windows executes, it takes this information before it checks the SYSTEM.INI
	file. Even if the SYSTEM.INI file contains a contradictory line, for example:
	
	       EMMInclude=C000-CFFF
	
	Windows keeps the EMM386.EXE parameter.
	
	The same precedence that an EMM386.EXE exclusion takes is true for the I=
	(inclusion) parameter.
	
	DMA Buffer Size Parameter
	-------------------------
	
	The D= (DMA buffer size) parameter is not adopted by Windows. If it is necessary
	to allocate a larger DMA buffer for EMM386.EXE, it is probably necessary to add
	the following to the CONFIG.SYS file. For example, add:
	
	  device=c:\windows\emm386.exe D=96 noems
	
	This would affect anything running under MS-DOS. However, when Windows is
	started, the DMA buffer size returns to its default. For the above example, you
	should also add the following line to the [386Enh] section of the SYSTEM.INI
	file:
	
	  DMABufferSize=96
	
	REFERENCES
	==========
	
	For more information on EMM386.EXE, see the "Microsoft Windows User's Guide"
	version 3.1 manual. For information on using the SYSTEM.INI file, see the
	SYSINI.WRI file in the Windows subdirectory.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
