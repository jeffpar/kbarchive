---
layout: page
title: "Q241750: BUG: CHtmlView Leaks Memory by Not Releasing BSTRs"
permalink: /kb/241/Q241750/
---

## Q241750: BUG: CHtmlView Leaks Memory by Not Releasing BSTRs

	Article: Q241750
	Product(s): Microsoft C Compiler
	Version(s): winnt:6.0
	Operating System(s): 
	Keyword(s): kbInternet kbMFC kbVC600bug kbVS600bug kbDSupport kbGrpDSMFCATL
	Last Modified: 03-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following methods in CHtmlView cause a memory leak if called:
	
	- Navigate
	
	- GetFullName
	
	- GetType
	
	- GetLocationName
	
	- GetLocationURL
	
	- LoadFromResource(LPCTSTR lpszResource)
	
	- LoadFromResource(UINT nRes)
	
	CAUSE
	=====
	
	This problem is caused by bugs in the internal implementation in the first five
	functions listed in the "Summary" section. SysFreeString must be called in the
	first five functions on the allocated BSTRs. The last two functions cause a leak
	because CHtmlView::Navigate is called in both of these functions and
	CHtmlView::Navigate causes a leak.
	
	RESOLUTION
	==========
	
	To work around the leak, the functions listed in the "Summary" must be
	implemented in each class derived from CHtmlView. If you have several views
	derived some CHtmlView, consider making a new base class, such as CFixHtmlView,
	from CHtmlView, and then deriving the rest of the views from CFixHtmlView
	instead of CHtmlView:
	
	1. Inside the MFC application project, insert a new class. On the Insert menu,
	  click New Class. In the New Class dialog box, make sure the Class Type is set
	  to MFC Class.
	
	2. Name the class CFixHtmlView, and then set the Base Class combo-box item to
	  CHtmlView.
	
	3. In the FixHtmlView.h file, add the following code to the class:
	
	  class CFixHtmlView : public CHtmlView
	  {
	  //new code
	  // Operations
	  public:
	      CString GetFullName() const;
	      CString GetType() const;
	      CString GetLocationName() const;
	      CString GetLocationURL() const;
	
	      void Navigate(LPCTSTR lpszURL, DWORD dwFlags = 0 ,  
	                    LPCTSTR lpszTargetFrameName = NULL ,  
	                    LPCTSTR lpszHeaders = NULL, LPVOID lpvPostData = NULL,  
	                    DWORD dwPostDataLen = 0);
	
	  //Add the following functions. This action prevents the leak because the 
	  //CHtmlView versions of LoadFromResource() call CHtmlView::Navigate().
	  //These need to be defined because CHtmlView::Navigate() is not virtual.
	      BOOL LoadFromResource(LPCTSTR lpszResource);
	      BOOL LoadFromResource(UINT nRes);
	  //end new code
	
	4. In the FixHtmlView.cpp file, add the following code:
	
	  //new code
	  CString CFixHtmlView::GetFullName() const
	  {
	      ASSERT(m_pBrowserApp != NULL);
	
	      BSTR bstr;
	      m_pBrowserApp->get_FullName(&bstr);
	      CString retVal(bstr);
	
	      SysFreeString(bstr); // Added this line to prevent leak.
	      return retVal;
	  }
	
	  CString CFixHtmlView::GetType() const
	  {
	      ASSERT(m_pBrowserApp != NULL);
	
	      BSTR bstr;
	      m_pBrowserApp->get_Type(&bstr);
	
	      CString retVal(bstr);
	
	      SysFreeString(bstr); // Added this line to prevent leak.
	      return retVal;
	  }
	
	  CString CFixHtmlView::GetLocationName() const
	  {
	      ASSERT(m_pBrowserApp != NULL);
	
	      BSTR bstr;
	      m_pBrowserApp->get_LocationName(&bstr);
	      CString retVal(bstr);
	
	      SysFreeString(bstr); // Added this line to prevent leak.
	      return retVal;
	  }
	   
	  CString CFixHtmlView::GetLocationURL() const
	  {
	      ASSERT(m_pBrowserApp != NULL);
	
	      BSTR bstr;
	      m_pBrowserApp->get_LocationURL(&bstr);
	      CString retVal(bstr);
	
	      SysFreeString(bstr); // Added this line to prevent leak.
	      return retVal;
	  }
	
	  void CFixHtmlView::Navigate(LPCTSTR lpszURL, DWORD dwFlags /* = 0 */,
	  	LPCTSTR lpszTargetFrameName /* = NULL */ ,
	  	LPCTSTR lpszHeaders /* = NULL */, LPVOID lpvPostData /* = NULL */,
	  	DWORD dwPostDataLen /* = 0 */)
	  {
	      CString strURL(lpszURL);
	      BSTR bstrURL = strURL.AllocSysString();
	
	      COleSafeArray vPostData;
	      if (lpvPostData != NULL)
	      {
	         if (dwPostDataLen == 0)
	            dwPostDataLen = lstrlen((LPCTSTR) lpvPostData);
	
	         vPostData.CreateOneDim(VT_UI1, dwPostDataLen, lpvPostData);
	      }
	
	      m_pBrowserApp->Navigate(bstrURL, COleVariant((long) dwFlags, VT_I4), COleVariant(lpszTargetFrameName, VT_BSTR), 
	                              vPostData, COleVariant(lpszHeaders, VT_BSTR));
	
	      SysFreeString(bstrURL); // Added this line to prevent leak.
	  }
	
	  BOOL CFixHtmlView::LoadFromResource(LPCTSTR lpszResource)
	  {
	      HINSTANCE hInstance = AfxGetResourceHandle();
	      ASSERT(hInstance != NULL);
	
	      CString strResourceURL;
	      BOOL bRetVal = TRUE;
	      LPTSTR lpszModule = new TCHAR[_MAX_PATH];
	
	      if (GetModuleFileName(hInstance, lpszModule, _MAX_PATH))
	      {
	         strResourceURL.Format(_T("res://%s/%s"), lpszModule, lpszResource);
	         Navigate(strResourceURL, 0, 0, 0);
	      }
	      else
	         bRetVal = FALSE;
	
	      delete [] lpszModule;
	      return bRetVal;
	  }
	
	  BOOL CFixHtmlView::LoadFromResource(UINT nRes)
	  {
	      HINSTANCE hInstance = AfxGetResourceHandle();
	      ASSERT(hInstance != NULL);
	
	      CString strResourceURL;
	      BOOL bRetVal = TRUE;
	      LPTSTR lpszModule = new TCHAR[_MAX_PATH];
	
	      if (GetModuleFileName(hInstance, lpszModule, _MAX_PATH))
	      {
	         strResourceURL.Format(_T("res://%s/%d"), lpszModule, nRes);
	         Navigate(strResourceURL, 0, 0, 0);
	      }
	      else
	         bRetVal = FALSE;
	
	      delete [] lpszModule;
	      return bRetVal;
	  }
	  //end new code
	
	5. In each of the CHtmlView-derived classes' header and source files, change all
	  the code that refers to CHtmlView to CFixHtmlView. To assist with this task,
	  on the Edit menu, click Replace.
	
	6. Be sure to add the following line of code in each of the CHtmlView-derived
	  classes' header files before the class declaration:
	
	  #include "FixHtmlView.h" //Add me before the class declaration.
	
	  class CMyHtmlView : public CFixHtmlView
	  {
	  //class body
	  };
	
	7. Rebuild the project.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new MFC SDI Application using AppWizard. Name it TestLeak1.
	
	2. On Page 1 of AppWizard, change the Base class from CView to CHtmlView, and
	  then click Finish.
	
	3. Click the ResourceView tab and add a new menu item for the menu resource
	  IDR_MAINFRAME. Add the item under the Help menu and change the caption to
	  Test.
	
	4. Use Class Wizard to add a COMMAND handler for the new menu item ID_HELP_TEST.
	  Make sure that the class that handles the item is your CTestLeak1View class.
	
	5. Add the following code to the handler:
	
	  void CTestLeak1View::OnHelpTest() 
	  {
	     for (int i = 0; i < 10000; i++)
	     {
	        CString str = GetFullName(); //add me
	     }	
	  }
	
	6. Build the project.
	
	Under Windows NT, run Task Manager and click the Performance tab. Run the
	TestLeak1 application. On the Help menu, click Test. Note that you will see the
	MEM Usage meter increase each time you click Test on the Help menu.
	
	Additional query words: leak BSTR SysAllocString AllocSysString SysFreeString CComBSTR _bstr_t HTML IE
	
	======================================================================
	Keywords          : kbInternet kbMFC kbVC600bug kbVS600bug kbDSupport kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:6.0
	Issue type        : kbbug
	
	=============================================================================
	
