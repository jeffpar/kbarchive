---
layout: page
title: "Q299686: HOWTO: Detect If Scroll Bars Are Visible on a Control"
permalink: /kb/299/Q299686/
---

## Q299686: HOWTO: Detect If Scroll Bars Are Visible on a Control

{% raw %}

	Article: Q299686
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbAPI kbCmnCtrls kbListView kbSDKWin32 kbTreeView kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbD
	Last Modified: 01-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Controls such as RichTextBox, TreeView, ListView, ListBox, DirListBox, and
	FileListBox do not offer built-in functionality to determine if a horizontal or
	vertical scroll bar is currently visible. This article demonstrates how to
	retrieve window style information about the control that can be used to
	determine if scroll bars are visible.
	
	MORE INFORMATION
	================
	
	The visibility of a scroll bar is stored as a window style of the control. To
	retrieve the window style information from a control, you can call the
	GetWindowLong function.
	
	Step-by-Step Example
	--------------------
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. On the Project menu, click Components. In the Components dialog box, select
	  the "Microsoft Windows Common Controls 6.0" check box, and then click OK.
	
	3. Add one TreeView and two CommandButton controls to Form1.
	
	4. Add the following code to the General Declarations section of Form1:
	
	  Option Explicit
	
	  Private Const GWL_STYLE = (-16)
	  Private Const WS_HSCROLL = &H100000
	  Private Const WS_VSCROLL = &H200000
	
	  Private Declare Function GetWindowLong Lib "user32" Alias "GetWindowLongA" & _
	     (ByVal hwnd As Long, ByVal nIndex As Long) As Long
	
	  Private Sub Command1_Click()
	      Dim wndStyle As Long
	      
	      ' Retrieve the window style of the control.
	      wndStyle = GetWindowLong(TreeView1.hwnd, GWL_STYLE)
	
	      ' Test if the horizontal scroll bar style is present
	      ' in the window style, indicating that a horizontal
	      ' scroll bar is visible.
	      If (wndStyle And WS_HSCROLL) <> 0 Then
	          MsgBox "A horizontal scroll bar is visible."
	      Else
	          MsgBox "A horizontal scroll bar is NOT visible."
	      End If
	    
	      ' Test if the vertical scroll bar style is present
	      ' in the window style, indicating that a vertical
	      ' scroll bar is visible.
	      If (wndStyle And WS_VSCROLL) <> 0 Then
	          MsgBox "A vertical scroll bar is visible."
	      Else
	          MsgBox "A vertical scroll bar is NOT visible."
	      End If
	  End Sub
	
	  Private Sub Command2_Click()
	      ' Make the size of the control smaller
	      ' so that the scroll bars will appear.
	      TreeView1.Move 250, 900, 1000, 1000
	  End Sub
	
	  Private Sub Form_Load()
	      ' Size and position the form and controls.
	      Form1.ScaleMode = 1
	      Form1.Move 0, 0, 5100, 5040
	      Command1.Caption = "Scroll Bar Test"
	      Command1.Move 120, 120, 1700, 500
	      Command2.Caption = "Size Control"
	      Command2.Move 2000, 120, 1700, 500
	      TreeView1.Move 250, 900, 3000, 1500
	      
	      ' Add sample text to the TreeView control.
	      TreeView1.Nodes.Add , , , "1: Sample Text"
	      TreeView1.Nodes.Add , , , "2: Sample Text"
	      TreeView1.Nodes.Add , , , "3: Sample Text"
	      TreeView1.Nodes.Add , , , "4: Sample Text"
	  End Sub
	
	5. Run the project. Notice that no scroll bars are present on the TreeView
	  control.
	
	6. Click Scroll Bar Test. A message box indicates that a horizontal scroll bar
	  is not present. Another message box indicates that a vertical scroll bar is
	  not present.
	
	7. Click Size Control. Notice that the height and width of the TreeView control
	  are smaller and that both a horizontal and vertical scroll bar are visible.
	
	8. Click Scroll Bar Test. A message box indicates that a horizontal scroll bar
	  is present, which is followed by another message box that indicates that a
	  vertical scroll bar is present.
	
	REFERENCES
	==========
	
	For more information on the GetWindowLong function that is used in this article,
	see the MSDN Library CD or the Win32 Software Development Kit (SDK) Programmer's
	Guide.
	
	Additional query words: scrollbar
	
	======================================================================
	Keywords          : kbAPI kbCmnCtrls kbListView kbSDKWin32 kbTreeView kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
