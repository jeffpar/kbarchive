---
layout: page
title: "Q104963: BUG: SelectClipRgn() Does Not Update Properly on Printer"
permalink: /kb/104/Q104963/
---

## Q104963: BUG: SelectClipRgn() Does Not Update Properly on Printer

	Article: Q104963
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbOSWin310 _IK kbSDKWin16
	Last Modified: 09-JUL-1999
	
	3.10
	WINDOWS
	kbprg kbbuglist
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In a Windows 3.1 printing application, calling SelectClipRgn() with the second
	parameter set to NULL to reset the clipping region to clip output to the printer
	page does not reset the clipping region. Clipping on the printer device context
	is still set to the clipping region specified in the previous call to
	SelectClipRgn().
	
	CAUSE
	=====
	
	The HP LaserJet II and HP LaserJet III printer drivers do not handle the call to
	SelectClipRgn() properly when the hrgn parameter is set to NULL. Instead of
	setting the clipping region to be the entire printable page (as it should), the
	call has no effect and the previous clipping region is still the device
	context's clipping region.
	
	RESOLUTION
	==========
	
	Instead of sending NULL as the hrgn parameter to SelectClipRgn(), create a
	region of the printable area of the page and send that region as the hrgn
	parameter. This will give the desired effect of calling SelectClipRgn(hPrnDC,
	NULL). The following is an example of how this workaround could be implemented:
	
	     HRGN hRgn,hPageRgn;
	     POINT pt;
	
	     SelectClipRgn(hPrnDC,hRgn=CreateRectRgn(200,200,500,500));
	     // .  .  .
	     // SelectClipRgn(hPrnDC,NULL);
	     // Instead of calling the above function, try this:
	     pt.x=GetDeviceCaps(hPrnDC,HORZRES);
	     pt.y=GetDeviceCaps(hPrnDC,VERTRES);
	     SelectClipRgn(hPrnDC,hPageRgn=CreateRectRgn(0,0,pt.x,pt.y));
	     DeleteObject(hRgn);
	     DeleteObject(hPageRgn);
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	Additional query words: buglist3.10 3.10
	
	======================================================================
	Keywords          : kbOSWin310 _IK kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
