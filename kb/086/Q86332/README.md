---
layout: page
title: "Q86332: PRB: Bitmap Causes Windows Help Compiler Out-of-Memory Error"
permalink: /kb/086/Q86332/
---

## Q86332: PRB: Bitmap Causes Windows Help Compiler Out-of-Memory Error

	Article: Q86332
	Product(s): Microsoft Windows Software Development Kit
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 25-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When version 3.1 of the Microsoft Windows Help Compiler compiles an RTF
	(rich-text format) file, the compiler runs out of memory. This occurs in the
	HC31.EXE application running under MS-DOS or OS/2 and in the HCP.EXE application
	that uses extended memory under MS-DOS.
	
	CAUSE
	=====
	
	The RTF file contains a pasted bitmap larger than 64K.
	
	RESOLUTION
	==========
	
	Remove the bitmap from the RTF source and store it in a file. Import the bitmap
	into the RTF source file by reference. For more information on importing a
	bitmap by reference, see page 29 of the "Microsoft Windows Software Development
	Kit: Programming Tools" manual, and pages 258-260 of the "Microsoft Windows
	Software Development Kit: Programmer's Reference, Volume 4: Resources" manual.
	
	Additional query words: 3.10 no32bit
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : :3.1
	
	=============================================================================
	
