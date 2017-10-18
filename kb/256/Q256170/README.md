---
layout: page
title: "Q256170: BUG: C2065 When You Build ATL COM Server with Connection Points"
permalink: kb/256/Q256170/
---

## Q256170: BUG: C2065 When You Build ATL COM Server with Connection Points

	Article: Q256170
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbATL kbConnPts kbVC600 kbVC600bug kbATL300 kbATL300bug kbDSupport kbGrpDSMFCATL
	Last Modified: 28-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Active Template Library (ATL) 3.0, included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you compile an Active Template Library (ATL) COM server project with
	connection point support, you may receive the following error messages:
	
	  testobj.h(76) : error C2065: 'IID__ITestObjEvents' : undeclared identifier
	
	  testobj.h(76) : error C2440: 'static_cast' : cannot convert from 'class
	  CTestObj *' to 'class ATL::_ICPLocator *' Types pointed to are unrelated;
	  conversion requires reinterpret_cast, C-style cast or function-style cast
	
	This problem typically occurs with projects in long directory paths.
	
	CAUSE
	=====
	
	IID__ITestObjEvents is an incorrectly generated interface ID.
	
	RESOLUTION
	==========
	
	Go to the file and line number that are listed in the error message above. In
	the connection point map, change IID__ITestObjEvents to DIID__ITestObjectEvents
	as follows:
	
	  BEGIN_CONNECTION_POINT_MAP(CTestObject)
	        //CONNECTION_POINT_ENTRY(IID__TestObjectEvents)
	        CONNECTION_POINT_ENTRY(DIID__ITestObjectEvents)
	  END_CONNECTION_POINT_MAP()
	
	STATUS
	======
	
	Microsoft has confirmed that this is a bug in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	To reproduce this bug, perform the following steps:
	
	1. Obtain the ATL Tutorial. In the MSDN version that shipped with Microsoft
	  Visual C++ version 6.0 and later, search for "ATL Tutorial". You can also
	  find this tutorial at the following Web site:
	
	  http://msdn.microsoft.com/library/devprods/vs6/visualc/vcmfc/_atl_atl_tutorial.htm
	
	2. Follow the tutorial steps 1, 2, and 5 (you can omit steps 3 and 4) and create
	  an ATL COM server in a long directory path; for instance, "C:\Program
	  Files\Microsoft Visual Studio".
	
	3. Build the application.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbATL kbConnPts kbVC600 kbVC600bug kbATL300 kbATL300bug kbDSupport kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbATLsearch
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
