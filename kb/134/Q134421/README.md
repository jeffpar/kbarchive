---
layout: page
title: "Q134421: HOWTO: How to Use CBitmapButton to Resize a Bitmap to Fit a Butt"
permalink: /kb/134/Q134421/
---

## Q134421: HOWTO: How to Use CBitmapButton to Resize a Bitmap to Fit a Butt

{% raw %}

	Article: Q134421
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.0,2.1,2.2,4.0,4.1,4.2
	Operating System(s): 
	Keyword(s): kbcode kbBitmap kbButton kbCtrl kbMFC KbUIDesign kbVC150 kbVC200 kbVC400 kbVC420 kbGrpD
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 2.2, 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can override the default behavior of CBitmapButton so the bitmap sizes to
	fit the button. How CBitmapButtons behave during initialization depends on which
	function is used to load the bitmaps.
	
	Function        Behavior                  When used
	AutoLoad()      button sizes to bitmap    button is in dialog box
	
	LoadBitmaps()   button remains at size    button is in non-dialog
	               specified when created    window
	
	If you want the bitmap to stretch to fit the dimensions of the button you create,
	you must override these functions:
	
	     CBitmapButton::AutoLoad()
	     CBitmapButton::DrawItem()
	
	NOTE: You need only override AutoLoad() if you call it to initialize a button.
	
	MORE INFORMATION
	================
	
	The following steps give the necessary changes to AutoLoad and DrawItem:
	
	1. Implement the owner drawn CBitmapButton using one of the standard procedures
	  described in the Books Online help for the CBitmapButton class.
	
	2. Derive a class from CBitmapButton.
	
	  NOTE: If you are using Classwizard, you can not derive directly from
	  CBitmapButton; use a base class lower in hierarchy.
	
	3. To override the AutoLoad member function:
	
	  a. Include a function prototype in your CBitmapButton-derived class header
	     (.h) file, as in this example:
	
	        class CMyButton: public CBitmapButton
	        {
	          ...
	        public:
	          CMyButton(){};
	          BOOL AutoLoad(UINT nID, CWnd* pParent);     // ADD THIS LINE
	          ...
	        };
	
	  b. Implement CMyButton::AutoLoad() in the .cpp file by copying the
	     CBitmapButton::AutoLoad() function from Winbtn.cpp file in the MFC Src
	     directory and changing the following line near the end of the function
	     into a comment:
	
	        // change following to a comment to prevent button resizing
	        // SizeToContent();
	
	4. To override the DrawItem() member function:
	
	  a. Include a function prototype in your CBitmapButton-derived class header
	     (.h) file, as in this example:
	
	        class CMyButton: public CBitmapButton
	        {
	          ...
	        public:
	          CMyButton(){};
	          void DrawItem(LPDRAWITEMSTRUCT lpDIS);     // ADD THIS LINE
	          ...
	        };
	
	  b. Implement CBitmapButton::DrawItem() in the .cpp file by copying the
	     CBitmapButton::DrawItem() function from Winbtn.cpp in the MFC Src
	     directory and making these changes:
	
	     Replace this code:
	
	           pDC->BitBlt(rect.left, rect.top, rect.Width(), rect.Height(),
	               &memDC, 0, 0, SRCCOPY);
	
	     with this code:
	
	           // determine bitmaps size for use in StretchBlt
	           BITMAP bits;
	           pBitmap->GetObject(sizeof(BITMAP),&bits);
	           pDC->StretchBlt(rect.left,rect.top,rect.Width(),rect.Height(),
	              &memDC,0,0,bits.bmWidth, bits.bmHeight, SRCCOPY);
	
	5. Modify the declaration of the CBitmapButton member variable from step 1 so
	  that it is now of type CMyButton.
	
	Additional query words: kbinf 1.50 1.51 1.52 2.50 2.51 2.52 2.00 2.10 2.20 3.00 3.10 4.00 4.10 4.20
	
	======================================================================
	Keywords          : kbcode kbBitmap kbButton kbCtrl kbMFC KbUIDesign kbVC150 kbVC200 kbVC400 kbVC420 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:2.0,2.1,2.2,4.0,4.1,4.2
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
