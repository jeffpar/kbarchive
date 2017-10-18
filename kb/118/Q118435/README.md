---
layout: page
title: "Q118435: INFO: Sharing Menus Between MDI Child Windows"
permalink: kb/118/Q118435/
---

## Q118435: INFO: Sharing Menus Between MDI Child Windows

	Article: Q118435
	Product(s): Microsoft C Compiler
	Version(s): 2.1,2.2
	Operating System(s): 
	Keyword(s): kbnokeyword kbMFC KbUIDesign kbVC100 kbVC150 kbVC152 kbVC200 kbVC210 kbVC220 kbVC400 kb
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 2.1, 2.2, used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 2.2, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The document-template model used in the MFC assumes that each template will have
	its own set of distinct resources that are all identified by the same resource
	ID. However, when dealing with similar MDI child windows, you may want to
	conserve resource space and have MDI child windows share the same menu resource.
	
	MORE INFORMATION
	================
	
	Each CMultiDocTemplate object has a member variable, "m_hMenuShared", that
	stores the handle of the menu to be used for that child window. However, because
	the default CMultiDocTemplate object assumes that it is the only user of this
	member variable, a new class (for example, CSharedDocTemplate) must be derived
	to avoid having the CMultiDocTemplate destructor call DestroyMenu on the shared
	menu handle:
	
	     class CSharedDocTemplate : public CMultiDocTemplate
	     {
	       public:
	         CSharedDocTemplate(UINT nIDResource, CRuntimeClass* pDocClass,
	             CRuntimeClass* pFrameClass, CRuntimeClass* pViewClass);
	
	         virtual ~CSharedDocTemplate();
	     };
	
	     CSharedDocTemplate::CSharedDocTemplate(UINT nIDResource,
	       CRuntimeClass* pDocClass, CRuntimeClass* pFrameClass,
	       CRuntimeClass* pViewClass) : CMultiDocTemplate(nIDResource, pDocClass,
	                                      pFrameClass, pViewClass)
	     {
	     }
	
	     CSharedDocTemplate::~CSharedDocTemplate()
	     {
	       // This prevents the base class virtual destructor from
	       // destroying the menu resource (i.e. its checks to make
	       // sure the handle isn't NULL)
	
	       m_hMenuShared = NULL;
	     }
	
	At this point, declare a public member variable to hold the common menu for the
	application; the CWinApp-derived object will take the responsibility of loading
	and destroying the common menu.
	
	     class CMyApp : public CWinApp
	     {
	     public:
	        HMENU m_ghMenuShared;
	
	        //...
	     };
	
	Now, after the CSharedDocTemplate object has been created, you need to set its
	public member variable to the common menu resouce for the application. The
	following code fragments demonstrate how to set the handle for a single template
	or traverse the template list and set the common handle for all
	CSharedDocTemplate objects. Either of these code fragments could be used in the
	InitInstance of the CWinApp-derived object:
	
	     BOOL CMyApp::InitInstance()
	     {
	        ...
	
	        // New member of CWinApp derived class to store menu handle
	        m_ghMenuShared = ::LoadMenu(m_hInstance,
	           MAKEINTRESOURCE(IDR_SHAREDMENU));
	
	        CSharedDocTemplate* pDocTemplate;
	        pDocTemplate = new CSharedDocTemplate(
	                           IDR_MYTYPE,  // No menu resource should exist for
	                                        // this ID, the menu is set manually
	                           RUNTIME_CLASS(CMDIMyDoc),
	                           RUNTIME_CLASS(CMDIChildWnd),
	                           RUNTIME_CLASS(CMDIMyView));
	        pDocTemplate->m_hMenuShared = m_ghMenuShared;
	        AddDocTemplate(pDocTemplate);
	
	        ...
	     }
	
	-or-
	
	     BOOL CMyApp::InitInstance()
	     {
	        ...
	
	        m_ghMenuShared = ::LoadMenu(m_hInstance,
	           MAKEINTRESOURCE(IDR_SHAREDMENU));
	
	        if (!m_templateList.IsEmpty())
	        {
	           CDocTemplate *pDocTemplate;
	
	           for (POSITION rPos = m_templateList.GetHeadPosition();
	              rPos != NULL;)
	           {
	              pDocTemplate = m_templateList.GetNext(rPos);
	              if (pDocTemplate->IsKindOf(RUNTIME_CLASS(CSharedDocTemplate)))
	                 ((CSharedDocTemplate *)pDocTemplate)->m_hMenuShared =
	                                                       m_ghMenuShared;
	           }
	        }
	
	        ...
	     }
	
	Lastly, you need to destroy the menu resource loaded in InitInstance. This can
	easily be accomplished by overriding the ExitInstance member of the
	CWinApp-derived class:
	
	     int CMyApp::ExitInstance()
	     {
	        ::DestroyMenu(m_ghMenuShared);
	     }
	
	Additional query words: kbinf 1.00 1.50 2.00 2.10 2.50 3.00 4.00
	
	======================================================================
	Keywords          : kbnokeyword kbMFC KbUIDesign kbVC100 kbVC150 kbVC152 kbVC200 kbVC210 kbVC220 kbVC400 kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbVC32bitSearch
	Version           : :2.1,2.2
	Issue type        : kbinfo
	
	=============================================================================
	
