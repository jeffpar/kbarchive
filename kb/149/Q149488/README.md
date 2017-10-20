---
layout: page
title: "Q149488: FIX: Closing an MDI Form Results in a General Protection Fault"
permalink: /kb/149/Q149488/
---

## Q149488: FIX: Closing an MDI Form Results in a General Protection Fault

{% raw %}

	Article: Q149488
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbCtrl kbVBp400bug kbVBp500fix kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Visual Basic program contains an MDI child form with a ComboBox set to the
	1-Simple ComboBox style. The ComboBox contains at least one item. When you
	select an item in the ComboBox and then attempt to close the MDI Child form with
	the Close button, the program shuts down with the following error message:
	
	  VB32 caused a general protection fault in module USER.EXE
	
	RESOLUTION
	==========
	
	To work around this bug, you can do one of the following:
	
	- Compile your program using Visual Basic version 5.0.
	
	- Use a ComboBox style other than the 1-Simple ComboBox.
	
	- Disable the Close button on the Toolbar using the Windows API functions as
	  shown in the MORE INFORMATION section. Instead, use the Unload method to
	  close the MDI Child form.
	
	- Close the form using an Unload statement in a command button or menu item
	  click event. Use the following code in the Query_Unload event of the MDI
	  child with the combo box to block an attempt to unload the form from the
	  control menu of the close button:
	
	        Private Sub Query_Unload(Cancel As Integer, UnloadMode As Integer)
	           If UnloadMode = vbFormControlMenu Then
	              Cancel = True
	           End If
	        End Sub
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in Visual Basic, version
	5.0.
	
	MORE INFORMATION
	================
	
	This section shows how to create a sample project that demonstrates the bug and
	shows how to disable the Close button on the toolbar using Windows API
	functions.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start Visual Basic 4.0 or, if it is already running, click New Project on the
	  File menu.
	
	2. Set the MDIChild property of Form1 to True.
	
	3. Add a ComboBox and two Command buttons to Form1. Set the ComboBox Style
	  property to 1-Simple ComboBox.
	
	4. Copy the following code to the Code window of Form1:
	
	        Option Explicit
	
	        Private Declare Function GetSystemMenu Lib "user32" _
	                 (ByVal hWnd As Long, _
	                 ByVal bRevert As Long) As Long
	
	        Private Declare Function ModifyMenu Lib "user32" _
	                 Alias "ModifyMenuA" _
	                 (ByVal hMenu As Long, _
	                 ByVal nPosition As Long, _
	                 ByVal wFlags As Long, _
	                 ByVal wIDNewItem As Long, _
	                 ByVal lpString As Any) As Long
	
	        Private Declare Function GetMenuItemID Lib "user32" _
	              (ByVal hMenu As Long, _
	              ByVal nPos As Long) As Long
	
	        Const MF_BYPOSITION = &H400&
	        Const MF_GRAYED = &H1&
	        Const MF_BYCOMMAND = &H0&
	
	        Sub Command1_click()
	        ' Disables the Close button by calling a user-defined function.
	           Dim hwndParent As Long
	           hwndParent = Me.hWnd
	           DisableItem hwndParent, "&Close", 6
	        End Sub
	
	        Sub DisableItem(hWnd As Long, _
	                       sMenuCaption As String, _
	                       iMenuPos As Integer)
	        'User-defined function to disable the Close button on the
	        'MDI Child Form toolbar.
	           Dim hMenu As Long
	           Dim hItem As Long
	
	           hMenu = GetSystemMenu(hWnd, 0)
	           hItem = GetMenuItemID(hMenu, iMenuPos)
	           ModifyMenu hMenu, _
	                       hItem, _
	                       MF_BYCOMMAND Or MF_GRAYED, _
	                       -9, _
	                       sMenuCaption
	        End Sub
	
	        Private Sub Command2_Click()
	            Unload Me
	        End Sub
	
	        Private Sub Form_Load()
	            Me.Show
	            Combo1.AddItem "first item"
	            Command1.Caption = "Disable Close Button"
	            Command2.Caption = "Unload MDI Child Form"
	        End Sub
	
	5. From the Insert menu, click MDIForm to add an MDI form to the project.
	  MDIForm1 is created by default.
	
	6. On the Run menu, click start or press the F5 key to start the program. Select
	  the first item in the ComboBox. Click the Close button in the Form1 form
	  toolbar. An application error occurs with an error message.
	
	7. Run the program again, click Disable Close Button. Check the Close menu item
	  in the control menu to confirm that it is grayed out. Select the first item
	  in the ComboBox, and then close the form using the Unload MDI Child Form
	  button, the MDI Child form closes normally.
	
	Additional query words: kbide kbVBp kbdsd kbDSupport kbVBp400bug kbVBp500fix kbControl
	
	======================================================================
	Keywords          : kbCtrl kbVBp400bug kbVBp500fix kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
