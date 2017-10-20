---
layout: page
title: "Q121947: How to Create a Modal Dialog from Within a USRDLL"
permalink: /kb/121/Q121947/
---

## Q121947: How to Create a Modal Dialog from Within a USRDLL

{% raw %}

	Article: Q121947
	Product(s): Microsoft C Compiler
	Version(s): 1.50 1.51 | 2.00 4.00
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 29-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.5, 1.51 
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 4.0 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	When creating a modal dialog box from within a USRDLL, or a regular DLL
	statically linked to the MFC, you need to pass a valid parent window object to
	the CDialog constructor. You cannot pass the CWnd pointer from an EXE to an
	USRDLL, so you need to pass the HWND of the parent window.
	
	You can use two methods to construct the CDialog object with the HWND as its
	parent. You can either construct a CWnd object and use the Attach() function to
	attach the HWND to it, or you can use CWnd::FromHandle. After that you can use
	the CWnd object as the parent of the CDialog object.
	
	The DLLTRACE sample program demonstrates the latter method and demonstrates how
	to delete the temporary objects created by MFC in the OnIdle() handler.
	
	To construct a modal dialog in the USRDLL, export a "C" interface function that
	takes an HWND as a parameter:
	
	
	  export "C"
	  {
	
	        void FAR PASCAL _export CreateModal(HWND hParent);
	     }
	
	
	The implementation of the CreateModal() is below.
	
	MORE INFORMATION
	================
	
	Modal dialog requires a valid parent window to be modal. If the parent window is
	invalid or NULL, the dialog will not be modal and it will not prevent the user
	from switching to the other windows of the application.
	
	Sample Code
	-----------
	
	  /* Compile options needed: standard USRDLL options
	  */ 
	
	  void FAR PASCAL _export CreateModal(HWND hParent)
	  {
	      TRACE("Inside USRDLL\n");
	
	      CWnd wndParent;
	
	      if (!wndParent.Attach(hParent) )
	      {
	          TRACE("Attach Failed\n");
	          AfxAbort();
	      }
	
	      CMyDialog Dlg(IDD_DIALOG1, &wndParent);    // IDD_DIALOG1 is in
	                                                 // the DLL resource
	      if ( Dlg.DoModal() == IDOK )
	      {
	          // more code
	      }
	      else
	      {
	          // check for cancel or error
	      }
	      wndParent.Detach(hwndParent);
	  }
	
	Note: In Visual C++ version 4.0, the term "USRDLL" is obsolete. In earlier
	versions, USRDLL described DLLs that used MFC internally, but typically export
	functions using the standard "C" interface. In version 4.0, such DLLs are called
	"Regular DLLs." Regular DLLs, statically linked to MFC have the same
	characteristics as the former USRDLL.
	
	Additional query words: kbinf modal dialog CDialog DLL USRDLL 1.50 2.00 2.50 2.51 3.00 4.00
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbAudDeveloper kbMFC
	Version           : 1.50 1.51 | 2.00 4.00
	
	=============================================================================
	

{% endraw %}
