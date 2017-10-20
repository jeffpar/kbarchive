---
layout: page
title: "Q140591: HOWTO: Display an MFC Automation Document Automatically"
permalink: /kb/140/Q140591/
---

## Q140591: HOWTO: Display an MFC Automation Document Automatically

{% raw %}

	Article: Q140591
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.0,2.1,2.2,4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbActiveX kbAutomation kbCOMt kbExcel kbMFC kbVC200 kbVC400 kbVC500 kbVC600 kbGrpDSMFCA
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 2.2, 4.0, 4.1 
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
	
	Some OLE Automation servers, such as Microsoft Excel, automatically display a
	worksheet when it is created through OLE Automation. OLE Automation servers
	implemented in MFC do not display the document window by default when the
	document object is created through OLE Automation. This article explains how to
	add this behavior to a generic MFC OLE Automation server created using
	AppWizard.
	
	MORE INFORMATION
	================
	
	The creation process for a document object created through OLE Automation
	slightly differs from the process involved when the server's File.New menu item
	is used. The document object is created using a class factory, which is
	represented by the application object's COleTemplateServer data member
	(m_server).
	
	When a new document object is created through OLE Automation,
	COleTemplateServer::OnCreateObject() is called, which calls
	CDocTemplate::OpenDocumentFile with the last parameter set to FALSE to create an
	invisible document window. By replacing this call to
	CDocTemplate::OpenDocumentFile() with the last parameter set to TRUE, a visible
	document window will be created.
	
	Additionally, the code in the application's InitInstance(), which checks if the
	server is running embedded or automated, should be removed. The main window of
	the application will not be displayed if this code isn't removed and the server
	isn't already running.
	
	Step-by-Step Procedure
	----------------------
	
	The following steps illustrate how to add this behavior to a generic MFC OLE
	Automation server created using AppWizard:
	
	1. Using AppWizard, create an SDI or MDI application called MyApp with OLE
	  Automation support.
	
	2. Add the following class definition before the project's CWinApp-derived
	  class's definition in the application object's header file (MyApp.h).
	
	     // CMyTemplateServer used to override OnCreateObject.
	     class CMyTemplateServer : public COleTemplateServer
	     {
	        // Constructors / Destructors
	        public:
	        CMyTemplateServer(){}
	        virtual ~CMyTemplateServer(){}
	
	        // Overrides
	        virtual CCmdTarget* OnCreateObject();
	     };
	
	3. Add the following implementation of OnCreateObject() to the CWinApp- derived
	  class's implementation file (MyApp.cpp).
	
	     // Identical to COleTemplateServer::OnCreateObject() except for
	     // the call to OpenDocumentFile() with the last parameter set to
	     // TRUE instead of FALSE.
	     CCmdTarget* CMyTemplateServer::OnCreateObject()
	     {
	        ASSERT_VALID(this);
	        ASSERT_VALID(m_pDocTemplate);
	
	        // Save application user control status
	        BOOL bUserCtrl = AfxOleGetUserCtrl();
	
	        // Create visible doc/view/frame set
	        CDocument* pDoc;
	        pDoc = m_pDocTemplate->OpenDocumentFile(NULL, TRUE);
	
	        // Restore application's user control status
	        AfxOleSetUserCtrl(bUserCtrl);
	
	        if (pDoc != NULL)
	        {
	           ASSERT_VALID(pDoc);
	           ASSERT_KINDOF(CDocument, pDoc);
	
	           // All new documents created by OLE start out modified
	           pDoc->SetModifiedFlag();
	        }
	        return pDoc;
	     }
	
	4. Change the CWinApp-derived object's m_server member from type
	  COleTemplateServer to CMyTemplateServer. For example:
	
	     class CMyApp : public CWinApp
	     {
	         public:
	         CMyApp();
	
	         // Overrides
	         // ClassWizard generated virtual function overrides
	         // {{AFX_VIRTUAL(CMyApp)
	         public:
	         virtual BOOL InitInstance();
	         // }}AFX_VIRTUAL
	
	         // Implementation
	         CMyTemplateServer m_server; // <== change to derived class
	         ...
	         ...
	      };
	
	5. Modify the check for running embedded or automated from the application's
	  InitInstance() member function. For example, modify the AppWizard provided
	  code to match the following lines from InitInstance():
	
	        // Check to see if launched as OLE server
	        if (cmdInfo.m_bRunEmbedded || cmdInfo.m_bRunAutomated)
	        {
	           // Register all OLE server (factories) as running. This enables
	           // the OLE libraries to create objects from other applications.
	        COleTemplateServer::RegisterAll();
	
	           // Application was run with /Embedding or /Automation. Don't
	           // show the main window in this case.
	           //      return TRUE;
	        } else {
	
	           // When a server application is launched stand-alone, it
	           // is a good idea to update the system registry in case
	           // it has been damaged.
	         m_server.UpdateRegistry(OAT_DISPATCH_OBJECT);
	         COleObjectFactory::UpdateRegistryAll();
	         }
	
	  NOTE: This code is specific to Visual C++ version 4.0; it varies with the
	  earlier versions.
	
	6. Compile the application, and run it stand-alone.
	
	7. Create an OLE Automation client that creates an instance of your document
	  type. Upon creation of the document object, the view should automatically be
	  displayed.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbActiveX kbAutomation kbCOMt kbExcel kbMFC kbVC200 kbVC400 kbVC500 kbVC600 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:2.0,2.1,2.2,4.0,4.1,4.2,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
