---
layout: page
title: "Q125794: PRB: Calling CDatabase::Open in a USRDLL Causes CDBException"
permalink: kb/125/Q125794/
---

## Q125794: PRB: Calling CDatabase::Open in a USRDLL Causes CDBException

	Article: Q125794
	Product(s): Microsoft C Compiler
	Version(s): 1.00 1.50 1.51 1.52 | 1.00 2.00
	Operating System(s): 
	Keyword(s): kbcode kbprb
	Last Modified: 23-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Calling the CDatabase::Open function in a USRDLL and using a parameter list of
	(NULL, FALSE, FALSE, "ODBC;") may generate a CDBException with it's m_strError
	member set to a value of "Dialog failed."
	
	CAUSE
	=====
	
	When the CDatabase::Open function is called with a value of NULL for the first
	parameter and the default values for the remaining parameters, an SQL Data
	Source dialog is displayed to the user allowing them to choose the data source
	they want to open.
	
	When this is done in the context of a USRDLL, the CDBException is generated
	because CDatabase::Open() attempts to specify the main or active window of the
	CWinApp or CWinThread object as the parent of the SQL Data Source dialog. In a
	USRDLL, the main or active window of the CWinApp or CWinThread object is
	typically NULL.
	
	RESOLUTION
	==========
	
	Avoid the problem by using the main window of the calling application as the
	parent of the SQL Data Source dialog. The sample code listed below illustrates
	one way to implement this solution. The sample DLL exports one function,
	OpenDatabase(), which displays a dialog with a list of data sources. The
	OpenDatabase() function accepts a single parameter of type HWND, which is then
	used as the handle to the parent window of the SQL Data Source dialog.
	
	STATUS
	======
	
	This behavior was by design, however it was modified in Visual C++ version 2.2.
	to eliminate the problem.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	  /* 16-bit Compile options needed: /GD
	  *  16-bit Link options needed:    /LIB:"odbc"
	  */ 
	  #ifndef _WINDLL        // Make this work with WIN32 and WIN16
	  #define _WINDLL
	  #endif
	  #ifndef _USRDLL
	  #define _USRDLL
	  #endif
	  #include <afxwin.h>
	  #include <afxext.h>
	  #include <afxdb.h>
	  class MyDLL : public CWinApp
	  {
	  public:
	      BOOL InitInstance();
	  };
	  #ifdef WIN32    // Make this work with WIN32 and WIN16
	  extern "C" __declspec(dllexport) int
	  #else
	  extern "C" int _export
	  #endif
	  FAR PASCAL OpenDatabase(HWND hWndParent /* Needs a parent window */)
	  {
	      TRY
	      {
	          // Before calling MyDb.Open setup a parent window
	          AfxGetApp()->m_pMainWnd = new CWnd;
	          AfxGetMainWnd()->Attach(hWndParent);
	          CDatabase MyDb;
	          // Present list of ODBC sources
	          MyDb.Open(NULL,FALSE,FALSE,"ODBC;");
	          MyDb.Close();
	          // Clean Up
	          AfxGetMainWnd()->Detach();
	          delete AfxGetMainWnd();
	          AfxGetApp()->m_pMainWnd = NULL;
	      }
	      CATCH_ALL(e)
	      {
	          if ( AfxGetMainWnd()->GetSafeHwnd() != NULL )
	          {
	              // Clean Up
	              AfxGetMainWnd()->Detach();
	              delete AfxGetMainWnd();
	              AfxGetApp()->m_pMainWnd = NULL;
	          }
	          // Exception caused a failure
	          return FALSE;
	      }
	      END_CATCH_ALL
	      return TRUE;
	  }
	  BOOL MyDLL::InitInstance()
	  {
	      return TRUE;
	  }
	  MyDLL theDLL;
	
	Additional query words: 1.00 1.50 2.00 2.10 2.50 2.51 2.52 3.00 3.10
	
	======================================================================
	Keywords          : kbcode kbprb 
	Technology        : kbAudDeveloper kbMFC
	Version           : 1.00 1.50 1.51 1.52 | 1.00 2.00
	Issue type        : kbprb
	
	=============================================================================
	
