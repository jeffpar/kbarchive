---
layout: page
title: "Q199431: PRB: Enabling Menu Mnemonics in an MFC ActiveX Control"
permalink: kb/199/Q199431/
---

## Q199431: PRB: Enabling Menu Mnemonics in an MFC ActiveX Control

	Article: Q199431
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbActiveX kbCOMt kbContainer kbCtrlCreate kbKeyAccel kbMFC kbVC500 kbVC600 kbDSupport k
	Last Modified: 27-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	MFC supports the creation of ActiveX controls that can merge a menu resource
	with its container application though the COleControl::OnGetInPlaceMenu()
	function, as illustrated by the MFC Button sample. However, you may find that
	menu items belonging to an MFC ActiveX control cannot be invoked through the
	keyboard.
	
	CAUSE
	=====
	
	The default implementation of an MFC ActiveX control does not give the container
	application a chance to process menu mnemonics.
	
	RESOLUTION
	==========
	
	To work around this problem, you need to give the container an opportunity to
	translate menu mnemonics by calling the OleTranslateAccelerator() from the
	control's PreTranslateMessage() function. You can use the following steps to do
	this.
	
	1. Use ClassWizard to override the PreTranslateMessage function for the control.
	
	2. Use the following code in the PreTranslateMessage function:
	
	    if (pMsg->message >= WM_KEYFIRST && pMsg->message <= WM_KEYLAST)
	       if (::OleTranslateAccelerator(m_pInPlaceFrame, &m_frameInfo, pMsg)==S_OK)
	          return TRUE;
	
	     return COleControl::PreTranslateMessage(pMsg);
	
	Adding the earlier function to the PreTranslateMessage function allows the
	container to process menu mnemonics and forward the resulting command messages
	to the control.
	
	STATUS
	======
	
	The MFC implementation at this time does not forward keyboard requests on for
	menu mnemonics. This is a limitation in the MFC framework that can be worked
	around with the resolution earlier.
	
	MORE INFORMATION
	================
	
	Steps to reproduce behavior
	---------------------------
	
	1. Build and register the MFC Button sample.
	
	2. Run the ActiveX Test Container utility. You can find this from tool on the
	  Tools menu inside of Microsoft Visual C++. Insert the Button control into the
	  ActiveX Test Container. Note the container's menus have changed.
	
	3. Type "ALT+H" (without the quotation marks) to drop down the Help menu.
	
	4. Type "A" (without the quotation marks) to invoke the control's about box.
	
	Note that nothing happens. However, when you select the menu item using the
	mouse, the control's about box is properly displayed.
	
	
	REFERENCES
	==========
	
	For additional information concerning handling accelerators and menu mnemonics
	for in-place active objects, such as ActiveX controls, please consult the
	following sources of information:
	
	"Inside OLE" - second edition by Kraig Brockschmidt. Microsoft Press. ISBN
	1-55615-843-2.
	
	  Q104460 PRB: Menu Mnemonics Not Working During In-Place Activation.
	
	Additional query words: PreTranslateMessage TranslateAccelerator keyboard
	
	======================================================================
	Keywords          : kbActiveX kbCOMt kbContainer kbCtrlCreate kbKeyAccel kbMFC kbVC500 kbVC600 kbDSupport kbGrpDSMFCATL kbAcceleratorKey 
	Technology        : kbAudDeveloper kbMFC kbVCNET
	Version           : :5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
