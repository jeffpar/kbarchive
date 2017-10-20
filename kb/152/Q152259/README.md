---
layout: page
title: "Q152259: HOWTO: Sync the StatusBar Text with the ToolTip Text"
permalink: /kb/152/Q152259/
---

## Q152259: HOWTO: Sync the StatusBar Text with the ToolTip Text

{% raw %}

	Article: Q152259
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
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
	
	The Microsoft Windows Common Controls OCX (COMCTL32.OCX) provides a ToolBar
	control and a StatusBar control that you can easily implement in your Visual
	Basic application. There is no built-in method to synchronize these two controls
	such that the StatusBar displays descriptive text for a ToolBar button when the
	mouse is currently located over it. This article illustrates how you can
	implement this behavior within your Visual Basic application.
	
	MORE INFORMATION
	================
	
	Some applications, such as Microsoft PowerPoint, Word, and Excel, will not only
	display a helpful tip when the mouse hovers over a ToolBar button, but will also
	display more descriptive text in the StatusBar to give the user a definition of
	the button's function. Although this feature is not built into the Toolbar and
	StatusBar controls in COMCTL32.OCX, there are ways to mimic its effect in a
	Visual Basic application as described in the following sample.
	
	Steps to Create Sample
	----------------------
	
	1. Create a new Visual Basic project. Form1 is created by default.
	
	2. Select Components from the Projects menu, check "Microsoft Windows Common
	  Controls" and Click OK.
	
	3. Add a ToolBar control to Form1.
	
	4. Add a StatusBar control to Form1.
	
	5. Insert two buttons on the ToolBar by right-clicking the ToolBar control,
	  selecting "Properties," and then the selecting the Buttons Tab.
	
	6. For the first button, Click "Insert Button" and set these properties:
	
	  Property         Value
	  --------         -----
	  Tag              Opens a File
	  ToolTipText      Open
	
	7. For the second button, Click "Insert Button" and set these properties:
	
	  Property         Value
	  --------         -----
	  Tag              Closes a File
	  ToolTipText      Close
	
	8. Right-click the StatusBar control and click Properties. Click the Panels tab
	  and set the AutoSize property of the first panel to "1-sbrSpring."
	
	9. Paste the following code into Form1's code window:
	
	        Private Sub Form_MouseMove(Button As Integer, _
	           Shift As Integer, X As Single, Y As Single)
	           StatusBar1.Panels(1).Text = ""  ' Clear when not over ToolBar
	        End Sub
	
	        Private Sub Toolbar1_MouseMove(Button As Integer, _
	           Shift As Integer, x As Single, y As Single)
	
	           Dim Found As Boolean
	           Dim ToolBarButton As Variant
	           Dim Index As Long
	
	           'Loop through all buttons on the toolbar
	           For Index = 1 To Toolbar1.Buttons.Count
	              'Set reference to button
	              Set ToolBarButton = Toolbar1.Buttons(Index)
	
	              'Check if mouse is positioned over button
	              If (x > ToolBarButton.Left) And _
	                 (x < (ToolBarButton.Left + ToolBarButton.Width)) And _
	                 (y > ToolBarButton.Top) And _
	                 (y < (ToolBarButton.Top + ToolBarButton.Height)) Then
	
	                 'Mouse is over button. Now to avoid screen flickering,
	                 'check if StatusBar needs updating
	                 If StatusBar1.Panels(1).Text <> ToolBarButton.Tag Then
	                    StatusBar1.Panels(1).Text = ToolBarButton.Tag
	                 End If
	
	                 'Set flag indicating a button was found
	                 Found = True
	
	                 'Button has been found, discontinue loop
	                 Exit For
	              End If
	           Next
	
	           If Not Found Then
	              StatusBar1.Panels(1).Text = ""
	           End If
	        End Sub
	
	10. Save and run the sample project. Move the mouse over the two buttons on the
	  ToolBar, and note that the appropriate text will be displayed in the
	  StatusBar's panel depending on which button, if any, the mouse is positioned
	  over.
	
	Additional query words: kbDSupport kbDSD kbCtrl kbVBp500 kbVBp400 kbVBp600 kbVBp
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
