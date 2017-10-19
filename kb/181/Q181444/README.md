---
layout: page
title: "Q181444: HOWTO: Pass an Automation Object from VB to a Visual C/C++ DLL"
permalink: /kb/181/Q181444/
---

## Q181444: HOWTO: Pass an Automation Object from VB to a Visual C/C++ DLL

	Article: Q181444
	Product(s): Microsoft C Compiler
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbole kbAutomation kbMFC kbOSWin2000 kbVC400 kbVC500 kbVC600
	Last Modified: 12-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Editions, versions 4.0, 5.0, 6.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual C++.NET (2002) 
	- the operating system: Microsoft Windows 95 
	- the operating system: Microsoft Windows NT 
	- the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article demonstrates how to pass an automation object from Microsoft Visual
	Basic to a C/C++ DLL.
	
	MORE INFORMATION
	================
	
	The basic concept is to pass your automation object "ByVal As Object", expect an
	IUnknown pointer in the DLL and then call IUnknown::QueryInterface() for the
	IDispatch interface.
	
	Steps to Create DLL
	-------------------
	
	The following steps illustrate how to create a Microsoft Visual C++ DLL project
	and then add and export the talkToObject() routine.
	
	1. Create a new Microsoft Visual C++ 5.0 "MFC AppWizard (dll)" project named
	  "vcvbdll" and accept all of the default options.
	
	2. Add the following code to the end of the vcvbdll.cpp file.
	
	        // Helper message function...
	        void ShowMsg(char *msg, HRESULT hr) {
	              char buf[1024];
	              if((long)hr) {
	                 sprintf(buf, "%s, HRESULT = %08lx", msg, (long)hr);
	              }
	              else {
	                 sprintf(buf, "%s", msg);
	              }
	              ::MessageBox(NULL, buf, "C/C++ DLL message",
	                           MB_SETFOREGROUND | MB_OK);
	        }
	
	        // The exported function, called from Microsoft Visual Basic...
	        void _stdcall talkToObject(IUnknown *pUnk) {
	              // QueryInterface for a IDispatch pointer...
	              IDispatch *pDisp;
	              HRESULT hr = pUnk->QueryInterface(IID_IDispatch,
	                                               (void **)&pDisp);
	              if(FAILED(hr)) {
	                 ShowMsg("QueryInterface() failed", hr);
	              }
	              else {
	                 ShowMsg("We got the dispatch pointer!!!", hr);
	
	                 // Attach dispatch to a COleDispatchDriver class.
	                 COleDispatchDriver disp(pDisp); // Uses constructor
	
	                 // Set visible to FALSE...
	                 static BYTE parms[] = VTS_BOOL;
	                 disp.InvokeHelper(0x17, DISPATCH_PROPERTYPUT, VT_EMPTY,
	                                   NULL, parms, FALSE);
	
	                 ShowMsg("Microsoft Word 97 shouldn't be visible now.", 0);
	
	                 // Set visible to TRUE...
	                 disp.InvokeHelper(0x17, DISPATCH_PROPERTYPUT, VT_EMPTY,
	                                   NULL, parms, TRUE);
	                 ShowMsg("Microsoft Word 97 should now be visible again!",
	                         0);
	           }
	        }
	
	3. Add the following line tothe end of the vcvbdll.def file so that the
	  talkToObject function is exported:
	
	        talkToObject
	
	4. Compile and then copy the .dll to the \Windows\System directory for testing.
	
	Steps to Create Visual Basic Project
	------------------------------------
	
	Next, build a Microsoft Visual Basic 5.0 project that automates Microsoft Word 97
	and passes an Application object into the talkToObject function in vcvbdll.dll.
	
	1. Create a new Microsoft Visual Basic 5.0 project.
	
	2. Add a Command button to Form1.
	
	3. Add the following code to Form1.
	
	        Private Declare Sub talkToObject Lib "vcvbdll.dll" ( _
	           ByVal pUnk As Object)
	
	        Private Sub Command1_Click()
	           Dim obj As Object
	
	           ' Start automation to Microsoft Word 97.
	           Set obj = CreateObject("Word.Application")
	
	           ' Make Microsoft Word 97 visible.
	           obj.Visible = True
	           MsgBox "Preparing to call into C/C++ dll..."
	
	           ' Pass automation interface to C/C++ dll.
	           talkToObject obj
	
	           ' Close Microsoft Word 97.
	           obj.Quit
	
	        End Sub
	
	REFERENCES
	==========
	
	For more information about VC++ OLE Automation or COleDispatchDriver, search the
	VC++ online help for "OLE Automation" or "COleDispatchDriver."
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by Joe Crump, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbole kbAutomation kbMFC kbOSWin2000 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbVC400 kbOSWin2000 kbOSWin95 kbVBSearch kbAudDeveloper kbOSWinSearch kbVB400Search kbVB400 kbVC500 kbVC600 kbVC32bitSearch kbOSWinNTSearch kbVCNET kbVC500Search
	Version           : :4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
