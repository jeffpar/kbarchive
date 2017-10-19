---
layout: page
title: "Q192536: BUG: Msvcrt.dll Does Not Initialize Global Objects"
permalink: /kb/192/Q192536/
---

## Q192536: BUG: Msvcrt.dll Does Not Initialize Global Objects

	Article: Q192536
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbVC500 kbVC600 kbOSWinCE200bug kbOSWinCE210bug kbOSWinCE211bug
	Last Modified: 21-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual C++ 6.0 
	- Microsoft Windows CE Embedded Toolkit for Visual C++ 5.0 
	- Microsoft Windows CE Platform Builder, version 2.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When targeting Windows CE 2.00 and linking with C run-time dynamic libraries
	(Msvcrt.dll or Msvcrtd.dll), global C++ objects are not initialized.
	
	RESOLUTION
	==========
	
	If C++ global objects are being used, do not use the C run-time dynamic
	libraries. Use the static run-time libraries instead.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	The C run-time dynamic libraries were available only with Windows CE version
	2.0. Devices using Windows CE version 1.0 or Windows CE 2.01 and later should
	not use these libraries. The following program demonstrates the problem when
	linked with Msvcrt or Msvcrtd:
	
	     // Sample.cpp -
	     // 
	     // Should show the constructor message before the main program
	     // message. Instead, the constructor message isn't shown at all.
	     // 
	
	     #include <windows.h>
	
	     #define MSG(z) MessageBox(0,z,TEXT("Sample"),MB_OK)
	
	     struct MYCLASS
	     {
	        MYCLASS()   { MSG(TEXT("Constructor called.")); }
	     };
	
	     MYCLASS myclass;
	
	     int WINAPI WinMain(
	
	        HINSTANCE   hInstance,
	        HINSTANCE   hPrevInstance,
	        LPTSTR      lpCmdLine,
	        int         nCmdShow)
	     {
	        MSG(TEXT("Main program."));
	        return 0;
	     }
	
	======================================================================
	Keywords          : kbVC500 kbVC600 kbOSWinCE200bug kbOSWinCE210bug kbOSWinCE211bug 
	Technology        : kbVCsearch kbAudDeveloper kbSDKSearch kbWinCETKVCSearch kbWinCEETKSearch kbWinCESDKSearch kbWinCESearch kbWinCESDK211 kbWinCETK600VC kbWinCEETKVC500
	Version           : WINDOWS:
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
