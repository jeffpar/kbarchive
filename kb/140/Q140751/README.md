---
layout: page
title: "Q140751: PRB: Problems Occur When Defining _AFX_NO_XXX"
permalink: /kb/140/Q140751/
---

## Q140751: PRB: Problems Occur When Defining _AFX_NO_XXX

	Article: Q140751
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbMFC kbVC400 kbGrpDSMFCATL kbArchitecture
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ 32-bit Edition, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The _AFX_NO_XXX macros are not intended to be defined or undefined by users of
	MFC. These macros exist only for the purpose of checking whether a particular
	target platform supports that feature or not. You can write your program to
	check these macros (for example, #ifndef _AFX_NO_OLE_SUPPORT), but your program
	should never define or undefine these macros.
	
	If you define _AFX_NO_OLE_SUPPORT, the symptoms might include:
	
	- Application encounters Access Violation on start-up.
	
	- InitInstance is not called in a DLL.
	
	Other macros that you should not define include:
	
	_AFX_NO_AFXCMN_SUPPORT
	_AFX_NO_CTL3D_RESOURCES
	_AFX_NO_DAO_SUPPORT
	_AFX_NO_DB_SUPPORT
	_AFX_NO_MAPI_RESOURCES
	_AFX_NO_NESTED_DERIVATION
	_AFX_NO_OCC_SUPPORT
	_AFX_NO_OCX_SUPPORT
	_AFX_NO_OLE_SUPPORT
	_AFX_NO_RICHEDIT_SUPPORT
	_AFX_NO_SOCKET_SUPPORT
	_AFX_NO_SPLITTER_RESOURCES
	_AFX_NO_SYNC_SUPPORT
	_AFX_NO_TRACKER_RESOURCES
	
	CAUSE
	=====
	
	If you define or undefine any of these macros differently from the way MFC
	defines them, then your application's compile will be based on a different
	definition of MFC than the pre-compiled MFC library.
	
	One example of how these macros are used by MFC can be found in AfxWin.h.
	CCmdTarget has the following section of code in its declaration:
	
	  class CCmdTarget : public CObject
	  {
	  ...
	  #ifndef _AFX_NO_OLE_SUPPORT
	    // called before dispatching to an automation handler function
	    virtual BOOL IsInvokeAllowed(DISPID dispid);
	  #endif
	  ...
	  };
	
	If _AFX_NO_OLE_SUPPORT is defined in your project, then the declaration of
	CCmdTarget will not include this virtual function. However, the compiled version
	of CCmdTarget in the MFC library does contain this function. This will result in
	a v-table mismatch between your code and MFC's code.
	
	RESOLUTION
	==========
	
	Don't define or undefine these macros in your own code. They are intended to be
	tested only. For example, for maximum future portability, if MFC were to
	eventually target a platform that did not contain OLE support, then you could
	use _AFX_NO_OLE_SUPPORT as follows:
	
	  #ifndef _AFX_NO_OLE_SUPPORT
	    DoSomeOLEStuff();
	  #endif
	
	A common place to try to use these macros might be in your pre-compiled header
	file (for example, StdAfx.h). In this case, you don't need to define these
	symbols to prevent the including of unneccessary header files, you can simply
	remove the #include lines.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbMFC kbVC400 kbGrpDSMFCATL kbArchitecture 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:
	Issue type        : kbprb
	
	=============================================================================
	
