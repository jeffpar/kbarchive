---
layout: page
title: "Q188817: HOWTO: VC++ MFC Client for the ComCallingJava Sample"
permalink: /kb/188/Q188817/
---

## Q188817: HOWTO: VC++ MFC Client for the ComCallingJava Sample

{% raw %}

	Article: Q188817
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbActiveX kbAutomation kbCOMt kbJavaVM kbMFC kbVC500 kbGrpDSJava
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft virtual machine 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Java classes created with the Visual J++ Java compiler can be accessed through
	COM. Visual J++ contains a sample that shows how to use COM to call a Java class
	from Visual Basic.
	
	It is also possible to call the Java class through Automation using any language.
	This article contains steps to create an Automation client using Visual C++ and
	MFC.
	
	MORE INFORMATION
	================
	
	It is easy to generate a ColeDispatchDriver-derived class in MFC by creating a
	new class in ClassWizard using the type library created by Visual J++. However,
	to create the Java object and attach the wrapper, you must first call
	COleDispatchDriver::CreateDispatch(), then QueryInterface() for the correct
	dispinterface.
	
	Calling QueryInterface() is necessary because, by default, Java objects use
	AutoIDispatch as the default dispinterface. CreateDispatch() just calls
	CoCreateInstance() for IUnknown and then does a QueryInterface() on the IUnknown
	for IDispatch. AutoIDispatch assigns DISPIDs during run time and can be used
	only when doing late binding.
	
	It is also possible to have the Java object associate the class as the default
	dispinterface by implementing an interface called com.ms.com.NoAutoScripting.
	This interface does not have any methods associated with it, but tells the VM
	(virtual memory) to not make IDispatch available as the default interface
	through AutoIDispatch.
	
	Use the following steps to create the client:
	
	1. Follow the steps in the ComCallingJava sample to create a typelib, to create
	  a wrapper class, and to build and register the Java class.
	
	2. Create an AppWizard-generated application, either SDI (single-document
	  interface) or MDI (multiple-document interface).
	
	3. Initialize OLE by calling AfxOleInit() in CWinApp::InitInstance().
	
	4. Create a COleDispatchDriver wrapper for the Euclid Java class using the type
	  library created in step 1. You can do this in ClassWizard by choosing "Add
	  Class..." and then "From a type library...".
	
	5. Using ClassWizard, handle the WM_LBUTTONDOWN message in the CView. Use the
	  following code as a guide for the button handler:
	
	        //(33B0ECE2-E706-11CF-A0C2-00AA00A71DD8)
	        static const CLSID GCDclsid =
	           { 0x33B0ECE2, 0xE706, 0x11CF, { 0xa0, 0xC2, 0x0, 0xaa, 0x0, 0xa7,
	             0x1d, 0xd8 }};
	
	        // (33B0ECE1-E706-11cf-A0C2-00AA00A71DD8)
	        static const CLSID IGCDclsid =
	        { 0x33B0ECE1, 0xE706, 0x11CF, { 0xa0, 0xC2, 0x0, 0xaa, 0x0, 0xa7,
	          0x1d, 0xd8 }};
	
	        void CComjavaView::OnLButtonDown(UINT nFlags, CPoint point)
	        {
	           CString str;
	           LPDISPATCH pDisp;
	
	           IGCD VJCom;
	           VJCom.CreateDispatch(GCDclsid);
	
	           pDisp = VJCom.m_lpDispatch;
	           HRESULT hr = pDisp->QueryInterface( IGCDclsid,
	                                               (void**)&VJCom.m_lpDispatch);
	           if (hr == S_OK)
	              pDisp->Release();
	           else
	              VJCom.m_lpDispatch = pDisp;
	
	           str.Format("The least common denominator of 40 and 24 is %d",
	                       VJCom.GCD(40,24));
	           AfxMessageBox(str);
	           VJCom.ReleaseDispatch();
	
	           CView::OnLButtonDown(nFlags, point);
	        }
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by Kelly Marie
	Ward, Microsoft Corporation
	
	Additional query words: QueryInterface AutoIDispatch
	
	======================================================================
	Keywords          : kbActiveX kbAutomation kbCOMt kbJavaVM kbMFC kbVC500 kbGrpDSJava 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:5.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
