---
layout: page
title: "Q71148: PRB: GetModuleHandle() and Long Path Causes UAE"
permalink: /kb/071/Q71148/
---

## Q71148: PRB: GetModuleHandle() and Long Path Causes UAE

	Article: Q71148
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an application calls the GetModuleHandle() API and specifies a fully
	qualified path longer than 63 characters, an unrecoverable application error
	(UAE) occurs.
	
	RESOLUTION
	==========
	
	In Microsoft Windows version 3.0, the GetModuleHandle() function uses a 64
	character internal buffer. In Windows 3.1, this buffer has been extended to 128
	characters. Specifying a longer string overflows the buffer and causes the UAE.
	
	Additional query words: 3.00 3.10 no32bit
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
