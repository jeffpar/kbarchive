---
layout: page
title: "Q116026: FIX: ExitInstance() Not Called in _USRDLL DLL"
permalink: /kb/116/Q116026/
---

## Q116026: FIX: ExitInstance() Not Called in _USRDLL DLL

	Article: Q116026
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbATL kbDLL kbMFC kbVC kbVC100bug kbVC150bug kbVC200fixkbbuglist kbfixlist
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ 32-bit Edition, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	CWinApp::ExitInstance() never gets called for the CWinApp object in a _USRDLL
	built with the Microsoft Foundation Classes (MFC) for Windows NT, version 2.1.
	
	CAUSE
	=====
	
	The DLLMain function for a _USRDLL is provided by MFC. This function can be
	found in the MFC source directory (MSVC\MFC\SRC by default) in the file
	WINMAIN.CPP. Unlike a Windows 3.1 DLL, which has both an initialization and a
	termination function, a Windows NT DLL calls one function, DLLMain(), for both
	purposes. The DLLMain() function supplied by MFC has no call to ExitInstance()
	when DLL_PROCESS_DETACH is received.
	
	RESOLUTION
	==========
	
	Provide your own DLLMain() function in your _USRDLL project by copying the
	current DLLMain() implementation into a new .CPP module and add the new .CPP
	file to your project. Modify the new DLLMain() to add the calls to
	ExitInstance() where necessary. The new module would look like this:
	
	    // 
	     // FILE - DLLMAIN.CPP
	     // 
	
	     #include <afxwin.h>
	
	     extern "C" int APIENTRY
	     DllMain(HINSTANCE hInstance, DWORD dwReason, LPVOID lpReserved)
	     {
	          if (dwReason == DLL_PROCESS_ATTACH)
	          {
	               // Initialize DLL's instance(/module) not the app's
	               if (!AfxWinInit(hInstance, NULL, "", 0))
	               {
	                    AfxWinTerm();
	                    return 0;       // Init Failed
	               }
	
	               // initialize the single instance DLL
	               if (!AfxGetApp()->InitInstance())
	               {
	                if(AfxGetApp()!=NULL)
	                   AfxGetApp()->ExitInstance();
	                  AfxWinTerm();
	                  return 0;       // Init Failed
	               }
	          }
	          else if (dwReason == DLL_PROCESS_DETACH)
	          {
	             if(AfxGetApp()!=NULL)
	                AfxGetApp()->ExitInstance();
	
	               // Terminate the library before destructors are called
	               AfxWinTerm();
	          }
	
	          return 1;   // ok
	     }
	
	     // 
	     // EOF - DLLMAIN.CPP
	     // 
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the products listed at the beginning
	of this article. This problem was corrected in MFC version 3.0, included with
	Microsoft Visual C++ 32-bit Edition, version 2.0.
	
	Additional query words: 1.00 2.00 2.10
	
	======================================================================
	Keywords          : kbATL kbDLL kbMFC kbVC kbVC100bug kbVC150bug kbVC200fix kbbuglist kbfixlist
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
