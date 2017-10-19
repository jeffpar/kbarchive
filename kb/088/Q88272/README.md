---
layout: page
title: "Q88272: DOCERR: DSKLAYT2.EXE /V (Verbose) Switch Not Documented"
permalink: /kb/088/Q88272/
---

## Q88272: DOCERR: DSKLAYT2.EXE /V (Verbose) Switch Not Documented

	Article: Q88272
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Windows version 3.1 Software Development Kit (SDK) "Setup Toolkit
	for Windows" manual does not document the /v switch for the Dsklayt2 program.
	This switch turns on the verbose option, causing the program to produce
	additional messages.
	
	MORE INFORMATION
	================
	
	The Dsklayt2 program options are given on pages 42-43 of the manual. The /v
	option is not listed. The verbose option will cause Dsklayt2 to output messages
	relating to file compression, creation of the .INF file, and creation of the
	disk images as the disk-layout program progresses. These messages may be useful
	for debugging because they may allow the user to identify problems with
	particular files or operations being carried out by Dsklayt2.
	
	Additional query words: 3.10 docerr
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
