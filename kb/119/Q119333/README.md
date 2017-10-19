---
layout: page
title: "Q119333: PRB: CWinApp-Based DLL Gets Assertion Failure on Win32s"
permalink: /kb/119/Q119333/
---

## Q119333: PRB: CWinApp-Based DLL Gets Assertion Failure on Win32s

	Article: Q119333
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbDLL kbMFC kbVC100 kbGrpDSMFCATL
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ 32-bit Edition, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	There is no problem starting a second instance of a Win32-based application that
	uses a CWinApp-based DLL on Windows NT. However, under Win32s, the same
	Win32-based application generates an assertion failure in the file APPCORE.CPP,
	line 193.
	
	CAUSE
	=====
	
	The inability to run two applications that use the same CWinApp-based DLL is
	because of differences in the way Windows NT and Win32s manage memory and the
	fact that the C run-time initializes global data and objects whenever a process
	loads a DLL.
	
	Under Windows NT, each application gets its own copy of the DLL data, including
	the C run-time and MFC data. Under Win32s, all applications that use the DLL
	share the DLL data. When another process loads the DLL, the global objects are
	reinitialized. The assertion is generated because another copy of the CWinApp
	data already exists.
	
	RESOLUTION
	==========
	
	Replace the DLL entry point to work around the limitation. The sample code to do
	this is shown in the "MORE INFORMATION" section. The new entry point checks to
	see whether Win32s is loaded. If the application is running under Win32s, the
	entry point makes sure that the C run-time entry point is called only for the
	first process attach and the last process detach. This problem has been fixed in
	Microsoft Visual C++ 32-bit edition, versions 2.0 and 2.1.
	
	MORE INFORMATION
	================
	
	To use this code as your new entry point, you need to change the entry point of
	your DLL to "NewDLLEntry()".
	
	Sample Code
	-----------
	
	     BOOL WINAPI _DllMainCRTStartup( HINSTANCE, DWORD, LPVOID );
	
	     extern "C" BOOL WINAPI
	     NewDLLEntry( HINSTANCE hInstDLL, DWORD dwReason, LPVOID lpReserved )
	     {
	        BOOL bRet = TRUE;
	        static DWORD dwVer = 0;
	        static int nAttached = 0;
	
	        if( !dwVer )
	           dwVer = GetVersion();
	
	        // Check for Win32s and version < 4.0 (Windows "Chicago").
	        if( ((HIWORD(dwVer) & 0x8000) != 0x8000) || ((dwVer & 0xFF) >= '4') )
	           bRet = _DllMainCRTStartup( hInstDLL, dwReason, lpReserved );
	        else
	        {
	           switch (dwReason)
	           {
	           case DLL_PROCESS_ATTACH:
	              if( nAttached++ == 0 )  // Call CRT entry if first process.
	                 bRet = _DllMainCRTStartup( hInstDLL, dwReason, lpReserved );
	              break;
	
	           case DLL_PROCESS_DETACH:
	              if( --nAttached == 0 )  // Call CRT entry if last process.
	                 bRet = _DllMainCRTStartup( hInstDLL, dwReason, lpReserved );
	              break;
	           }
	        }
	        return bRet;
	     }
	
	You can still run into problems with memory allocation even after you have
	replaced the entry point. Whichever process allocates the memory owns it;
	therefore, when the process goes away, the object is destroyed and no other
	process can use the object. This is a problem for any object shared by multiple
	processes.
	
	Additional query words: 1.00 2.00 2.10 noupdate kbNoUpdate
	
	======================================================================
	Keywords          : kbDLL kbMFC kbVC100 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:
	Issue type        : kbprb
	
	=============================================================================
	
