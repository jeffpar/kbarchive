---
layout: page
title: "Q150764: PRB: CString::LoadString Fails in Console Application"
permalink: kb/150/Q150764/
---

## Q150764: PRB: CString::LoadString Fails in Console Application

	Article: Q150764
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.0,2.1,2.2,4.0,4.1
	Operating System(s): 
	Keyword(s): kbnokeyword kbMFC kbVC200 kbVC400 kbGrpDSMFCATL
	Last Modified: 04-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 2.2, 4.0, 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	CString::LoadString() generates an MFC assert in debug mode console applications
	or fails in release mode console applications.
	
	CAUSE
	=====
	
	CString::LoadString() relies on MFC global resource handles that are initialized
	in AfxWinMain(), which is only called in MFC GUI-based applications.
	
	RESOLUTION
	==========
	
	The resource string is loaded using the Win32 API ::LoadString() function. This
	method does not require any extra MFC initialization.
	
	Example #1 below uses this method.
	
	It is possible to initialize the MFC global resource handles by calling the
	undocumented AfxWinInit() function. In this case, it is advisable to declare an
	instance of a CWinApp class.
	
	Example #2 below demonstrates this method.
	
	
	Sample Code - Example #1
	------------------------
	
	     /* Compile options needed: /MT
	     */ 
	     #include <afx.h>
	     #include <stdio.h>
	     #include <conio.h>
	
	     #define IDS_HELLO 1
	
	     BOOL LoadStringResource(CString &cszString, UINT nID)
	     {
	         int nSize = 0;
	         int nLen = -1;
	
	         cszString.Empty();
	
	         //Keep looping until we have the whole string
	         while ((nLen != 0) && (nLen == nSize - 1))
	         {
	             //Grow buffer by 256 bytes
	             nSize += 256;
	
	             //Load String Resource
	             nLen = ::LoadString( GetModuleHandle(NULL), nID,
	                                  cszString.GetBuffer(nSize-1), nSize);
	         }
	         cszString.ReleaseBuffer();
	
	         return (BOOL) nLen;
	     }
	
	     void main(void)
	     {
	         AfxInitialize();
	
	         CString cszString;
	
	         // IDS_HELLO is a string resource attached to the console
	     application
	         if (LoadStringResource(cszString, IDS_HELLO))
	             printf("The string was loaded\n%s\n", (LPCTSTR) cszString);
	         else
	             printf("Error loading string");
	
	         getch();
	     }
	
	Sample Code - Example #2
	------------------------
	
	     /* Compile options needed: /MT
	     */ 
	     #include <afx.h>
	     #include <afxwin.h>
	     #include <conio.h>
	
	     #define IDS_HELLO 1
	
	     CWinApp theApp;
	
	     void main()
	     {
	         if (!AfxWinInit(GetModuleHandle(NULL), NULL,
	             ::GetCommandLine(), 0))
	         {
	             printf("Couldn't initialize MFC!\n");
	             return;
	         }
	
	         CString cszString;
	
	         // IDS_HELLO is a string resource attached to the console
	     application
	         if (cszString.LoadString(IDS_HELLO))
	             printf("The string was loaded\n%s\n", (LPCTSTR) cszString);
	         else
	             printf("Error loading string");
	
	         getch();
	     }
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: 2.00 2.10 2.20 4.00 4.10
	
	======================================================================
	Keywords          : kbnokeyword kbMFC kbVC200 kbVC400 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:2.0,2.1,2.2,4.0,4.1
	Issue type        : kbprb
	
	=============================================================================
	
