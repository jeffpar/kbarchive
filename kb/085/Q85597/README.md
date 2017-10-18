---
layout: page
title: "Q85597: Setup Toolkit for Windows Compatible with Windows 3.0"
permalink: kb/085/Q85597/
---

## Q85597: Setup Toolkit for Windows Compatible with Windows 3.0

	Article: Q85597
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The "Microsoft Windows Software Development Kit: Setup Toolkit for Windows,"
	distributed with the Microsoft Windows Software Development Kit (SDK) version
	3.1, can create a setup script that is compatible with Windows 3.0.
	
	In addition to the six Microsoft setup dynamic-link libraries (DLLs), the data
	decompression library (LZEXPAND.DLL) and the file installation library (VER.DLL)
	must be included with the distribution for the setup script to function
	properly.
	
	Because LZEXPAND and VER are compatible only with protected mode, these files
	cannot be used under real mode Windows version 3.0.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
