---
layout: page
title: "Q154039: HOWTO: Pass Optional Arguments to MFC ActiveX Controls"
permalink: /kb/154/Q154039/
---

## Q154039: HOWTO: Pass Optional Arguments to MFC ActiveX Controls

{% raw %}

	Article: Q154039
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbActiveX kbAutomation kbCOMt kbCtrlCreate kbMFC kbVC400 kbVC500 kbVC600 kbGrpDSMFCATL
	Last Modified: 12-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Many automation methods on ActiveX Controls do not require that all possible
	arguments are passed with each call. Arguments that are not required are called
	optional arguments. In MFC, it is possible to add a method to a custom control
	that accepts optional arguments, but there are a few rules that must be
	followed. This article outlines these rules, and provides step-by-step
	instruction on how to add such a method to a control.
	
	MORE INFORMATION
	================
	
	MFC's implementation of IDispatch accepts optional arguments according to the
	following rules:
	
	1. Optional arguments must appear at the end of the parameter list. If an
	  optional argument is omitted when calling the method, all arguments to the
	  right of this one must also be omitted. This is similar to the C++ rules for
	  calling functions with Default values for parameters.
	
	2. Optional arguments must be declared as VARIANTs. If a parameter is omitted,
	  the calling program must pass a VARIANT initialized as:
	
	     VARIANT.vt = VT_ERROR
	     VARIANT.scode = DISP_E_PARAMNOTFOUND.
	
	  This will be done automatically by Visual Basic. However, in Visual C++ you
	  must create and initialize the VARIANT yourself.
	
	NOTE: If using Visula Studio.NET do the following:
	3. You must edit the IDL file generated for the control and mark the parameters
	  as optional. This is done by adding the [optional] tag as shown here:
	
	  [id(1)] void MyOpt([optional] VARIANT param1,
	              [optional] VARIANT param2);
	
	To add a method that supports optional arguments, follow these steps:
	
	1. Using ClassWizard, add a new method to the control. Be sure to pick VARIANT
	  as the type for each optional argument, and be sure the optional arguments
	  appear last in the parameter list.
	
	  NOTE: If using Visual Studio .NET do the following:
	
	  In Class View, expand the project node to display the interface that you want
	  to add the method. Click Add, and then click Add Method. Pick VARIANT as the
	  type for each optional argument, and verify that the optional arguments
	  appear last in the parameter list.
	
	2. Edit the ODL file, and mark these parameters with the [optional] tag.
	
	3. Add the appropriate functionality to the method and rebuild the control.
	
	  For example, the MyOpt method defined in ODL syntax above could be called from
	  Visual Basic in the following three forms:
	
	  myocx.MyOpt 2, 3  'passing both args
	  myocx.MyOpt 2     'omit one arg
	  myocx.MyOpt       'omit both args
	
	REFERENCES
	==========
	
	For more information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q140616 SAMPLE: MFCDISP: Replacing MFC IDispatch Implementation
	
	Visual C++ Books Online
	
	Programming with MFC: Encyclopedia
	
	Additional query words: LPDispatch IDispatch kbinf
	
	======================================================================
	Keywords          : kbActiveX kbAutomation kbCOMt kbCtrlCreate kbMFC kbVC400 kbVC500 kbVC600 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : :4.0,4.1,4.2,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
