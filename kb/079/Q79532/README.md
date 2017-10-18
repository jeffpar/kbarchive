---
layout: page
title: "Q79532: Running Borland C++ 2.0 in Protected Mode Within Windows"
permalink: kb/079/Q79532/
---

## Q79532: Running Borland C++ 2.0 in Protected Mode Within Windows

	Article: Q79532
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To successfully run the Borland C++ 2.0 protected-mode compiler (BCX.EXE) under
	Windows, load TKERNEL.EXE at the MS-DOS command line before you start Windows.
	Use the following parameters:
	
	  TKERNEL hi=yes kilos=nnnn
	
	where nnnn represents the number of kilobytes of XMS memory for BCX to manage.
	Borland recommends kilos=2048 (see page 5 of the "Borland C++ 2.0 User's
	Guide").
	
	After loading TKERNEL, run Windows in standard mode (WIN /S) or in real mode (WIN
	/R), and then run BCX.EXE.
	
	NOTE: BCX.EXE cannot be run under Windows in 386 enhanced mode. Run BCX in
	Windows standard or real mode only.
	
	MORE INFORMATION
	================
	
	For more information, refer to "Borland C++ 2.0 User's Guide" or contact Borland
	technical support.
	
	The Borland product included here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	REFERENCES
	==========
	
	"Borland C++ 2.0 User's Guide," pages 4, 5
	
	Additional query words: 3.00 3.00a 2.0 plus
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
