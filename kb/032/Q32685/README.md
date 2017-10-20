---
layout: page
title: "Q32685: INFO: Using the WM_CTLCOLOR Message"
permalink: /kb/032/Q32685/
---

## Q32685: INFO: Using the WM_CTLCOLOR Message

{% raw %}

	Article: Q32685
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbCtrl kbSDKPlatform kbWndwMsg
	Last Modified: 09-JUN-1999
	
	3.00 3.10
	WINDOWS
	kbprg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A WM_CTLCOLOR message is sent to a window each time one of its child window
	controls (radio button, check box, scroll bar, and so forth) is to be painted on
	the screen. This message precedes the painting of the control. When it is
	desirable to change the appearance of controls, this can be done by processing
	the WM_CTLCOLOR message.
	
	MORE INFORMATION
	================
	
	When WM_CTLCOLOR is sent, wParam contains a handle to the display context for
	the child window (in this case the control). The LOWORD of lParam identifies the
	child window by its ID number, and the HIWORD of lParam contains one of the
	following values, specifying the type of control that is to be drawn:
	
	  CTLCOLOR_BTN            button control
	  CTLCOLOR_DLG            dialog box
	  CTLCOLOR_EDIT           edit control
	  CTLCOLOR_LISTBOX        list box
	  CTLCOLOR_MSGBOX         message box
	  CTLCOLOR_SCROLLBAR      scroll bar
	  CTLCOLOR_STATIC         static text, frame, or rectangle
	
	When WM_CTLCOLOR is processed, a handle to a brush must be returned. Failure to
	return a brush handle will result in a Windows FatalExit on the debugging
	monitor in the debug version of Windows.
	
	DefWindowProc() already returns a handle in response to this message; however, an
	application can return a different handle to customize the color of controls.
	The handle that is returned specifies the brush to be used to paint the control.
	For example, in Windows 2.x, the following code paints the background of all
	buttons light gray:
	
	     case WM_CTLCOLOR:
	        if (HIWORD(lParam) == CTLCOLOR_BTN)
	            return (GetStockObject(LTGRAY_BRUSH));
	
	            return (GetStockObject(WHITE_BRUSH));
	
	In this case, the backgrounds for all other controls are painted white. Note that
	GetStockObject() returns a handle to the stock brush specified by the parameter.
	To change the background color of a button control in Windows 3.0 and later, it
	is necessary to create an owner draw button.
	
	Returning a brush handle presents some interesting possibilities because brush
	handles are not limited to those returned from GetStockObject(). Pattern brushes
	can be built from bitmaps. If a pattern brush handle is returned in response to
	a WM_CTLCOLOR message, the brush would be used to paint the background of
	controls.
	
	The following code changes the painting of a scroll bar's thumb track area to the
	basket-weave pattern found in Paint:
	
	     /* Add these global variables. The array of WORDs specifies the */ 
	     /* pattern for the brush                                        */ 
	     HBRUSH  hBrush;
	     HBITMAP hBitmap;
	     WORD    wWeave[]={0x0F, 0x8B, 0xDD, 0xB8, 0x70, 0xE8, 0xDD, 0x8E};
	
	      ...
	
	     /* Add these lines to WinMain                                   */ 
	     hBitmap = CreateBitmap(8, 8, 1, 1, (LPSTR)wWeave);
	     hBrush = CreatePatternBrush(hBitmap);
	
	      ...
	
	     /* Add this case to the Windows procedure or wherever the       */ 
	     /* messages are processed.                                      */ 
	      case WM_CTLCOLOR:
	          if (HIWORD(lParam) == CTLCOLOR_SCROLLBAR)
	              return (hBrush);
	
	          return (GetStockObject(WHITE_BRUSH));
	
	The WM_CTLCOLOR message also applies to the following five classes of controls:
	
	1. Check boxes, radio buttons, and push buttons: Paints the rectangular area on
	  which control is placed with selected brush; control shape and text is drawn
	  over the painted pattern.
	
	2. Edit control: Paints the editing area.
	
	3. Group box: Paints the rectangular area behind the title text.
	
	4. Scroll bars: Paints the area around the thumb track.
	
	5. List box: Paints the listing area.
	
	Static text, frames, and rectangles are unaffected by WM_CTLCOLOR.
	
	NOTE: In Windows 3.0 and later, an application cannot change the color of a
	button face. However, the user can use the Control Panel to change the button
	colors for all applications in the system. This can also be accomplished by
	modifying the [colors] section of the WIN.INI file to add a "ButtonFace=" line
	that specifies the RGB color value for the button face color.
	
	Processing the WM_CTLCOLOR message only changes the color of child windows
	created by an application. Windows sends the WM_CTLCOLOR message to the parent
	window of each of these controls. Scroll bars that are included by Windows as a
	part of edit controls or list boxes are not affected. The thumb track area of
	system-generated scroll bars can only be changed in WIN.INI or through the
	Control Panel.
	
	It is also possible to paint the entire background of a dialog box. The following
	code can be used to provide a dialog box color:
	
	     long FAR PASCAL MainWindowProc(....);
	
	           ...
	
	     case WM_CREATE:
	        hTempBrush = LoadBitmap(hInst, (LPSTR)"MyPatternBrush");
	        hBrush = CreatePatternBrush(hTempBrush);
	        DeleteObject(hTempBrush);
	
	           ...
	
	     case WM_DESTROY:
	        DeleteObject(hBrush);
	
	           ...
	
	     BOOL FAR PASCAL 
	        MyDialogProc(....);
	
	          ...
	
	     case WM_CTLCOLOR:
	        if (bMonoChrome)
	           return (FALSE);   // Do nothing if on a monochrome monitor
	                             // bMonoChrome is a global set during
	                             // initialization.
	
	        if (CTLCOLOR_DLG == HIWORD(lParam))
	           UnrealizeObject(hBrush);
	
	        SelectObject((HDC)wParam, hBrush);
	
	        if (CTLCOLOR_DLG == HIWORD(lParam))
	           SetBrushOrg((HDC)wParam, 0, 0);
	
	        SetBkMode((HDC)wParam, TRANSPARENT);
	
	        SetTextColor((HDC)wParam, RGB(0, 0, 0));
	
	        return(hBrush);
	
	           ...
	
	This code will ensure that a patterned bitmap will line up correctly across the
	entire dialog box. "MyPatternBrush" is the name of a bitmap created using
	SDKPaint. This bitmap must be included in the .RC file.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly kbCtrl kbSDKPlatform kbWndwMsg 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
