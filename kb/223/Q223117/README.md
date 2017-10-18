---
layout: page
title: "Q223117: FIX: Customizing Toolbar at Run-time Modifies Buttons"
permalink: kb/223/Q223117/
---

## Q223117: FIX: Customizing Toolbar at Run-time Modifies Buttons

	Article: Q223117
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbCmnCtrls kbCtrl kbToolbar kbVBp600bug kbGrpDSVB kbVS600sp2 kbVS600SP1 k
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Visual Basic project uses the Toolbar from the Microsoft Common Controls 6.0
	ActiveX control (mscomctl.ocx). At run-time, you double-click the toolbar to
	display the Customize Toolbar dialog box. When you add a Separator to the
	Toolbar buttons list box, the size of the existing toolbar buttons changes in
	the toolbar control.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3. For more information
	about Visual Studio service packs, please see the following articles in the
	Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	This section shows you how to create a sample project that demonstrates the bug
	behavior. The section assumes you are familiar with adding a control to your
	Visual Basic project and with using the Toolbar component of the Microsoft
	Common Control 6.0 ActiveX control. If you are not familiar with these tasks,
	see the REFERENCES section below for more information.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. From the Project menu, select Components and add a reference to the Microsoft
	  Windows Common Controls 6.0.
	
	3. Add a Toolbar to Form1.
	
	4. Alternate-click on the Toolbar and select Properties. From the Buttons tab,
	  add two buttons to the Toolbar.
	
	5. On the Run menu, select Start, or press the F5 key to start the program.
	
	6. Double-click the toolbar. The Customize Toolbar dialog box appears. Position
	  the Customize Toolbar dialog box so that you can see the Toolbar buttons in
	  Form1.
	
	7. In the Available buttons list box, select Separator and click the Add
	  button.
	
	  BUG: When the Separator is added, the buttons on the Toolbar grow larger.
	
	REFERENCES
	==========
	
	- Standard ActiveX Controls in the Online Help or the MSDN Web site at:
	
	  http://msdn.microsoft.com/library/devprods/vs6/vb/html/vbconstandardactivexcontrols.htm
	  (http://msdn.microsoft.com/library/devprods/vs6/vb/html/vbconstandardactivexcontrols.htm)
	
	  shows how to add an ActiveX control to your Visual Basic Project.
	
	- Toolbar Control in the Online Help or the MSDN Web site at:
	
	  http://msdn.microsoft.com/library/devprods/vs6/vb/html/vbobjtoolbar.htm
	
	  contain more information on the Toolbar control.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbCmnCtrls kbCtrl kbToolbar kbVBp600bug kbGrpDSVB kbVS600sp2 kbVS600SP1 kbVS600sp3fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
