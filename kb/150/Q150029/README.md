---
layout: page
title: "Q150029: INFO: OLE Control Containers Must Call AfxEnableControlContainer"
permalink: /kb/150/Q150029/
---

## Q150029: INFO: OLE Control Containers Must Call AfxEnableControlContainer

{% raw %}

	Article: Q150029
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbCOMt kbContainer kbCtrl kbMFC kbVC400 kbVC500 kbVC600 kbGrpDSMFCATL
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Using Visual C++ version 4.0, it is possible to construct OLE Control
	Containers. These containers must call AfxEnableControlContainer() in their
	CWinApp::InitInstance(). This call is added automatically if OLE Controls
	support is checked in AppWizard Step 3, but in some cases, this call must be
	added manually. This article explains why you need to call
	AfxEnableControlContainer() and the possible problems that might occur if this
	call is not made.
	
	MORE INFORMATION
	================
	
	AfxEnableControlContainer() is responsible for wiring up the support structure
	necessary for a CWnd object to contain an OLE Control. This call is added to a
	project by AppWizard if OLE Controls support is selected. You need to add this
	call manually in the following cases:
	
	- You are adding control container support to an existing project.
	
	-or-
	
	- The object that will contain the OLE controls is not created directly by
	  AppWizard, such as an OLE Control.
	
	For example, if you are dynamically creating an OLE Control as a child of another
	OLE Control, the parent control must call AfxEnableControlContainer() in its
	constructor.
	
	The following list outlines some of the most common problems (others are
	possible) that can occur if AfxEnableControlContainer() is not called:
	
	- In many cases, you might receive the following TRACE messages in the Output
	  Window of the debugger:
	
	     >>> If this dialog has OLE controls:
	     >>> AfxEnableControlContainer has not been called yet.
	     >>> You should call it in your app's InitInstance function.
	
	- In other cases, you might encounter the following ASSERT in file Cmdtarg.cpp,
	  line 218:
	
	     ASSERT(afxOccManager != NULL);
	
	- If you place a Masked Edit or some other OLE control on a CFormView and then
	  run the application, you might see a message box indicating:
	
	  Failed to create empty document.
	
	Additional query words: kbvc410 kbvc400 kbvc500 kbvc600
	
	======================================================================
	Keywords          : kbCOMt kbContainer kbCtrl kbMFC kbVC400 kbVC500 kbVC600 kbGrpDSMFCATL 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC420 kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : winnt:4.0,4.1,4.2,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
