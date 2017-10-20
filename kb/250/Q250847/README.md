---
layout: page
title: "Q250847: BUG: ATL C4305 Error when VARIANT Used as a Parameter to Event"
permalink: /kb/250/Q250847/
---

## Q250847: BUG: ATL C4305 Error when VARIANT Used as a Parameter to Event

{% raw %}

	Article: Q250847
	Product(s): Microsoft C Compiler
	Version(s): winnt:6.0
	Operating System(s): 
	Keyword(s): kbATL kbCOMt kbConnPts kbVC600bug kbATL300bug kbDSupport kbGrpDSMFCATL
	Last Modified: 26-JUN-2001
	
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
	connection point for an out going interface. If an out going interface has an
	event that takes an argument of type VARIANT, then the wizard generates the
	wrong code in the out going call (Fire method) for that event. The Visual C++
	compiler gives these two warnings when you call this fire method in your code
	
	  warning C4305: 'argument' : truncation from 'struct tagVARIANT *' to 'bool'
	
	  warning C4800: 'struct tagVARIANT *' : forcing value to bool 'true' or
	  'false' (performance warning)
	
	CAUSE
	=====
	
	Implementing the Connection Point wizard generates the wrong code in the Fire_
	method for the event that takes VARIANT as parameter. For Event1, with VARIANT
	parameter Param1, it generates this code
	
	  pVars[0] = &Param1;
	
	instead of this
	
	  pVars[0] = Param1;
	
	in Fire_Event1 method of the proxy class.
	
	RESOLUTION
	==========
	
	To work around this problem manually remove the "&" before the Param1.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new ATL DLL/EXE project.
	
	2. Insert a simple object with Connection Point support.
	
	3. Add a method named Event1 to source(event) interface that takes a VARIANT as
	  parameter
	
	4. Compile the project.
	
	5. Right-click the ATL class and click Implement Connection Point to bring up
	  the Connection Point wizard.
	
	6. Select the event interface and click OK.
	
	7. Create a test method on the ATL object's incoming interface with VARIANT as a
	  parameter and call it "Fire_Event1".
	
	  STDMETHODIMP CTestQ::Test(VARIANT var)
	  {
	  	Fire_Event1(var);
	  	return S_OK;
	  }
	
	8. Compile your application to see the warnings C4305 and C4800.
	
	REFERENCES
	==========
	
	Adding Connection Points to an ATL Object
	
	(c) Microsoft Corporation 2000, All Rights Reserved.
	Contributions by Sreedhar Pelluru, Microsoft Corporation
	
	
	Additional query words: event VARIANT C4305 C4800
	
	======================================================================
	Keywords          : kbATL kbCOMt kbConnPts kbVC600bug kbATL300bug kbDSupport kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbATLsearch kbATL300 kbVC32bitSearch kbVCPE600 kbVCEE600 kbVCLE600
	Version           : winnt:6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
