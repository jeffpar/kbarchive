---
layout: page
title: "Q143262: HOWTO: Enable the Windows 95/98/Me Size Grip in a VB Form"
permalink: /kb/143/Q143262/
---

## Q143262: HOWTO: Enable the Windows 95/98/Me Size Grip in a VB Form

	Article: Q143262
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): KbVBA kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 28-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There are two ways to enable the Windows 95, Windows 98, or Windows Me Style
	Size Grip on the lower-right corner of a Microsoft Visual Basic Form.
	
	MORE INFORMATION
	================
	
	The Windows 95/98/Me Style Size Grip appears on certain forms and signals to the
	user that the form is resizable.
	
	There are two ways to enable the Size Grip icon to appear at the lower- right of
	a Visual Basic Form.
	
	- The first way is to use the Status Bar Control, which is part of Windows
	  Common Controls 6.0 (MSCOMCTL.OCX). This control positions itself at the
	  bottom of the form and the size grip automatically appears on the right end
	  of the control when the form is sizable.
	
	- The second way is to place a TextBox on the form so that the lower-right
	  corner is always located on the lower-right corner of the form. You must then
	  set the following properties for the TextBox in the Properties Window:
	
	        Text1.Multiline = True
	        Text1.Scrollbars = 3    'Both
	
	The following code demonstrates using a text box in this way:
	
	          Const x = 100       'where x and y are scaled values that you
	          Const y = 385       'use to take into account the fact that
	                              'the TextBox should be a little less wide
	                              'and high than the form. You should
	                              'initialize these to constant values.
	
	          Private Sub Form_Load()
	              Text1.Left = 0
	              Text1.Top = 0
	              Text1.Width = Me.Width - x
	              Text1.Height = Me.Height - y
	          End Sub
	
	          Private Sub Form_Resize()
	              Text1.Width = Me.Width - x
	              Text1.Height = Me.Height - y
	          End Sub
	
	Additional query words:
	
	======================================================================
	Keywords          : KbVBA kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400 kbVB16bitSearch
	Version           : :4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
