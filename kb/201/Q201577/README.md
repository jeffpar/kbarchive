---
layout: page
title: "Q201577: BUG: TreeView Scroll Bar Does Not Disappear When Scroll = False"
permalink: kb/201/Q201577/
---

## Q201577: BUG: TreeView Scroll Bar Does Not Disappear When Scroll = False

	Article: Q201577
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbAPI kbCmnCtrls kbCtrl kbSDKWin32 kbTreeView kbVBp kbGrpDSVB kbDSupport
	Last Modified: 24-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0, used with:
	   - Microsoft Windows 95 
	   - Microsoft Windows 98 
	   - Microsoft Windows Millennium Edition 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0, used with:
	   - Microsoft Windows 95 
	   - Microsoft Windows 98 
	   - Microsoft Windows Millennium Edition 
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0, used with:
	   - Microsoft Windows 95 
	   - Microsoft Windows 98 
	   - Microsoft Windows Millennium Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you set the Scroll property of the TreeView control from Microsoft Windows
	Common Controls (Mscomctl.ocx) to False at run time, the scroll bar does not
	disappear as expected.
	
	RESOLUTION
	==========
	
	To work around this problem, call the ShowScrollBar function instead of using
	the Scroll property. The following example demonstrates how to use the
	ShowScrollBar function:
	
	1. Open a new Standard EXE project in Visual Basic. Form1 is created by default.
	
	2. On the Project menu, click Components, select the "Microsoft Windows Common
	  Controls 6.0" check box, and then click OK.
	
	3. Add a TreeView control (TreeView1) and a CheckBox control (Check1) to Form1.
	
	4. Add the following code to the General Declarations section of Form1:
	
	  Option Explicit
	
	  Private Const SB_VERT = 1
	
	  Private Declare Function ShowScrollBar Lib "user32" _
	      (ByVal hWnd As Long, ByVal wBar As Long, ByVal bShow As Long) As Long
	
	  Private Sub Check1_Click()
	  ' The reference to CBool is not required but is used to enhance clarity.
	      Call ShowScrollBar(TreeView1.hWnd, SB_VERT, CBool(Check1.Value))
	  End Sub
	
	  Private Sub Form_Load()
	      Dim i As Integer
	      For i = 1 To 20
	          TreeView1.Nodes.Add , , , "Item " & i
	      Next i
	      Check1.Caption = "Show Scroll Bar"
	      Check1.Value = vbChecked
	  End Sub
	
	5. Run the code, and notice that a vertical scroll bar appears on the TreeView
	  control.
	
	6. Click Show Scroll Bar, and notice that the scroll bar disappears. Click Show
	  Scroll Bar again, and notice that the scroll bar re-appears.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the TreeView control from
	Microsoft Windows Common Controls (Mscomctl.ocx) under Windows 95, Windows 98,
	and Windows Millennium Edition.
	
	NOTE: This problem does not occur under Windows NT 4.0 and Windows 2000.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	NOTE: You must perform these steps on a computer that is running Windows 95,
	Windows 98, or Windows Millennium Edition (Me).
	
	1. Open a new Standard EXE project in Visual Basic. Form1 is created by default.
	
	2. On the Project menu, click Components. In the Components dialog box, select
	  the "Microsoft Windows Common Controls 6.0" check box, and then click OK.
	
	3. Add a TreeView control (TreeView1) and a CommandButton control (Command1) to
	  Form1.
	
	4. Add the following code to the General Declarations section of Form1:
	
	  Option Explicit
	
	  Private Sub Command1_Click()
	      TreeView1.Scroll = False
	  End Sub
	
	  Private Sub Form_Load()
	      Dim i As Integer
	      For i = 1 To 20
	          TreeView1.Nodes.Add , , , "Item " & i
	      Next i
	      Command1.Caption = "Hide Scroll Bar"
	  End Sub
	
	5. Run the code, and notice that a vertical scroll bar appears on the TreeView
	  control.
	
	6. Click Hide Scroll Bar, and notice that the scroll bar is still displayed.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q189249 HOWTO: Determine Which 32-Bit Windows Version Is Being Used
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAPI kbCmnCtrls kbCtrl kbSDKWin32 kbTreeView kbVBp kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
