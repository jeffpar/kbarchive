---
layout: page
title: "Q114376: FIX: CWnd::ExecuteDlgInit() Uses AfxGetInstanceHandle"
permalink: kb/114/Q114376/
---

## Q114376: FIX: CWnd::ExecuteDlgInit() Uses AfxGetInstanceHandle

	Article: Q114376
	Product(s): Microsoft C Compiler
	Version(s): winnt:1.0
	Operating System(s): 
	Keyword(s): kbnokeyword kbMFC kbVC kbGrpDSMFCATLkbbuglist kbfixlist
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, version 1.0 
	   - Microsoft Visual C++, 32-bit Editions, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the Microsoft Foundation Classes, version 2.0, CWnd::ExecuteDlgInit()
	incorrectly searches for dialog box resources only in the executing module.
	
	CAUSE
	=====
	
	In WINCORE.CPP, lines 1463 and 1464, CWnd::ExecuteDlgInit() attempts to find the
	specified resource using the following code:
	
	      if ((hDlgInit = ::FindResource(AfxGetInstanceHandle(),
	          lpszResourceName, RT_DLGINIT)) != NULL)
	
	This forces the use of only those resources bound to the executing module. For
	localization and other uses, it must be possible to load resources from other
	sources.
	
	RESOLUTION
	==========
	
	This problem was fixed in the Microsoft Foundation Classes, version 2.5, which
	is supplied with Visual C++ for Windows, version 1.5. The fix involves defining
	AfxFindResourceHandle() to return the correct resource handle either by using
	AfxGetResourceHandle() for a single executable or by searching the list of
	CDynLinkLibrary objects for an application using the shared dynamic link library
	(DLL) version of the Microsoft Foundation Class library (compiling using
	_AFXDLL). This allows the application to switch between several sets of
	resources located in DLLs.
	
	Applications maintain a list of the shared and extension DLLs using instances of
	the CDynLinkLibrary class. Each node in the list is an object of the
	CDynLinkLibrary class or of a class derived from the CDynLinkLibrary class. This
	object can also be used to hold private data for the DLL by deriving from
	CDynLinkLibrary and adding additional member variables. For an example of
	CDynLinkLibrary, please examine the Microsoft Foundation Class library DLLHUSK
	sample supplied with Visual C++, versions 1.0 and 1.5.
	
	In a Microsoft Foundation Class application that does not use the shared DLL
	(MFC2xx.DLL), AfxFindResourceHandle() calls AfxGetResourceHandle(), which
	returns the current resource handle for the executable. In a Microsoft
	Foundation Class application that uses MFC2xx.DLL, AfxFindResourceHandle()
	traverses the CDynLinkLibrary object list of shared and extension DLLs, looking
	for the correct resource handle.
	
	To get this behavior in a Microsoft Foundation Class library version 2.0
	application, add the following function to the source module that contains the
	dialog box class code:
	
	  HINSTANCE ResourceInit(LPCSTR szResourceName,LPCSTR szResType)
	  {
	      // first check the app
	      HINSTANCE hInstApp = AfxGetResourceHandle();
	      if (::FindResource(hInstApp, szResourceName,
	            szResType) != NULL)
	          return hInstApp;
	
	      // check for DLLs in proper order
	      CDynLinkLibrary* pDLL;
	      for (pDLL = _AfxGetAppData()->pFirstDLL; pDLL != NULL;
	           pDLL = pDLL->m_pNextDLL)
	      {
	          if (pDLL->m_hResource != NULL &&
	              ::FindResource(pDLL->m_hResource,
	                szResourceName, szResType) != NULL)
	          {
	              // found it in a DLL, use it's resource handle
	              return pDLL->m_hResource;
	          }
	      }
	
	      // if failed to find resource, fail initialization
	      TRACE("\n Resource not found \n");
	      return (HINSTANCE)NULL;
	  }
	
	Make a call to this function in the CDialog derived class' override of
	OnInitDialog(). The ResourceInit() function will check the list of
	CDynLinkLibrary objects for the application and return the appropriate resource
	handle (or NULL if not found). The OnInitDialog() function may look like this:
	
	  BOOL CDerivedDlg::OnInitDialog()
	  {
	      // attempt to find dialog box template
	      HINSTANCE hResInst = ResourceInit(m_lpDialogTemplate, RT_DIALOG);
	      if(NULL == hResInst) return FALSE;
	
	      // get app's resource handle so we can set it back later
	      HINSTANCE hAppInst = AfxGetResourceHandle();
	      // temporarily set to DLL's resource handle
	      AfxSetResourceHandle(hResInst);
	      // Call base class which initializes the dialog
	      // and loads the template
	      BOOL bInit = CDialog::OnInitDialog();
	      // restore the app's resource handle
	      AfxSetResourceHandle(hAppInst);
	
	      return bInit;
	  }
	
	In addition, the resource handle must be set correctly before the call to
	DoModal(). The easiest way to do this is to:
	
	1. Call ResourceInit() from the constructor of the dialog box.
	
	2. Set the resource handle for the application appropriately.
	
	3. Reset it to the actual application resource handle when the dialog box is
	  destroyed.
	
	Here is an example of the constructor:
	
	  CDerivedDlg::CDerivedDlg(CWnd* pParent /*=NULL*/)
	      : CDialog(CDerivedDlg::IDD, pParent)
	  {
	      //{ {AFX_DATA_INIT(CDerivedDlg)
	      // NOTE: the ClassWizard will add member initialization here
	      //} }AFX_DATA_INIT
	      AfxSetResourceHandle(ResourceInit(m_lpDialogTemplate,RT_DIALOG));
	  }
	
	Here is an example of the destructor:
	
	  CDerivedDlg::~CDerivedDlg()
	  {
	      AfxSetResourceHandle(AfxGetApp()->m_hInstance);
	      // reset resource to application's instance handle
	  }
	
	The ResourceInit() function may be used at any point for any type of resource
	that may be located in a DLL or in the application's resources.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft Foundation
	Classes, version 2.0. The problem was corrected in Microsoft Foundation Classes,
	version 2.5.
	
	REFERENCES
	==========
	
	kbNoUpdate
	
	Additional query words: 1.00 2.00 2.10 international language afxdll
	
	======================================================================
	Keywords          : kbnokeyword kbMFC kbVC kbGrpDSMFCATL kbbuglist kbfixlist
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:1.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
