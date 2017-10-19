---
layout: page
title: "Q75257: Passing File Handles from TSR to Windows-Based App"
permalink: /kb/075/Q75257/
---

## Q75257: Passing File Handles from TSR to Windows-Based App

	Article: Q75257
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	MS-DOS file handles are associated with a PSP (program segment prefix). For an
	MS-DOS terminate-and-stay-resident program (TSR) to open and operate on files on
	behalf of a Windows-based application, or to share file handles between MS-DOS
	TSRs and Windows-based applications, the TSR and application must be operating
	with the same PSP. This is possible because every Windows-based application has
	an MS-DOS PSP. Therefore, it is simply a matter of ensuring that the
	Windows-based application's PSP is the current PSP when the MS-DOS TSR opens or
	operates on a file. This article discusses some of the details involved with
	this process.
	
	MORE INFORMATION
	================
	
	The Windows Kernel creates a unique MS-DOS PSP for every Windows-based
	application that is started. The only time that the application's PSP must be
	selected as the current PSP is when the application calls MS-DOS. Therefore, an
	application cannot assume that its PSP is the current PSP. Listed below are two
	ways to have the PSP set so that a TSR can open or operate on a file on the
	application's behalf:
	
	1. The Windows-based application performs an MS-DOS call just prior to calling
	  the TSR. This MS-DOS call must involve the file system; just retrieving the
	  time of day is not enough. One good choice might be Get File Attributes (INT
	  21h, function 43h). Another possibility is to open a file. As long as the
	  application does not yield [by calling the GetMessage, SendMessage,
	  PeekMessage, and so forth functions], the Kernel will set the PSP for the
	  MS-DOS call and will not change it. At this point, the application can call
	  the TSR secure in the knowledge that the PSP is set correctly.
	
	2. The TSR can set the current PSP using INT 21h, function 50h (the BX register
	  is the segment of the new PSP). To do this, it is necessary that either the
	  Windows-based application or the TSR determine the PSP for the application.
	
	  The TSR can determine the correct PSP by following these three steps:
	
	  a. Have the application perform an MS-DOS call just prior to the first call
	     to the TSR.
	
	  b. Determine the identity of the PSP by calling INT 21h, function 51h (the
	     segment of the current PSP is returned in the BX register).
	
	  c. Save this information or return it to the application that will use the
	     PSP as a parameter in subsequent calls to the TSR.
	
	  The application can determine the PSP segment by following these three steps:
	
	  a. Call the GetCurrentPDB function to determine its Program Data Base (PDB).
	     The PDB is the Windows equivalent of the PSP.
	
	  b. In protected mode, the value returned is a selector. The application must
	     determine the segment address to which the selector maps by using the
	     GetSelectorBase function.
	
	     Note that the GetSelectorBase function is not documented in the Windows
	     Software Development Kit (SDK); however, the function is documented in the
	     Windows Device Development Kit (DDK). The
	
	     function returns a LONG which is the linear address of the base. Dividing
	     this value by 16 yields a segment value. Because PDBs are allocated using
	     the GlobalDOSAlloc function, the linear address is always below 1
	     megabyte.
	
	  c. Once the Windows-based application has determined its PSP, specify the PSP
	     as a parameter when calling the TSR.
	
	In Windows version 3.1, an installable driver mechanism has been added that
	allows for essentially a Windows TSR. An installable driver can be loaded at
	boot time or on demand by an application. It receives notifications in real and
	standard mode when the user switches away from or back to Windows to allow the
	driver to perform clean-up and/or re-initialization operations as necessary. In
	all other respects, it is a standard DLL.
	
	Additional query words: 3.00 no32bit 3.l0
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
