---
layout: page
title: "Q183528: PRB: ScrollBar and Custom Controls Do Not Have Events to Handle"
permalink: /kb/183/Q183528/
---

## Q183528: PRB: ScrollBar and Custom Controls Do Not Have Events to Handle

	Article: Q183528
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.0,2.1,2.2,4.0,4.0a,4.1,4.2,4.2b,5.0,6.0
	Operating System(s): 
	Keyword(s): kbwizard kbide kbMFC kbResourceEd kbVC200 kbVC400 kbVC500 kbVC600 kbGrpDSTools
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The ClassWizard, used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 2.2, 4.0, 4.0a, 4.1, 4.2b 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you double-click a Scroll Bar or custom control in the Visual C++ Dialog
	editor, the New Windows Message and Event Handlers dialog box appears. However,
	no events are displayed for the control.
	
	On the Message Maps tab of the MFC ClassWizard dialog box, select a dialog class.
	The Messages list is blank for Object IDs corresponding to a Scroll Bar or
	custom control.
	
	CAUSE
	=====
	
	The Scroll Bar and custom controls do not send notification messages so the MFC
	ClassWizard cannot list any messages to map.
	
	RESOLUTION
	==========
	
	Use the ClassWizard, as follows, to add WM_HSCROLL or WM_VSCROLL message
	handlers to the class of the parent window that hosts the Scroll Bar control:
	
	1. Press CTRL+W to open the MFC ClassWizard.
	
	2. On the Message Maps tab, select the dialog class in the Class name box.
	
	3. In the Object IDs list box, select the dialog class.
	
	4. In the Messages list box, select WM_HSCROLL or WM_VSCROLL, then click Add
	  Function.
	
	For the user-defined messages of a custom control, or the WM_CTLCOLORSCROLLBAR
	message, manually add message handlers to the parent window's class. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q99848 Use ON_MESSAGE() Macro to Map Less-Common Messages
	
	STATUS
	======
	
	This behavior is by design.
	
	
	MORE INFORMATION
	================
	
	The Scroll Bar control does not send notification messages of the SBN_... type.
	However, it sends WM_HSCROLL, WM_VSCROLL, and WM_CTLCOLORSCROLLBAR messages to
	its parent window, allowing it to redraw according to the current scroll
	setting. Though these messages are not considered notifications, they have a
	similar effect. With the MFC ClassWizard, any window that can contain a Scroll
	Bar has WM_HSCROLL and WM_VSCROLL messages, and the MFC ClassWizard can add the
	handlers for those messages.
	
	The custom control does not have standard notifications. Its messages are
	user-defined events, and the MFC ClassWizard does not know what they might be.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In Visual C++, open a project that contains a dialog resource.
	
	2. Open the dialog for editing (you can double-click on its ID in ResourceView).
	
	3. From the Controls palette, add a Scroll Bar control to the dialog.
	
	4. Double-click the Scroll Bar control.
	
	  The New Windows Message and Event Handlers dialog box opens but the New
	  Windows messages/events list is empty. Close the New Windows Message and
	  Event Handlers dialog box.
	
	5. Press CTRL+W to open the MFC ClassWizard.
	
	6. On the Message Maps tab, select the dialog class in the Class name list box.
	
	7. In the Object IDs list box, select the Scroll Bar ID.
	
	  The Messages list is blank.
	
	REFERENCES
	==========
	
	Visual C++ Online Books; search on "Scroll Bar Messages"
	
	Platform, SDK, and DDK Documentation: Platform SDK; User Interface Services;
	Controls; Scroll Bars; Scroll Bar Reference; Scroll Bar Messages
	
	Additional query words:
	
	======================================================================
	Keywords          : kbwizard kbide kbMFC kbResourceEd kbVC200 kbVC400 kbVC500 kbVC600 kbGrpDSTools 
	Technology        : kbVCsearch kbAudDeveloper kbClassWizard
	Version           : winnt:2.0,2.1,2.2,4.0,4.0a,4.1,4.2,4.2b,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
