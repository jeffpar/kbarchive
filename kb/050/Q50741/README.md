---
layout: page
title: "Q50741: Failure to Load Resources When All File Handles Are Used"
permalink: kb/050/Q50741/
---

## Q50741: Failure to Load Resources When All File Handles Are Used

	Article: Q50741
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
	
	A Windows-based application should not use all available file handles. Doing so
	may prevent Windows from being able to load the application's resources.
	
	When Windows has to open the application's .EXE file to retrieve a resource (such
	as the icon's bitmap), it uses one of the application's file handles. If the
	application has used all available file handles, Windows cannot load the
	resource.
	
	For example, suppose LoadIcon() was called previously to obtain an icon handle
	successfully, and the icon is being used as a window's icon. The rendering of
	the icon will fail if the application is using all the file handles. For
	example, if the window is to be minimized, the icon will be displayed as a black
	block on the screen.
	
	NOTE: LoadIcon() loads in the logical information of the icon; the bitmap of the
	icon is not loaded until it is going to be used.
	
	Under MS-DOS, an application has 20 file handles when it begins executing. Five
	of these handles (that is, STDIN, STDOUT, STDPRN, STDERR, and STDAUX) are
	automatically opened for use by the operating system. This leaves a total of 15
	file handles available for an application. If a Windows-based application needs
	more file handles open at any given time, it can use the SetHandleCount() API.
	
	Additional query words: 3.00 3.10 no32bit
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
