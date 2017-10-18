---
layout: page
title: "Q118472: PRB: SelectClipRgn() Cannot Grow Clip Region in WM_PAINT"
permalink: kb/118/Q118472/
---

## Q118472: PRB: SelectClipRgn() Cannot Grow Clip Region in WM_PAINT

	Article: Q118472
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1,95; winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbOSWinNT350 kbOSWinNT351 kbOSWinNT400 kbOSWin95 _IK kbSDKWin16
	Last Modified: 12-MAY-2001
	
	3.10 4.00 | 3.50 3.51 4.00
	WINDOWS   | WINDOWS NT
	kbgraphic kbprb docerr
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	- Microsoft Win32 Application Programming Interface (API) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Setting a smaller clipping region in WM_PAINT by using SelectClipRgn() works
	fine; however, setting a larger clipping region seems to have no effect.
	GetClipBox() can be used to verify this after calling SelectClipRgn().
	
	CAUSE
	=====
	
	When you call SelectClipRgn() within a BeginPaint()/EndPaint() block in an
	application's WM_PAINT case, the maximum size to which you can set your clipping
	region is the size of the update region of your paint structure. This is because
	the resulting clip region is the intersection of the update region and the
	region specified in the call to SelectClipRgn(). In other words, you can use
	SelectClipRgn() to shrink your update region, but not to grow it. This behavior
	is by design.
	
	RESOLUTION
	==========
	
	Invalidate the clipping region area you want before calling BeginPaint(). For
	example:
	
	     case WM_PAINT:
	
	     InvalidateRect(hWnd, ....); // Invalidate the size you'll want
	
	                                 // for the clip region.
	     BeginPaint()
	     SelectClipRgn();
	     ... paint away ...
	     EndPaint();
	     break;
	
	Something similar could be done in the Microsoft Foundation Classes (MFC), such
	as:
	
	     void CMyView::OnPaint()
	
	     {
	
	     InvalidateRect(...); // Invalidate the size you'll want.
	     CPaintDC dc(this);   // CPaintDC wraps BeginPaint()/EndPaint().
	     // Do drawing here...
	
	     }
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	This is addressed in the documentation for the Windows NT SDK version 3.1
	[Section 20.1.5, "Window Regions" in Chapter 20, "Painting and Drawing" in the
	"Microsoft Win32 Programmer's Reference, Volume 1" or in the Win32 API Reference
	online help (search on "Window Regions")] which states:
	
	In addition to the update region, every window has a visible region that defines
	the window portion visible to the user. The system changes the visible region
	for the window whenever the window changes size or whenever another window is
	moved such that it obscures or exposes a portion of the window. Applications
	cannot change the visible region directly, but Windows automatically uses the
	visible region to create the clipping region for any display DC retrieved for
	the window.
	
	The clipping region determines where the system permits drawing. When the
	application retrieves a display DC using the BeginPaint, GetDC, or GetDCEx
	function, the system sets the clipping region for the DC to the intersection of
	the visible region and the update region. Applications can change the clipping
	region by using functions such as SelectClipPath and SelectClipRgn, to further
	limit drawing to a particular portion of the update area.
	
	Additional query words: 3.10 4.00 SelectClipRegion big small large
	
	======================================================================
	Keywords          : kbOSWinNT350 kbOSWinNT351 kbOSWinNT400 kbOSWin95 _IK kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWin32sSearch kbWin32API kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1,95; winnt:3.5,3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
