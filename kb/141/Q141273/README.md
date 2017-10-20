---
layout: page
title: "Q141273: FIX: Firing a KeyPress Event from an OLE Control Causes Beep"
permalink: /kb/141/Q141273/
---

## Q141273: FIX: Firing a KeyPress Event from an OLE Control Causes Beep

{% raw %}

	Article: Q141273
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbole kbActiveX kbCOMt kbContainer kbMFC kbVC400bug kbVC410fix kbGrpDSMFCATL kbNoUpdate
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While adding a KeyPress event to an OLE Control placed in an MFC-based OLE
	Control Container that handles the event, you will notice a beep for each key
	pressed that is not a mnemonic.
	
	NOTE: The Grid OLE Control that ships with the product also displays this
	behavior.
	
	CAUSE
	=====
	
	If an OLE control is going to fire a KeyPress event, then when WM_GETDLGCODE is
	handled, it will need to specify DLGC_WANTCHARS as part of its return mask. In
	Visual C++ 4.0 and earlier, this is not being done and therefore the control
	never has an opportunity to process the WM_CHAR message that would normally fire
	the KeyPress event.
	
	RESOLUTION
	==========
	
	You need to handle WM_GETDLGCODE in your COleControl-derived class to inform the
	container that the control will handle WM_CHAR messages. For example, use this
	code:
	
	  UINT CKeyEventsCtrl::OnGetDlgCode()
	  {
	      // If you're firing KeyPress, prevent the container from
	      // stealing WM_CHAR.
	      return COleControl::OnGetDlgCode() | DLGC_WANTCHARS ;
	  }
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ 4.1.
	
	MORE INFORMATION
	================
	
	When developing OLE Controls, you may want the OLE control to fire a KeyPress
	event to the OLE control container. Usually, you would do this with ClassWizard
	by clicking the OLE Events tab and adding an event. With the KeyPress event,
	however, this is insufficient because the control is never given an opportunity
	to handle the WM_CHAR message, so it can't fire the KeyPress event.
	
	Additional query words: kbVC400bug 4.00 4.10
	
	======================================================================
	Keywords          : kbole kbActiveX kbCOMt kbContainer kbMFC kbVC400bug kbVC410fix kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
