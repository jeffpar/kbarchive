---
layout: page
title: "Q141444: DOC: Incorrect Documentation for CToolBar::SetSizes()"
permalink: /kb/141/Q141444/
---

## Q141444: DOC: Incorrect Documentation for CToolBar::SetSizes()

{% raw %}

	Article: Q141444
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr kbMFC kbToolbar KbUIDesign kbVC400bug kbVC410fix kbGrpDSMFCATL kbMFCC
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The documentation provided with Visual C++ 4.0 incorrectly describes the
	parameter values for the SetSizes() member of the CToolBar class. The
	documentation indicates that the button size must be large enough to provide
	space for a three pixel border around the image. Stated another way, the width
	and height of the button must be at least six pixels larger than the width and
	height of the image displayed on that button.
	
	The documentation should indicate that the button width must be at least seven
	pixels larger than the image width. If a margin of six pixels is used, the
	right-most button will be clipped. The button height need only exceed the image
	height by six pixels as noted in the documentation.
	
	The documentation was corrected in Visual C++ 4.1.
	
	MORE INFORMATION
	================
	
	The SetSizes() member of the CToolBar class is used to alter the size of toolbar
	buttons and their corresponding images. The prototype for this function is:
	
	     void SetSizes( SIZE sizeButton, SIZE sizeImage );
	
	According to the documentation provided with Visual C++ 4.0, the dimensions of
	sizeButton must be large enough to accommodate the image plus a three-
	pixel-wide button outline on each side of the image.
	
	The documentation was correct for earlier versions of MFC. However with MFC 4.0,
	the dimensions for sizeButton must provide for at least seven extra pixels in
	the width of each button. This requirement is due to the use of the toolbar
	common control and is imposed by the common control rather than MFC.
	
	Additional query words: 4.00 4.10
	
	======================================================================
	Keywords          : kbdocfix kbdocerr kbMFC kbToolbar KbUIDesign kbVC400bug kbVC410fix kbGrpDSMFCATL kbMFCCtrlBar kbNoUpdate 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.0
	
	=============================================================================
	

{% endraw %}
