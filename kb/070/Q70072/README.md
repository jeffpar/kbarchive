---
layout: page
title: "Q70072: Corrupt RES File May Crash Dialog Editor"
permalink: kb/070/Q70072/
---

## Q70072: Corrupt RES File May Crash Dialog Editor

	Article: Q70072
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
	
	A corrupt RES file may cause the Dialog Editor distributed with the Windows
	Software Development Kit (SDK) to crash. If the Dialog Editor crashes
	consistently processing a particular file, delete the RES file created by the
	Dialog Editor and use the resource compiler to recompile the DLG dialog script
	file.
	
	MORE INFORMATION
	================
	
	To compile the DLG dialog script file, you must include WINDOWS.H at the top of
	the script. You must make the following line the first line in your DLG file:
	
	     #include <windows.h>
	
	To compile the dialog script file using the resource compiler, use the following
	command line:
	
	  rc mydlg.dlg
	
	where "mydlg" is replaced with the name of the dialog script file. This will
	produce a RES file that can be used by the Dialog Editor and should help to
	alleviate the crashing problems.
	
	Additional query words: 3.00 no32bit 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
