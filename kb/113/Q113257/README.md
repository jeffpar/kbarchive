---
layout: page
title: "Q113257: HOWTO: Create New Documents Without CWinApp::OnFileNew"
permalink: /kb/113/Q113257/
---

## Q113257: HOWTO: Create New Documents Without CWinApp::OnFileNew

{% raw %}

	Article: Q113257
	Product(s): Microsoft C Compiler
	Version(s): winnt:1.0,2.0,2.1,4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbDocView kbMFC kbVC kbGrpDSMFCATL
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It is sometimes desirable to create a CMultiDocTemplate based window (in other
	words, a CFrame/CDocument/CView combination) without using the mechanism
	provided by CWinApp::OnFileNew.
	
	For example, if the program has multiple document templates, CWinApp::OnFileNew
	will prompt the user with a dialog box asking which type of document to open.
	The programmer may already know which type of CMultiDocTemplate to use, and
	therefore may not want to prompt the user because it would be inappropriate in
	the given context of the application.
	
	MORE INFORMATION
	================
	
	Assuming the application was originally created with AppWizard, the undocumented
	CMultiDocTemplate::OpenDocumentFile function can be used to create a new
	CMultiDocTemplate based window. There are several steps involved:
	
	1. Add a CMultiDocTemplate pointer to your CWinApp derived class:
	
	        class CMyApp : public CWinApp
	        {
	          ...
	
	         public:
	          CMultiDocTemplate* m_pDocTemplate;
	
	          ...
	
	        }
	
	  NOTE: If you plan to use multiple document types, you must create a
	  CMultiDocTemplate pointer member variable for each document type.
	
	2. In the call to CWinApp::InitInstance, remove the creation of the
	  CMultiDocTemplate from the call to AddDocTemplate. Set the pointer to point
	  to the new CMultiDocTemplate. Use the pointer to call AddDocTemplate:
	
	        BOOL CMyApp::InitInstance()
	        {
	          ...
	
	          m_pDocTemplate = new CMultiDocTemplate(IDR_TEXTTYPE,
	                                        RUNTIME_CLASS(CMyDoc),
	                                        RUNTIME_CLASS(CMDIChildWnd),
	                                        RUNTIME_CLASS(CMyView));
	
	          AddDocTemplate(m_pDocTemplate);
	
	          ...
	
	        }
	
	3. Use the pointer to call CMultiDocTemplate::OpenDocumentFile with a NULL
	  parameter to create the new window. For this example, assume there is a
	  button in a CView window. In the BN_CLICKED handler for the button, we want
	  to create a window based on m_pDocTemplate:
	
	        void CMyView::OnNewWindowButtonClicked()
	        {
	            CMyApp* pApp = (CMyApp*)AfxGetApp();
	            pApp->m_pDocTemplate->OpenDocumentFile(NULL);
	        }
	
	  This same technique could be used to create a CSingleDocTemplate based window
	  in a Single Document Interface (SDI) application. However, it is not
	  necessary. Because there is only one document template for the application,
	  calling OnFileNew() will create the new window without prompting the user for
	  the type of document.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDocView kbMFC kbVC kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:1.0,2.0,2.1,4.0,4.1,4.2,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
