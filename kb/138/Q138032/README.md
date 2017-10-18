---
layout: page
title: "Q138032: FIX: CIRC2 and CIRC3 Samples Don't Handle WM_SIZE Message"
permalink: kb/138/Q138032/
---

## Q138032: FIX: CIRC2 and CIRC3 Samples Don't Handle WM_SIZE Message

	Article: Q138032
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbcode kbole kbCOMt kbCtrl kbMFC kbVC100bug kbVC150bug kbVC151bug kbVC152bug kbVC200bug
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft OLE Control Developer's Kit (CDK), versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Trying to decrease the size of the Circle control after changing the
	CircleOffset property may cause the circle to get drawn outside the control's
	rectangle. Handle the WM_SIZE message and reset the offset. This should only
	take place if the CircleShape property is set to TRUE and if the circle's
	position is outside the control's new size.
	
	Sample Code to Implement Workaround
	-----------------------------------
	
	  void CCirc2Ctrl::OnSize(UINT nType, int cx, int cy)
	  {
	      COleControl::OnSize(nType, cx, cy);
	
	      // If circle shape is true and circle does not fit in new size, reset
	      // the offset
	
	      if(m_circleShape && !InBounds(GetCircleOffset()))
	         SetCircleOffset(0);
	  }
	
	CAUSE
	=====
	
	The circle control does not respond to the WM_SIZE message and therefore does
	not adjust its CircleOffset property to compensate for the change in control
	size.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in the version of the
	Microsoft Foundation Classes (MFC) that ships with Visual C++, 32- bit Edition,
	version 4.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Build either the Circ2 or Circ3 sample.
	
	2. On the Tools menu, click Register Control, and verify that the control
	  registers successfully.
	
	3. On the Tools menu, click Test Container.
	
	4. On the Edit menu, click Insert OLE Control, and then click the control that
	  was built in step 1.
	
	5. Resize the control to a rather long rectangle.
	
	6. On the View menu, click Properties, and change the CircleOffset property to
	  100 pixels to decentralize the circle.
	
	7. Resize the control to force the circle outside the rectangle.
	
	8. Notice that the circle is drawn outside the rectangle.
	
	Additional query words: 1.10 1.20 1.00 1.50 1.51 1.52 2.00 2.10 2.20 2.50 2.51 2.52 3.00 3.10 3.20 size tutorial
	
	======================================================================
	Keywords          : kbcode kbole kbCOMt kbCtrl kbMFC kbVC100bug kbVC150bug kbVC151bug kbVC152bug kbVC200bug kbVC210bug kbVC220bug kbVC400fix kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
