---
layout: page
title: "Q191670: HOWTO: Suppress Default Pop-up Menu When You Use Custom Menu"
permalink: /kb/191/Q191670/
---

## Q191670: HOWTO: Suppress Default Pop-up Menu When You Use Custom Menu

{% raw %}

	Article: Q191670
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbAPI kbInternet kbMenu kbSDKWin32 kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSuppor
	Last Modified: 25-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Some Visual Basic controls, such as the TextBox control, have a default pop-up
	menu that automatically appears when you right-click on the control. This
	article demonstrates one way to disable this default pop-up menu in order that a
	custom pop-up menu is displayed.
	
	MORE INFORMATION
	================
	
	When you right-click on the TextBox control, its default pop-up menu is
	displayed. Visual Basic does not have a property or any other built-in mechanism
	that directly disables this feature. However, setting the control's Enabled
	property to False prevents the menu from being displayed, although this allows
	the user to see that the control is disabled.
	
	One workaround is to use the Windows LockWindowUpdate application programming
	interface (API) in conjunction with the Enabled property. The LockWindowUpdate
	function disables or re- enables drawing in a specified window. After the
	operation is complete, the control is re-enabled, and the LockWindowUpdate API
	is called a second time to resume drawing of the control.
	
	Steps to Create Sample Project
	------------------------------
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Add a TextBox control to Form1.
	
	3. Click Menu Editor from the Tools menu, and create a menu named mnuPopUp on
	  Form1. Clear the Visible check box, and add items such as the following:
	
	  Caption: Name
	  File: mnuPopup
	  New: mnuOne
	  Open: MnuTwo
	
	4. Add the following code to the code window of Form1:
	
	        Private Declare Function LockWindowUpdate Lib "user32" _
	           (ByVal hwndLock As Long) As Long
	
	        Private Sub mnuOne_Click()
	           Text1.Text = "Menu One was clicked"
	        End Sub
	
	        Private Sub mnuTwo_Click()
	           Text1.Text = "Menu two was clicked"
	        End Sub
	
	        Private Sub Text1_MouseDown(Button As Integer, Shift As Integer, _
	           X As Single, Y As Single)
	
	           If Button = vbRightButton Then
	           ' Avoid the 'disabled' gray text by locking updates
	              LockWindowUpdate Text1.hWnd
	
	              ' A disabled TextBox will not display a context menu
	              Text1.Enabled = False
	
	              ' Give the previous line time to complete
	              DoEvents
	
	              ' Display our own context menu
	              PopupMenu mnuPopup
	
	              ' Enable the control again
	              Text1.Enabled = True
	
	              ' Unlock updates
	              LockWindowUpdate 0&
	           End If
	        End Sub
	
	5. Save and run the project.
	
	6. Right-click on Text1. Only the custom menu is displayed. The standard editing
	  menu is not shown.
	
	Alternatively, you can subclass the control to supress the default pop-up menu.
	Through subclassing, you can monitor for the appropriate mouse messages and
	handle them accordingly. See the "References" section to follow for more
	information on this topic.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q170570 HOWTO: Build a Windows Message Handler with AddressOf in Visual
	  Basic
	
	  Q155969 HOWTO: Distribute the WebBrowser Control
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAPI kbInternet kbMenu kbSDKWin32 kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
