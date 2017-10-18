---
layout: page
title: "Q142223: INFO: Variant Handling in an MFC Server w/ VB 4.0 as Its Client"
permalink: kb/142/Q142223/
---

## Q142223: INFO: Variant Handling in an MFC Server w/ VB 4.0 as Its Client

	Article: Q142223
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:4.0; winnt:2.0,2.1,2.2,4.0
	Operating System(s): 
	Keyword(s): kbcode kbActiveX kbAutomation kbCOMt kbMFC kbVBp400 kbVC200 kbVC400 kbGrpDSMFCATL
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 4.0 
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 2.2, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It is possible for Visual Basic 4.0 to pass parameters to automation methods
	either by value (ByVal) or by reference (ByRef). For a method that expects a
	non-VARIANT parameter passed by value, MFC's implementation of IDispatch will
	coerce a parameter passed by reference to a value. However, this is not the case
	with an automation method expecting a VARIANT parameter. The MFC framework
	cannot coerce a VARIANT parameter because it does not know what type is expected
	by the method. This can cause problems in a method that expects a VARIANT
	parameter to be passed by value. If the parameter is passed by reference and the
	VARIANT is referenced directly, the value obtained from the variant will be
	incorrect. Hence, an automation method that expects a VARIANT to be passed by
	value should check whether it was passed a reference and coerce the VARIANT if
	necessary. This article illustrates how you could implement this.
	
	MORE INFORMATION
	================
	
	Consider the following method named Add exposed by a MFC automation server with
	a ProgID TestVar.Document:
	
	     LPDISPATCH Add(const VARIANT FAR& varTest);
	
	Given the following code in Visual Basic, it may pass the parameter either by
	reference or by value:
	
	     Dim doc As Object
	     Set doc = CreateObject("TestVar.Document")
	
	     Dim docDispatch As Object
	     Dim varParam As Variant
	     varParam = 2
	
	Visual Basic will pass the parameter by reference in these cases:
	
	     Set docDispatch = doc.Add(varParam)
	     doc.Add varParam
	
	Visual Basic will pass the parameter by value in these cases:
	
	     Set docDispatch = doc.Add((varParam))
	     doc.Add (varParam)
	     Set docDispatch = doc.Add(2)
	     doc.Add 2
	
	From these examples, you may notice that Visual Basic will pass all variables by
	reference unless the () operator is used to indicate that the variable should be
	passed by value. Moreover, Visual Basic will pass all constants by value.
	
	Because of the possibility of the parameter being passed by reference, it is
	necessary to coerce the parameter to a value before using it in the automation
	server. Making a copy of the VARIANT parameter using the VariantCopyInd function
	will perform the necessary indirection, if the source VARIANT parameter passed
	is specified to be VT_BYREF. The following code will properly handle a VARIANT
	passed either by reference or by value.
	
	  LPDISPATCH CTestVarDoc::Add(const VARIANT FAR& varTest)
	  {
	      HRESULT hr;
	      VARIANT var;
	      VariantInit(&var);
	
	      hr = VariantCopyInd(&var, (LPVARIANT)&varTest);
	
	      if (FAILED(hr))
	         return NULL;
	
	      // Now use var instead of varTest
	      ...
	
	  }
	
	Additional query words: kbinf
	
	======================================================================
	Keywords          : kbcode kbActiveX kbAutomation kbCOMt kbMFC kbVBp400 kbVC200 kbVC400 kbGrpDSMFCATL 
	Technology        : kbVBSearch kbAudDeveloper kbPTNotAssigned kbMFC kbZNotKeyword2
	Version           : WINDOWS:4.0; winnt:2.0,2.1,2.2,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
