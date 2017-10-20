---
layout: page
title: "Q141358: HOWTO: Use the Win32 DrawEdge API Function to Draw 3D Effects"
permalink: /kb/141/Q141358/
---

## Q141358: HOWTO: Use the Win32 DrawEdge API Function to Draw 3D Effects

{% raw %}

	Article: Q141358
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbAPI kbVBp kbVBp400 kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Win32 API features a new function called DrawEdge. Its purpose is to draw 3D
	effects for all Windows applications. Microsoft Windows NT, Microsoft Windows
	2000, Microsoft Windows 95, and Windows 98 all use the DrawEdge function for all
	of their 3D effects. "The Windows Interface Guidelines for Software Design" (by
	Microsoft Press) also suggests that all Windows programmers use the DrawEdge
	function when adding 3D effects to their applications. The advantages of using
	the DrawEdge function are:
	
	- It provides a consistent 3D look and feel for all applications.
	
	- It saves the programmer from having to convert their 3D code to a flat
	  version for use with monochrome displays and printers.
	
	- It insures that your 3D effects redraw properly when the system colors
	  change.
	
	- It allows you to avoid using and distributing THREED32.OCX to add 3D effects
	  to your application.
	
	- It allows for maximum portability to future versions of Windows.
	
	MORE INFORMATION
	================
	
	The following code sample is a module of all of the declarations needed to use
	the DrawEdge function with Visual Basic 4.0 for Windows.
	
	  '***********************************************************************
	  ' DrawEdge.bas - Contains API declarations and constants for the
	  '                DrawEdge API function.
	  '***********************************************************************
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
	
	  ' For diagonal lines, the BF_RECT flags specify the end point of the
	  ' vector bounded by the rectangle parameter.
	  Public Const BF_DIAGONAL_ENDTOPRIGHT = (BF_DIAGONAL Or BF_TOP _
	  Or BF_RIGHT)
	  Public Const BF_DIAGONAL_ENDTOPLEFT = (BF_DIAGONAL Or BF_TOP Or BF_LEFT)
	  Public Const BF_DIAGONAL_ENDBOTTOMLEFT = (BF_DIAGONAL Or BF_BOTTOM _
	  Or BF_LEFT)
	  Public Const BF_DIAGONAL_ENDBOTTOMRIGHT = (BF_DIAGONAL Or BF_BOTTOM _
	  Or BF_RIGHT)
	
	  Public Const BF_MIDDLE = &H800        ' Fill in the middle
	  Public Const BF_SOFT = &H1000         ' For softer buttons
	  Public Const BF_ADJUST = &H2000       ' Calculate the space left over
	  Public Const BF_FLAT = &H4000         ' For flat rather than 3D borders
	  Public Const BF_MONO = &H8000         ' For monochrome borders
	
	  Public Declare Function DrawEdge Lib "user32" (ByVal hdc As Long, _
	      qrc As RECT, ByVal edge As Long, ByVal grfFlags As Long) As Boolean
	
	  '***********************************************************************
	  ' DrawEdge.frm - Demonstrates a simple example of how to use DrawEdge.
	  '***********************************************************************
	  Option Explicit
	
	  '***********************************************************************
	  ' Prepares the form and Picture1 for use with DrawEdge.
	  '***********************************************************************
	  Private Sub Form_Load()
	      '-------------------------------------------------------------------
	      ' Always set the ScaleMode to pixels when using API drawing
	      ' functions.
	      '-------------------------------------------------------------------
	      ScaleMode = vbPixels
	      With Picture1
	          '---------------------------------------------------------------
	          ' The next line is not required if you put your drawing code
	          ' in the Paint event.
	          '---------------------------------------------------------------
	          .AutoRedraw = True
	          '---------------------------------------------------------------
	          ' Set the Backcolor, set the Borderstyle to none, and size
	          ' the picture box to a more realistic button size.
	          '---------------------------------------------------------------
	          .BackColor = vb3DFace
	          .BorderStyle = 0
	          .Move 60, 10, 90, 30
	          '-------------------- -------------------------------------------
	          ' Make sure the picture box uses the pixel ScaleMode, and
	          ' set the tag of the control to a caption for later use with
	          ' DrawControl.
	          '---------------------------------------------------------------
	          .ScaleMode = vbPixels
	          .Tag = "DrawEdge Test"
	      End With
	      '-------------------------------------------------------------------
	      ' Draw the initial button.
	      '-------------------------------------------------------------------
	      DrawControl Picture1, Picture1.Tag, EDGE_RAISED
	  End Sub
	
	  '***********************************************************************
	  ' When the picture box gets a click event, an etched box is drawn on
	  ' the upper left corner of the form.
	  '***********************************************************************
	  Private Sub Picture1_Click()
	      Dim r As RECT   ' used by DrawEdge to determine where to draw
	      '-------------------------------------------------------------------
	      ' Location of the etched box.
	      '-------------------------------------------------------------------
	      With r
	          .Left = 10
	          .Top = 10
	          .Right = 50
	          .Bottom = 50
	      End With
	      '-------------------------------------------------------------------
	      ' Draw it.
	      '-------------------------------------------------------------------
	      DrawEdge hdc, r, EDGE_ETCHED, BF_RECT
	  End Sub
	
	  '***********************************************************************
	  ' When the user presses the mouse down on the picture box a sunken edge
	  ' is drawn to simulate a depresessed button.
	  '***********************************************************************
	  Private Sub Picture1_MouseDown(Button%, Shift%, X!, Y!)
	      DrawControl Picture1, Picture1.Tag, EDGE_SUNKEN
	  End Sub
	
	  '***********************************************************************
	  ' When the user releases the mouse over the picture box a standard
	  ' button is drawn.
	  '***********************************************************************
	  Private Sub Picture1_MouseUp(Button%, Shift%, X!, Y!)
	      DrawControl Picture1, Picture1.Tag, EDGE_RAISED
	  End Sub
	
	  '***********************************************************************
	  ' The DrawControl helper function is designed to make it easier to
	  ' draw a button on a picture box.
	  '***********************************************************************
	  Private Sub DrawControl(picControl As PictureBox, _
	      strCaption As String, Optional vntEdge)
	
	      Dim r As RECT    ' Holds the location of the DrawEdge rectangle.
	      Dim intOffset%   ' Used to shift the caption when the button is
	                       ' pressed.
	      '-------------------------------------------------------------------
	      ' If the user doesn't provide a Edge flag, then use a default value.
	      '-------------------------------------------------------------------
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
	      ' If AutoRedraw is True, then any drawing done by an API call cannot
	      ' be seen until until the picture box gets refreshed.
	      '-------------------------------------------------------------------
	      If picControl.AutoRedraw Then picControl.Refresh
	  End Sub
	
	Additional query words: DRAW EDGE THREED SSPANEL
	
	======================================================================
	Keywords          : kbAPI kbVBp kbVBp400 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400
	Version           : WINDOWS:4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
