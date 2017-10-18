---
layout: page
title: "Q125796: PRB: GP Fault when Use CString Objects Inside TRACE&lt;x&gt; Macros"
permalink: kb/125/Q125796/
---

## Q125796: PRB: GP Fault when Use CString Objects Inside TRACE&lt;x&gt; Macros

	Article: Q125796
	Product(s): Microsoft C Compiler
	Version(s): winnt:; :1.0,1.5,1.51,1.52,2.0,2.1,4.0
	Operating System(s): 
	Keyword(s): kbDebug kbMFC kbString kbVC100 kbVC150 kbVC200 kbVC400 kbGrpDSMFCATL kbNoUpdate
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC) 
	- Microsoft Visual C++, versions 1.0, 1.5, 1.51, 1.52 
	- Microsoft Visual C++, versions 2.0, 2.1, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	CString objects may cause a general protection (GP) fault when used with the %s
	format specifier inside the TRACE1, TRACE2, and TRACE3 macros of the Microsoft
	Foundation Classes.
	
	CAUSE
	=====
	
	The TRACE<x> macros call AfxTrace(), a function that takes a variable
	number of parameters. AfxTrace() uses the va_start/va_end macros to access the
	parameters passed to it. It then ultimately ends up calling the vsprintf()
	function to format the output string. The GP fault occurs on the call to the
	vsprintf() function.
	
	The GP fault occurs because the %s format specifier tells the vsprintf() function
	to expect a TCHAR *. However, the function is being passed a CString object
	instead of a pointer to a character. The reason this is not caught by the
	compiler is because of AfxTrace's use of a variable length parameter list. The
	compiler has no way to know the type(s) of the parameters the function accepts,
	so it cannot check the type.
	
	RESOLUTION
	==========
	
	Use the CString LPCTSTR conversion operator to pass a pointer to the CString
	object's data instead of passing the CString itself. The following sample code
	illustrates this method.
	
	Sample Code
	-----------
	
	  /* Compile options needed: None
	  */ 
	
	  void CAboutDlg::OnOK()
	  {
	      CString t1("output1");
	      CString t2("output2");
	      CString t3("output3");
	
	      // Incorrect use of the %s format specifier with a CString object:
	      TRACE1("TRACE1 %s\n", t1);
	      TRACE2("TRACE2 %s, %s\n", t1, t2);
	      TRACE3("TRACE3 %s, %s, %s\n", t1, t2, t3);
	
	      // Correct use of the %s format specifier with a CString object:
	      TRACE1("TRACE1 %s\n", (LPCTSTR)t1);
	      TRACE2("TRACE2 %s, %s\n", (LPCTSTR)t1, (LPCTSTR)t1);
	      TRACE3("TRACE3 %s, %s, %s\n", (LPCTSTR)t1, (LPCTSTR)t2,
	             (LPCTSTR)t3);
	
	      CDialog::OnOK();
	  }
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: GPF 1.00 1.50 2.00 2.10 2.50 2.51 2.52 3.00 3.10 4.00
	
	======================================================================
	Keywords          : kbDebug kbMFC kbString kbVC100 kbVC150 kbVC200 kbVC400 kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbMFC kbvc150 kbvc100 kbVC151 kbVC200 kbVC210 kbVC152
	Version           : winnt:; :1.0,1.5,1.51,1.52,2.0,2.1,4.0
	Issue type        : kbprb
	
	=============================================================================
	
