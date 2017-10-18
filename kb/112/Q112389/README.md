---
layout: page
title: "Q112389: The Unexpected QuickWin Error"
permalink: kb/112/Q112389/
---

## Q112389: The Unexpected QuickWin Error

	Article: Q112389
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
	
	Applications for Microsoft Windows developed with the Windows SDK may display an
	error message box with the error:
	
	  "Unexpected QuickWin Error"
	
	MORE INFORMATION
	================
	
	There are several possible causes for this error:
	
	- A QuickWin application caused an unexpected application error (UAE) or
	  general protect (GP) fault.
	
	- or -
	
	- A Microsoft Windows-based application that is not a QuickWin application
	  called a QuickWin function. If execution of a non-QuickWin application for
	  Windows results in this error, one of the QuickWin functions was linked and
	  executed in the application.
	
	- or -
	
	- Possible mismatch of memory model libraries (for example, building a large
	  model application but using SLIBCEW, the small model library for Windows.)
	
	- or -
	
	- Possible stray function pointers that accidentally call one of the QuickWin
	  stubs.
	
	- or -
	
	- You may have attempted to use an invalid file handle with one of the I/O
	  functions.
	
	The run-time libraries for Windows (SLIBCEW, MLIBCEW, CLIBCEW, and LLIBCEW)
	contain stubs to the QuickWin functions. Therefore, the linker will not give an
	error when linking with a QuickWin function from a non-QuickWin application for
	Windows. However, when the function executes, an error message box with the
	error "Unexpected QuickWin Error" will be displayed.
	
	The following functions are in the QuickWin library:
	
	  _fwopen                    _wgopen
	  _inchar                    _wgsetactive
	  _wabout                    _wmenuclick
	  _wclose                    _wopen
	  _wgclose                   _wsetexit
	  _wgetexit                  _wsetfocus
	  _wgetfocus                 _wsetscreenbuf
	  _wgetscreenbuf             _wsetsize
	  _wgetsize                  _wyield
	  _wggetactive
	
	For further information regarding QuickWin applications and the QuickWin
	routines, refer to the Language Help file of Visual C++ or the Microsoft Visual
	C++ "Run-Time Library Reference" manual.
	
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
