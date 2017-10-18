---
layout: page
title: "Q166769: PRB: MFC ActiveX Document Servers Require Compound File Support"
permalink: kb/166/Q166769/
---

## Q166769: PRB: MFC ActiveX Document Servers Require Compound File Support

	Article: Q166769
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.2,4.2b,5.0,6.0
	Operating System(s): 
	Keyword(s): kbole kbActiveDocs kbActiveX kbAutomation kbCOMt kbLocalSvr kbMFC kbVC420 kbVC500 kbVC6
	Last Modified: 04-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2b 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2b 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you save an ActiveX Document that does not use compound files from Internet
	Explorer functioning as an ActiveX Document Container, the file will be saved in
	compound document format. Subsequent attempts to load the file in Internet
	Explorer results in the exception "Unexpected File Format."
	
	Microsoft Binder will not load the document.
	
	CAUSE
	=====
	
	The MFC ActiveX Document Server classes normally require compound file support.
	
	RESOLUTION
	==========
	
	Add a call to EnableCompoundFile(TRUE) in the document constructor:
	
	     CScribDoc::CScribDoc()
	     {
	          // ...
	          EnableCompoundFile(TRUE);
	     }
	
	MORE INFORMATION
	================
	
	Creating a new ActiveX Document server or regular OLE embedding server in
	AppWizard selects compound file support by default. The assertion problem occurs
	if compound file support was deselected when the project was initially created.
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Jason Strayer, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbole kbActiveDocs kbActiveX kbAutomation kbCOMt kbLocalSvr kbMFC kbVC420 kbVC500 kbVC600 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.2,4.2b,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
