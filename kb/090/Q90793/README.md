---
layout: page
title: "Q90793: PRB: _MSSETUP.EXE Disappears"
permalink: /kb/090/Q90793/
---

## Q90793: PRB: _MSSETUP.EXE Disappears

	Article: Q90793
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	_MSSETUP.EXE disappears from the default directory; in fact, it deletes itself.
	
	CAUSE
	=====
	
	This is by design. _MSSETUP.EXE is invoked when the MSSetup script file calls
	ExitExecRestart(). This function exits Windows and calls _MSSETUP.EXE to read
	any commands that have been placed in _MSSETUP.BAT. (Commands are placed in
	_MSSETUP.BAT when a file in the copy list is specified as a system file that is
	in use during the Windows portion of the MSSetup program.) As part of the
	cleanup before returning to Windows, _MSSETUP.EXE deletes itself.
	
	RESOLUTION
	==========
	
	If you run _MSSETUP.EXE from the MS-DOS command line or from the File Manager,
	it looks for _MSSETUP.BAT, does not find it, and then deletes itself. One way to
	workaround this is to compress _MSSETUP.EXE so that it cannot be executed on its
	own.
	
	MORE INFORMATION
	================
	
	NOTE: The Setup Toolkit places commands in the _MSSETUP.BAT file to copy files
	that are in use during the execution of the Windows portion of the Setup
	program. These files are specified in MSSetup's file copy list. For example, if
	a copy list includes an update to the SHELL.DLL file, Setup cannot update the
	SHELL file while Windows is running.
	
	Additional query words: 3.10 no32bit MSSetup tool kit
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
