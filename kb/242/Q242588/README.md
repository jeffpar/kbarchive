---
layout: page
title: "Q242588: BUG: VTS_UI1 and VTS_PUI1 are Defined Incorrectly in AfxDisp.h"
permalink: kb/242/Q242588/
---

## Q242588: BUG: VTS_UI1 and VTS_PUI1 are Defined Incorrectly in AfxDisp.h

	Article: Q242588
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbAutomation kbCOMt kbMFC kbVC400bug kbVC410 kbVC420 kbVC500bug kbVC600bug kbDSupport k
	Last Modified: 02-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the string literals defined for VTS_UI1 or VTS_PUI1 in calling
	COleDispatchDriver::InvokeHelper() or CWnd::InvokeHelper(), you might get
	strange results. You might notice any of the following symptoms when using the
	values defined in AfxDisp.h:
	
	- An ASSERT on line 321 in file Oledisp2.cpp in the
	  COleDispatchDriver::InvokeHelperV function.
	
	- A message box stating "Bad variable type."
	
	- An uncaught exception in WindowProc.
	
	- A first chance exception in Kernel32.dll.
	
	CAUSE
	=====
	
	This is because VTS_UI1 and VTS_PUI1 are defined incorrectly in the Afxdisp.h
	header file.
	
	RESOLUTION
	==========
	
	Do not use VTS_UI1 or VTS_PUI1 in any of your code. Instead, define the correct
	values for each of these using a name you assign. Code like the following can be
	used:
	
	  //Do NOT use VTS_UI1. It has a value of "0x0F" which is incorrect.
	  //The correct value for VTS_UI1 is 17 or 0x11
	  #define MY_VTS_UI1 "\x11"
	
	  //Do NOT use VTS_PUI1. It has a value of "0x4F" which is incorrect.
	  //The correct value for VTS_PUI1 is 81 or 0x51
	  #define MY_VTS_PUI1 "\x51"
	
	  void SomeFunction(BYTE byteVal)
	  {
	   static BYTE parms[] = MY_VTS_UI1; // please note that this is not VTS_UI1
	   DISPID dispid = 0x60030000;       // notice that this is different!
	
	   COleDispatchDriver d;
	   if (d.CreateDispatch("SomeComObject.SomeComObject.1))
	      d.InvokeHelper(dispid, DISPATCH_METHOD, VT_EMPTY, NULL, parms, byteVal);
	  }
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	REFERENCES
	==========
	
	  Q241862 BUG: ClassWizard Omits Methods that Take BYTE or BYTE* as Parameters
	
	Additional query words: 0x80020008 COleException InvokeHelper Invoke IDispatch OLE Automation
	
	======================================================================
	Keywords          : kbAutomation kbCOMt kbMFC kbVC400bug kbVC410 kbVC420 kbVC500bug kbVC600bug kbDSupport kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.0,4.1,4.2,5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	
