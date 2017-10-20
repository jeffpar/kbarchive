---
layout: page
title: "Q80898: Windows 3.1 Application Compatibility (part 3 of 7)"
permalink: /kb/080/Q80898/
---

## Q80898: Windows 3.1 Application Compatibility (part 3 of 7)

{% raw %}

	Article: Q80898
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Application Compatibility Document for Windows 3.1
	--------------------------------------------------
	
	Due to the amount of information in this document, it has been broken into seven
	pieces. To find all seven pieces of this document and the Windows 3.1
	Compatibility Test checklist, query this knowledge base on the words:
	
	  prod(winsdk) and 31compattest
	
	PAINTING
	--------
	
	In Windows version 3.1, Window management is substantially optimized to avoid
	unnecessary redrawing and flashing. Applications that depend in subtle ways on
	when (and if) WM_NCPAINT, WM_ERASEBKGND, and WM_PAINT messages are sent may have
	incompatibilities. Windows version 3.0 frequently sent these messages
	redundantly to windows and sometimes sent them to invisible windows. One of the
	most apparent visual results of these optimizations is that a window's nonclient
	area is not always repainted completely when a window is sized or moved. Some
	attempt has been made to ensure compatibility, but some differences still cannot
	be backward compatible and achieve the significant performance and visual
	advantages.
	
	In a Windows version 3.0 application, sending the WM_SETREDRAW message with
	wParam set to FALSE to a window that had an update area does not validate the
	window. The update area is still present after a WM_SETREDRAW message with
	wParam set to TRUE. In a Windows version 3.1 application, WM_SETREDRAW with
	wParam set to FALSE validates the window completely to ensure that the window
	does not receive any WM_PAINT messages while it is invisible. This does not
	apply to edit controls, list boxes, and combo boxes because their WM_SETREDRAW
	messages are handled in a special-case manner.
	
	Potential Problem
	-----------------
	
	Any Windows version 3.0 application whose version number is changed to 3.1 may
	encounter problems if it depends on retaining the update area after a
	WM_SETREDRAW message.
	
	In a Windows version 3.0 application, when InvalidateRect or InvalidateRgn is
	called with NULL to invalidate the entire window, all child windows are also
	completely invalidated -- regardless of whether the child window is outside the
	parent's client area (that is, invisible). This results in WM_PAINT messages
	being sent to windows that don't require them. In a Windows version 3.1
	application, only windows that are actually visible within a parent's client
	area receive update regions and therefore WM_PAINT messages.
	
	Potential Problem
	-----------------
	
	Any Windows version 3.0 application whose version number is changed to 3.1 may
	encounter problems if it depends on its child windows receiving WM_PAINT
	messages even when invisible.
	
	In a Windows version 3.0 application, Windows sends a WM_SETVISIBLE message
	immediately after sending the WM_SHOWWINDOW message. In a Windows version 3.1
	application, Windows does not send the WM_SETVISIBLE message -- WM_SETVISIBLE is
	obsolete for Windows version 3.1.
	
	Potential Problem
	-----------------
	
	Any Windows version 3.0 application whose version number is changed to 3.1 may
	encounter problems if it depends on receiving the WM_SETVISIBLE message.
	
	In a Windows version 3.0 application, if BeginPaint is called on a window that
	has a class icon, the function returns a window DC. This is different from the
	GetDC function that returns a client DC with no visible region. In a Windows
	version 3.1 application, BeginPaint and GetDC both return a client DC with no
	visible region.
	
	Potential Problem
	-----------------
	
	Any Windows version 3.0 application whose version number is changed to 3.1 may
	encounter problems if it depends on receiving a window DC from BeginPaint.
	
	If a Windows version 3.0 application responds with FALSE to a WM_ERASEBKGND
	message sent during any operation other than BeginPaint (such as SetWindowPos),
	another WM_ERASEBKGND message is sent when the application calls BeginPaint. If
	a Windows version 3.1 application responds with FALSE, no second WM_ERASEBKGND
	message is sent, but BeginPaint sets the fErase member of the PAINTSTRUCT
	structure to TRUE.
	
	Potential Problem
	-----------------
	
	Any Windows version 3.0 application whose version number is changed to 3.1 may
	encounter problems if it does not check the fErase member after calling
	BeginPaint.
	
	In Windows version 3.0, the various controls call the UpdateWindow function at
	inappropriate times, such as on receiving a WM_SETFOCUS message, and at other
	times when changing the internal state. This often leads to strange looking
	displays, because controls draw all or part of themselves at odd times. In
	Windows version 3.1, the controls do not call UpdateWindow as often, which
	speeds up and improves the appearance of window repainting.
	
	Potential Problem
	-----------------
	
	Some controls may not get redrawn properly if they are moved or hidden before
	they get a chance to process a WM_PAINT message.
	
	Tests
	-----
	
	1. Minimize your application, and start another application. Restore your
	  application. Be sure it paints correctly.
	
	2. Start your application with another Windows-based application, such as one of
	  the accessories. Bring the other application to the foreground, covering your
	  application. Switch back to your application. Be sure it painted correctly.
	
	3. Start several applications. Use ALT+TAB to switch between them. Be sure your
	  application repaints correctly.
	
	SCROLLING
	---------
	
	In a Windows version 3.0 application, the ScrollWindow function has a number of
	bugs associated with scrolling a window that had any invalid area. Frequently,
	the update region that results after the scrolling operation is not properly
	calculated. In a Windows version 3.1 application, ScrollWindow calculates the
	update region correctly.
	
	Potential Problem
	-----------------
	
	Any Windows version 3.0 application whose version number is changed to 3.1 may
	encounter problems if it works around the Windows version 3.0 bugs.
	
	Test
	----
	
	Run your application and try a variety of scrolling operations.
	
	MULTIPLE-DOCUMENT INTERFACE (MDI)
	---------------------------------
	
	For Windows 3.0 applications, MDI is completely compatible with Windows 3.0. For
	Windows 3.1 applications, MDI has been enhanced. In particular, specifying the
	low-order style bit (MDIS_ALLCHILDSTYLES) when creating an MDICLIENT window
	enables the new Windows 3.1 MDI capabilities for that window. This gives
	applications control over all MDI child window styles and allows for hidden
	windows.
	
	Potential Problem
	-----------------
	
	Any Windows 3.0 application whose version number is changed to 3.1 may encounter
	problems if it unintentionally sets the low-order style bit when creating an
	MDICLIENT window.
	
	WINDOWS HOOKS
	-------------
	
	In Windows version 3.0, three hook functions are available: SetWindowsHook,
	UnhookWindowsHook, and DefHookProc. In Windows version 3.1, three more-powerful
	functions replace these functions: SetWindowsHookEx, UnhookWindowsHookEx, and
	CallNextHookEx. Microsoft strongly recommends that a Windows version 3.1
	application use the new functions. The old functions are still supported for
	backward compatibility.
	
	In Windows version 3.0, an application or a DLL that installs a hook must
	maintain the hook chain. In Windows version 3.1, Windows maintains the hook
	chains. As a result, subtle changes in the interface may affect Windows version
	3.0 applications. Furthermore, Windows version 3.1 no longer allows applications
	and DLLs to enumerate all the functions in a hook chain. In particular, Windows
	version 3.1 no longer supports the HC_GETLPLPFN, HC_LPLPFNNEXT, and HC_LPFNNEXT
	values for the DefHookProc function.
	
	In Windows version 3.0, SetWindowsHook returns a pointer to the next hook
	function. In Windows version 3.1, SetWindowsHook does not return a pointer;
	instead, it returns a 32-bit value that identifies the next hook function.
	
	Potential Problem
	-----------------
	
	An application that attempts to call the next hook function by using the return
	value from SetWindowsHook as a function address will cause a GP fault.
	
	In Windows version 3.0, Windows passes negative hook values to hook functions
	when unhooking a hook. These negative values are for Windows internal use only.
	In Windows version 3.1, Windows does not pass negative hook values to hook
	functions; it uses another method to unhook a hook.
	
	Potential Problem
	-----------------
	
	An application's hook function fails if it depends on receiving negative hook
	codes to carry out specific tasks.
	
	A Windows version 3.0 application can unhook a hook function by passing the
	address of the next hook function to the SetWindowsHook function. In Windows
	version 3.1, passing the address of the next hook function causes a RIP in the
	Windows version 3.1 debugging version. In Windows version 3.0, SetWindowsHook
	never fails and so never returns an error value. In Windows version 3.1,
	SetWindowsHook can fail, and when it does so, it returns the error value -1L.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
