---
layout: page
title: "Q128334: PRB: Clipping Doesn't Work Correctly in Print Preview"
permalink: /kb/128/Q128334/
---

## Q128334: PRB: Clipping Doesn't Work Correctly in Print Preview

{% raw %}

	Article: Q128334
	Product(s): Microsoft C Compiler
	Version(s): winnt:1.0,2.0,2.1,4.0
	Operating System(s): 
	Keyword(s): kbcode kbMFC KbUIDesign kbVC kbVC200 kbVC400 kbGrpDSMFCATL
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using SelectClipRgn works correctly when viewing on-screen results or when
	printing but causes problems in print preview mode. Problems include not
	displaying anything or not clipping anything. This happens even though the
	return value from SelectClipRgn appears to be correct; that is, it does not
	return NULLREGION even though all output appears to be getting clipped.
	
	CAUSE
	=====
	
	The CDC class encapsulates two HDC handles. One is called m_hAttribDC and the
	other is m_hDC. See the CDC documentation for more information on this aspect of
	the CDC class.
	
	The m_hAttribDC member is the same as the m_hDC member when you are printing or
	just drawing on the screen. However, in Print Preview mode, the m_hDC member
	points to the screen DC for your printed output, and the m_hAttribDC member
	references a printer DC for getting printer attributes during the print preview
	operation.
	
	The print preview output view is mapped using SetViewportExt and SetWindowExt, so
	that you can call the CDC member functions as though you were putting your
	output to the printer and your output will be properly scaled to the print
	preview window. This works fine for any function that works with logical
	coordinates or for which the print preview output can be intercepted and
	modified.
	
	The SelectClipRgn function takes a clipping region that was created using device
	pixels for its area. It then attempts to select it as the clipping rectangle for
	both the m_hDC and the m_hAttribDC. The device coordinates specified by your
	application will correspond to printer coordinates and not screen coordinates.
	Therefore, they won't match up properly when your clipping region is selected
	into the print preview DC.
	
	RESOLUTION
	==========
	
	During print preview mode MFC actually uses a CDC-derived class to handle some
	of the special print preview operations such as mapping your printer coordinates
	to screen coordinates. This class is called CPreviewDC and is declared in
	<afxpriv.h>. There is no way for MFC to provide special handling for a
	clipping region because the RGN object is created without using CPreviewDC, and
	the CPreviewDC class is simply used for selecting the RGN object into the DC.
	
	So you must convert your RGN coordinates before creating the RGN. The CPreviewDC
	class has a function called PrinterDPtoScreenDP that you can use to help in this
	conversion. The function converts a printer device coordinate to a screen
	coordinate. All you need to do is convert all coordinates before creating your
	RGN object.
	
	You will only want to do this when you are in Print Preview mode. As mentioned
	above, MFC uses the CPreviewDC class when you are in print preview and you can
	detect whether this class is being used by using the IsKindOf function.
	
	An example of how to do the coordinate conversion before creating your clipping
	region is included in the "Sample Code" section below. Note that the code in
	this example exists in the view's OnDraw function. It could also be placed in
	the OnPrint function but it would not work correctly if placed in OnPrepareDC.
	This is because the viewport setup for Print Preview mode takes place after
	OnPrepareDC and before OnPrint (or OnDraw if you do not have an overriden
	OnPrint) is called.
	
	Sample Code
	-----------
	
	  // Note that afxpriv.h must be included to get the declaration
	  // of the CPreviewDC class. The following line should be included
	  // at the very top of your view's .CPP file
	
	  #include <afxpriv.h>
	
	  // ...
	
	  void CMyView::OnDraw(CDC *pDC)
	      {
	      CRgn rgn;
	      CRect rectClip;
	
	      // Function to compute the clipping rectangle regardless of
	      // whether we are in print preview mode. This would be the
	      // function in your code which computes this rectangle and
	      // stores it in rectClip
	
	      ComputeClippingRectangle(pDC,&rectClip);
	
	      // Now if we are in print preview mode then the clipping
	      // rectangle needs to be adjusted before creating the
	      // clipping region
	      if (pDC->IsKindOf(RUNTIME_CLASS(CPreviewDC)))
	          {
	          CPreviewDC *pPrevDC = (CPreviewDC *)pDC;
	
	          pPrevDC->PrinterDPtoScreenDP(&rectClip.TopLeft());
	          pPrevDC->PrinterDPtoScreenDP(&rectClip.BottomRight());
	
	          // Now offset the result by the viewport origin of
	          // the print preview window...
	
	          CPoint ptOrg;
	           ::GetViewportOrgEx(pDC->m_hDC,&ptOrg);
	          rectClip += ptOrg;
	          }
	
	      // The following two function calls are the ones that
	      // select the clipping region into the DC. These would be
	      // whatever code you already have to create/select the
	      // clipping region
	
	      rgn.CreateRectRgn(rectClip.left,rectClip.top,
	          rectClip.right,rectClip.bottom);
	      pDC->SelectClipRgn(&rgn);
	
	      // Other OnDraw code goes here
	      }
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: 1.00 1.50 2.00 2.10 2.50 2.51 2.52 3.00 3.10 4.00
	
	======================================================================
	Keywords          : kbcode kbMFC KbUIDesign kbVC kbVC200 kbVC400 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:1.0,2.0,2.1,4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
