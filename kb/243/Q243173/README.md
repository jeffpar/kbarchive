---
layout: page
title: "Q243173: PRB: Install VCCE Causes ATL Windows Message Handler List Empty"
permalink: kb/243/Q243173/
---

## Q243173: PRB: Install VCCE Causes ATL Windows Message Handler List Empty

	Article: Q243173
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbwizard kbATL kbVC600 kbOSWinCEsearch kbGrpDSMFCATL
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual C++ 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After installing the Microsoft Windows CE Toolkit for Visual C++ 6.0, if you
	right-click on an ATL class in the Class View pane, the "Add Windows Message
	Handler" wizard always displays empty. The wizard is supposed to have a list of
	windows messages and events you can select to add a handler for. On a computer
	without Microsoft Windows CE Toolkit for Visual C++ 6.0, the "Add Windows
	Message Handler" wizard had numerous messages/events to choose from.
	
	CAUSE
	=====
	
	Microsoft is researching this problem and will post more information here in the
	Microsoft Knowledge Base when it becomes available.
	
	RESOLUTION
	==========
	
	At this time, there is no resolution to this problem other than uninstalling the
	toolkit, and doing a clean uninstall and reinstall of Microsoft Visual C++ 6.0
	or Microsoft Visual Studio 6.0. To workaround this problem, message maps can be
	added manually without using any wizards. For example:
	
	  class CMyClass : ...
	  {
	  public:
	     ...
	
	     BEGIN_MSG_MAP(CMyClass)
	        COMMAND_HANDLER(IDC_MYCTL, EN_CHANGE, OnChange)
	        MESSAGE_HANDLER(WM_PAINT, OnPaint)
	        ...
	     END_MSG_MAP()
	
	     // When a CMyClass object receives a WM_COMMAND
	     // message identified by IDC_MYCTL and EN_CHANGE,
	     // the message is directed to CMyClass::OnChange
	     // for the actual processing.
	     LRESULT OnChange( ... )
	     { ... }
	
	     // When a CMyClass object receives a WM_PAINT
	     // message, the message is directed to
	     // CMyClass::OnPaint for the actual processing.
	     LRESULT OnPaint( ... )
	     { ... }
	  };
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a New ATL/COM AppWizard project.
	
	2. From Menu item, choose Insert, New ATL Object... and choose the Miscellaneous
	  Category and then add a Dialog object.
	
	3. In the Class View right-click the Dialog Class and choose Add Windows Message
	  Handler.
	
	If Windows CE Toolkit for Visual C++ 6.0 is installed on the computer, you will
	notice that the "New Windows messages/event" list is empty.
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Vidyanand Rajpathak, Microsoft Corporation
	
	
	Additional query words: Message handler, command ATL, Toolkit, Windows CE
	
	======================================================================
	Keywords          : kbwizard kbATL kbVC600 kbOSWinCEsearch kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbWinCETKVCSearch kbWinCESearch kbWinCETK600VC
	Version           : :6.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
