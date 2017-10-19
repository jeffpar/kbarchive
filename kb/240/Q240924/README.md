---
layout: page
title: "Q240924: BUG: TreeView Node Tooltips Flash if Displayed from Modal Window"
permalink: /kb/240/Q240924/
---

## Q240924: BUG: TreeView Node Tooltips Flash if Displayed from Modal Window

	Article: Q240924
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbActiveX kbAPI kbCmnCtrls kbSDKWin32 kbToolTip kbTreeView kbVBp kbVBp500bug kbVBp600 k
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Microsoft TreeView control has been added to a Visual Basic form, and
	the user places the mouse cursor over a node where the text is longer than the
	control's width, a tooltip should appear over that text. If the form is being
	displayed modally, however, the tooltip will "flash" on and off repeatedly. This
	behavior occurs only in the compiled version of the application and not in the
	Visual Basic design environment (IDE.) This problem occurs with the TreeView
	control from both the Comctl32.ocx and Mscomctl.ocx on all Windows platforms.
	
	CAUSE
	=====
	
	This behavior is a result of the TreeView's owned tooltip window becoming
	disabled when the TreeView's top level client window is shown modally.
	
	RESOLUTION
	==========
	
	The tooltip window must be re-enabled before shown, and after the TreeView's top
	level owner window is fully loaded.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	NOTES
	
	- Mscomctl.ocx is statically linked to version 5.x of Comctl32.dll, and is not
	  affected by the version of Comctl32.dll installed on the target system.
	
	- The workaround provided below is insufficient when running under Windows NT
	  4.0 and comctl32.dll version 4.x or lower is installed. In this case
	  implement the workaround described in the Microsoft Knowledge Base article
	  Q241097 referred to in the REFERENCES section below.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Visual Basic Standard EXE project. Form1 is created by default.
	
	2. On the Project menu, select Components. Check either Microsoft Windows Common
	  Controls 5.0 or Microsoft Windows Common Controls 6.0 and click OK.
	
	3. Add two CommandButtons and a Label to Form1.
	
	4. Add the following code to the General Declarations section of Form1:
	
	  Option Explicit
	
	  Private Sub Form_Load()
	     On Error Resume Next
	    
	    ' Since the problem only occurs in the IDE, only disable the
	    ' TreeView's Node tooltip window in the VB IDE.
	    ' Since the Statement Debug.Print is removed by compiling, you can use
	    ' it to throw an error to detect the IDE.
	     Debug.Print 1 / 0
	     If Err Then
	        Command1.Enabled = False
	        Command2.Enabled = False
	        Me.Caption = "Application MUST be compiled"
	     End If
	     On Error GoTo 0
	     Command1.Caption = "Show Form2 modally"
	     Command2.Caption = "Show Form2 non-modally"
	     Label1.Caption = "If Form2 is shown modally and run from a compiled " _
	   & "executable, its TreeView Node tooltip window will repeatedly appear" _
	   & " and disappear, unless you enable it (remove its WS_DISABLED)."
	
	  End Sub
	
	  Private Sub Command1_Click()
	     If (Form2.Visible = False) Then
	        Form2.Command1.Enabled = True
	        Form2.Show vbModal
	     End If
	  End Sub
	
	  Private Sub Command2_Click()
	     Form2.Command1.Enabled = False
	     Form2.Show
	  End Sub
	
	5. On the Project menu, click Add Form to add a second form to the project.
	
	6. Add the TreeView control and a CommandButton to Form2. Resize the TreeView
	  Control so that 35 characters of Node Text are partially obscured.
	
	7. Add the following code to the General Declarations section of Form2:
	
	  Option Explicit
	
	  Private Declare Function SendMessage Lib "user32" Alias "SendMessageA" _
	                            (ByVal hWnd As Long, ByVal wMsg As Long, _
	                             ByVal wParam As Long, lParam As Any) As Long
	
	  ' treeview messages
	  Private Const TV_FIRST = &H1100
	  Private Const TVM_GETTOOLTIPS = (TV_FIRST + 25)
	
	  Private Const GWL_STYLE = (-16)
	  Private Const WS_DISABLED = &H8000000
	
	  Private Declare Function GetWindowLong Lib "user32" Alias _
	   "GetWindowLongA" (ByVal hWnd As Long, ByVal nIndex As Long) As Long
	
	  Private Declare Function EnableWindow Lib "user32" _
	   (ByVal hWnd As Long, bEnable As Long) As Long
	
	  Private Sub Form_Load()
	     Dim i As Integer
	
	     ' Fill up the treeview...
	     For i = 1 To 10
	        Call TreeView1.Nodes.Add(Text:="item" & i & String$(30, "x"))
	     Next
	     Command1.Caption = "Enable TreeView Tooltips"
	  End Sub
	
	  Private Sub Command1_Click()
	     Dim hwndTT As Long
	     Dim dwStyle As Long
	    
	    ' Get the handle of the TreeView's tooltip window
	     hwndTT = SendMessage(TreeView1.hWnd, TVM_GETTOOLTIPS, 0, 0)
	     If hwndTT Then ' If the tooltip window is disabled, enable it.
	        If (GetWindowLong(hwndTT, GWL_STYLE) And WS_DISABLED) Then
	           Call EnableWindow(hwndTT, 1)
	        End If
	     End If
	
	    ' All done...
	    Command1.Enabled = False
	  End Sub
	
	8. From the File menu, choose Make Project1.exe.
	
	9. Run the compiled executable and display Form2 both non-modally and modally,
	  placing the cursor over TreeView Node text.
	
	  NOTE: When displayed modally the tooltip window flashes unless the TreeView
	  Node tooltip window is enabled by clicking the CommandButton.
	
	REFERENCES
	==========
	
	For additional information regarding treeview tooltip issues, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q241097 PRB: TreeView Tooltips Window Does Not Appear on Windows NT
	
	  Q241102 BUG: TreeView Nodes Tooltips Fail to Appear on Usercontrol
	
	Additional query words:
	
	======================================================================
	Keywords          : kbActiveX kbAPI kbCmnCtrls kbSDKWin32 kbToolTip kbTreeView kbVBp kbVBp500bug kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
