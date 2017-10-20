---
layout: page
title: "Q150034: PRB: LPPICTUREDISP Cannot Be Passed Across Process Boundaries"
permalink: /kb/150/Q150034/
---

## Q150034: PRB: LPPICTUREDISP Cannot Be Passed Across Process Boundaries

{% raw %}

	Article: Q150034
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbActiveX kbAutomation kbBitmap kbCOMt kbCtrl kbMFC kbVC400 kbVC500 kbVC600 kbGrpDSMFCA
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft OLE Control Developer's Kit (CDK) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An automation server that implements a Picture object wrapped by the
	CPictureHolder class in MFC fails when it attempts to pass a pointer to the
	picture object's IPictureDisp implementation across process boundaries.
	
	CAUSE
	=====
	
	IPictureDisp gains access to methods of the Picture object that cannot be
	marshaled across process boundaries. For example, IPictureDisp supports
	DISPID_PICT_RENDER to gain access to the Render method of the Picture object.
	The Render method takes a handle to a device context as the first parameter.
	Device context handles cannot be marshaled.
	
	Dispatch interfaces can normally be marshalled by using the IDispatch marshaling
	code, but the Picture object implements IMarshal specifically to cause its
	marshaling to fail.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The ClassWizard in Visual C++ allows you to select a return type of
	LPPICTUREDISP for a method. This method might return the IPictureDisp interface
	obtained by calling CPictureHolder::GetPictureDispatch. However, if this method
	is called by a controller running in another process, the method fails and
	returns an error code of E_FAIL.
	
	Because the Picture object causes the marshaling of IPictureDisp to fail,
	problems can also occur when trying to obtain an IPictureDisp interface across
	thread boundaries in a multiple-thread apartment model object.
	
	REFERENCES
	==========
	
	For more information on marshaling, please see "Inside OLE," second edition, by
	Kraig Brockschmidt, Chapter 6, "Local/Remote Transparency," published by
	Microsoft Press.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbActiveX kbAutomation kbBitmap kbCOMt kbCtrl kbMFC kbVC400 kbVC500 kbVC600 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.0,4.1,4.2,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
