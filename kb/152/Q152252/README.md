---
layout: page
title: "Q152252: HOWTO: How To Get 32-bit Scroll Position During Scroll Messages"
permalink: /kb/152/Q152252/
---

## Q152252: HOWTO: How To Get 32-bit Scroll Position During Scroll Messages

	Article: Q152252
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.0,2.1,2.2,4.0,4.1
	Operating System(s): 
	Keyword(s): kbCtrl kbMFC kbScrollBar KbUIDesign kbVC200 kbVC400 kbVC410 kbGrpDSMFCATL
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 2.2, 4.0, 4.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The current scroll bar position accompanying the SB_THUMBTRACK and
	SB_THUMBPOSITION type of scroll messages is only 16-bits wide. Functions such as
	GetScrollPos, SetScrollPos, GetScrollRange, and SetScrollRange can handle 32-bit
	value scroll-box positions. This article discusses how the GetScrollInfo call
	can be used to retrieve 32-bit scroll position during scroll messages.
	
	MORE INFORMATION
	================
	
	One of the arguments to the MFC scroll message handlers, OnHScroll and
	OnVScroll, is the scroll box position. This argument is meaningful only in the
	case of scroll messages with scroll bar code SB_THUMBPOSITION and SB_THUMBTRACK.
	This value, even though of type UINT, is really of type short int. In other
	words, the scroll thumb position is only 16-bits wide. This behavior occurs
	because Windows sends the thumb position in the High Word of WPARAM accompanying
	the scroll message.
	
	To obtain 32-bit scroll positions, the OnxScroll handler should make a call to
	GetScrollInfo with the mask set to SIF_TRACKPOS. The immediate position of the
	scroll thumb is returned in the nTrackPos member of the SCROLLINFO structure
	passed in to GetScrollInfo.
	
	This functionality was embedded in MFC 4.0 classes and was handled by the
	function CWnd::OnWndMsg. However, this gave rise to other problems. As a
	consequence, the functionality was withdrawn in MFC 4.1 and it was left to the
	user to extract 32-bit values for the scroll box. For more information on this
	subject, please see the following article in the Microsoft Knowledge Base:
	
	  Q147684 BUG: Sending WM_xSCROLL Messages Causes Invalid ASSERT
	
	This method of extracting 32-bit scroll box positions works only in those scroll
	messages that are sent to a window when the user grabs the thumb and drags it.
	It is not possible to obtain 32-bit scroll box position in cases of
	programmatically sent SB_THUMBTRACK and SB_THUMBPOSITION scroll messages. First,
	the 32-bit information cannot be packed into the WPARAM of the messages because
	only the High Word contains the scroll position. Second, the nTrackPos member of
	the SCROLLINFO structure maintained for scroll bars cannot be set
	programmatically. Any calls to SetScrollInfo to set the immediate scroll
	positions are ignored by the operating system.
	
	Sample Code
	-----------
	
	     void CMyWnd::OnHScroll(UINT nSBCode, UINT nPos, CScrollBar* pScrollBar)
	     {
	         if(nSBCode == SB_THUMBTRACK || nSBCode == SB_THUMBPOSITION)
	         {
	         // First determine if the user scrolled a scroll bar control
	         // on the window or scrolled the window itself
	             HWND hWndScroll;
	             if ( pScrollBar == NULL )
	                 hWndScroll = m_hWnd;
	             else
	                 hWndScroll = pScrollBar->m_hWnd;
	
	             SCROLLINFO info;
	             info.cbSize = sizeof(SCROLLINFO);
	             info.fMask = SIF_TRACKPOS;
	             ::GetScrollInfo(hWndScroll, SB_HORZ, &info);
	
	             nPos = info.nTrackPos;
	         }
	
	        //......
	        //......
	     }
	
	Additional query words: 2.00 2.10 2.20 4.00 4.10 3.00 3.10 3.20 kbinf
	
	======================================================================
	Keywords          : kbCtrl kbMFC kbScrollBar KbUIDesign kbVC200 kbVC400 kbVC410 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:2.0,2.1,2.2,4.0,4.1
	Issue type        : kbhowto
	
	=============================================================================
	
