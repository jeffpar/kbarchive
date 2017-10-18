---
layout: page
title: "Q151070: FIX: DYNAMIC_DOWNCAST &amp; STATIC_DOWNCAST Causes Stack Overflow"
permalink: kb/151/Q151070/
---

## Q151070: FIX: DYNAMIC_DOWNCAST &amp; STATIC_DOWNCAST Causes Stack Overflow

	Article: Q151070
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.1
	Operating System(s): 
	Keyword(s): kbMFC kbVC400bug kbVC410bug kbVC420fix kbGrpDSMFCATL kbNoUpdate
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, version 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the DYNAMIC_DOWNCAST and STATIC_DOWNCAST macros are called, and a pointer
	to a "const" object is passed, you see an error message similar to the following
	in debug mode:
	
	  Unhandled exception in downcast.exe (MFC40D.DLL); Stack Overflow.
	
	In release builds, the application hangs.
	
	CAUSE
	=====
	
	The DYNAMIC_DOWNCAST and STATIC_DOWNCAST macros invoke the AfxDynamicDownCast
	and AfxStaticDownCast functions respectively. A code defect in Visual C++
	version 4.1 causes these calls to be recursive if the object pointer passed as
	the second parameter to either macro points to a "const" object. The end result
	is a stack overflow.
	
	RESOLUTION
	==========
	
	To work around this problem, remove the "const" attribute for the object pointer
	in the call to the appropriate DOWNCAST macro. You can do this by using the
	"const_cast" operator as follows:
	
	     //CMyDlg is derived from CDialog
	     const CMyDlg dlg;
	
	     //pdlg is a pointer to a const object
	     const CMyDlg* pdlg = &dlg;
	
	     DYNAMIC_DOWNCAST(CDialog, const_cast<CMyDlg*>(pdlg));
	
	     // or
	
	     STATIC_DOWNCAST(CDialog, const_cast<CMyDlg*>(pdlg));
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ 32-bit Edition
	version 4.2.
	
	Additional query words: MfcMisc
	
	======================================================================
	Keywords          : kbMFC kbVC400bug kbVC410bug kbVC420fix kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
