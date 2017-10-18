---
layout: page
title: "Q160909: FIX: Binder95 Does Not Show an MFC DocObject Server Icon"
permalink: kb/160/Q160909/
---

## Q160909: FIX: Binder95 Does Not Show an MFC DocObject Server Icon

	Article: Q160909
	Product(s): Microsoft C Compiler
	Version(s): 4.2,5.0
	Operating System(s): 
	Keyword(s): kbole kbActiveDocs kbActiveX kbCOMt kbMFC kbRegistry kbVC420bug kbVC500bug kbVC600fix k
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, version 4.2 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Starting with Visual C++ 4.2, MFC provides support for creating Document Object
	(DocObject) Servers. The Binder application that comes with Microsoft Office '95
	is a DocObject container. When you insert a DocObject server created by Visual
	C++ into the Binder, the defined icon for the document may not show up as
	expected.
	
	CAUSE
	=====
	
	The Binder application that comes with Microsoft Office '95 searches the
	registry for the CLSID of the DocObject server looking for the DefaultExtension
	key. It expects a certain format for this key to successfully display the
	correct icon. The MFC COleTemplateServer::UpdateRegistry() function does not
	register the information in this format.
	
	RESOLUTION
	==========
	
	The resolution involves changing the DefaultExtension key to the format that
	Binder expects after UpdateRegistry() is called. The sample code below
	demonstrates how this can be done. The code that accomplishes this is copied
	almost verbatim from the source code of COleTemplateServer::UpdateRegistry().
	
	STATUS
	======
	
	This problem was corrected in Visual C++ version 6.0 for Windows
	
	MORE INFORMATION
	================
	
	The following shows the difference between the DefaultExtension keys of an
	Office '95 application and an AppWizard generated application:
	
	  Excel Worksheet:
	
	        DefaultExtension = .xls, Excel Workbook (*.xls)
	
	  AppWizard app named 'Test' with .tst extension:
	
	        DefaultExtension = Test, Test Files (*.tst)
	
	If you change the DefaultExtension key of the AppWizard app to read as follows
	
	     DefaultExtension = .tst, Test Files (*.tst)
	
	the Binder will then display the icon defined for the document object.
	
	Sample Code
	-----------
	
	  /* Compile options needed: None
	  */ 
	
	  /* The following code can be added to the InitInstance of the CWinApp
	     derived class right after the call to UpdateRegistry()
	  */ 
	
	     // change the DefaultExtension to work with Binder95.
	     // Get registration info from document template string.
	     CString strServerName;
	     CString strLocalServerName;
	     CString strLocalShortName;
	     CString strLocalFilterName;
	     CString strLocalFilterExt;
	
	     if (!pDocTemplate->GetDocString(strServerName,
	        CDocTemplate::regFileTypeId) || strServerName.IsEmpty())
	        {
	           TRACE0("Error: not enough information in DocTemplate to register"
	                  " OLE server.\n");
	        }
	     if (!pDocTemplate->GetDocString(strLocalServerName,
	        CDocTemplate::regFileTypeName))
	        strLocalServerName = strServerName;     // use non-localized name
	
	     if (!pDocTemplate->GetDocString(strLocalShortName,
	        CDocTemplate::fileNewName))
	        strLocalShortName = strLocalServerName; // use long name
	
	     pDocTemplate->GetDocString(strLocalFilterName,
	        CDocTemplate::filterName);
	     pDocTemplate->GetDocString(strLocalFilterExt, CDocTemplate::filterExt);
	
	     ASSERT(strServerName.Find(' ') == -1);  // no spaces allowed
	
	     // place entries in system registry
	     LPCTSTR Arr[2];
	     CString strDefExt("CLSID\\%1\\DefaultExtension");
	     CString strEntry = strDefExt + (TCHAR)NULL + strLocalFilterExt + ","
	        + strLocalFilterName;
	     Arr[0] = strEntry;
	     Arr[1] = NULL;
	     if (!AfxOleRegisterServerClass(m_server.GetClassID(), strServerName,
	        strLocalShortName, strLocalServerName, OAT_DOC_OBJECT_SERVER,
	        NULL, Arr))
	     {
	        // not fatal (don't fail, just warn)
	        AfxMessageBox(AFX_IDP_FAILED_TO_AUTO_REGISTER);
	     }
	
	Additional query words: DocObject ActiveX
	
	======================================================================
	Keywords          : kbole kbActiveDocs kbActiveX kbCOMt kbMFC kbRegistry kbVC420bug kbVC500bug kbVC600fix kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbVCsearch kbAudDeveloper kbVC420 kbVC500 kbVC32bitSearch kbVC500Search
	Version           : :4.2,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
