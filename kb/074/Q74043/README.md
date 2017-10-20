---
layout: page
title: "Q74043: HOWTO: Change the Color of an Edit Control"
permalink: /kb/074/Q74043/
---

## Q74043: HOWTO: Change the Color of an Edit Control

{% raw %}

	Article: Q74043
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbCtrl kbEditCtrl kbGrpDSUser
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The source code fragment below demonstrates how to paint the foreground and
	background of a single-line edit control in an application developed for the
	Microsoft Windows graphical environment. It creates a window that contains one
	single-line edit control and paints the edit control cyan on blue.
	
	Windows sends the WM_CTLCOLOR message to the parent of an edit control before the
	control is painted. If desired, the parent window, usually a dialog box
	procedure, can process this message and change the text and background colors of
	the control.
	
	NOTE: WM_CTRLCOLOR is obsolete on Windows NT and Windows 95. Instead, you would
	use WM_CTLCOLORBTN, WM_CTLCOLORDLG, WM_CTLCOLOREDIT, WM_CTLCOLORLISTBOX,
	WM_CTLCOLORMSGBOX, WM_CTLCOLORSCROLLBAR, or WM_CTLCOLORSTATIC.
	
	MORE INFORMATION
	================
	
	The following MainWndProc demonstrates WM_CTLCOLOR processing:
	
	    long FAR PASCAL MainWndProc(HWND hwnd, unsigned msg,
	                                 WORD wParam, LONG lParam)
	     {
	     static   HWND     hwndEdit;
	     static   HBRUSH   hBrush;
	
	        switch (msg)
	        {
	           case WM_CREATE:
	              {
	                 HDC hdc;
	                 TEXTMETRIC tm;
	
	                 hdc = GetDC(hwnd);
	                 GetTextMetrics(hdc, &tm);
	                 ReleaseDC(hwnd, hdc);
	
	                 hwndEdit = CreateWindow("edit", NULL,
	                                 WS_CHILD | WS_VISIBLE
	                                 | ES_AUTOHSCROLL | ES_MULTILINE,
	                                 10, 20, 100, tm.tmHeight,
	                                 hwnd, 1, hInst, NULL);
	
	                 // Create a blue brush to be used for the edit control's
	                 // background color.
	                 hBrush = CreateSolidBrush(RGB(0, 0, 255));
	              }
	              break;
	
	           case WM_CTLCOLOR:
	           {
	              // Set foreground and background colors only if this
	              // is an edit control.
	              if (HIWORD(lParam) == CTLCOLOR_EDIT)
	              {
	                 // Set the edit control's foreground text color to
	                 // cyan and the text's background color to blue.
	                 SetTextColor(wParam, RGB(0, 255, 255));
	                 SetBkColor(wParam, RGB(0, 0, 255));
	
	                 // Properly originate the background brush. This is
	                 // of use if the brush is a pattern instead of a
	                 // solid color.
	                 UnrealizeObject(hBrush);
	                 SetBrushOrg(wParam, 0, 0);
	
	                 // Return a handle to the background brush for the edit
	                 // control.
	                 return (DWORD)hBrush;
	              }
	           }
	           break;
	
	           case WM_SETFOCUS:
	              SetFocus(hwndEdit);
	              return 0;
	
	           case WM_DESTROY:
	              PostQuitMessage(0);
	              DeleteObject(hBrush);
	              break;
	        }
	        return DefWindowProc(hwnd, msg, wParam, lParam);
	     }
	
	Additional query words:
	
	======================================================================
	Keywords          : kb16bitonly kbCtrl kbEditCtrl kbGrpDSUser 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
