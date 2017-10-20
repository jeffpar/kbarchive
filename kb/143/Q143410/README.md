---
layout: page
title: "Q143410: DOC: Vertical Slider Control Sends WM_VSCROLL Message"
permalink: /kb/143/Q143410/
---

## Q143410: DOC: Vertical Slider Control Sends WM_VSCROLL Message

{% raw %}

	Article: Q143410
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.1,4.2,5.0
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr kbCmnCtrls kbMFC kbScrollBar KbUIDesign kbVC400bug kbVC410fix kbGrpDS
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following paragraph from MFC Technical Note 60 is incomplete.
	
	"Slider Notification Messages
	
	  A slider control notifies its parent window of user actions by sending the
	  parent WM_HSCROLL messages. You can override the parent's OnHScroll member
	  function to handle these messages. This function will be passed a
	  notification code, the position of the slider, and a pointer to the
	  CSliderCtrl object. Note that the pointer is of type CScrollBar* even though
	  it points to a CSliderCtrl object. You may need to typecast this pointer if
	  you need to manipulate the slider control."
	
	  This information is true only for a HORIZONTAL slider control (a trackbar with
	  the TBS_HORZ style). For a VERTICAL slider control (a trackbar with the
	  TBS_VERT style), the WM_VSCROLL will be sent instead of the WM_HSCROLL
	  message. You should override the parent's OnVScroll() member function to
	  handle these messages.
	
	In Visual C++, versions 5.0 and later, the above text is part of the help topic
	titled "Slider Control Notification Messages."
	
	MORE INFORMATION
	================
	
	The correct documentation can be found from the Trackbar Notification Messages
	in Win32 SDK of Visual C++ 4.x Books Online.
	
	A vertical slider control is used in the FIRE sample program. However, in the
	sample OnHScroll() was overridden instead of OnVScroll(). Therefore, the code in
	OnHScroll() (intended for the vertical slider control) will not be executed when
	running this sample. Microsoft has confirmed this to be a bug in the sample in
	Visual C++ 4.0. To fix this problem with FIRE, replace the OnHScroll() handler
	with an OnVScroll() handler. This problem was corrected in Visual C++ 4.1.
	
	Additional query words: CsliderCtrl Trackbar FIRE
	
	======================================================================
	Keywords          : kbdocfix kbdocerr kbCmnCtrls kbMFC kbScrollBar KbUIDesign kbVC400bug kbVC410fix kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.0,4.1,4.2,5.0
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
