---
layout: page
title: "Q99162: INFO: COMMON.RES Provides Common Bitmaps, Cursors, and Icons"
permalink: kb/099/Q99162/
---

## Q99162: INFO: COMMON.RES Provides Common Bitmaps, Cursors, and Icons

	Article: Q99162
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51,1.52,2.0,2.1,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): _IK920 kbVC kbVC100 kbVC150 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600 kbGrpDSTools
	Last Modified: 14-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The App Studio, used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	All versions of Microsoft Visual C++ include a COMMON.RES file. This file
	contains many common bitmaps, cursors, and icons that may be used "as is" with
	applications developed in Visual C++. The following table lists the default
	location of this file, be it on the installation drive, one of the distribution
	CDs, or one the MSDN Library CDs, for each version of Visual C++:
	
	+----------------------------------------------------------------+
	| Visual C++ version | Directory                                 | 
	+----------------------------------------------------------------+
	| 1.0                | \MSVC\MFC\SAMPLES\APSTUDIO                | 
	+----------------------------------------------------------------+
	| 1.5x               | \MSVC15\MFC\SAMPLES\APSTUDIO              | 
	+----------------------------------------------------------------+
	| 2.x                | \MSVC20\SAMPLES\MFC\CLIPART               | 
	+----------------------------------------------------------------+
	| 4.0                | \MSDEV\SAMPLES\MFC\CLIPART                | 
	+----------------------------------------------------------------+
	| 5.0                | \DevStudio\Vc\Samples\mfc\general\clipart | 
	+----------------------------------------------------------------+
	| 6.0                | \Samples\Vc98\mfc\general\clipart         | 
	+----------------------------------------------------------------+
	
	To view the various resources, simply open the COMMON.RES file in App Studio, or
	Developer Studio. You may copy these resources directly into an application's
	resource file. Please refer to Technical Note 23, Standard MFC Resources, in the
	MFC Tech Notes help file for more information about using COMMON.RES.
	
	In addition, Visual C++, 32-bit Edition, versions 2.0 and above include a
	COMMON.RC file and several other icons, cursors and bitmaps for general use. By
	default, these can be found in the same directory as the version's corresponding
	COMMON.RES file. The Visual C++ Books Online document the use of these resources
	in the "CLIPART: Common Resources" article of the "General MFC Samples." For
	more information, search the Books Online for "CLIPART."
	
	With App Studio and Developer Studio, you can view resources in many types of
	files including dynamic-link libraries (DLLs), executable (.EXE) files, compiled
	resource (.RES) files, and .BMP, .CUR, .DIB, .ICO, and .RC files. You can copy
	these resources into your own application and use them as appropriate.
	
	Additional query words:
	
	======================================================================
	Keywords          : _IK920 kbVC kbVC100 kbVC150 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600 kbGrpDSTools 
	Technology        : kbVCsearch kbAudDeveloper
	Version           : :1.0,1.5,1.51,1.52,2.0,2.1,4.0,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
