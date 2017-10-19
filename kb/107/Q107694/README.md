---
layout: page
title: "Q107694: PRB: Share Buffer Exceeded"
permalink: /kb/107/Q107694/
---

## Q107694: PRB: Share Buffer Exceeded

	Article: Q107694
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In a Windows-based application, if calling SetHandleCount(x) to increase the
	current task's file handle table to be able to open "x" number of files, even
	though the call returned success, "x" number of files still cannot be opened.
	Instead, the MS-DOS error 0x24 is encountered:
	
	  Sharing Buffer Exceeded
	
	CAUSE
	=====
	
	The MS-DOS error 0x24 "Sharing Buffer Exceeded" occurs because of the MS- DOS
	SHARE (SHARE.EXE) utility. SHARE maintains a table containing the fully
	qualified pathname, plus 11 bytes, of each open file in the system. By default,
	the size of this table when the SHARE utility gets loaded is only 2048 bytes.
	When SHARE runs out of this buffer while opening a file, the above error message
	is displayed.
	
	RESOLUTION
	==========
	
	Increase the default size of the internal buffer that SHARE uses via the /F:nnnn
	command-line argument to SHARE.EXE. Then, a Windows-based application should be
	able to open more files at one time. The SHARE utility is documented both in the
	MS-DOS "User's Guide" and the MS-DOS "User's Reference" manuals. For example,
	adding the following line in the AUTOEXEC.BAT file will set share's internal
	buffer size to 10,000 bytes.
	
	  " C:\DOS\SHARE.EXE /F:10000 " (without the quotation marks)
	
	Additional query words: 3.10 sft 36
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
