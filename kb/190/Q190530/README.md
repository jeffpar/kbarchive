---
layout: page
title: "Q190530: FIX: ActiveX Control Events Are Not Fired in ATL Dialog"
permalink: kb/190/Q190530/
---

## Q190530: FIX: ActiveX Control Events Are Not Fired in ATL Dialog

	Article: Q190530
	Product(s): Microsoft C Compiler
	Version(s): 3.0,6.0
	Operating System(s): 
	Keyword(s): kbnokeyword kbActiveX kbCOMt kbConnPts kbCtrl kbDlg kbVC600bug kbATL300bug kbGrpDSMFCAT
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Active Template Library (ATL) 3.0, used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you insert an ActiveX control on an ATL dialog box, and add event handlers
	for it, the event handler is not called.
	
	CAUSE
	=====
	
	This problem occurs because the sink objects have not been hooked up to the
	corresponding ActiveX control [IConnectionPoint::Advise() has not been called
	for each control].
	
	RESOLUTION
	==========
	
	For an ATL dialog box, IConnectionPoint::Advise() can be called for each control
	on the dialog box, with associated event handlers, by calling
	AtlAdviseSinkMap(). Add a message handler for WM_INITDIALOG in the dialog box
	and call AtlAdviseSinkMap(). For example:
	
	     LRESULT OnInitDialog(UINT uMsg, WPARAM wParam, LPARAM lParam,
	        BOOL& bHandled)
	     {
	        // Calls IConnectionPoint::Advise() for each control on the dialog
	        // box with sink map entry.
	        AtlAdviseSinkMap(this, TRUE);
	
	        return 1;  // Let the system set the focus.
	     }
	
	Also, make sure IConnectionPoint::Unadvise() is called for all controls for which
	IConnectionPoint::Advise() was called. This is done by calling
	AtlAdviseSinkMap() with the value FALSE for last parameter:
	
	     LRESULT OnDestroy(UINT uMsg, WPARAM wParam, LPARAM lParam,
	        BOOL& bHandled)
	     {
	        // Calls IConnectionPoint::Unadvise() for each control on the dialog
	        // box with sink map entry.
	        AtlAdviseSinkMap(this, FALSE);
	
	        return 0;
	     }
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This problem was corrected in Microsoft Visual C++ .NET.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a default ATL AppWizard EXE.
	
	2. Using the ATL Object Wizard (on the Insert menu, click New ATL Object),
	  insert a dialog box from the miscellaneous category.
	
	3. In the dialog box resource inserted by the above step, right-click and select
	  "Insert ActiveX Control"; insert an ActiveX control that has an event
	  interface.
	
	4. Right click the inserted ActiveX control and select Events. In the resulting
	  message/event handler dialog box, add event handlers for the ActiveX control.
	
	5. Create an instance of the dialog box, and display it through a call to
	  DoModal() or Create().
	
	6. Build and run the application and cause the ActiveX control to fire the event
	  for which the handler was added in the previous step. Note that the event
	  handler is not called.
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by Jaganathan
	Thangavelu, Microsoft Corporation
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by Jaganathan Thangavelu, Microsoft Corporation
	
	
	Additional query words: kbATL300 kbATL300bug kbATL kbVC600 kbVC600bug
	
	======================================================================
	Keywords          : kbnokeyword kbActiveX kbCOMt kbConnPts kbCtrl kbDlg kbVC600bug kbATL300bug kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbVCsearch kbAudDeveloper kbATLsearch
	Version           : :3.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
