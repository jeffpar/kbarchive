---
layout: page
title: "Q288222: HOWTO: Create a Transparent Framer Control"
permalink: /kb/288/Q288222/
---

## Q288222: HOWTO: Create a Transparent Framer Control

{% raw %}

	Article: Q288222
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbsample kbActiveX kbCtrlCreate kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 22-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can create a transparent frame to emphasize a section of some other control
	by using a custom UserControl. This article demonstrates how to create and use a
	Framer control for this purpose.
	
	MORE INFORMATION
	================
	
	The Framer control can be used to highlight or point out sections of another
	control for emphasis. You can also click through the "frame" and affect the
	control beneath it. If you want to create multiple frames, you can use a control
	array or, in Visual Basic 6.0, you can create additional controls dynamically.
	The "References" section of this article includes instructions for this.
	
	The following example uses an MSChart and an MSFlexGrid control for
	demonstration. The code is the same for each, but the Chart has a smaller
	border.
	
	The Framer uses an Adjustment value for positioning the Line controls that form
	the right and bottom sides. This is because, like most controls, Lines are
	positioned by their Top and Left coordinates. So this Adjustment factor brings
	the right and bottom lines into view.
	
	Steps to Create a Framer Control and Test Project
	-------------------------------------------------
	
	1. Create a new Standard EXE project. Form1 is created by default.
	
	2. On the Project menu, click to select Components, check both Microsoft
	  FlexGrid Control and Microsoft Chart Control, and then click OK.
	
	3. Add an MSFlexGrid control and an MSChart control to Form1.
	
	4. Insert the following code into the General Declarations section of Form1:
	
	  Private Type RECT
	          Left As Long
	          Top As Long
	          Right As Long
	          Bottom As Long
	  End Type
	
	  Dim Framing As RECT
	
	  Dim MINFrameSize As Integer   ' Smallest Frame dimension to draw.
	  Dim FlexGridBoderSize As Integer
	  Dim ChartBoderSize As Integer
	
	  Private Sub Form_Load()
	  Framer1.Visible = False
	  MINFrameSize = 120
	  ChartBoderSize = 20
	  FlexGridBoderSize = 50
	  With MSFlexGrid1   ' Draw MSFlexGrid to Minimum size. 
	      .Cols = 4
	      .Rows = 10
	      .Width = .ColWidth(1) * .Cols + FlexGridBoderSize * 2
	      .Height = .RowHeight(1) * .Rows + FlexGridBoderSize * 2
	  End With
	  End Sub
	
	  Private Sub MSChart1_MouseDown(Button As Integer, Shift As Integer, _
	     X As Single, Y As Single)
	  If Button = vbRightButton Then
	      Framing.Top = Y + MSChart1.Top + ChartBoderSize 
	      Framing.Left = X + MSChart1.Left + ChartBoderSize 
	  End If
	  End Sub
	
	  Private Sub MSChart1_MouseUp(Button As Integer, Shift As Integer, _
	     X As Single, Y As Single)
	  If Button = vbRightButton Then
	      Framing.Bottom = Y + MSChart1.Top + ChartBoderSize 
	      Framing.Right = X + MSChart1.Left + ChartBoderSize 
	  End If
	
	  If Abs(Framing.Top - Framing.Bottom) > MINFrameSize And _
	     Abs(Framing.Left - Framing.Right) > MINFrameSize Then
	      Framer1.Top = Framing.Top
	      Framer1.Left = Framing.Left
	      Framer1.Height = Abs(Framing.Top - Framing.Bottom)
	      Framer1.Width = Abs(Framing.Left - Framing.Right)
	      Framer1.ZOrder 0   ' Place on top
	      Framer1.Visible = True
	  End If
	  End Sub
	
	  Private Sub MSFlexGrid1_MouseDown(Button As Integer, Shift As Integer, _
	     x As Single, y As Single)
	  If Button = vbRightButton Then
	      Framing.Top = y + MSFlexGrid1.Top + FlexGridBoderSize 
	      Framing.Left = x + MSFlexGrid1.Left + FlexGridBoderSize 
	  End If
	  End Sub
	
	  Private Sub MSFlexGrid1_MouseUp(Button As Integer, Shift As Integer, _
	     x As Single, y As Single)
	  If Button = vbRightButton Then
	      Framing.Bottom = y + MSFlexGrid1.Top + FlexGridBoderSize 
	      Framing.Right = x + MSFlexGrid1.Left + FlexGridBoderSize 
	  End If
	
	  If Abs(Framing.Top - Framing.Bottom) > MINFrameSize And _
	     Abs(Framing.Left - Framing.Right) > MINFrameSize Then
	      Framer1.Top = Framing.Top
	      Framer1.Left = Framing.Left
	      Framer1.Height = Abs(Framing.Top - Framing.Bottom)
	      Framer1.Width = Abs(Framing.Left - Framing.Right)
	      Framer1.ZOrder 0   ' Place on top
	      Framer1.Visible = True
	  End If
	  End Sub
	
	5. On the File menu, choose Add Project, and then add a new ActiveX Control
	  project.
	
	6. In the Properties window, set the Appearance to 0 - Flat, the BackStyle to 0
	  - Transparent, and the BorderStyle to 1 - Fixed Single.
	
	7. Add an array of four Line controls as follows:
	
	  a. Double-click the Line control in the toolbox and it appears on the
	     UserControl.
	
	  b. In the Properties window, set the BorderWidth to 5, and the BorderColor to
	     red (from the Palette tab.)
	
	  c. Click on the Line and copy and paste the control. Click Yes on the dialog
	     box that pops up asking to create a control array.
	
	  d. Paste it two more times.
	
	8. Insert the following code into the General Declarations section of the
	  UserControl:
	
	  Private Sub UserControl_Resize()
	  Dim Adjustment As Integer   ' To properly position Lines within edges
	
	      Adjustment = 40
	      ' Top Line
	      Line1(0).X1 = 0
	      Line1(0).Y1 = 0
	      Line1(0).X2 = UserControl.Width
	      Line1(0).Y2 = 0
	      ' Right Line
	      Line1(1).X1 = UserControl.Width - Adjustment 
	      Line1(1).Y1 = 0
	      Line1(1).X2 = UserControl.Width - Adjustment 
	      Line1(1).Y2 = UserControl.Height
	      ' Bottom Line
	      Line1(2).X1 = 0
	      Line1(2).Y1 = UserControl.Height - Adjustment 
	      Line1(2).X2 = UserControl.Width
	      Line1(2).Y2 = UserControl.Height - Adjustment 
	      ' Left Line
	      Line1(3).X1 = 0
	      Line1(3).Y1 = 0
	      Line1(3).X2 = 0
	      Line1(3).Y2 = UserControl.Height
	  End Sub
	
	9. In the Properties window, rename UserControl1 to Framer, and then close the
	  UserControl design and code windows.
	
	10. Add a Framer UserControl, Framer1, to Form1 and set the Visible property to
	  False.
	
	11. Run the project and use the mouse to select an area to "frame." Where you
	  first alternate-click the mouse is the starting point and where you release
	  the button is the ending point to define the rectangular frame. When you
	  release the mouse button, the red frame appears.
	
	  You can redraw the Framer anywhere in either the MSFlexGrid or MSChart
	  control. Note also that you can click through the Framer and affect the
	  control beneath it.
	
	REFERENCES
	==========
	
	For additional information adding controls at run-time, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q190670 HOWTO: Dynamically Add Controls to a Form with Visual Basic 6.0
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsample kbActiveX kbCtrlCreate kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
