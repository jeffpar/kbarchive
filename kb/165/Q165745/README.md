---
layout: page
title: "Q165745: DOC: CMiniFrameWnd::Create Is Missing MFS_BLOCKSYSMENU"
permalink: /kb/165/Q165745/
---

## Q165745: DOC: CMiniFrameWnd::Create Is Missing MFS_BLOCKSYSMENU

{% raw %}

	Article: Q165745
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbui kbdocfix kbdocerr kbMFC KbUIDesign kbVC500bug kbVC600fix kbGrpDSMFCATL
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	CMiniFrameWnd::Create member function lets you create the Windows mini- frame
	window and attach it to the CMiniFrameWnd object. Create initializes the
	window's class name and window name and registers default values for its style
	and parent.
	
	The CMiniFrameWnd::Create function has the following prototype:
	
	MFS_MOVEFRAME     Allows the mini-frame window to be moved by clicking
	                 on any edge of the window, not just the caption.
	
	MFS_4THICKFRAME   Disables resizing of the mini-frame window.
	
	MFS_SYNCACTIVE    Synchronizes the activation of the mini-frame window
	                 to the activation of its parent window.
	
	MFS_THICKFRAME    Allows the mini-frame window to be sized as small as
	                 the contents of the client area allow.
	
	MFS_BLOCKSYSMENU  Blocks any hit testing on system menu.
	
	The Visual C++ 6.0 online documentation for CMiniFrameWnd::Create() does list the MFS_BLOCKSYSMENU style.
	
	(c) Microsoft Corporation 1997, All Rights Reserved.
	Contributions by Jing Lou, Microsoft Corporation
	
	
	Additional query words: MFC MFS_
	
	======================================================================
	Keywords          : kbui kbdocfix kbdocerr kbMFC KbUIDesign kbVC500bug kbVC600fix kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:5.0
	
	=============================================================================
	

{% endraw %}
