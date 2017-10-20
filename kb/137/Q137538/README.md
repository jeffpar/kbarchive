---
layout: page
title: "Q137538: HOWTO: Disable the Resizing of an OLE Control"
permalink: /kb/137/Q137538/
---

## Q137538: HOWTO: Disable the Resizing of an OLE Control

{% raw %}

	Article: Q137538
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbActiveX kbCOMt kbCtrl kbMFC KbUIDesign kbVC100 kbGrpDSMFCATL kbNoUpdate
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft OLE Control Developer's Kit (CDK) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To disable the resizing of an OLE Control, you need to override the
	COleControl::OnNcLButtonDown() and COleControl::OnSetExtent() functions.
	
	MORE INFORMATION
	================
	
	The default implementation of COleControl::OnNcLButtonDown() initiates the
	tracker rectangle and changes the extent of the control based on the results.
	
	The default implementation of COleControl::OnSetExtent() is called by the
	framework to change the size of the control based, at least in part, on the
	sizing handled by the client container.
	
	To disable resizing, you need to disable the tracker rectangle supported by
	COleControl::OnNcLButtonDown() and ignore any size changes sent to
	COleControl::OnSetExtent().
	
	To disable resizing in the Circle3 tutorial, override CCirc3Ctrl::OnSetExtent()
	and CCirc3Ctrl::OnNcLButtonDown() and implement as follows:
	
	  BOOL CCirc3Ctrl::OnSetExtent(LPSIZEL lpSizeL)
	  {
	     return FALSE;
	  }
	
	  void CCirc3Ctrl::OnNcLButtonDown(UINT nHitTest, CPoint point)
	  {
	     return;
	  }
	
	Additional query words: resize static fixed
	
	======================================================================
	Keywords          : kbActiveX kbCOMt kbCtrl kbMFC KbUIDesign kbVC100 kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
