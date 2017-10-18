---
layout: page
title: "Q214731: PRB: AppWizard Bug when Altering ActiveDoc Child Window Styles"
permalink: kb/214/Q214731/
---

## Q214731: PRB: AppWizard Bug when Altering ActiveDoc Child Window Styles

	Article: Q214731
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbole kbActiveDocs kbActiveX kbCOMt kbMFC kbVC500 kbVC600 kbGrpDSMFCATL
	Last Modified: 13-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When creating an MDI Active Document Server using the AppWizard if any of the
	Child Frame window styles are adjusted (using the Advanced button in the wizard)
	a set of style flags will be generated for the CChildFrame class which includes
	the WS_VISIBLE flag. This causes problems when documents created by this
	application are loaded in an Active Document Container, such as Internet
	Explorer. If the ActiveDoc Server application is running when one of its
	documents is loaded into a container, such as Internet Explorer, the loaded
	document will also be visible in the server application. Otherwise, if the
	server application is not running and a document is loaded into a container, the
	server application will continue as a process after the document, or even the
	container, is unloaded.
	
	CAUSE
	=====
	
	The cause is the WS_VISIBLE flag addition to the Child Frame. Active Document
	Server child windows should not have this flag because their visibility is
	controlled by the manner in which they are instantiated.
	
	RESOLUTION
	==========
	
	Remove the WS_VISIBLE flag from the style group in
	CChildFrame::PreCreateWindow().
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information when it
	becomes available
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Use the AppWizard to create an MDI application.
	
	2. In step 3 of the AppWizard specify Both Container and Server and select
	  Active Document Server.
	
	3. In step 4 of the AppWizard click Advanced and then click the Window Styles
	  tab.
	
	4. Change any of the MDI child frame styles.
	
	5. Be sure to provide a file extension on the Document Template Strings tab.
	
	6. Complete the AppWizard and compile the application.
	
	7. Save a document from the application.
	
	Following are the two primary scenarios in which an error will occur once the
	application has been generated and a document created:
	
	- Run the application and keep it running. Start Internet Explorer 4 and load a
	  document saved by the application. The document will load in Internet
	  Explorer, but will also be displayed in the ActiveDoc Server application. In
	  addition, there is no way to activate the application while the document is
	  displayed in Internet Explorer unless Internet Explorer is minimized. Even
	  then, the situation is unstable because closing the document will cause an
	  error.
	
	- Do not run the application. Start Internet Explorer 4 and load a document
	  saved by the application. After closing the document, or even after closing
	  Internet Explorer, the ActiveDoc Server is still running as a process.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbole kbActiveDocs kbActiveX kbCOMt kbMFC kbVC500 kbVC600 kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : :5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
