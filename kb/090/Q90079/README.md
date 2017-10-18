---
layout: page
title: "Q90079: Setting Up Vi-Spy with Windows 3.1"
permalink: kb/090/Q90079/
---

## Q90079: Setting Up Vi-Spy with Windows 3.1

	Article: Q90079
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Vi-Spy is a virus-protection application capable of running in both Windows and
	MS-DOS environments. For Windows to work properly with Vi-Spy, you must run the
	Windows-based Setup utility provided on the Vi-Spy Setup disks.
	
	NOTE: Failure to do so may cause MS-DOS-based applications to stop responding
	(hang) when started from within Windows.
	
	MORE INFORMATION
	================
	
	Vi-Spy virus protection software comes with separate installation programs for
	MS-DOS and Windows. Both programs should be run before using Vi-Spy with
	Windows. The MS-DOS Setup utility places the RVS.EXE terminate-
	and-stay-resident (TSR) in the AUTOEXEC.BAT file. The Windows-based Setup
	utility places the RVSWIN.EXE TSR in the LOAD= line of the WIN.INI file.
	
	RVSWIN.EXE is necessary to resolve memory conflicts with RVS.EXE when running
	under Windows. If the Windows-based Setup utility is not run, or RVSWIN.EXE is
	removed from the LOAD= line of the WIN.INI file, Windows may hang when an
	MS-DOS-based application or MS-DOS Prompt is executed from within Windows.
	
	To ensure that the Vi-Spy virus-protection software is installed correctly,
	contact RG Software Systems technical support.
	
	Vi-Spy is manufactured by a vendor independent of Microsoft; we make no warranty,
	implied or otherwise, regarding this product's performance or reliability.
	
	Additional query words: 3.10 3.11 vi-spi vy-spi vispy vyspy R.G. DOS freezes locks up lockup win31 3rdparty crashes
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
