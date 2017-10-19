---
layout: page
title: "Q153881: HOWTO: How To Assign the ActiveX Control LPDispatch Property in"
permalink: /kb/153/Q153881/
---

## Q153881: HOWTO: How To Assign the ActiveX Control LPDispatch Property in

	Article: Q153881
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.1,4.2
	Operating System(s): 
	Keyword(s): kbActiveX kbCOMt kbCtrl kbMFC kbVBp kbVC400 kbVC420 kbGrpDSVB
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It is often useful for one ActiveX (OLE) Control to hold an LPDispatch pointer
	to another control on the same Visual Basic form. The first control can use this
	pointer to call methods and/or access properties on the second control using OLE
	Automation. This article demonstrates how to create a property of type
	LPDispatch on an MFC ActiveX Control, and how to properly set this property to
	another control's IDispatch pointer in Visual Basic.
	
	NOTE: Although this article discusses properties of type LPDispatch, this
	information also applies to properties of type LPUnknown.
	
	MORE INFORMATION
	================
	
	Follow these steps to add a property to a custom ActiveX control that is to hold
	another control's IDispatch pointer:
	
	1. Using ClassWizard, add a property of type LPDispatch to the control. Fill in
	  a name for the property, and select the "Member Variable" button for this
	  property.
	
	2. Next, you must initialize this member variable to NULL in the control's
	  constructor. If you do not, Visual Basic will cause a General Protection
	  Fault when you try to assign a value to it. This occurs because MFC tries to
	  call Release() on the uninitialized pointer. If the pointer is set to NULL,
	  Release() will not be called by MFC.
	
	3. Build the control, and place it on a form in Visual Basic.
	
	The following lines of Visual Basic code demonstrate how to set the property to
	another control's IDispatch pointer:
	
	  'Set the control's DispatchProp property to the DBCombo OLE control on
	  'this form.
	  Set MyOcx1.DispatchProp = DBCombo1
	
	    . . .
	    . . .
	
	  'Don't forget to set this property to Nothing when finished
	  Set MyOcx1.DispatchProp = Nothing
	
	REFERENCES
	==========
	
	For more information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q141414 How to Enumerate OLE and VB Controls from an OLE Control Visual C++
	  Books Online, Programming with MFC Encyclopedia.
	
	Additional query words: 4.00 4.10 4.20 kbinf
	
	======================================================================
	Keywords          : kbActiveX kbCOMt kbCtrl kbMFC kbVBp kbVC400 kbVC420 kbGrpDSVB 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.0,4.1,4.2
	Issue type        : kbhowto
	
	=============================================================================
	
