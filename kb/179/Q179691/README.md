---
layout: page
title: "Q179691: PRB: Adding Property in ClassWizard Changes DISPIDs for Methods"
permalink: /kb/179/Q179691/
---

## Q179691: PRB: Adding Property in ClassWizard Changes DISPIDs for Methods

	Article: Q179691
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbwizard kbMFC kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 kbGrpDSTools
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The ClassWizard, used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When adding properties through ClassWizard to existing Automation objects, the
	dispatch identifiers (DISPIDs) of any methods will change.
	
	Although changing DISPIDs does not usually cause a problem when originally
	building an Automation server, it can cause incompatibility problems when
	updating existing Automation objects. Automation clients that were built using
	early binding will no longer work with the updated server.
	
	CAUSE
	=====
	
	ClassWizard adds properties to MFC's "dispatch map" before methods. Because, by
	default, DISPIDs are assigned to interfaces based on the order in which they are
	added to the map, adding a property changes the IDs of all the existing methods.
	
	RESOLUTION
	==========
	
	Add properties and methods to the dispatch map and the .odl file without using
	ClassWizard.
	
	You should add these additional properties outside the ClassWizard comments at
	the end of the dispatch map.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	There are several MFC dispatch DISP_XXXX_ID macros that allow you to specify a
	specific DISPID:
	
	  DISP_FUNCTION_ID()
	  DISP_PROPERTY_ID()
	  DISP_PROPERTY_NOTIFY_ID()
	  DISP_PROPERTY_EX_ID()
	  DISP_PROPERTY_PARAM_ID()
	
	These macros can be useful in maintaining existing DISPID numbering.
	
	Here is an sample dispatch map from a sample control:
	
	  //////////////////////////////////////////////////////////////////////// 
	     // Dispatch map:
	     BEGIN_DISPATCH_MAP(CTestCtrl, COleControl)
	        //{ {AFX_DISPATCH_MAP(CTestCtrl)
	        DISP_PROPERTY_NOTIFY(CTestCtrl, "Property1", m_property1,
	                             OnProperty1Changed, VT_I2)
	        DISP_PROPERTY_EX(CTestCtrl, "Property2", GetProperty2,
	                         SetProperty2, VT_I2)
	        DISP_FUNCTION(CTestCtrl, "Method1", Method1, VT_I2, VTS_I2)
	        DISP_FUNCTION(CTestCtrl, "Method2", Method2, VT_I4, VTS_NONE)
	        //} }AFX_DISPATCH_MAP
	        DISP_FUNCTION_ID(CTestCtrl, "AboutBox", DISPID_ABOUTBOX,
	                        AboutBox, VT_EMPTY, VTS_NONE)
	     END_DISPATCH_MAP()
	
	Here is the same dispatch map using the DISP_XXX_ID macros to specify specific
	DISPIDs:
	
	  //////////////////////////////////////////////////////////////////////// 
	     // Dispatch map:
	     BEGIN_DISPATCH_MAP(CTestCtrl, COleControl)
	        //{ {AFX_DISPATCH_MAP(CTestCtrl)
	        //} }AFX_DISPATCH_MAP
	        DISP_PROPERTY_NOTIFY_ID(CTestCtrl, "Property1", 1,
	                                m_property1, OnProperty1Changed, VT_I2)
	        DISP_PROPERTY_EX_ID(CTestCtrl, "Property2", 2, GetProperty2,
	                            SetProperty2, VT_I2)
	        DISP_FUNCTION_ID(CTestCtrl, "Method1", 3, Method1, VT_I2, VTS_I2)
	        DISP_FUNCTION_ID(CTestCtrl, "Method2", 4, Method2, VT_I4, VTS_NONE)
	        DISP_FUNCTION_ID(CTestCtrl, "AboutBox", DISPID_ABOUTBOX, AboutBox,
	                         VT_EMPTY, VTS_NONE)
	     END_DISPATCH_MAP()
	
	REFERENCES
	==========
	
	For more information on MFC dispatch macros and how MFC assigns DISPIDs, see MFC
	TechNote TN039 in the Visual C++ Documentation.
	
	(c) Microsoft Corporation 1997, All Rights Reserved. Contributions by Kelly Marie
	Ward, Microsoft Corporation.
	
	Additional query words: dispinterface Idispatch
	
	======================================================================
	Keywords          : kbcode kbwizard kbMFC kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 kbGrpDSTools 
	Technology        : kbVCsearch kbAudDeveloper kbClassWizard
	Version           : winnt:4.0,4.1,4.2,5.0,6.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
