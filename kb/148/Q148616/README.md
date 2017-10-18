---
layout: page
title: "Q148616: FIX: DisplayAsDefault Ambient Property Not Updated for Control"
permalink: kb/148/Q148616/
---

## Q148616: FIX: DisplayAsDefault Ambient Property Not Updated for Control

	Article: Q148616
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbole kbActiveX kbCOMt kbContainer kbCtrl kbLocalSvr kbMFC kbVC400bug kbVC410fix kbGrpD
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ 32-bit Edition, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the arrow keys to change between controls in a Visual C++ 4.0
	generated container, the DISPID_AMBIENT_DISPLAYASDEFAULT ambient property of the
	control site is not updated, and any control that relies on this property
	doesn't function correctly.
	
	For example, a subclassed button control that is programmed to update its border
	according to the DISPID_AMBIENT_DISPLAYASDEFAULT ambient property will exhibit
	this behavior. In a Visual C++ generated container, the control won't update its
	border.
	
	CAUSE
	=====
	
	In Occdlg.cpp, the following line 542 shouldn't be called:
	
	       bCheckDef = FALSE;
	
	This line keeps CheckDefPushButton from being called and the ambient property
	from being updated.
	
	RESOLUTION
	==========
	
	The best solution is to upgrade to Visual C++ 4.1. If this is not a possibility,
	the MFC DLL can be rebuilt without bCheckDef = FALSE; however, Microsoft
	recommends against this because you need to rebuild the DLL with a different
	name (see tech note 33).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Microsoft Visual C++
	version 4.1.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	The following code can be added to the Button Control sample shipped with Visual
	C++ to demonstrate this problem.
	
	  /////////////////////////////////////////////////////////////////////////// 
	  / 
	  // Display the button with a thick border if appropriate
	
	  void CButtonCtrl::OnAmbientPropertyChange(DISPID dispid)
	  {
	      TRACE("OnAmbientPropertyChange called\n");
	      BOOL bDisplayAsDefault = FALSE;
	      if(DISPID_AMBIENT_DISPLAYASDEFAULT != dispid)
	          return;
	      // Check the control site to see if you should add or remove the border
	      if (!GetAmbientProperty(DISPID_AMBIENT_DISPLAYASDEFAULT, VT_BOOL,
	              &bDisplayAsDefault))
	          ASSERT(FALSE);
	      if(bDisplayAsDefault)
	          SendMessage(BM_SETSTYLE, BS_DEFPUSHBUTTON, 0);
	      else
	          SendMessage(BM_SETSTYLE, BS_PUSHBUTTON, 0);
	      InvalidateControl();
	  }
	
	Additional query words: 4.00 focus
	
	======================================================================
	Keywords          : kbole kbActiveX kbCOMt kbContainer kbCtrl kbLocalSvr kbMFC kbVC400bug kbVC410fix kbGrpDSMFCATL kbNoUpdate kbbuglist kbfixlist
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
