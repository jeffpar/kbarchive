---
layout: page
title: "Q141357: BUG: WM_MOUSEMOVE Messages Returned Out of Sequence"
permalink: /kb/141/Q141357/
---

## Q141357: BUG: WM_MOUSEMOVE Messages Returned Out of Sequence

	Article: Q141357
	Product(s): Microsoft C Compiler
	Version(s): MACINTOSH:2.0,4.0
	Operating System(s): 
	Keyword(s): kbHWMAC kbMFC kbMouse KbUIDesign kbVC200bug kbVC400bug kbWndwMsg kbGrpDSMFCATL
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, Macintosh Cross-Development Addon, versions 2.0, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you move the mouse pointer over a window, some of the WM_MOUSEMOVE messages
	arrive out of order. For example, when you draw using the Scribble sample
	program, an old point is occasionally received causing a zig-zag effect.
	
	CAUSE
	=====
	
	There is a bug in the WLM implementation of ::PeekMessage that causes some of
	the mouse move messages to be retrieved later.
	
	
	RESOLUTION
	==========
	
	Check the time field of the MSG record of the current message when processing a
	WM_MOUSEMOVE message. If the time is older than that of the previous
	WM_MOUSEMOVE message, discard the message. See the Sample Code section of this
	article for an example.
	
	An alternative solution is to use Mac APIs (such as StillDown() and GetMouse())
	directly to track the mouse until the button is released. This method
	dramatically increases mouse tracking and is a common method that native
	Macintosh applications use. Keep in mind that this will keep the system locked
	until the mouse is released.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The WLM message system was designed by imitating Window's message system using
	the Macintosh API. The bug is more precisely related to the WLM message system
	used by ::PeekMessage.
	
	This problem is very apparent in the released version of the target Macintosh
	executable using Visual C++ 2.0 (try the Scribble sample program). It occurs
	much less frequently on Visual C++ 4.0 but it still exists.
	
	Sample Code
	-----------
	
	     // Method one
	     // Check by timestamp of messages
	
	     void CMyView::OnMouseMove(UINT, CPoint point)
	     {
	         ...
	         static DWORD lastTime = 0;
	         if (lastTime > GetCurrentMessage()->time)
	             return; // discard message
	         else
	             lastTime = GetCurrentMessage()->time;
	         // process message
	     }
	
	     // Method two
	     // Use native MacOS calls to track mouse movements
	
	     #ifdef _MAC
	     #include <macname1.h>
	     #include <Types.h>
	     #include <Events.h>
	     #include <macname2.h>
	     #endif
	
	     void CMyView::OnLButtonDown(UINT nFlags, CPoint point)
	     {
	     #ifdef _MAC
	        Point macPt;    // Mac specific data type
	        CPoint winPt;   // temp Windows Point var
	
	        while(StillDown()) {
	           GetMouse(&macPt);       // Get GLOBAL mouse coordinates
	           winPt.x = macPt.h;      // Convert to windows struct
	           winPt.y = macPt.v;
	           ScreenToClient(&winPt); // Convert to Client Coordinates
	           TRACE("Where? (%d,%d)\n", winPt.x, winPt.y);
	        }
	     #else
	        CView::OnLButtonDown(nFlags, point);
	     #endif
	     }
	
	REFERENCES
	==========
	
	Books Online - WM_MOUSEMOVE, ::PeekMessage, GetCurrentMessage
	68k Porting Reference - PeekMessage
	Inside Macintosh - Macintosh Toolbox Essentials
	
	Additional query words:
	
	======================================================================
	Keywords          : kbHWMAC kbMFC kbMouse KbUIDesign kbVC200bug kbVC400bug kbWndwMsg kbGrpDSMFCATL 
	Technology        : kbVCsearch kbHWMAC kbOSMAC kbAudDeveloper kbVCXDev200Mac kbVCXDev400Mac
	Version           : MACINTOSH:2.0,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
