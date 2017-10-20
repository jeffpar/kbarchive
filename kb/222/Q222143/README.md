---
layout: page
title: "Q222143: PRB: AppWizard, CHtmlView with Splitter Show Extra Scrollbars"
permalink: /kb/222/Q222143/
---

## Q222143: PRB: AppWizard, CHtmlView with Splitter Show Extra Scrollbars

{% raw %}

	Article: Q222143
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbDocView kbMFC KbUIDesign kbVC600bug kbGrpDSMFCATL kbNoUpdate
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An AppWizard generated MDI/SDI application with the view derived from CHtmlView
	and with the Splitter Window property set, shows two sets of scrollbars. One set
	has the horizontal and vertical splitter divider but the scrolling is disabled.
	The second set has scrolling capability, but is not equipped with the horizontal
	and vertical splitter divider.
	
	CAUSE
	=====
	
	When the Use Split Window property is set using the Advanced button in step 4/6
	of AppWizard, the View window is given the capability of horizontal and vertical
	splitter divider with scrolling disabled.
	
	When the Split window option is selected, the following code is added by
	AppWizard:
	
	  BOOL CChildFrame::OnCreateClient (LPCREATESTRUCT /*lpcs*/,  CCreateContext* pContext)
	  {
	      return m_wndSplitter.Create (this, 2, 2, CSize( 10, 10 ), pContext);
	  }
	
	The embedded WebBrowser control in the CHtmlView comes equipped with a set of
	horizontal and vertical scrollbars that allow you to scroll the entire control
	area.
	
	The default behavior for the dynamic splitter window is to create horizontal and
	vertical scrollbars associated with the view panes.
	
	RESOLUTION
	==========
	
	Currently there is no resolution to this problem.
	
	To work around this problem, remove the implicit splitter window creation styles
	WS_HSCROLL and WS_VSCROLL; this removes the ChildFrame's scrollbars and also the
	horizontal and vertical splitter divider. However, the appwizard generated
	application has a Split command from the Window menu; the framework will take
	care of handling this command. Choosing Split from the Windows menu, generates a
	cross-hair, which allows the user to split the window dynamically with one left
	mouse click.
	
	To remove the scroll bars, edit CChildFrame::OnCreate() as follows:
	
	  BOOL CChildFrame::OnCreateClient (LPCREATESTRUCT /*lpcs*/,  CCreateContext* pContext)
	  {
	      return m_wndSplitter.Create (this, 2, 2, CSize( 10, 10 ), pContext, WS_CHILD|WS_VISIBLE|SPLS_DYNAMIC_SPLIT);
	  } 
	
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a default MFC application using AppWizard.
	
	2. At step 4/6 click the Advanced.
	
	3. Select "Use Split Window" on the Window Style tab.
	
	4. At step 6/6 select the base class as CHtmlView.
	
	5. Build and Run the application.
	
	Notice that the View window is equipped with two sets of scrollbars. One set is
	disabled and has the splitter divider, and other set allows the embedded control
	to be scrolled.
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Vidyanand N. Rajpathak, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDocView kbMFC KbUIDesign kbVC600bug kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbAudDeveloper kbMFC
	Version           : :6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
