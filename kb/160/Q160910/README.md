---
layout: page
title: "Q160910: PRB: No Text/Caption Properties for Subclassed Combo or List"
permalink: /kb/160/Q160910/
---

## Q160910: PRB: No Text/Caption Properties for Subclassed Combo or List

	Article: Q160910
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbole kbActiveX kbComboBox kbCtrl kbListBox kbMFC kbVC420 kbVC500 kbVC600 kbGrpDSMFCATL
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
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you add a stock Text or Caption property to an MFC ActiveX control that
	subclasses a Combo or List Box, it will not serialize properly.
	
	CAUSE
	=====
	
	When a container attempts to read the Text or Caption property for an MFC
	ActiveX control, the MFC framework calls COleControl::GetText. GetText calls
	COleControl::InternalGetText. InternalGetText may attempt to get the Text or
	Caption property from the control with the following call:
	
	     if (DefWindowProc(WM_GETTEXT, (WPARAM)_cchUsual,
	         (LPARAM)m_strText.GetBufferSetLength(_cchUsual)) >= _cchUsual - 1)
	
	In the case of subclassed Combo or List Box control, this call will always return
	an empty buffer.
	
	RESOLUTION
	==========
	
	It is debatable whether it makes sense to have a Text or Caption property for a
	subclassed Combo or List Box. The native Combo and List Box controls do not
	respond to the WM_SETTEXT or WM_GETTEXT messages. Therefore, the problem
	described above occurs.
	
	If it makes sense to do this in your application, it is easy to make this work:
	When adding the Text or Caption property to the ActiveX control, simply select
	the stock property and select Get / Set methods. This will give you the ability
	to handle the Text or Caption property as if it were a custom property.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The Text and Caption properties of an ActiveX control are synonymous.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbole kbActiveX kbComboBox kbCtrl kbListBox kbMFC kbVC420 kbVC500 kbVC600 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.0,4.1,4.2,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
