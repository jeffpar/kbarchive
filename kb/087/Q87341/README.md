---
layout: page
title: "Q87341: DOC: Do Not Use MB_NOFOCUS Flag with MessageBox Function"
permalink: kb/087/Q87341/
---

## Q87341: DOC: Do Not Use MB_NOFOCUS Flag with MessageBox Function

	Article: Q87341
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbdocfix kb16bitonly kbMessageBox kbSDKPlatform
	Last Modified: 11-JUN-1999
	
	3.10
	WINDOWS
	kbtoolkbtoolg kbdocerr
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the Microsoft Windows graphical environment, an application can use the
	MessageBox function to create, display, and operate a message box window. The
	fourth parameter of the MessageBox function is fuStyle, which has the UINT data
	type.
	
	The fuStyle parameter specifies the message box style; it can be a combination of
	the MB_* values, including MB_OK, MB_ICONHAND, MB_SYSTEMMODAL, and so on. These
	values are defined in the WINDOWS.H header file provided with the Microsoft
	Windows Software Development Kit (SDK).
	
	WINDOWS.H defines MB_NOFOCUS, which is not listed in the SDK documentation
	(printed or electronic). In the book "Programming Windows 3" by Charles Petzold
	(Microsoft Press), page 440 states that when the MB_NOFOCUS flag is specified,
	Windows creates the message box but does not give it the focus. This statement
	is incorrect.
	
	MB_NOFOCUS is not one of the standard MB_* values and it cannot be used in the
	fuStyle parameter. Although MB_NOFOCUS is used internally by Windows, it is not
	passed to or accepted from an application.
	
	Additional query words: 3.10 docerr
	
	======================================================================
	Keywords          : kbdocfix kb16bitonly kbMessageBox kbSDKPlatform 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
