---
layout: page
title: "Q97758: Registering a Class in a DLL"
permalink: /kb/097/Q97758/
---

## Q97758: Registering a Class in a DLL

	Article: Q97758
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If a class is registered in a dynamic-link library (DLL) with the
	RegisterClass() function and an application uses this class when creating a
	window or a dialog box, then the CreateDialog() or CreateWindow() call in the
	application will fail. The debug version of Windows will produce a Fatal Exit
	code 0x8800 with the following message:
	
	  CreateWindow failed: Window class not found.
	
	Either of the following may generate this message:
	
	- The window class in the DLL was not registered correctly with the
	  CS_GLOBALCLASS class style. Without this class style, a class cannot be
	  accessed globally by all the applications that link into the DLL.
	
	-or-
	
	- The DLL is not loaded into memory and therefore the class is not accessible.
	  This will happen if the application implicitly links to the DLL, and none of
	  the exported functions in the DLL is explicitly called in the application. To
	  work around this problem, the DLL must provide an entry point for the
	  application to call or the application must explicitly load and free the
	  library.
	
	MORE INFORMATION
	================
	
	To register a window class in a DLL and subsequently create a window (or create
	a dialog box) of that class in any application that links into this DLL, the
	window class must be registered with the CS_GLOBALCLASS class style. This style
	specifies that the window class is an application global class, and will allow
	this class to be accessed globally by all applications. The CS_GLOBALCLASS class
	style is documented in the Windows version 3.1 SDK "Programmer's Reference,
	Volume 1: Overview," manual on page 19 under the Class Styles section.
	
	Care must be taken to ensure that an application global class is not accessed
	after the DLL (that registered it) terminates. Doing so will generate a Fatal
	Exit 0x001A message under the debug version of Windows. For more information on
	this topic, query on the following words in the Microsoft Knowledge Base:
	
	  " fatal exit and 0x001A " (without the quotation marks)
	
	
	After registering the window class using the CS_GLOBALCLASS class style, calling
	CreateWindow or CreateDialog from an application should work correctly. However,
	if the intent is to have the DLL own the message queue, this is not possible.
	The reason is that DLLs, being taskless entities, are designed to be resources
	or to only provide resources and functions; they are not capable of handling the
	message processing. This functionality must be implemented in an application.
	
	Also, note that with Windows version 3.0, there is a potential problem in
	destroying windows whose window class has been registered with the
	CS_GLOBALCLASS class style by a DLL (or an application). This problem has been
	corrected in Windows version 3.1. For more information on this problem and a
	solution, please query on the following words in the Microsoft Knowledge Base:
	
	  " exit and windows and DLL-instanced " (without the quotation marks)
	
	
	Once the class is registered properly with the CS_GLOBALCLASS style in the DLL,
	any application can use it, provided the DLL is loaded in memory. This issue is
	of concern in cases where the DLL is used only to register classes (for example,
	in LibMain) that can be used by all applications (for example, custom control
	libraries). Because the DLL does not contain any function entry points that the
	application can call into, there are no call-dependencies between the
	application and the DLL, and therefore the DLL will not be loaded implicitly. In
	such a case, the solution is that the DLL must provide an entry point that the
	application can call or the application must explicitly load and free the
	library using LoadLibrary and FreeLibrary application programming interfaces
	(APIs).
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
