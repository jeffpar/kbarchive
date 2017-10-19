---
layout: page
title: "Q74445: Opening Files, Compatibility Mode and Windows"
permalink: /kb/074/Q74445/
---

## Q74445: Opening Files, Compatibility Mode and Windows

	Article: Q74445
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Opening a file in compatibility mode is a very unfriendly action in a
	multitasking environment such as Windows. There is never any need to do so;
	compatibility mode provides support for old MS-DOS (non-Windows) applications
	however it does not provide additional functionality.
	
	Use the following four guidelines for opening files:
	
	1. Do not use the _lcreate function, it opens files in compatibility mode. If it
	  is necessary to create a file, immediately close the file and then reopen it
	  with the _lopen function.
	
	2. Do not use the OF_SHARE_COMPAT option with the _lopen or OpenFile functions.
	  Instead, use one of the other OF_SHARE defines. If no OF_SHARE value is
	  specified, the file is opened in compatibility mode.
	
	3. When creating a file using MS-DOS interrupts 3Ch or 5Bh, after creating the
	  file, close it and then open it again. The create leaves it in compatibility
	  mode.
	
	4. When opening a file (MS-DOS interrupts 3Dh or 6Ch), make sure that the file
	  is NOT opened in compatibility mode.
	
	When specifying the open mode and share, do not request more access than
	required. If a file will only be read, open it in read-only mode EVEN IF
	EXCLUSIVE ACCESS IS REQUESTED. Do not lock out other access unnecessarily. If an
	application will only read a file, allow other applications to read the file as
	well.
	
	Finally, be open to alternatives when opening a file. If a file is being opened
	to display its contents and an open READ-ONLY, DENY-WRITE fails, try an open
	READ-ONLY, DENY-NONE.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
