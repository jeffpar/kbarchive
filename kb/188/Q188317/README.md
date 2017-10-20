---
layout: page
title: "Q188317: SuperTip Demonstrates Tool Tips in an MFC Application"
permalink: /kb/188/Q188317/
---

## Q188317: SuperTip Demonstrates Tool Tips in an MFC Application

{% raw %}

	Article: Q188317
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0sp3
	Operating System(s): 
	Keyword(s): kbCmnCtrls kbMFC kbToolbar KbUIDesign kbVC600 kbDSupport kbMFC500 kbGrpDSMFCATL KbDSI k
	Last Modified: 03-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0sp3 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0sp3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The SuperTip sample demonstrates some common uses of tool tips in an MFC
	application:
	
	- Tool tip support for toolbars
	
	- How to use EnableToolTips
	
	- A CToolTipCtrl object in a view, creating tools for windows and rectangular
	  regions
	
	For each of these tasks, the SuperTip sample demonstrates the default MFC support
	for tool tips, as well as how to change tool-tip text at run time.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	SuperTip.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	NOTE: Use the -d option when running SuperTip.exe to decompress the file and
	re-create the proper directory structure.
	
	Task 1: Tool tip support for toolbars
	-------------------------------------
	
	To enable tool tips on a toolbar, follow these steps:
	
	1. When calling CToolbar::Create(), pass CBRS_TOOLTIPS in to SetBarStyle(). This
	  process is already done for the default toolbar in AppWizard- generated
	  projects.
	
	2. For each button on the toolbar, add a string to your string resource table
	  corresponding to the button's command ID in the form:
	
	  "This is the fly-by text\nThis is what shows up in the tool tip"
	
	  This process is also done automatically for you by AppWizard. For example,
	  ID_FILE_NEW, the first button on the toolbar has the string entry "Create a
	  new document\nNew." "New" is the text that shows up in the tool tip. You need
	  to add a string to your string resource table corresponding to the button's
	  command ID for any buttons or toolbars that you add.
	
	  That's it! Because AppWizard does this for you, by using AppWizard you already
	  have a toolbar with working tool tips.
	
	  However, the process is more complicated if you want to change the text shown
	  in a tool tip at run time:
	
	3. On the Project menu, click Settings, and click the "C/C++" tab. Choose
	  "General" in the Category field; in the Preprocessor Definitions edit box add
	  "NO_ANSIUNI_ONLY" (without the quotation marks) as one of the preprocessor
	  definitions.
	
	4. Add the following message map entries to the message maps of your CMainFrame
	  class and CchildFrame class:
	
	        ON_NOTIFY_EX_RANGE(TTN_NEEDTEXTW, 0, 0xFFFF, OnDynamicTipText)
	        ON_NOTIFY_EX_RANGE(TTN_NEEDTEXTA, 0, 0xFFFF, OnDynamicTipText)
	
	  Note that this method is for an MDI application. If your application is SDI,
	  you won't have a CChildFrame class.
	
	5. Add a function to both your CMainFrame class and (if MDI) CChildFrame class
	  called OnDynamicTipText that handles the TTN_NEEDTEXT notification and enters
	  the appropriate text into the NMHDR structure based on the idFrom that comes
	  in. Refer to the SuperTip sample for a complete example of how to do this.
	
	Task 2: How to use EnableToolTips
	---------------------------------
	
	EnableToolTips is a new MFC version 4.0 function that gives a window with child
	controls on it some basic tool tip support. EnableToolTips works well with a
	form view, which is what the SuperTip sample demonstrates.
	
	For more information on this task, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q140595 DOC: How to Display Tool Tips After Calling EnableToolTips
	
	1. In the OnInitialUpdate() of your view, call EnableToolTips(TRUE);.
	
	2. Add handlers for the TTN_NEEDTEXT notification to your view class only, as
	  described in steps 4 and 5 under Task 1 above.
	
	3. If you don't need to dynamically change the tool-tip text at run time, add
	  code to your handler to load a string from the string resource table and
	  place it in the NMHDR structure. Otherwise, determine in your handler what
	  text you want to display and place it in the NMHDR structure.
	
	Task 3: CToolTipCtrl
	--------------------
	
	1. Add a CToolTipCtrl object to your view. The SuperTip sample creates a
	  CToolTipCtrl object as an embedded member of the CSuperTipView.
	
	2. Call the Create member function of your CToolTipCtrl object. Provide the
	  TTS_ALWAYSTIP style if you want the tool tips displayed even when the parent
	  window of the tool tip control isn't currently active. Note that tool tips
	  for this tool tip control are displayed even when the application isn't
	  active and is in the background.
	
	3. Add tools to the CToolTipCtrl object for each desired tip location. There are
	  two ways to define the area that causes the tool tip to be displayed:
	
	  a. Specify a rectangular region of the client area of the CToolTipCtrl's
	     parent window
	
	  b. Specify that a tool tip show for the entire area of a child window on the
	     view.
	
	  Additionally, there are two ways to specify what text to display for the tool
	  tip.
	
	  a. Pass in a string that is automatically used for that tool.
	
	  b. Pass in the value defined by LPSTR_TEXTCALLBACK. This causes the tool tip
	     control to send the notification TTN_NEEDTEXT whenever a tool is about to
	     be displayed; this a request that the recipient dynamically supplies a
	     string to be displayed.
	
	  LPSTR_TEXTCALLBACK is always used when using tool-tip support for toolbars
	  (Task 1) or CWnd::EnableToolTips (Task 2). MFC provides a default handler for
	  TTN_NEEDTEXT in CframeWnd, which gets the requested string from the string
	  resource table. The SuperTip sample intercepts the TTN_NEEDTEXT message so
	  that the default MFC handler is never called. The handler function in this
	  sample provides the default support (grabs text from string table) or
	  supplies some dynamic text. Refer to the Needtext.cpp file to see this
	  handler. The SuperTip sample does the following:
	
	  a. The sample adds a tool to the Plain View for a rectangular region with
	     pre-specified text (not LPSTR_TEXTCALLBACK.)
	
	  b. The sample adds a tool to the Plain View for a rectangular region with
	     LPSTR_TEXTCALLBACK specified so that our NeedText handler is called.
	
	  c. The sample adds a tool to the Plain View for a child window on the view
	     with pre-specified text (not LPSTR_TEXTCALLBACK).
	
	  NOTE: When the application is run, the text for the child window and the "Big
	  Blue Rectangle" doesn't change when "Dynamic Tips" are selected on the menu.
	  This is because the tool tips associated with child window and the Big Blue
	  Rectangle do not specify LPSTR_TEXTCALLBACK. If you changed the AddTool calls
	  to use LPSTR_TEXTCALLBACK, then tool tips for these two items would display
	  text similar to other tools in this application.
	
	4. Relay messages to the tool tip control so that it can determine when to show
	  the tool tip using the RelayEvent member function of CToolTipCtrl.
	
	5. If you specify LPSTR_TEXTCALLBACK for any of the tools that you add to your
	  tool-tip control, you need to provide a handler for the TTN_NEEDTEXT(A/W)
	  messages in the view.
	
	  Because the TTN_NEEDTEXT message is sent through MFC's command routing
	  architecture, there can be some confusion as to what handler is being called.
	  The SuperTip sample routes all TTN_NEEDTEXT notifications to a single handler
	  function, NeedText(). NeedText handles requests for tool-tip text in a
	  general way, whether the tool tip is for a toolbar button, a child window, a
	  rectangular area, and so on.
	
	  Technically, if you have the handles for the WM_NEEDTEXT(A/W) messages in your
	  frame windows as added in Tasks 1 and 2, the TTN_NEEDTEXT notification finds
	  a handler anyway. The handlers in SuperTipView are included here only for
	  completeness.
	
	6. In MFC versions 4.0 and 4.1, all CToolTipCtrl objects in an application are
	  deactivated when a modal dialog box is created. The CtoolTipCtrl objects are
	  not reactivated when the dialog box goes away. To correct this problem, the
	  SuperTip sample calls Activate(TRUE) before relaying any messages to the
	  tool-tip control.
	
	REFERENCES
	==========
	
	NOTE: There are several problems in versions of VC++ earlier than VC++ 5.0,
	Service Pack 3 (SP3), involving tool tips that cause SuperTip sample to work
	incorrectly. For more information, please see the following articles in the
	Microsoft Knowledge Base:
	
	  Q140595 DOC: How to Display Tool Tips After Calling EnableToolTips
	
	  Q167650 FIX: Problems with ToolTips on Windows 95
	
	  Q172276 FIX: CToolTipCtrl Not Displaying Text After VS SP1, SP2 Install
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Jason Strayer, Microsoft Corporation
	
	
	Additional query words: SuperTip tooltips CToolTip CtoolTipCtrl
	
	======================================================================
	Keywords          : kbCmnCtrls kbMFC kbToolbar KbUIDesign kbVC600 kbDSupport kbMFC500 kbGrpDSMFCATL KbDSI kbMFCCtrlBar 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:5.0sp3
	
	=============================================================================
	

{% endraw %}
