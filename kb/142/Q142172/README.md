---
layout: page
title: "Q142172: HOWTO: Perform 3-D Line Drawing in Win32 with DrawEdge"
permalink: kb/142/Q142172/
---

## Q142172: HOWTO: Perform 3-D Line Drawing in Win32 with DrawEdge

	Article: Q142172
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Win32 DrawEdge function provides an extremely powerful, yet
	simple, method for drawing three-dimensional (3-D) lines. By using this
	function, your application can duplicate any 3-D effects found in the operating
	system. The main advantage of this function over your custom function is that it
	adapts to changes in the system colors and resolution. This function is also
	more likely to adapt to changes in the operating system as future versions of
	Microsoft Windows are released.
	
	MORE INFORMATION
	================
	
	The following code sample demonstrates how to use the DrawEdge function.
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Add a PictureBox control to the Form1 form.
	
	3. Add a BAS module to the project and add the following code to the module:
	
	        '*******************************************************************
	        ' DrawEdge.bas - Contains API declarations and constants for the
	        '                DrawEdge function.
	        '*******************************************************************
	        Option Explicit
	        Public Type RECT
	           Left As Long
	           Top As Long
	           Right As Long
	           Bottom As Long
	        End Type
	
	        Public Const BDR_RAISEDOUTER = &H1
	        Public Const BDR_SUNKENOUTER = &H2
	        Public Const BDR_RAISEDINNER = &H4
	        Public Const BDR_SUNKENINNER = &H8
	
	        Public Const BDR_OUTER = &H3
	        Public Const BDR_INNER = &HC
	        Public Const BDR_RAISED = &H5
	        Public Const BDR_SUNKEN = &HA
	
	        Public Const EDGE_RAISED = (BDR_RAISEDOUTER Or BDR_RAISEDINNER)
	        Public Const EDGE_SUNKEN = (BDR_SUNKENOUTER Or BDR_SUNKENINNER)
	        Public Const EDGE_ETCHED = (BDR_SUNKENOUTER Or BDR_RAISEDINNER)
	        Public Const EDGE_BUMP = (BDR_RAISEDOUTER Or BDR_SUNKENINNER)
	
	        Public Const BF_LEFT = &H1
	        Public Const BF_TOP = &H2
	        Public Const BF_RIGHT = &H4
	        Public Const BF_BOTTOM = &H8
	
	        Public Const BF_TOPLEFT = (BF_TOP Or BF_LEFT)
	        Public Const BF_TOPRIGHT = (BF_TOP Or BF_RIGHT)
	        Public Const BF_BOTTOMLEFT = (BF_BOTTOM Or BF_LEFT)
	        Public Const BF_BOTTOMRIGHT = (BF_BOTTOM Or BF_RIGHT)
	        Public Const BF_RECT = (BF_LEFT Or BF_TOP Or BF_RIGHT Or BF_BOTTOM)
	
	        Public Const BF_DIAGONAL = &H10
	
	        ' For diagonal lines, the BF_RECT flags specify the end point of
	        ' the vector bounded by the rectangle parameter.
	        Public Const BF_DIAGONAL_ENDTOPRIGHT = (BF_DIAGONAL Or BF_TOP _
	                     Or BF_RIGHT)
	        Public Const BF_DIAGONAL_ENDTOPLEFT = (BF_DIAGONAL Or BF_TOP _
	                     Or BF_LEFT)
	        Public Const BF_DIAGONAL_ENDBOTTOMLEFT = (BF_DIAGONAL Or BF_BOTTOM _
	                     Or BF_LEFT)
	        Public Const BF_DIAGONAL_ENDBOTTOMRIGHT = (BF_DIAGONAL Or BF_BOTTOM _
	                     Or BF_RIGHT)
	
	        Public Const BF_MIDDLE = &H800    ' Fill in the middle.
	        Public Const BF_SOFT = &H1000     ' Use for softer buttons.
	        Public Const BF_ADJUST = &H2000   ' Calculate the space left over.
	        Public Const BF_FLAT = &H4000     ' For flat rather than 3-D borders.
	        Public Const BF_MONO = &H8000     ' For monochrome borders.
	
	        Public Declare Function DrawEdge Lib "user32" (ByVal hdc As Long, _
	          qrc As RECT, ByVal edge As Long, ByVal grfFlags As Long) As Boolean
	
	4. Add the following code to Form1:
	
	        '********************************************************************
	        ' DrawEdge.frm - Demonstrates a simple method of using the
	        '                DrawEdge function.
	        '********************************************************************
	        Option Explicit
	
	        '********************************************************************
	        ' Prepares the form and Picture1 for use with the DrawEdge function.
	        '********************************************************************
	
	        Private Sub Form_Load()
	        '--------------------------------------------------------------------
	        ' Always set the ScaleMode to pixels when using API drawing
	        ' functions.
	        '--------------------------------------------------------------------
	           ScaleMode = vbPixels
	           With Picture1
	              '--------------------------------------------------------------
	              ' The next line is not required if you put your drawing code
	              ' in the Paint event.
	              '--------------------------------------------------------------
	              .AutoRedraw = True
	
	              '--------------------------------------------------------------
	              ' Set the Backcolor, set the Borderstyle to none, and size
	              ' the picture box to a more realistic button size.
	              '--------------------------------------------------------------
	              .BackColor = vb3DFace
	              .BorderStyle = 0
	              .Move 60, 10, 90, 30
	
	              '--------------------------------------------------------------
	              ' Make sure the picture box uses the pixel ScaleMode, and
	              ' set the tag of the control to a caption for later use by
	              ' the DrawControl function.
	              '--------------------------------------------------------------
	              .ScaleMode = vbPixels
	              .Tag = "DrawEdge Test"
	           End With
	
	           '-----------------------------------------------------------------
	           ' Draw the initial button.
	           '-----------------------------------------------------------------
	           DrawControl Picture1, Picture1.Tag, EDGE_RAISED
	
	        End Sub
	
	        '********************************************************************
	        ' When the picture box gets a click event, draw a etched box on the
	        ' upper-left corner of the form.
	        '********************************************************************
	
	        Private Sub Picture1_Click()
	           Dim r As RECT   ' Used by DrawEdge to determine where to draw.
	
	           '-----------------------------------------------------------------
	           ' Location of the etched box.
	           '-----------------------------------------------------------------
	           With r
	              .Left = 10
	              .Top = 10
	              .Right = 50
	              .Bottom = 50
	           End With
	
	           '-----------------------------------------------------------------
	           ' Draw it.
	           '-----------------------------------------------------------------
	           DrawEdge hdc, r, EDGE_ETCHED, BF_RECT
	
	        End Sub
	
	        '********************************************************************
	        ' When the user presses the mouse down on the picture box,
	        ' draw a sunken edge to simulate a depressed button.
	        '********************************************************************
	        Private Sub Picture1_MouseDown(Button%, Shift%, X!, Y!)
	           DrawControl Picture1, Picture1.Tag, EDGE_SUNKEN
	        End Sub
	
	        '********************************************************************
	        ' When the user releases the mouse over the picture box, draw a
	        ' standard button.
	        '********************************************************************
	        Private Sub Picture1_MouseUp(Button%, Shift%, X!, Y!)
	           DrawControl Picture1, Picture1.Tag, EDGE_RAISED
	        End Sub
	
	        '********************************************************************
	        ' The DrawControl helper function is designed to make it easier to
	        ' draw a button on a picture box.
	        '********************************************************************
	        Private Sub DrawControl(picControl As PictureBox, _
	                    strCaption As String, Optional vntEdge)
	
	        Dim r As RECT    ' Holds the location of the DrawEdge rectangle.
	        Dim intOffset%   ' Used to shift the caption when the button is
	                         ' pressed.
	        '--------------------------------------------------------------------
	        ' If the user does not provide a Edge flag, then use a default value.
	        '--------------------------------------------------------------------
	        vntEdge = IIf(IsMissing(vntEdge), EDGE_RAISED, vntEdge)
	
	        '-------------------------------------------------------------------
	        ' Clear the picture control and determine where to draw the new
	        ' rectangle and caption.
	        '-------------------------------------------------------------------
	        With picControl
	           .Cls
	           r.Left = .ScaleLeft
	           r.Top = .ScaleTop
	           r.Right = .ScaleWidth
	           r.Bottom = .ScaleHeight
	
	           If vntEdge = EDGE_SUNKEN Then intOffset = 2
	
	           .CurrentX = (.ScaleWidth - .TextWidth(strCaption) _
	                       + intOffset) / 2
	           .CurrentY = (.ScaleHeight - .TextHeight(strCaption) _
	                       + intOffset) / 2
	
	        End With
	
	        '-------------------------------------------------------------------
	        ' Draw the caption, then draw the rectangle.
	        '-------------------------------------------------------------------
	        Picture1.Print strCaption
	        DrawEdge picControl.hdc, r, CLng(vntEdge), BF_RECT
	
	        '-------------------------------------------------------------------
	        ' If AutoRedraw is True then any drawing done by an API call is not
	        ' seen until the picture box gets refreshed.
	        '-------------------------------------------------------------------
	        If picControl.AutoRedraw Then picControl.Refresh
	        End Sub
	
	5. Press the F5 key or click Start on the Run menu to start the program.
	
	6. Click the DrawEdge button to demonstrate several DrawEdge effects.
	
	Additional query words: kbVBp400 kbVBp500 kbVBp600 kbVBp kbdsd kbDSupport KBWIN32SDK KBAPI DRAWEDGE 3D THREED DRAWFRAMECONTROL vb4win
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600 kbVB400Search kbVB400
	Version           : :4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
