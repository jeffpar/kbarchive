---
layout: page
title: "Q122219: INFO: CWnd::OnCommand() Parameters Documented Incorrectly"
permalink: /kb/122/Q122219/
---

## Q122219: INFO: CWnd::OnCommand() Parameters Documented Incorrectly

{% raw %}

	Article: Q122219
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr kbMFC KbUIDesign kbVC500bug kbGrpDSMFCATL
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ 32-bit Edition, version 2.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The online help and the "Class Library Reference" incorrectly describe the
	CWnd::OnCommand() wParam and lParam as follows:
	
	In Visual C++ 2.0
	-----------------
	
	wParam Identifies the command ID of the menu item or control.
	
	lParam The low-order word of lParam identifies the control that sends the message
	if the message is from a control. Otherwise the low-order word is 0. The
	high-order word of lParam specifies the notification message if the message is
	from a control. If the message is from an accelerator, the high-order word is 1.
	If the message is from a menu, the high-order word is 0.
	
	In Visual C++ 5.0
	-----------------
	
	wParam The low-order word of wParam identifies the command ID of the menu item or
	control. The high-order word of wParam specifies the notification message if the
	message is from a control. If the message is from an accelerator, the high-order
	word is 1. If the message is from a menu, the high-order word is 0.
	
	MORE INFORMATION
	================
	
	The description above is valid for Windows-based Applications, but it is invalid
	for Win32-based Applications. The Win32 API widens the WPARAM type to 32 bits
	and changes the packing of many of the messages. The parameters for
	CWnd::OnCommand() should be documented as follows:
	
	  wParam The low-order word of wParam specifies the identifier of the menu
	  item, control, or accelerator. The high-order word specifies the notification
	  code if the message is from a control. If the message is from an accelerator,
	  the high-order word is 1. If the message is from a menu, the high-order word
	  is 0.
	
	  lParam Handle (HWND) of the control sending the message if the message is from
	  a control. Otherwise, this parameter is NULL.
	
	REFERENCES
	==========
	
	For additional information concerning this issue, please consult the following
	topics in the Online Help: "WM_COMMAND" and "MFC: Porting Tips".
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdocfix kbdocerr kbMFC KbUIDesign kbVC500bug kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:
	
	=============================================================================
	

{% endraw %}
