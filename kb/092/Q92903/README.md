---
layout: page
title: "Q92903: AutoCAD 386 Version 12 PIF Cannot Run with Windows"
permalink: /kb/092/Q92903/
---

## Q92903: AutoCAD 386 Version 12 PIF Cannot Run with Windows

	Article: Q92903
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	AutoCAD 386 version 12 is an MS-DOS-based program that comes with its own
	program information file (PIF), ACAD.PIF. The ACAD.PIF includes ACAD.EXE as the
	program filename; however, Autodesk has confirmed that loading ACAD.EXE does not
	allow AutoCAD to work with Microsoft Windows.
	
	MORE INFORMATION
	================
	
	AutoCAD comes with a batch file called ACADR12.BAT, which should replace
	ACAD.EXE as the program filename in the ACAD.PIF. This batch file sets all the
	environment variables that allow AutoCAD version 12 to work with Windows 3.1.
	
	For more information, call Autodesk Technical Support.
	
	AutoCAD 386 is manufactured by Autodesk, Inc., a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding this product's performance
	or reliability.
	
	Additional query words: 3.10 3.11 Auto desk cad 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
