---
layout: page
title: "Q188304: PRB: Calling 32-bit Help Files from 16-bit Applications on NT"
permalink: /kb/188/Q188304/
---

## Q188304: PRB: Calling 32-bit Help Files from 16-bit Applications on NT

{% raw %}

	Article: Q188304
	Product(s): Microsoft C Compiler
	Version(s): 1.52
	Operating System(s): 
	Keyword(s): kbcode kberrmsg kbfile kbSDKWin32 kbVC152 kbDSupport
	Last Modified: 07-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, version 1.52 
	- Microsoft Win32 Software Development Kit (SDK) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	This problem exists on Windows NT 4.0. When you call 32-bit Help files from
	16-bit applications, the following error occurs:
	
	  This file is not a Windows Help File.
	
	It is followed by another error:
	
	  A newer version of Help is needed to read this Help file.
	
	CAUSE
	=====
	
	16-bit Applications launch WinHelp.exe instead of the 32-bit Help engine,
	WinHlp32.exe. WinHelp.exe does not call WinHlp32.exe with the correct parameters
	to launch the 32-bit help file.
	
	RESOLUTION
	==========
	
	To workaround this problem, you can call WinHlp32.exe with command-line
	parameters. The following example demonstrates how to use the ShellExecute API
	in a C program:
	
	     WORD wdReturn;
	     char szPath[144];
	
	     // There may be more than one WinHlp32.Exe.  Make sure
	     // to use the one in the Windows directory:
	     wdReturn = GetWindowsDirectory(szPath, sizeof(szPath));
	     strcat(szPath,"\\winhlp32.exe ");
	
	     ShellExecute(hwnd, NULL, szPath, "-N2 c:\\test.hlp",
	        "c:\\", SW_SHOWNORMAL);
	
	The first parameter, hwnd, is a valid window handle. The fourth parameter
	contains the command-line parameters. It specifies that the Help file
	"c:\test.hlp" should be launched and the topic with a ContextID of 2 displayed.
	You can find information on other command-line parameters for WinHlp32.exe in
	the Help files for the Microsoft Help Workshop (see REFERENCES). The fifth
	parameter in ShellExecute() points to a null- terminated string that specifies
	the default directory.
	
	An alternative workaround is to write a generic thunk. Please see the MORE
	INFORMATION section for an example.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The following example demonstrates how to use generic thunking to call the
	exported function WinHelpA() directly. This function is exported from
	User32.dll. You can insert the following code into any 16-bit C++ application.
	WinHlp32() wraps the WinHelp() function and performs the generic thunk
	automatically.
	
	Sample Code
	-----------
	
	     // Stdafx.h is assumed to exist and is assumed to include
	     // <windows.h>. If not, include <windows.h> here instead:
	     # include "stdafx.h"
	
	     // WOW_HANDLE_TYPE enumerated type for WOWHandle32():
	     typedef enum _WOW_HANDLE_TYPE {
	     WOW_TYPE_HWND,
	     WOW_TYPE_HMENU,
	     WOW_TYPE_HDWP,
	     WOW_TYPE_HDROP,
	     WOW_TYPE_HDC,
	     WOW_TYPE_HFONT,
	     WOW_TYPE_HMETAFILE,
	     WOW_TYPE_HRGN,
	     WOW_TYPE_HBITMAP,
	     WOW_TYPE_HBRUSH,
	     WOW_TYPE_HPALETTE,
	     WOW_TYPE_HPEN,
	     WOW_TYPE_HACCEL,
	     WOW_TYPE_HTASK,
	     WOW_TYPE_FULLHWND
	     } WOW_HANDLE_TYPE;
	
	     // Typedef for kernel function pointers needed for
	     // thunking (found in krnl386.dll):
	     typedef DWORD (FAR PASCAL * LOADLIBRARYEX32W)(LPCSTR lpszLibFile,
	        DWORD hFile, DWORD dwFlags);
	     typedef DWORD (FAR PASCAL * GETPROCADDRESS32W)(DWORD hModule,
	        LPCSTR lpszProc);
	     typedef DWORD (FAR PASCAL * FREELIBRARY32W)(DWORD hLibModule);
	     typedef DWORD (FAR CDECL  * CALLPROCEX32W)( DWORD, DWORD,
	        DWORD, ... );
	     // Typedef for Wow32 function pointer needed for converting
	     // 16-bit window handle:
	     typedef DWORD (FAR PASCAL * WOWHANDLE32)(WORD Handle,
	        WOW_HANDLE_TYPE Type);
	
	     // WinHelp32() function declaration:
	     // Note: This loads WinHelpA() from User32.dll, and it requires
	     // that you pass an ASCII string for lpszHelpFile. If you need to
	     // use this function in a UNICODE application, you either have to
	     // convert the string to ASCII or modify this function to accept a
	     // UNICODE string. In the second case, you also have to load the UNICODE
	     // version of WinHelp, WinHelpW().
	     BOOL WinHelp32(HWND hwnd, LPCSTR lpszHelpFile,
	        UINT fuCommand, DWORD dwData);
	
	     // Function pointer to the ASCII version of WinHelp API call:
	     typedef BOOL (FAR PASCAL * WINHELPA)(HWND, LPCSTR, UINT, DWORD);
	
	     BOOL LoadGenericThunkFuncs();
	
	     // Declare global function pointers:
	     LOADLIBRARYEX32W lpfnLoadLibraryEx32W = NULL;
	     GETPROCADDRESS32W lpfnGetProcAddress32W = NULL;
	     FREELIBRARY32W lpfnFreeLibrary32W = NULL;
	     CALLPROCEX32W lpfnCallProcEx32W = NULL;
	
	     // WinHelp32 function definition - wrapper around WinHelpA().
	     // See documentation for the WinHelp API for parameter information.
	     BOOL WinHelp32(HWND hwnd, LPCSTR lpszHelpFile,
	        UINT fuCommand, DWORD dwData)
	     {
	     static BOOL bFirstTime = TRUE;
	     static BOOL bFuncsLoaded = FALSE;
	     BOOL bSuccess = TRUE;
	     DWORD hUser32Lib = NULL;
	     DWORD hWow32Lib = NULL;
	     DWORD hWnd32 = NULL;
	
	     // Both WinHelpA and WOWHandle32 need thunking.
	     WINHELPA hWinHelpA = NULL;
	     WOWHANDLE32 hWOWHandle32 = NULL;
	
	     if (bFirstTime)
	     {
	     // This is the first time the function is accessed.
	     // Load global function pointers from kernel.
	     bFuncsLoaded = LoadGenericThunkFuncs();
	     bFirstTime = FALSE;
	     }
	
	     // Unless the thunking functions from kernel were successfully
	     // loaded, the thunking code will not work.
	     if (bFuncsLoaded)
	     {
	     // Load the User32.dll library where the 32-bit WinHelp()API
	     // is located:
	     hUser32Lib = lpfnLoadLibraryEx32W("user32.dll", NULL, 0);
	     if (!hUser32Lib)
	     bSuccess = FALSE;
	
	     // Load the Wow32.dll library where WOWHandle32W() is located:
	     hWow32Lib = lpfnLoadLibraryEx32W("wow32.dll", NULL, 0);
	     if (!hWow32Lib)
	     bSuccess = FALSE;
	
	     if (bSuccess)
	     {
	     hWinHelpA = (WINHELPA)lpfnGetProcAddress32W(hUser32Lib, "WinHelpA");
	     if (!hWinHelpA)
	        bSuccess = FALSE;
	
	     hWOWHandle32 = (WOWHANDLE32)lpfnGetProcAddress32W(hWow32Lib,
	        "WOWHandle32");
	     if (!hWOWHandle32)
	        bSuccess = FALSE;
	     }
	
	     if (bSuccess)
	     {
	     // Call WOWHandle32W() to convert the 16-bit HWND to a 32-bit HWND:
	     // Note: 2nd parameter 1(0x01) because the hwnd is passed by
	     // reference.
	     hWnd32 = (DWORD)lpfnCallProcEx32W(2, 1, (DWORD)hWOWHandle32,
	        (DWORD)hwnd, (DWORD)WOW_TYPE_HWND);
	
	     // Call WinHelp().
	     // Note: 2nd parameter 2(0x010) because the lpszHelpFile is
	     // passed by reference.
	     bSuccess = lpfnCallProcEx32W(4, 2, (DWORD)hWinHelpA, hWnd32,
	        (DWORD) lpszHelpFile, (DWORD) fuCommand, (DWORD) dwData);
	     }
	
	     if (hUser32Lib)
	     lpfnFreeLibrary32W(hUser32Lib);
	     if (hWow32Lib)
	     lpfnFreeLibrary32W(hWow32Lib);
	     }
	
	     return bSuccess;
	     }
	
	     // LoadGenericThunkFuncs() dynamically loads the functions
	     // necessary to perform the generic thunk from "kernel"
	     // located in krnl386.dll.
	     BOOL LoadGenericThunkFuncs()
	     {
	     BOOL bSuccess = TRUE;
	     HINSTANCE hInst = NULL;
	
	     hInst = LoadLibrary("kernel");
	     if (!hInst)
	     bSuccess = FALSE;
	
	     if (bSuccess)
	     {
	     lpfnLoadLibraryEx32W = (LOADLIBRARYEX32W) GetProcAddress(hInst,
	        "LoadLibraryEx32W");
	     bSuccess = (lpfnLoadLibraryEx32W != NULL);
	
	     lpfnGetProcAddress32W = (GETPROCADDRESS32W) GetProcAddress(hInst,
	        "GetProcAddress32W");
	     bSuccess = (bSuccess && (lpfnGetProcAddress32W != NULL));
	
	     lpfnFreeLibrary32W = (FREELIBRARY32W) GetProcAddress(hInst,
	        "FreeLibrary32W");
	     bSuccess = (bSuccess && (lpfnFreeLibrary32W != NULL));
	
	     lpfnCallProcEx32W = (CALLPROCEX32W) GetProcAddress(hInst,
	        "_CallProcEx32W");
	     bSuccess = (bSuccess && (lpfnCallProcEx32W !=NULL));
	     }
	
	     return bSuccess;
	     }
	
	REFERENCES
	==========
	
	The Microsoft Help Workshop is available for download from the Microsoft
	Download Center. Click the file name below to download the file:
	
	  HCWSetup.exe
	  (http://download.microsoft.com/download/word97win/Utility/4.03/WIN98/EN-US/HCWSetup.exe)
	
	Release Date: October 22, 1999
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q169020 32-bit Help Fails to Start When 16-bit Help Is Running
	
	Additional query words: kbHelpCompiler
	
	======================================================================
	Keywords          : kbcode kberrmsg kbfile kbSDKWin32 kbVC152 kbDSupport 
	Technology        : kbVCsearch kbWin32SDKSearch kbAudDeveloper kbSDKSearch kbWin32sSearch kbVC152
	Version           : :1.52
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
