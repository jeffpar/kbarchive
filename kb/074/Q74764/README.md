---
layout: page
title: "Q74764: Cannot Run Windows Because of Video Device Conflict"
permalink: kb/074/Q74764/
---

## Q74764: Cannot Run Windows Because of Video Device Conflict

	Article: Q74764
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When video memory has been used by another application or device driver,
	Microsoft Windows 3.0 doesn't start and displays the following message:
	
	  Cannot run Windows because of video device conflict;
	  Run setup again
	
	MORE INFORMATION
	================
	
	It is possible to use certain areas of the upper memory area (UMA) to load
	device drivers high on 386 based machines. This can be done with MS-DOS version
	5.0 and later, QEMM, 386MAX, and other third-party device drivers.
	
	If a range needed for Windows graphical display is used, this error occurs. For
	example, a standard VGA setup requires memory ranges A000-AFFF and B800- BFFF.
	On some graphic adapters, the range A000-C7FF may be used.
	
	This error occurs regardless of any EMMEXCLUDE statement in the SYSTEM.INI file.
	
	Before attempting to use video memory ranges, be sure to create a MS-DOS bootable
	system disk.
	
	For Microsoft MS-DOS version 5.0 and later, be sure not to use any video memory
	area necessary to run Windows. By default, EMM386.EXE does not use the range
	A000-BFFF. It is possible to include these memory ranges; be sure to test for
	compatibility when attempting to use these ranges. It may be necessary to
	exclude the range C000-C7FF on some video adapters by editing the CONFIG.SYS
	file and changing the EMM386.EXE line as follows:
	
	       DEVICE=C:\DOS\EMM386.EXE NOEMS X=A000-C7FF
	
	On VGA displays, it is frequently possible to use the range B000-B7FF. To test
	this configuration on your 386, change the EMM386.EXE line as follows:
	
	       DEVICE=C:\DOS\EMM386.EXE NOEMS X=A000-AFFF I=B000-B7FF X=B800-BFFF
	
	Additional query words: 3.00 3.00a 3.0a 3.0 3rdparty win30
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
