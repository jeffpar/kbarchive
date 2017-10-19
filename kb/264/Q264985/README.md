---
layout: page
title: "Q264985: BUG: C4305 &amp; C4800, When VARIANT&#42; Used as a Parameter to Event"
permalink: /kb/264/Q264985/
---

## Q264985: BUG: C4305 &amp; C4800, When VARIANT&#42; Used as a Parameter to Event

	Article: Q264985
	Product(s): Microsoft C Compiler
	Version(s): 3.0,6.0
	Operating System(s): 
	Keyword(s): kbATL kbCOMt kbConnPts kbVC600bug kbATL300bug kbDSupport kbGrpDSMFCATL
	Last Modified: 02-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- The Microsoft Active Template Library (ATL) 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The ATL Connection Point wizard generates a proxy class that implements a
	connection point for an outgoing interface. If an outgoing interface has an
	event that takes an argument of type [out]VARIANT* or [out]long*, the wizard
	generates incorrect code in the outgoing call (Fire_ method) for that event. The
	Visual C++ compiler gives the following two warnings when you call this Fire_
	method in your code:
	
	  warning C4305: 'argument' : truncation from 'struct tagVARIANT *' to 'bool'
	
	  warning C4800: 'struct tagVARIANT *' : forcing value to bool 'true' or
	  'false' (performance warning)
	
	  warning C4305: 'argument' : truncation from 'long *' to 'bool'
	
	  warning C4800: 'long *' : forcing value to bool 'true' or 'false'
	  (performance warning)
	
	CAUSE
	=====
	
	When you use the Connection Point Wizard, incorrect code is generated in the
	Fire_ method for the event that takes [out]VARIANT* or [out]long* as a
	parameter. For Event1, with VARIANT* and long* parameters pVar and pLongVal, it
	generates the following code in the Fire_Event1 method of the proxy class:
	
	  pvars[0] = pVar;
	  pvars[1] = pLongVal;
	
	You receive this error because ATL-generated code directly assigns a VARIANT* and
	a long* to a CComVariant type. Therefore, the compiler assumes that a
	CComVariant overloaded operator for these data types is defined; when the
	compiler does not find one, it considers these values as Boolean and the warning
	is generated.
	
	RESOLUTION
	==========
	
	The following are two workarounds for this problem:
	
	- Change the wizard-generated code from the following
	
	  pvars[0] = pVar;
	  pvars[1] = pLongVal;
	
	  to the following:
	
	  pvars[0].vt = VT_BYREF|VT_VARIANT;
	  pvars[0].pvarVal = pVar;
	  pvars[1].vt = VT_BYREF|VT_I4;
	  pvars[1].plVal = pLongVal;
	
	  The drawback of this approach is that every time that you add a method to your
	  connection point interface and ask the wizard to implement the connection
	  points, the earlier changes that you made will be overwritten and you will
	  lose your changes. Make sure you back up your changes before allowing the
	  wizard to implement the interface.
	
	- Modify the CComVariant class in the AtlBase.h file, and provide overloaded
	  "=" operators for VARIANT* and long*. A sample implementation might resemble
	  the following:
	
	  CComVariant& operator=(long* nSrc)
	  {
	     if (vt != VT_I4)
	     {
	       InternalClear();
	       vt = VT_BYREF|VT_I4;
	     }
	     plVal = nSrc;
	     return *this;
	  }
	
	  CComVariant& operator=(const VARIANT* nSrc)
	  {
	     InternalCopy(nSrc);
	     return *this;
	  }
	
	  Make these modifications to a copy of the AtlBase.h file (for instance,
	  FixAtlBase.h). Then, in Stdafx.h, comment out AtlBase.h and use FixAtlBase.h
	  instead, as follows:
	
	         // #include <atlbase.h>
	         #include "FixAtlBase.h" 
	
	  This technique works only in Debug or ReleaseMinDependency builds. This
	  technique does not work in ReleaseMinSize builds because the ATL.dll file is
	  used, not the code in FixAtlBase.h.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new ATL DLL/EXE project.
	
	2. Insert a simple object with connection point support.
	
	3. Add a method named Event1 to the source(event) interface that takes a
	  VARIANT* and long* as [out] parameters.
	
	4. Compile the project.
	
	5. Right-click the ATL class and click Implement Connection Point to start the
	  Connection Point Wizard.
	
	6. Select the event interface, and then click OK.
	
	7. Create a test method on the ATL object's incoming interface with VARIANT as a
	  parameter, and call it "Fire_Event1".
	
	  STDMETHODIMP CTestQ::Test(VARIANT* pVar, long* pLong)
	  {
	  	Fire_Event1(pVar,pLong);
	  	return S_OK;
	  }
	
	8. Compile your application to see the warnings C4305 and C4800.
	
	REFERENCES
	==========
	
	For more information, see the "Adding Connection Points to an ATL Object" topic
	on the Microsoft Developer Network (MSDN) Web site:
	
	  http://msdn.microsoft.com/library/devprods/vs6/visualc/vcmfc/_atl_adding_connection_points_to_an_object.htm
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q250847 ATL Connection Point Wizard Generated Code for Event with VARIANT
	  Argument Gives C4305 Warning
	
	Additional query words: event VARIANT C4305 C4800
	
	======================================================================
	Keywords          : kbATL kbCOMt kbConnPts kbVC600bug kbATL300bug kbDSupport kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbATLsearch kbATL300 kbVC600 kbVC32bitSearch
	Version           : :3.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
