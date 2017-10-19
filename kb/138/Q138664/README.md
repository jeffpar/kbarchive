---
layout: page
title: "Q138664: DOC: GetClientRect() May Assert in OLE Controls"
permalink: /kb/138/Q138664/
---

## Q138664: DOC: GetClientRect() May Assert in OLE Controls

	Article: Q138664
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr kbActiveX kbCOMt kbCtrlCreate kbVC400bug kbVC410bug kbVC420bug kbVC50
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft OLE Control Developer's Kit (CDK) 
	   - Microsoft Visual C++ 32-bit Edition, versions 4.0, 4.1, 4.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In chapter 4 of the Ole Control Tutorial, the section labeled Setting the
	CircleOffset Property Step 2, which describes how to implement the InBounds()
	function, incorrectly calls GetClientRect() and should read as follows instead:
	
	1. Add the function implementation at the end of your CIRCCTL.CPP file:
	
	        BOOL CCirc2Ctrl::InBounds(short nOffset)
	        {
	           int diameter;
	           int length;
	           int cx;
	           int cy;
	
	          // Note that GetControlSize() is called here instead of
	          // GetClientRect()
	
	           GetControlSize(&cx, &cy);
	
	           if (cx > cy)
	           {
	              length = cx;
	              diameter = cy;
	           }
	           else
	           {
	              length = cy;
	              diameter = cx;
	           }
	           if (nOffset < 0)
	              nOffset = (short) -nOffset;
	           return (diameter / 2 + nOffset) <= (length / 2);
	        }
	
	This documentation error was corrected in Visual C++ version 5.0.
	
	MORE INFORMATION
	================
	
	In some control containers (such as Visual Basic and Microsoft Access) in design
	mode, the control has no window, and therefore no hwnd, so calling
	GetClientRect(rc) will assert.
	
	There are actually two solutions to this problem. The first solution is
	documented in the "Summary" section of this article. The second solution is to
	replace the call to GetClientRect() with a call to GetRectInContainer(), which
	will obtain the coordinates of the control's rectangle relative to the
	container. The size of the control can then be calculated from this rectangle.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdocfix kbdocerr kbActiveX kbCOMt kbCtrlCreate kbVC400bug kbVC410bug kbVC420bug kbVC500fix kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
