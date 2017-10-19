---
layout: page
title: "Q167668: HOWTO: Pass a SafeArray of Strings in a VARIANT&#42;"
permalink: /kb/167/Q167668/
---

## Q167668: HOWTO: Pass a SafeArray of Strings in a VARIANT&#42;

	Article: Q167668
	Product(s): Microsoft C Compiler
	Version(s): 2.0,2.1,2.2,4.0,4.0a,4.1,4.2,4.2b,5.0,6.0
	Operating System(s): 
	Keyword(s): kbole kbActiveX kbAutomation kbCOMt kbMFC kbVC200 kbVC210 kbVC220 kbVC400 kbVC410 kbVC4
	Last Modified: 12-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 2.2, 4.0, 4.0a, 4.1, 4.2b 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you look at the information available on passing SafeArrays between Visual
	C++ and Visual Basic 6.0, most pass the SafeArray in a parameter of type
	VARIANT. In MFC, this translates into a "const VARIANT& varName" parameter.
	
	As an alternative, this article explores how to pass a VARIANT*, which in MFC
	will be declared as a "VARIANT FAR* varName" parameter.
	
	Why should you use one method over the other? Because most applications allow
	modifications to a SafeArray passed in a VARIANT, but not all. In Excel 95, you
	can pass a SafeArray in a VARIANT to a Visual C++ server, modify the values in
	the server, return the modified SafeArray, and there is no change in Excel 95.
	Another reason to use this technique is to work around a limitation in Visual
	Basic 6.0 when you use early binding.
	
	MORE INFORMATION
	================
	
	To demonstrate this concept, start with a new "MFC AppWizard(exe)" project
	called StrArray. In "Step 3 of 6," select Automation, click Finish, and then
	click OK to generate the project files.
	
	NOTE: If using Visual Studio.NET: Create a new "MFC Application" project called
	StrArray. On the Advanced Features tab, select Automation, and then click Finish
	to generate the project files.
	
	Now create a single automation method using ClassWizard. In ClassWizard, select
	"CStrArrayDoc" under "Class name:". Click the Automation tab and click Add
	Method. Enter the following values into the Add Method dialog box:
	
	NOTE: If using Visual Studio.NET: Add a single automation method using "Class
	View". Expand the Class View tree and look for the VCCOdeIDLLibrary entry. Find
	the IStrArray interface under that node. Right-click the interface, and then
	select Add Method. Enter the following values into the Add Method dialog box:
	
	  External Name : Sort
	  Internal Name : Sort
	  Return Type   : long
	  Parameter List:
	
	     Name       : vArray
	     Type       : VARIANT*
	
	Click OK and Edit Code.
	
	To implement the Sort method, use the FastSort method of the MFCARRAY sample
	mentioned in the REFERENCES section below. This allows you to see the
	differences between passing the parameter as a "const VARIANT& varName" and
	a "VARIANT* varName". Modify the Sort method as follows:
	
	     ...
	     #include <afxpriv.h>
	     ...
	     long CStrArrayDoc::Sort(VARIANT FAR* vArray)
	     {
	
	        long i, j, min;
	        BSTR bstrTemp;
	        SAFEARRAY FAR* psa = NULL;
	        BSTR HUGEP *pbstr;
	        HRESULT hr;
	        DWORD dwTimeStart;
	        LONG cElements, lLBound, lUBound;
	
	        USES_CONVERSION;
	
	        // Type check VARIANT parameter. It should contain a BSTR array
	        // passed by reference. The array must be passed by reference it is
	        // an in-out-parameter.
	        if (V_VT(vArray) != (VT_ARRAY | VT_BSTR))
	           AfxThrowOleDispatchException(1001,
	             "Type Mismatch in Parameter. Pass a string array by reference");
	        psa = V_ARRAY(vArray);
	        // Check dimensions of the array.
	        if (SafeArrayGetDim(psa) != 1)
	           AfxThrowOleDispatchException(1002,
	             "Type Mismatch in Parameter. Pass a one-dimensional array");
	
	        dwTimeStart = GetTickCount();
	
	        // Get array bounds.
	        hr = SafeArrayGetLBound(psa, 1, &lLBound);
	        if (FAILED(hr))
	            goto error;
	        hr = SafeArrayGetUBound(psa, 1, &lUBound);
	        if (FAILED(hr))
	            goto error;
	
	        // Get a pointer to the elements of the array.
	        hr = SafeArrayAccessData(psa, (void HUGEP* FAR*)&pbstr);
	        if (FAILED(hr))
	           goto error;
	
	        // Bubble sort.
	        cElements = lUBound-lLBound+1;
	        for (i = 0; i < cElements-1; i++)
	        {
	           min = i;
	           for (j = i+1; j < cElements; j++)
	           {
	              // NULL is a valid value for a BSTR. This code treats a NULL
	              // BSTR as less than other string values.
	              if (pbstr[min] == NULL)
	                 continue;
	              else if (pbstr[j] == NULL
	                 || wcscmp(pbstr[j], pbstr[min]) < 0)
	                 min = j;
	           }
	
	           //Swap array[min] and array[i].
	           bstrTemp = pbstr[min];
	           pbstr[min] = pbstr[i];
	           pbstr[i] = bstrTemp;
	        }
	
	        hr = SafeArrayUnaccessData(psa);
	        if (FAILED(hr))
	           goto error;
	
	        return GetTickCount()-dwTimeStart;
	
	     error:
	
	        AfxThrowOleDispatchException(1003,
	          "Unexpected Failure in FastSort method");
	        return 0;
	
	     }
	
	Now you can build and test the automation server. After you build the server, run
	it as a stand-alone to register it. Run Visual Basic 6.0 and create a new Visual
	Basic 6.0 project. Place a button on the form and modify the handler to match
	the code below:
	
	     Private Sub Command1_Click()
	        Dim o As Object
	        Dim v As Variant
	        ReDim v(50) As String
	        Dim SortTime As Long
	
	        Set o = CreateObject("StrArray.Document")
	
	        upperbound = 1
	        lowerbound = 100
	        For n = 0 To 50
	            v(n) = "Entry " & Int((upperbound-lowerbound+1)*Rnd+lowerbound)
	        Next n
	
	        SortTime = o.Sort(v)
	        MsgBox ("Done")
	     End Sub
	
	The key to getting this syntax to work in Visual Basic 6.0 is to first Dim the
	array variable as a variant, and then ReDim it so that it becomes a variant
	containing an array of strings. Now you are ready to test the server. Set break
	points in the Visual Basic 6.0 code before and after the call to Sort. Run the
	Visual Basic 6.0 application, click Command1 and use the watch window to check
	the values for v.
	
	REFERENCES
	==========
	
	For more information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q122287 Limits of VB 3.0 Disptest as Automation Controllers
	
	  Q131046 SAMPLE: BINARY: Transfer Binary Data Using OLE Automation
	
	  Q131086 SAMPLE: SAFEARAY: Use of Safe Arrays in Automation
	
	  Q140202 SAMPLE: MFCARRAY: Using Safe Arrays in MFC Automation
	
	  Q122289 Passing Structures in OLE Automation
	
	  Q154172 How to Pass Binary Data Between an ActiveX Control and VB
	
	Microsoft Systems Journal, June 1996, "Q&A OLE" by Don Box.
	
	(c) Microsoft Corporation 1997, All Rights Reserved. Contributions by Shawn W.
	Karr, Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbole kbActiveX kbAutomation kbCOMt kbMFC kbVC200 kbVC210 kbVC220 kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 kbFAQ kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : :2.0,2.1,2.2,4.0,4.0a,4.1,4.2,4.2b,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
