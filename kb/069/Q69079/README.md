---
layout: page
title: "Q69079: HOWTO: How to Give a 3-D Effect to Windows Controls"
permalink: /kb/069/Q69079/
---

## Q69079: HOWTO: How to Give a 3-D Effect to Windows Controls

	Article: Q69079
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbCtrl kbSDKPlatform
	Last Modified: 10-JUN-1999
	
	3.00 3.10
	WINDOWS
	kbprg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It is possible for an application to give edit controls, list boxes, and static
	text a three-dimensional (3-D) appearance. Each control can be made to appear
	recessed into the surface of its parent dialog box, or raised above it. This
	article contains the code necessary to implement this effect.
	
	MORE INFORMATION
	================
	
	There are three steps required to give a particular control a 3-D appearance:
	
	1. Remove the WS_BORDER attribute from the control specification in the dialog
	  box template. This will cause the background of the control to "blend" into
	  the background of the dialog box.
	
	2. In the WM_PAINT message of the control's parent dialog function, post a
	  user-defined message to the dialog function. Return FALSE for the processing
	  of WM_PAINT message so that all other painting will take place. By posting
	  the user-defined message, the Dialog Manager will do its painting first, then
	  the three-dimensional appearance will be added.
	
	3. During the processing of the user defined message, call DrawIndent() for each
	  control. DrawIndent() will draw a highlight color on the right side and
	  bottom of the control, and a shadow color on the top and left sides of the
	  control. This will give the appearance that the control is recessed into the
	  dialog box. To make the control appear raised above the dialog, reverse the
	  highlight and shadow colors in the DrawIndent() function call.
	
	On systems with a monochrome display, DrawIndent() will only draw a single black
	border.
	
	The following code shows how to use DrawIndent():
	
	     ...
	
	     case WM_PAINT:
	        PostMessage(hDlg, WM_COMMAND, IDM_REPAINT, 0L);
	        return FALSE;
	
	     case WM_COMMAND:
	        switch (wParam)
	          {
	          case IDM_REPAINT:
	            DrawIndent(hDlg, IDD_FIELD1);
	            DrawIndent(hDlg, IDD_FIELD2);
	
	              ...
	
	            DrawIndent(hDlg, IDD_FIELDN);
	            break;
	
	     ...
	
	The following is the code for DrawIndent():
	
	     void DrawIndent(HWND hDlg, int ID)
	
	     // Assumptions:
	     // 
	     // hDlg        is a valid window handle.
	     // ID          is a valid control ID.
	     // bMonochrome is a flag that is TRUE for a monochrome system.
	     // 
	
	     {
	     RECT rRect;
	     HDC  hDC;
	     HPEN hOldPen;
	
	     GetClientRect(GetDlgItem(hDlg, ID), (LPRECT)&rRect);
	
	     // By modifying the parameters this way, things are centered a bit
	     // better.
	
	     rRect.left   -= 2;
	     rRect.bottom -= 1;
	     rRect.top    -= 3;
	
	     hDC = GetDC(GetDlgItem(hDlg, ID));
	
	     // Draw the Shadow
	
	     hOldPen = SelectObject(hDC, GetStockObject(BLACK_PEN));
	
	     MoveTo(hDC, rRect.left-1, rRect.bottom+1);
	     LineTo(hDC, rRect.left-1, rRect.top-1);
	     LineTo(hDC, rRect.right+1, rRect.top-1);
	
	     if (!bMonochrome)
	
	      {
	      MoveTo(hDC, rRect.left-2, rRect.bottom+2);
	      LineTo(hDC, rRect.left-2, rRect.top-2);
	      LineTo(hDC, rRect.right+2, rRect.top-2);
	
	      // On color systems, select the highlight color
	      SelectObject(hDC, GetStockObject(WHITE_PEN));
	      }
	
	     // Draw the Highlight (still shadow for mono systems)
	
	     MoveTo(hDC, rRect.right+1, rRect.top-1);
	     LineTo(hDC, rRect.right+1, rRect.bottom+1);
	     LineTo(hDC, rRect.left-1, rRect.bottom+1);
	
	     if (!bMonochrome)
	
	      {
	      MoveTo(hDC, rRect.right+2, rRect.top-2);
	      LineTo(hDC, rRect.right+2, rRect.bottom+2);
	      LineTo(hDC, rRect.left-2, rRect.bottom+2);
	      }
	
	     // Housekeep
	
	     SelectObject(hDC, hOldPen);
	     ReleaseDC(GetDlgItem(hDlg, ID), hDC);
	     }
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q97361 Adding 3-D Controls Using CTL3D.DLL
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly kbCtrl kbSDKPlatform 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbhowto
	
	=============================================================================
	
