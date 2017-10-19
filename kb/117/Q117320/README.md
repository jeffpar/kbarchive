---
layout: page
title: "Q117320: How to Programatically Terminate an MFC Application"
permalink: /kb/117/Q117320/
---

## Q117320: How to Programatically Terminate an MFC Application

	Article: Q117320
	Product(s): Microsoft C Compiler
	Version(s): 1.00 1.50 1.51 1.52 | 1.00 2.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Under certain conditions, you may want to terminate an MFC application
	programatically. MFC does not provide a public function to gracefully exit an
	application.
	
	MORE INFORMATION
	================
	
	A method for dealing with this is to create a function in your application like
	the following:
	
	     void ExitApp()
	     {
	          // same as double-clicking on main window close box
	          ASSERT(AfxGetApp()->m_pMainWnd != NULL);
	          AfxGetApp()->m_pMainWnd->SendMessage(WM_CLOSE);
	     }
	
	As you can see, this is implemented as a global function, which can be called
	from anywhere in your application. It simply sends a WM_CLOSE message to your
	application's mainframe window. This initiates an orderly shutdown of the
	application.
	
	If you are using MFC, version 2.5 or later, you can take advantage of a new
	global MFC function, "AfxGetMainWnd", to simplify the code:
	
	     void ExitMFCApp()
	     {
	          // same as double-clicking on main window close box
	          ASSERT(AfxGetMainWnd() != NULL);
	          AfxGetMainWnd()->SendMessage(WM_CLOSE);
	     }
	
	NOTE: Always call CDocument::SetModifiedFlag() after changing your document data.
	This will ensure that the framework prompts the user to save before shutdown. If
	you need more extensive control over the shutdown procedure, you can override
	CDocument::SaveModified().
	
	Additional query words: kbinf 1.00 1.50 1.51 1.52 2.00 2.10 2.50 2.51 2.52 3.00 3.10 4.00
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbMFC
	Version           : 1.00 1.50 1.51 1.52 | 1.00 2.00
	
	=============================================================================
	
