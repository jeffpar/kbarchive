---
layout: page
title: "Q72217: Windows Err Msg: Insufficient Memory to Run App (dBASE IV)"
permalink: kb/072/Q72217/
---

## Q72217: Windows Err Msg: Insufficient Memory to Run App (dBASE IV)

	Article: Q72217
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Attempting to run the DBASE.EXE file on a network either from a PIF, File
	Manager, or directly from the Windows command line results in the following
	Windows error message:
	
	  Insufficient Memory To Run Application
	
	This is caused by running DBASE.EXE rather than DBASE.COM on a network version of
	dBASE IV versions 1.0 and 1.1.
	
	MORE INFORMATION
	================
	
	DbASE IV can be installed specifically to run on a network that will allow for
	multiple-user access. If dBASE IV is installed in this way, DBASE.COM is the
	executable file that is created. If dBASE IV is not installed to run on a
	network it will create a DBASE.EXE file that cannot be run off the network and
	work correctly.
	
	It is possible to run DBASE.EXE from within Windows 3.0 by executing it from the
	MS-DOS command line under Windows or by creating a batch file that calls it.
	However, this is not a recommended way to run dBASE IV on a network and is
	unstable according to Ashton-Tate.
	
	The product included here is manufactured by a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding this product's performance
	or reliability.
	
	Additional query words: 3.00 3.00a 3rdparty 3.10 win31 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
