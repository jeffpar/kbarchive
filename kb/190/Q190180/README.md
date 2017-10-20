---
layout: page
title: "Q190180: PRB: Value of the Point Function Does Not Match Set Color"
permalink: /kb/190/Q190180/
---

## Q190180: PRB: Value of the Point Function Does Not Match Set Color

{% raw %}

	Article: Q190180
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the Visual Basic Point function to determine the color of the
	specified point, the RGB color value returned does not always match the region's
	color as set by the developer at design-time. Consequently, direct comparisons
	between a given point's color and a color property setting should be avoided
	because the values may not always agree.
	
	CAUSE
	=====
	
	This problem is typically the result of one of the following situations:
	
	1. The developer has set the color value for a property to a system color (such
	  as., &H80000001) instead of a valid RGB color value. The Point method
	  will always return an RGB value.
	
	2. The color value has been set to a color that is not within the range of valid
	  colors for the video hardware (or display settings) on an end user's system.
	  Such colors are typically translated to the nearest matching color based on
	  the available system palette. This means that you can never guarantee that
	  the Point function will exactly match the developer's chosen design-time
	  color value.
	
	RESOLUTION
	==========
	
	The only way to guarantee that a value returned from the Point function is the
	color setting chosen by the developer is to set a variable at run-time to a
	known point that contains the correct color, and use this value during
	comparisons. For example, if you know that coordinate 100,100 always contains
	the FillColor then you can set a variable to Point(100,100), and then use this
	variable when comparing a given point's color to the FillColor, as follows:
	
	     ActualFillColor = Point(100, 100)
	     If ActualFillColor = Point(x, y) Then
	        ' Do some code ...
	     End If
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Add a Label, Label1, and a Shape control, Shape1, to Form1.
	
	3. Add the following code to Form1's module:
	
	        Private Sub Form_Load()
	           Label1.Caption = "Test Color"
	           Shape1.FillStyle = 0 'Solid
	           Shape1.FillColor = &H8000000D 'System Color
	        End Sub
	
	        Private Sub Form_MouseMove(Button As Integer, Shift As Integer, _
	                                   X As Single, Y As Single)
	           Dim Color As Long
	           Color = Me.Point(X, Y)
	           If Color = Shape1.FillColor Then
	              Label1.Caption = "Mouse is over the shape!"
	           Else
	              Label1.Caption = "Mouse is Not over the shape!"
	           End If
	        End Sub
	
	4. Run the program by hitting the F5 key or choosing Start from the Run menu.
	  Move the mouse over the form. Note that the label never indicates that the
	  mouse is over the shape. To correct the problem, you need to compare the
	  MouseMove point value to a known point value.
	
	5. Stop the project and replace Form1's MouseMove event with this code:
	
	        Private Sub Form_MouseMove(Button As Integer, Shift As Integer, _
	                                   X As Single, Y As Single)
	           Dim ActualFillColor As Long
	           Dim Color As Long
	           ActualFillColor = Me.Point(Shape1.Left + 10, Shape1.Top + 10)
	           Color = Me.Point(X, Y)
	           If Color = ActualFillColor Then
	              Label1.Caption = "Mouse is over the shape!"
	           Else
	              Label1.Caption = "Mouse is Not over the shape!"
	           End If
	        End Sub
	
	6. Run the program by pressing the F5 key. Note that now when you move the mouse
	  over the form, the label correctly shows when the mouse is over the shape.
	
	Additional query words: kbDSupport kbDSD kbVBp kbVBp400 kbVBp500 kbVBp600 kbNoKeyWord
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
