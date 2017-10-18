---
layout: page
title: "Q264458: BUG: ATL Object Wizard Misses &quot;Ready State&quot; Stock Property"
permalink: kb/264/Q264458/
---

## Q264458: BUG: ATL Object Wizard Misses &quot;Ready State&quot; Stock Property

	Article: Q264458
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbwizard kbATL kbATL300bug kbDSupport kbGrpDSMFCATL
	Last Modified: 28-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Active Template Library (ATL) 3.0, included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0sp3 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0sp3 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0sp3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Microsoft Visual C++ 6.0 ATL Object wizard to create a Full
	control, the Ready State property is not listed on the Stock Properties tab.
	
	RESOLUTION
	==========
	
	To manually add the ReadyState property to the control, perform the following
	steps:
	
	1. Add the following code to the interface definition in the control's Interface
	  Definition Language (IDL) file:
	
	  interface IMyControl : IDispatch
	  {
	  ...
	     [propput, id(DISPID_READYSTATE)]
	     HRESULT ReadyState([in]long state);
	     [propget, id(DISPID_READYSTATE)]
	     HRESULT ReadyState([out, retval]long* pstate);
	  ...
	  };
	
	2. Add the following code to the BEGIN_PROP_MAP definition in the control's
	  header (.h) file:
	
	  BEGIN_PROP_MAP(CMyControl)
	  ...
	     PROP_ENTRY("ReadyState", DISPID_READYSTATE, CLSID_NULL)
	  ...
	  END_PROP_MAP()
	
	3. Add the following member variable to the control class definition in the
	  control's header (.h) file:
	
	  LONG m_nReadyState;
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	(c) Microsoft Corporation 2000, All Rights Reserved.
	Contributions by S. Ganesh, Microsoft Corporation
	
	
	Additional query words: readystate, "stock property"
	
	======================================================================
	Keywords          : kbwizard kbATL kbATL300bug kbDSupport kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbATLsearch
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	
	=============================================================================
	
