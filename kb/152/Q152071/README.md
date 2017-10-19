---
layout: page
title: "Q152071: HOWTO: Calling Hidden Default Method of an OLE Automation Collec"
permalink: /kb/152/Q152071/
---

## Q152071: HOWTO: Calling Hidden Default Method of an OLE Automation Collec

	Article: Q152071
	Product(s): Microsoft C Compiler
	Version(s): 2.0,2.1,2.2,4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbole kbActiveX kbAutomation kbCOMt kbMFC kbVC200 kbVC210 kbVC220 kbVC400 kbVC41
	Last Modified: 26-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 2.2, 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A technical article found on the Microsoft Developer Network CD-ROM titled
	"Implementing OLE Automation Collections," describes the functionality necessary
	to create an OLE automation collection. This includes creating a method called
	Item that returns the dispatch interface of the indicated item in the
	collection.
	
	All OLE automation collection objects must implement the Item method to iterate
	through the objects of the collection. The implementation of the method might
	have been created hidden in the .ODL file for some applications. You cannot find
	these hidden methods by calling IDispatch::GetIdsOfNames(). However, in many
	situations, this hidden method is the default method of the collection, in which
	case you can invoke it with an dispatch ID of DISPID_VALUE.
	
	Visual Basic 3.0 depends on this Item method being the default method of the
	collection object.
	
	MORE INFORMATION
	================
	
	The following code sample illustrates using COleDispatchDriver::InvokeHelper()
	to call the Item method from the Resources collection class provided by
	Microsoft Project 4.1. The Item method is hidden and cannot be found in the type
	library of the object:
	
	Sample Code
	-----------
	
	     void IterateCollection(void)
	     {
	        Application App; // wrapper class for the 'Application' object
	        Project Proj;    // wrapper class for the 'Project' object
	        Resources Res;   // wrapper class for the 'Resources' object
	        CString lpszFileName ("c:\\temp\\project2.mpp");
	
	        App.CreateDispatch("MSProject.Application");
	
	        VARIANT vFileName;
	        VariantInit(&vFileName);
	        V_VT(&vFileName) = VT_BSTR;
	        V_BSTR(&vFileName) = lpszFileName.AllocSysString();
	        App.FileOpen(vFileName);
	
	        Proj.AttachDispatch(App.GetActiveProject());
	        Res.AttachDispatch(Proj.GetResources());
	
	        VARIANT vCount;
	        VariantInit(&vCount);
	        V_VT(&vCount) = VT_I4;
	        vCount = Res.Count();
	
	        // the index of the collection starts with 1, not 0
	        for (int i = 1 ; i <= vCount.lVal ; i++)
	        {
	           Resource r; // wrapper class for the 'Resource' object
	
	           VARIANT vResult, vIndex, vStr;
	           VariantInit(&vResult);
	           VariantInit(&vIndex);
	           V_VT(&vIndex) = VT_I2;
	           V_I2(&vIndex) = i;
	           static BYTE parms[] = VTS_VARIANT;
	
	           Res.InvokeHelper(DISPID_VALUE, DISPATCH_METHOD, VT_VARIANT,
	     (void*)&vResult, parms, &vIndex);
	           r.AttachDispatch(vResult.pdispVal);
	
	           vStr = r.GetName();
	           // ... 'vStr' now contains the Name property
	        }
	     }
	
	Additional query words: 2.00 2.10 2.20 4.00 4.10
	
	======================================================================
	Keywords          : kbcode kbole kbActiveX kbAutomation kbCOMt kbMFC kbVC200 kbVC210 kbVC220 kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : :2.0,2.1,2.2,4.0,4.1,4.2,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
