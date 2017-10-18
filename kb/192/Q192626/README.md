---
layout: page
title: "Q192626: FIX: Adding Method to Custom Interface Causes MIDL2269"
permalink: kb/192/Q192626/
---

## Q192626: FIX: Adding Method to Custom Interface Causes MIDL2269

	Article: Q192626
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbwizard kbClassView kbide kbMiscTools kbVC500bug kbVC600bug kbGrpDSTools kbNoUpdate
	Last Modified: 10-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Adding a method to an ATL class generates the following compile time error:
	
	  MIDL2269 : procedures in an object interface must return an HRESULT
	
	CAUSE
	=====
	
	The method implements a custom interface, does not use the [local] attribute,
	and does not return a value of type HRESULT.
	
	RESOLUTION
	==========
	
	Add the [local] attribute to either the interface or the method.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This problem was corrected in Microsoft Visual C++ .NET.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a default ATL project.
	
	2. Right-click the project in ClassView and select New Class.
	
	3. In the New Class dialog box, select ATL Class as the class type.
	
	4. Enter a name for the class, and select Custom for the Interface type. Click
	  OK.
	
	5. Right-click the interface in ClassView and select Add Method.
	
	6. In the "Add Method to Interface" dialog box, select any return type other
	  than HRESULT.
	
	7. Enter a method name, and specify the parameters. Click OK.
	
	8. Build the project.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbwizard kbClassView kbide kbMiscTools kbVC500bug kbVC600bug kbGrpDSTools kbNoUpdate 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : :5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
