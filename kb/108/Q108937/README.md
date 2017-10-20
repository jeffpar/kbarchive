---
layout: page
title: "Q108937: PRB: Graying Text in Disabled Multi-line Edit Controls"
permalink: /kb/108/Q108937/
---

## Q108937: PRB: Graying Text in Disabled Multi-line Edit Controls

{% raw %}

	Article: Q108937
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbCtrl kbEditCtrl kbSDKPlatform
	Last Modified: 09-JUN-1999
	
	3.00 3.10
	WINDOWS
	kbprg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Disabling multi-line edit controls prevents user input to the control, but does
	not make the text unavailable (gray or dim) in the edit control. However, single
	line edit controls, when disabled, make the text unavailable, as well as
	preventing user input.
	
	RESOLUTION
	==========
	
	This is a design feature in Windows and is not a bug.
	
	MORE INFORMATION
	================
	
	The rationale behind this design feature is that the single line edit control is
	generally used in different circumstances than is the multi-line edit control.
	The single line edit control is used in such situations as selecting a filename,
	where making the disabled text unavailable helps make the user interface
	clearer. Multi-line edit controls are often used as read-only fields, and
	therefore need to be black when disabled.
	
	One way to make the text of a disabled multi-line edit control unavailable is in
	the following description.
	
	Whenever a predefined control is about to draw itself, it sends its parent a
	WM_CTLCOLOR message. The parent can use this message to set the control's text
	and background colors.
	
	In the window procedure of the multi-line edit control's parent window, process
	the WM_CTLCOLOR message as follows:
	
	Sample Code
	-----------
	
	   static HBRUS  hBrush;
	
	   case WM_INITDIALOG:
	
	     hBrush = CreateSolidBrush (GetSysColor (COLOR_WINDOW));
	     break;
	
	   case WM_CTLCOLOR:
	
	     /* If the control is disabled, set the text color to gray and the
	      * background color to the system window background color.
	      */ 
	
	      hCtl = GetDlgItem (hDlg, IDC_MULTIEDIT );
	
	      enabled = IsWindowEnabled(hCtl) ;
	
	      if ((!enabled) && (HIWORD(lParam) == CTLCOLOR_EDIT)) {
	        SetTextColor(wParam, RGB(128,128,128) );
	        SetBkColor( wParam, GetSysColor (COLOR_WINDOW));
	        return ((HBRUSH) hBrush);
	      }
	
	      break;
	
	    InvalidateRect (hCtl, NULL, TRUE);
	    UpdateWindow (hCtl);
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly kbCtrl kbEditCtrl kbSDKPlatform 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
