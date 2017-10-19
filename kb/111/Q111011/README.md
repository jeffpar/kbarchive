---
layout: page
title: "Q111011: Changing the Style of the Main Window"
permalink: /kb/111/Q111011/
---

## Q111011: Changing the Style of the Main Window

	Article: Q111011
	Product(s): Miscellaneous Software Development Kits
	Version(s): 2.0,2.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Multimedia Viewer Publishing Toolkit, versions 2.0, 2.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The style of Viewer's main window can be changed using the Windows
	SetWindowLong() function. The prototype for SetWindowLong() is
	
	     LONG SetWindowLong(HWND hwnd, int nOffset, LONG nVal)
	
	where hwnd is the handle of the window, nOffset is the offset of the value to
	change, and nVal is the new value for the offset. Further documentation for the
	SetWindowLong() function can be found in the documentation for the Windows 3.1
	Software Development Kit (SDK). To change the window style, the value -16 (which
	is the value of the Windows constant GWL_STYLE) should be specified for nOffset.
	The possible values for nVal are combinations of:
	
	  WS_CLIPSIBLINGS:     0x04000000
	  WS_CLIPCHILDREN:     0x02000000
	  WS_VISIBLE:          0x10000000
	  WS_DISABLED:         0x08000000
	  WS_MINIMIZE:         0x20000000
	  WS_MAXIMIZE:         0x01000000
	  WS_CAPTION:          0x00C00000
	  WS_BORDER:           0x00800000
	  WS_DLGFRAME:         0x00400000
	  WS_VSCROLL:          0x00200000
	  WS_HSCROLL:          0x00100000
	  WS_SYSMENU:          0x00080000
	  WS_THICKFRAME:       0x00040000
	  WS_MINIMIZEBOX:      0x00020000
	  WS_MAXIMIZEBOX:      0x00010000
	
	These values would be combined simply by or'ing them together. Each call to
	SetWindowLong() completely replaces the previous styles for the window with the
	new styles specified in the nVal parameter. By default, the main Viewer window
	has the styles WS_VISIBLE, WS_CLIPSIBLINGS, WS_CLIPCHILDREN, WS_CAPTION,
	WS_SYSMENU, WS_THICKFRAME, WS_MINIMIZEBOX, and WS_MAXIMIZEBOX (that is,
	nVal=0x16CF0000).
	
	To use SetWindowLong() from Viewer, it must be registered in the [CONFIG] section
	of the .MVP file as follows:
	
	     RegisterRoutine(`user',`SetWindowLong',`UiU')
	
	SetWindowLong() can then be called from anywhere within the title with hwndApp as
	the first parameter, -16 as the second parameter, and the appropriate new style
	value in the third parameter. Microsoft recommends always including the
	WS_VISIBLE, WS_CLIPSIBLINGS, and WS_CLIPCHILDREN styles in the new value. That
	means the value of nVal would always be at least 0x16000000.
	
	Note that SetWindowLong() is registered with the first parameter as an unsigned
	long (U) even though the SetWindowLong() function properly takes an HWND, which
	is an unsigned short int (u) in Windows 3.1, as the first parameter.
	SetWindowLong() must be registered this way if the internal hwndApp variable,
	which is an unsigned long, is to be passed to it. Because of the way arguments
	are passed, SetWindowLong() will still work correctly; the high word of hwndApp,
	which is zero-filled, will be ignored. However, if an unsigned short value will
	be passed to SetWindowLong(), then RegisterRoutine() must specify "u" for the
	first parameter. A Viewer title could obtain an unsigned short window handle by
	calling one of the Windows functions such as GetParent().
	
	To remove the maximize box from the main Viewer window, the SetWindowLong() call
	would look as follows:
	
	     SetWindowLong(hwndApp,-16,0x16CE0000)
	
	To cause the main window frame to be redrawn immediately after the change to its
	style, you may need to call the Windows function SetWindowPos(). It can be
	registered as follows
	
	     RegisterRoutine(`user',`SetWindowPos',`Uuiiiiu')
	
	and then it can be called from anywhere within the title as follows:
	
	     SetWindowPos(hwndApp,0,0,0,0,0,39)
	
	The SetWindowPos() call above is equivalent to calling
	SetWindowPos(hwndApp,0,0,0,0,0,SWP_DRAWFRAME | SWP_NOMOVE | SWP_NOSIZE |
	SWP_NOZORDER) using the Windows constants defined in the WINDOWS.H include file
	from the Windows SDK.
	
	MORE INFORMATION
	================
	
	The following list describes the styles mentioned above:
	
	WS_BORDER - Creates a window that has a border.
	
	WS_CAPTION - Creates a window that has a title bar (implies the WS_BORDER style).
	This style cannot be used with the WS_DLGFRAME style.
	
	WS_CLIPCHILDREN - Excludes the area occupied by child windows when drawing within
	the parent window. Used when creating the parent window.
	
	WS_CLIPSIBLINGS - Clips child windows relative to each other; that is, when a
	particular child window receives a paint message, the WS_CLIPSIBLINGS style
	clips all other overlapped child windows out of the region of the child window
	to be updated. (If WS_CLIPSIBLINGS is not specified and child windows overlap,
	it is possible, when drawing within the client area of a child window, to draw
	within the client area of a neighboring child window.) For use with the WS_CHILD
	style only.
	
	WS_DISABLED - Creates a window that is initially disabled.
	
	WS_DLGFRAME - Creates a window with a double border but no title.
	
	WS_HSCROLL - Creates a window that has a horizontal scroll bar.
	
	WS_MAXIMIZE - Creates a window of maximum size.
	
	WS_MAXIMIZEBOX - Creates a window that has a Maximize button.
	
	WS_MINIMIZE - Creates a window that is initially minimized. For use with the
	WS_OVERLAPPED style only.
	
	WS_MINIMIZEBOX - Creates a window that has a Minimize button.
	
	WS_SYSMENU - Creates a window that has a System-menu box in its title bar. Used
	only for windows with title bars.
	
	WS_THICKFRAME - Creates a window with a thick frame that can be used to size the
	window.
	
	WS_VISIBLE - Creates a window that is initially visible. This applies to
	overlapped, child, and pop-up windows. For overlapped windows, the y parameter
	is used as a ShowWindow function parameter.
	
	WS_VSCROLL - Creates a window that has a vertical scroll bar.
	
	Note that one can determine the current styles of the main Viewer window using
	the Spy utility shipped with the Windows SDK. Choose Window\Window from Spy's
	menu. Then position the cursor over the main Viewer window. Spy will display the
	style of the window in the last line of the "Spy Window" dialog box.
	
	Additional query words: 2.00 2.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbHomeMMsearch kbMMViewer200 kbMMViewer200a
	Version           : :2.0,2.0a
	
	=============================================================================
	
