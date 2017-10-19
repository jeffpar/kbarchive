---
layout: page
title: "Q58412: Do Not Use the MS-DOS APPEND Utility in Windows"
permalink: /kb/058/Q58412/
---

## Q58412: Do Not Use the MS-DOS APPEND Utility in Windows

	Article: Q58412
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
	
	The MS-DOS APPEND utility remaps the contents of specified directories into the
	current directory, which makes the files of these directories available to an
	application. Do not use this utility on systems running the Windows operating
	environment because the APPEND utility is fundamentally hostile to the operation
	of Windows. The design of Windows rests on its ability to build a
	fully-qualified path for each file it opens.
	
	MORE INFORMATION
	================
	
	When Windows opens an application file (for example, WINWORD.EXE), it stores the
	fully-qualified path of this file (for example, D:\WINWORD\WINWORD.EXE). With
	this information, Windows can reopen the file even if user or application
	activity changes the current drive and current directory.
	
	The problem with the APPEND utility is that it prevents Windows from reliably
	determining the proper fully-qualified path to a file. If an application calls
	the open function when C:\EXCEL is the current drive and directory, and the
	D:\WINWORD directory is specified in the APPEND search path, Windows may
	improperly record the fully-qualified path to the WINWORD.EXE file as follows:
	
	C:\EXCEL\WINWORD.EXE.
	
	In this situation, when Windows reopens the file later, it receives an error from
	MS-DOS because the file is not actually located in the drive and directory
	indicated by the stored fully-qualified path. When Windows detects this error,
	it displays the Change Disk message box.
	
	The APPEND utility can cause similar problems for the WINOLDAP module, which runs
	MS-DOS (non-Windows) applications under Windows. These problems can result in
	unexpected "File Not Found" errors, failure to start an MS-DOS-based
	application, failure when the MS-DOS-based application exits, or failure when
	the user tries to switch back to Windows.
	
	The current versions of all the major application software available today do not
	require the APPEND utility. The MS-DOS version 4.0 and 4.01 installation
	programs usually add the APPEND utility to the user's configuration, which
	consumes valuable application memory without providing any benefits to the end
	user. The APPEND utility is usually found in the AUTOEXEC.BAT file. The line
	with APPEND can be removed or commented out by placing the word "remark" at the
	beginning of the line.
	
	Additional query words: 3.00 no32bit 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
