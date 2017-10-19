---
layout: page
title: "Q11591: The Purpose of WINSTUB in Windows SDK"
permalink: /kb/011/Q11591/
---

## Q11591: The Purpose of WINSTUB in Windows SDK

	Article: Q11591
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
	
	WINSTUB is provided with the Windows Software Development Kit (SDK) as a normal
	MS-DOS program. It contains only an assembly equivalent to a printf() line. It
	is assembly, so it does not have the overhead it would if it used the C runtime
	library. WINSTUB can be used as a stub if no MS-DOS version of a program exists.
	To have both a Windows version and an MS-DOS version of a program in one .EXE
	file, replace the following line in the .DEF file
	
	  STUB 'WINSTUB.EXE'
	
	with the following line
	
	  STUB 'MYDOSAPP.EXE'
	
	and relink.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
