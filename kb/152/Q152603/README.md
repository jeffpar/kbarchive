---
layout: page
title: "Q152603: FIX: Masked Edit Tab Order Incorrect If Visible Property FALSE"
permalink: kb/152/Q152603/
---

## Q152603: FIX: Masked Edit Tab Order Incorrect If Visible Property FALSE

	Article: Q152603
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.1,4.2
	Operating System(s): 
	Keyword(s): kbole kbusage kbActiveX kbCOMt kbCtrl kbMFC kbResourceEd kbVC400bug kbVC500fix kbGrpDSM
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Multiple Masked Edit OLE Controls that are not visible will not retain their
	original tab order after they are made visible.
	
	If you insert more than one Microsoft Masked Edit Ole Control into a dialog
	resource wrapped by a MFC Class (CDialog, CFormView, CRecordView, or
	CDaoRecordView), set the Visible Properties of the Controls to FALSE in the
	Resource Editor at design time, and then call the ShowWindow on the controls,
	the focus is set to the wrong control.
	
	RESOLUTION
	==========
	
	If possible, leave the Visible property of the Microsoft Masked Edit OLE Control
	set to TRUE.
	
	If you call SetFocus on the first masked edit control, the focus is set properly
	to that control, but if there are any other non-static controls on the form,
	they will be inserted before the second masked edit control in the tab order at
	run time.
	
	SetWindowPos() can be used to set the z-order of a control. The tab order in a
	dialog is synonymous with the Z-order, meaning that a control that is first in
	the tab order will have a higher Z-order than a control that follows it in the-Z
	order. A control with the WS_CLIPSIBLINGS window style set that is overlapped by
	another control will not be painted in the area that is overlapped. OLE controls
	have the WS_CLIPSIBLINGS window style set by default.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual C++ version 5.0.
	
	MORE INFORMATION
	================
	
	Use the following steps to reproduce a dialog-based MFC application. These steps
	also apply if you choose either an SDI or MDI application with a CFormView,
	CRecordView, or CDaoRecordView:
	
	1. Create an AppWizard dialog-based application with OLE Controls support.
	
	2. Using the Component Gallery, insert a Microsoft Masked Edit OLE Control.
	
	3. Place two masked edit controls on the dialog resource. Verify the tab order:
	  the first control you placed on the dialog should be first in the tab order.
	
	4. Set the Visible properties of both edit controls to FALSE.
	
	5. Using the Class Wizard, create member variables of type "control" for both of
	  the masked edit controls. For example:
	
	        CMsmask  m_Mask1;
	        CMsmask  m_Mask2;
	
	  where CMsmask is the class that the Component Gallery created to wrap the
	  Microsoft Masked Edit OLE Control.
	
	6. For the dialog's OnInitDialog method, run the following code:
	
	        m_Mask1.ShowWindow( SW_SHOW );
	        m_Mask2.ShowWindow( SW_SHOW );
	
	7. Build and run the program. The m_Mask2 object will be first in the tab order
	  -- before m_Mask2.
	
	Additional query words: kbVC400bug
	
	======================================================================
	Keywords          : kbole kbusage kbActiveX kbCOMt kbCtrl kbMFC kbResourceEd kbVC400bug kbVC500fix kbGrpDSMFCATL kbGrpDSTools 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.0,4.1,4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
