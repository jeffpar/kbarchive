---
layout: page
title: "Q199942: FIX: Tstcon32.exe Cannot Invoke Method with BSTR&#42; Parameter Type"
permalink: /kb/199/Q199942/
---

## Q199942: FIX: Tstcon32.exe Cannot Invoke Method with BSTR&#42; Parameter Type

	Article: Q199942
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbole kbActiveX kbCOMt kbContainer kbCtrl kbMFC kbMiscTools kbVC600bug kbDSupport kbGrp
	Last Modified: 24-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The ActiveX Control Test Container (version 6.0.8063) that ships with Visual C++
	6.0 and Visual C++.NET fail to invoke a method of an MFC ActiveX control that
	has BSTR* parameter type.
	
	CAUSE
	=====
	
	Microsoft has confirmed that this is a bug in Visual C++ 6.0 and Visual C++.NET
	ActiveX Control Test Container.
	
	RESOLUTION
	==========
	
	To work around this issue:
	
	- Use containers such as Visual Basic.
	
	- Use LPCTSTR as the parameter type.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Use the MFC ActiveX ControlWizard to create an ActiveX control project.
	
	2. Add a method to the ActiveX control as follows:
	
	  void CMyControl::Test(BSTR FAR* Par1)
	        {
	           // TODO: Add your dispatch handler code here
	           AfxMessageBox("In Test");
	           return 0;
	        }
	
	3. Build the control project.
	
	4. Insert the control to the ActiveX Control Test Container of Visual C++ 6.0 or
	  Visual C++.NET.
	
	5. Invoke the Test() method in the ActiveX Control Test Container and the
	  message box does not appear. The following error is displayed in the output
	  window of Visual C++:
	
	  First-chance exception in TSTCON32.EXE (KERNEL32.DLL): 0xE06D7363: Microsoft
	  C++ Exception. Warning: automation argument coercion failed. First-chance
	  exception in TSTCON32.EXE (KERNEL32.DLL): 0xE06D7363: Microsoft C++
	
	Additional query words:
	
	======================================================================
	Keywords          : kbole kbActiveX kbCOMt kbContainer kbCtrl kbMFC kbMiscTools kbVC600bug kbDSupport kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbAudDeveloper kbMFC
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
