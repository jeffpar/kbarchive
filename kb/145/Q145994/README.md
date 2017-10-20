---
layout: page
title: "Q145994: HOWTO: Calculate Dialog Units When Not Using the System Font"
permalink: /kb/145/Q145994/
---

## Q145994: HOWTO: Calculate Dialog Units When Not Using the System Font

{% raw %}

	Article: Q145994
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51,1.52,2.0,2.1,2.2,4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbDlg kbFont kbMFC KbUIDesign kbVC200 kbVC400 kbVC500 kbVC600 kbGrpDSMFCATL kbDi
	Last Modified: 10-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, versions 2.0, 2.1, 2.2, 4.0, 4.1, 4.2 
	   - Microsoft Visual C++, versions 1.0, 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	GetDialogBaseUnits() always assumes the system font when calculating dialog
	units. If you are using any font other than the system font, the return value
	may not be correct for your dialog box. This article offers two alternatives you
	can use to calculate dialog box units based on the current font.
	
	MORE INFORMATION
	================
	
	The horizontal base unit is equal to the average width (in pixels) of the
	characters in the system font. The Help for GetDialogBaseUnits() suggests the
	following code for calculating the correct units:
	
	  pixelX = (dialogunitX * baseunitX) / 4
	  pixelY = (dialogunitY * baseunitY) / 8
	
	However, if you aren't using the system font, you need to do some additional
	calculations to get the right coordinates. Here are two methods:
	
	Method One
	----------
	
	The vertical dialog box unit is equivalent to the character height. The
	horizontal dialog box unit is equivalent to the average character width of the
	dialog box's font. The average character width is calculated by finding the
	average text extent of the alphabetic character set. This is necessary because
	tmAveCharWidth is not precise. Use this code:
	
	     void CAboutDlg::OnPaint()
	     {
	         CPaintDC dc(this); // device context for painting
	
	         CFont* pFont = GetFont();
	         CFont* oldFont = dc.SelectObject(pFont);
	         TEXTMETRIC tm;
	         dc.GetTextMetrics( &tm );
	         int baseUnitY = tm.tmHeight;
	         CSize size;
	         size = dc.GetTextExtent(
	             "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", 52);
	         int baseUnitX = (size.cx / 26 + 1) / 2;
	         TRACE("baseUnitX = %d\n", baseUnitX);
	         TRACE("baseUnitY = %d\n", baseUnitY);
	         dc.SelectObject(oldFont);
	
	     }
	
	Method Two
	----------
	
	The alternative is even easier. Using MapDialogRect() with a coordinate of x = 4,
	y = 8 will return the dialog box base units regardless of the dialog box's font.
	However, in most situations, the programmer doesn't need to know the dialog box
	base units. MapDialogRect() can be used directly to convert any dialog box units
	directly to device coordinates. The following sample code shows how it can be
	used to find the dialog box base units:
	
	     void CAboutDlg::OnPaint()
	     {
	         CPaintDC dc(this); // device context for painting
	
	         CRect rc( 0, 0, 4, 8 );
	         MapDialogRect( &rc );
	         int baseUnitY = rc.bottom;
	         int baseUnitX = rc.right;
	         TRACE("baseUnitX = %d\n", baseUnitX);
	         TRACE("baseUnitY = %d\n", baseUnitY);
	
	     }
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q125681 HOWTO: Calculate Dialog Base Units with Non-System-Based Font
	
	Additional query words: 2.50 2.51 2.52 3.00 3.10 3.20
	
	======================================================================
	Keywords          : kbcode kbDlg kbFont kbMFC KbUIDesign kbVC200 kbVC400 kbVC500 kbVC600 kbGrpDSMFCATL kbDialog 
	Technology        : kbAudDeveloper kbMFC
	Version           : :1.0,1.5,1.51,1.52,2.0,2.1,2.2,4.0,4.1,4.2,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
