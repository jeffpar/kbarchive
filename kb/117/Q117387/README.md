---
layout: page
title: "Q117387: PRB: CScrollView::FillOutsideRect() Fills Incorrectly"
permalink: /kb/117/Q117387/
---

## Q117387: PRB: CScrollView::FillOutsideRect() Fills Incorrectly

{% raw %}

	Article: Q117387
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbDocView kbMFC kbVC100bug kbVC150bug kbVC200fix kbDSupport kbprbkbbuglist kbfixlist
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, versions 1.0, 1.5 
	   - Microsoft Visual C++ 32-bit Edition, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Calling CScrollView::FillOutsideRect() incorrectly fills the area outside of the
	scrolling area that belongs to the CScrollView.
	
	CAUSE
	=====
	
	In the file VIEWSCRL.CPP, in the Visual C++ MFC\SRC directory, FillOutsideRect()
	has the following implementation:
	
	     void CScrollView::FillOutsideRect(CDC* pDC, CBrush* pBrush)
	     {
	        ASSERT_VALID(pDC);
	        ASSERT_VALID(pBrush);
	        // Fill Rect outside the image
	        CRect rect;
	        GetClientRect(rect);
	        ASSERT(rect.left == 0 && rect.top == 0);
	        rect.left = m_totalDev.cy;
	        if (!rect.IsRectEmpty())
	           pDC->FillRect(rect, pBrush);    // vertical strip along the side
	        rect.left = 0;
	        rect.right = m_totalDev.cy;
	        rect.top = m_totalDev.cy;
	        if (!rect.IsRectEmpty())
	           pDC->FillRect(rect, pBrush);    // horizontal strip along the
	                                           // bottom
	
	     }
	
	This implementation is incorrect because it sets rect.left and rect.right to
	"m_totalDev.cy", instead of setting them equal to "m_totalDev.cx".
	
	This causes the first rectangle filled to have its left border begin at the
	coordinate "m_totalDev.cy" (the bottom border of the scrollable area of the
	view) when it should be at the coordinate of the right border of the view (that
	is, "m_totalDev.cx"). Similarly, the second rectangle filled has its right
	border ending at the coordinate "m_totalDev.cy" (always the bottom border of the
	scrollable area of the view) when it should be at the coordinate of the right
	border of the view.
	
	RESOLUTION
	==========
	
	Modify the MFC source file, VIEWSCRL.CPP, to read as follows:
	
	     rect.left = m_totalDev.cx;
	     rect.right = m_totalDev.cx;
	
	Rebuild the MFC libraries with this change. The README.TXT file in the Visual C++
	MFC\SRC directory describes how to do this.
	
	NOTE: You will need to have your system configured to build from the command
	prompt. Running the MSVCVARS.BAT or VCVARS32.BAT file in your BIN directory sets
	your environment correctly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the products listed at the beginning
	of this article. This problem was corrected in the MFC 3.0 included with Visual
	C++ 2.0.
	
	MORE INFORMATION
	================
	
	To reproduce this problem, open the DIBLOOK MFC sample, and use Class Wizard to
	map the WM_ERASEBKGND message of CDibView to the following code, taken from the
	online help for FillOusideRect():
	
	     BOOL CDibView::OnEraseBkgnd(CDC* pDC)
	     {
	        CBrush br( GetSysColor( COLOR_ACTIVECAPTION ) );
	        FillOutsideRect( pDC, &br );
	        return TRUE;                   // Erased
	     }
	
	After rebuilding DIBLOOK, use it to load a bitmap whose height is greater than
	its width (WINNT.BMP is one example). There will be an unfilled area at the
	right of the bitmap.
	
	The problem occurs with any bitmap that has its height greater than its width. In
	these conditions, the area defined by
	
	     (BitmapWidth) < x < (BitmapWidth) + (BitmapHeight - BitmapWidth)
	     (0)           < y < (BitmapHeight)
	
	is never painted.
	
	Additional query words: 1.00 1.50 2.00 2.10 2.50
	
	======================================================================
	Keywords          : kbDocView kbMFC kbVC100bug kbVC150bug kbVC200fix kbDSupport kbprb kbbuglist kbfixlist
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
