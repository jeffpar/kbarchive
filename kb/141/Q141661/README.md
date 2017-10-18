---
layout: page
title: "Q141661: FIX: Access Violation Firing an Error Event in OLE Control"
permalink: kb/141/Q141661/
---

## Q141661: FIX: Access Violation Firing an Error Event in OLE Control

	Article: Q141661
	Product(s): Microsoft C Compiler
	Version(s): 2.00 2.10 2.20
	Operating System(s): 
	Keyword(s): kbole kbCtrlkbbuglist kbfixlist
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 2.0, 2.1, 2.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An access violation occurs when the error event is fired in an OLE Control. This
	occurs on the first firing of an error event in Release builds and only after
	several firings in Debug builds.
	
	CAUSE
	=====
	
	An invalid "this" pointer is being loaded off the stack on a call to
	ExternalRelease() at the end of COleControl::FireEvent().
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Microsoft Visual C++,
	32-bit Edition, version 4.0.
	
	MORE INFORMATION
	================
	
	To reproduce this problem, add the stock Error event to an OLE Control using
	ClassWizard's OLE Events tab. The name given the member function to fire the
	event will be FireError. In the OnLButtonDown handler of the OLE Control, call
	FireError() and pass the following parameters:
	
	  FireError(CTL_E_OUTOFMEMORY, " ");
	
	This causes the SCODE of the error to be 0x800A0007 (CTL_E_OUTOFMEMORY), and the
	description string to be " ", a single space followed by a NULL byte. The rest
	of the parameters will be defaults.
	
	Now, run the test container, insert your control, and click the control's client
	area. In Release builds, this causes an access violation on the first occurrence
	of the event. In Debug, it takes several occurrences before the access violation
	is seen.
	
	Sample Code
	-----------
	
	Below is the OnLButtonDown handler for the Circ3 tutorial sample, modified to
	call the error event.
	
	  /* Compile options needed:
	  */ 
	  void CCirc3Ctrl::OnLButtonDown(UINT nFlags, CPoint point)
	  {
	     /*  Comment the tutorial.
	          CDC* pdc;
	     // Flash the color of the control if within the
	             ellipse.
	     if (InCircle(point))
	     {
	        pdc = GetDC();
	        FlashColor(pdc);
	        ReleaseDC(pdc);
	        // Fire the ClickIn event
	        FireClickIn(point.x, point.y);
	     }
	     else
	        // Fire the ClickOut event
	        FireClickOut();
	          */ 
	          // Here's the call.
	     FireError(CTL_E_OUTOFMEMORY, " ");
	     COleControl::OnLButtonDown(nFlags, point);
	  }
	
	Additional query words: 2.00 2.10 2.20 3.00 3.10 3.20
	
	======================================================================
	Keywords          : kbole kbCtrl kbbuglist kbfixlist
	Technology        : kbVCsearch kbAudDeveloper kbVC220 kbVC200 kbVC210
	Version           : 2.00 2.10 2.20
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
