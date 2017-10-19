---
layout: page
title: "Q251344: BUG: CComBSTR::LoadString May Give an Access Violation"
permalink: /kb/251/Q251344/
---

## Q251344: BUG: CComBSTR::LoadString May Give an Access Violation

	Article: Q251344
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:3.0,6.0
	Operating System(s): 
	Keyword(s): kbATL kbCOMt kbMFC kbString kbVC600bug kbATL300bug kbDSupport kbGrpDSMFCATL kbArchitect
	Last Modified: 28-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Active Template Library (ATL) 3.0, included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have used the CComBSTR class in a non-ATL application and used the bool
	CComBSTR::LoadString(UINT nID) function, it might give an access violation.
	
	CAUSE
	=====
	
	The global _pModule variable representing an instance of CComModule expected by
	ATL, is not declared and initialized.
	
	RESOLUTION
	==========
	
	Use the other overloaded version of LoadString that takes HINSTANCE as a
	parameter
	
	  bool CComBSTR::LoadString(HINSTANCE hInst, UINT nID)
	
	and pass the HINSTANCE of the current module or the module wherever the string
	resource is defined.
	
	Or, add ATL support to this project. In order to add ATL support, from the Insert
	menu, click New ATL Object. You are then asked if you want to add ATL support to
	this project; click Yes. As a result, the ATL Object Wizard is opened. Cancel
	that option if you do not want to add an ATL object to your project.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Generate a new MFC AppWizard SDI application.
	
	2. Go to ResourceView and add a new string entry to the String Table resource
	  and call it IDS_TESTSTRING.
	
	3. Go to CYourApp::InitInstance and add the following code:
	
	  CComBSTR bstrTemp;
	  bstrTemp.LoadString(IDS_TESTSTRING);
	
	4. Also add #include AtlBase.h to the .cpp file containing the above code for
	  InitInstance.
	
	5. Build and run it. You receive the access violation.
	
	REFERENCES
	==========
	
	- Q175190 HOWTO: Add ATL Support to an MFC EXE
	
	- CComModule
	
	- CComBSTR
	
	Additional query words: CString stringtable unexpected MFC
	
	======================================================================
	Keywords          : kbATL kbCOMt kbMFC kbString kbVC600bug kbATL300bug kbDSupport kbGrpDSMFCATL kbArchitecture 
	Technology        : kbVCsearch kbAudDeveloper kbATLsearch
	Version           : WINDOWS:3.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
