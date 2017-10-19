---
layout: page
title: "Q146446: PRB: ClassWizard Doesn't Support Property Change Notifications"
permalink: /kb/146/Q146446/
---

## Q146446: PRB: ClassWizard Doesn't Support Property Change Notifications

	Article: Q146446
	Product(s): Microsoft C Compiler
	Version(s): Winnet:4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbole kbCtrl kbVC400 kbVC500 kbVC600 kbprb
	Last Modified: 03-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The ClassWizard, included with:
	   - Microsoft Visual C++, 32-bit Editions, version 4.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	ClassWizard makes adding event handlers in an OLE control container much easier
	by providing the required macros, function declarations, and the function body.
	However, ClassWizard currently doesn't provide support to add handlers for
	property change requests and property change notifications. You must manually
	add the macros, function declarations, and the function body required for
	defining an event sink map entry in order to handle property change
	notifications. This article explains the steps necessary for handling one such
	property change notification.
	
	RESOLUTION
	==========
	
	The following steps illustrate how to handle property change notifications for
	the "Caption" stock property of the Circ3 sample control in a dialog based
	control container application:
	
	1. Place the Circ3 control in the main dialog template of the container
	  application.
	
	2. Add an event sink map manually to the control container as follows:
	
	  1. In the .h file of your Main Dialog class, add a DECLARE_EVENTSINK_MAP()
	     macro inside the AFX_MSG section.
	
	  2. In the .cpp file of your Main Dialog Class, add the following:
	
	        BEGIN_EVENTSINK_MAP(COleCntrDlg, CDialog)
	          //{ {AFX_EVENTSINK_MAP(COleCntrDlg)
	          //} }AFX_EVENTSINK_MAP
	        END_EVENTSINK_MAP()
	
	     In the this event sink map, COleCntrDlg is the name of your main dialog
	     class.
	
	3. Add the following two functions to the protected section in the .h file of
	  your Main Dialog Class:
	
	     BOOL CaptionRequest(BOOL *pChange);
	     BOOL CaptionChanged(void);
	
	4. Add the following ON_PROPNOTIFY macro outside of the AFX_EVENTSINK_MAP
	  comments section in the event sink map:
	
	     ON_PROPNOTIFY(COleCntrDlg, IDC_CIRC3CTRL1, DISPID_CAPTION,
	                    CaptionRequest, CaptionChanged )
	
	  In this macro, IDC_CIRC3CTRL1 is the ID of the Circ3 control. Please refer to
	  the ON_PROPNOTIFY documentation for the syntax of the macro and its
	  parameters. The documentation incorrectly states that the changed
	  notification function should take a UINT parameter. However, the property
	  changed notification function takes VOID as its only parameter.
	
	5. Add the following implementations for CaptionRequest and CaptionChanged in
	  the .cpp file of your Main Dialog Class:
	
	     // Property Change Notifications
	     BOOL COleCntrDlg::CaptionRequest(BOOL *pChange)
	     {
	         // Perform customized processing here
	         AfxMessageBox("IPropertyNotifySink::OnRequestEdit called");
	
	         // Return TRUE to allow the property to change, else return
	         // FALSE
	         *pChange = TRUE;
	         return TRUE;    // Notification handled
	     }
	
	     BOOL COleCntrDlg::CaptionChanged(void)
	     {
	         // Perform customized processing here
	         AfxMessageBox("IPropertyNotifySink::OnChanged called");
	
	         return TRUE;    // Notification handled
	     }
	
	MORE INFORMATION
	================
	
	An OLE control container would typically implement IPropertyNotifySink in order
	to receive notifications about property changes from an OLE control. The control
	container creates a sink with this interface and connects it to the control
	through the connection point mechanism.
	
	The OLE control itself is required to call the methods of IPropertyNotifySink
	only for those properties marked with the [bindable] and [requestedit]
	attributes in the object's type information. When the control is about to change
	a [requestedit] property, it must call IPropertyNotifySink::OnRequestEdit before
	changing the property and must also honor the action by the sink on return from
	this call. Also, when the control changes a [bindable] property, it is required
	to call IPropertyNotifySink::OnChanged. An OLE control will send these
	notifications only for property changes occurring after it is fully constructed
	and initialized.
	
	REFERENCES
	==========
	
	Online documentation for ON_PROPNOTIFY and ON_PROPNOTIFY_RANGE. Online
	documentation for Property Change Notification.
	
	Additional query words: ocx ole control cdk
	
	======================================================================
	Keywords          : kbole kbCtrl kbVC400 kbVC500 kbVC600 kbprb 
	Technology        : kbVCsearch kbAudDeveloper kbClassWizard
	Version           : Winnet:4.0,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
