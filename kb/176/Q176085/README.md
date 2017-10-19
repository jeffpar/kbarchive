---
layout: page
title: "Q176085: HOWTO: Use the System Tray Directly from Visual Basic"
permalink: /kb/176/Q176085/
---

## Q176085: HOWTO: Use the System Tray Directly from Visual Basic

	Article: Q176085
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbVBp kbVBp500 kbVBp600bug kbGrpDSVBDB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article demonstrates how to take full advantage of the Windows System Tray,
	or Taskbar Notification Area, using Visual Basic. It places an icon of your
	choice into the Taskbar Notification Area that will display a ToolTip of your
	choice when the mouse is rested over it, will restore the application when
	clicked, and will display a popup menu when right-clicked. This is all possible
	because of Visual Basic's ability to directly handle callbacks, therefore taking
	full advantage of the Shell_NotifyIcon function that is exported by Shell32.dll.
	
	MORE INFORMATION
	================
	
	The following example can be added to any Visual Basic Project that has at least
	one form and a standard module.
	
	Step-by-Step Example
	--------------------
	
	1. Add the following code to the declarations section of a standard module in
	  your project:
	
	        'user defined type required by Shell_NotifyIcon API call
	        Public Type NOTIFYICONDATA
	         cbSize As Long
	         hwnd As Long
	         uId As Long
	         uFlags As Long
	         uCallBackMessage As Long
	         hIcon As Long
	         szTip As String * 64
	        End Type
	
	        'constants required by Shell_NotifyIcon API call:
	        Public Const NIM_ADD = &H0
	        Public Const NIM_MODIFY = &H1
	        Public Const NIM_DELETE = &H2
	        Public Const NIF_MESSAGE = &H1
	        Public Const NIF_ICON = &H2
	        Public Const NIF_TIP = &H4
	        Public Const WM_MOUSEMOVE = &H200
	        Public Const WM_LBUTTONDOWN = &H201     'Button down
	        Public Const WM_LBUTTONUP = &H202       'Button up
	        Public Const WM_LBUTTONDBLCLK = &H203   'Double-click
	        Public Const WM_RBUTTONDOWN = &H204     'Button down
	        Public Const WM_RBUTTONUP = &H205       'Button up
	        Public Const WM_RBUTTONDBLCLK = &H206   'Double-click
	
	        Public Declare Function SetForegroundWindow Lib "user32" _
	        (ByVal hwnd As Long) As Long
	        Public Declare Function Shell_NotifyIcon Lib "shell32" _
	        Alias "Shell_NotifyIconA" _
	        (ByVal dwMessage As Long, pnid As NOTIFYICONDATA) As Boolean
	
	        Public nid As NOTIFYICONDATA
	
	2. Add the following code to any form in your project that you want to respond
	  to the System Tray Icon, or Notification Icon, for your application:
	
	        Private Sub Form_Load()
	         'the form must be fully visible before calling Shell_NotifyIcon
	         Me.Show
	         Me.Refresh
	         With nid
	          .cbSize = Len(nid)
	          .hwnd = Me.hwnd
	          .uId = vbNull
	          .uFlags = NIF_ICON Or NIF_TIP Or NIF_MESSAGE
	          .uCallBackMessage = WM_MOUSEMOVE
	          .hIcon = Me.Icon
	          .szTip = "Your ToolTip" & vbNullChar
	         End With
	         Shell_NotifyIcon NIM_ADD, nid
	        End Sub
	
	        Private Sub Form_MouseMove(Button As Integer, Shift As Integer, X As
	     _
	           Single, Y As Single)
	        'this procedure receives the callbacks from the System Tray icon.
	        Dim Result As Long
	        Dim msg As Long
	         'the value of X will vary depending upon the scalemode setting
	         If Me.ScaleMode = vbPixels Then
	          msg = X
	         Else
	          msg = X / Screen.TwipsPerPixelX
	         End If
	         Select Case msg
	          Case WM_LBUTTONUP        '514 restore form window
	           Me.WindowState = vbNormal
	           Result = SetForegroundWindow(Me.hwnd)
	           Me.Show
	          Case WM_LBUTTONDBLCLK    '515 restore form window
	           Me.WindowState = vbNormal
	           Result = SetForegroundWindow(Me.hwnd)
	           Me.Show
	          Case WM_RBUTTONUP        '517 display popup menu
	           Result = SetForegroundWindow(Me.hwnd)
	           Me.PopupMenu Me.mPopupSys
	         End Select
	        End Sub
	
	        Private Sub Form_Resize()
	         'this is necessary to assure that the minimized window is hidden
	         If Me.WindowState = vbMinimized Then Me.Hide
	        End Sub
	
	        Private Sub Form_Unload(Cancel As Integer)
	         'this removes the icon from the system tray
	         Shell_NotifyIcon NIM_DELETE, nid
	        End Sub
	
	        Private Sub mPopExit_Click()
	         'called when user clicks the popup menu Exit command
	         Unload Me
	        End Sub
	
	        Private Sub mPopRestore_Click()
	         'called when the user clicks the popup menu Restore command
	         Dim Result As Long
	         Me.WindowState = vbNormal
	         Result = SetForegroundWindow(Me.hwnd)
	         Me.Show
	        End Sub
	
	3. Make the following Property Settings on the same form to which you added the
	  above code:
	
	  Property         Required Setting for Taskbar Notification Area example
	  -----------------------------------------------------------------------
	  Icon           = The icon you want to appear in the system tray.
	  Minbutton      = True
	  ShownInTaskbar = False
	
	4. Add the following Menu items to the same form using the Menu Editor:
	
	  Caption      Name          Enabled   Visible   Position
	  ---------------------------------------------------------
	  &SysTray     mPopupSys      True      False    Main Level
	  &Restore     mPopRestore    True      True     Inset one
	  &Exit        mPopExit       True      True     Inset one
	
	You can add additional menu items as needed.
	
	Taskbar Notification Area Flexibility
	-------------------------------------
	
	You can modify the ToolTip that appears over the Notification icon by changing
	the following line in the Form_Load procedure:
	
	     .szTip = "Your ToolTip" & vbNullChar
	
	Replace "Your ToolTip" with the text that you want to appear.
	
	You can modify the Icon that appears in the Taskbar Notification Area by changing
	the following line in the Form_Load procedure:
	
	     .hIcon = Me.Icon
	
	Replace Me.Icon with any Icon in your project.
	
	You can change any of the Taskbar Notification Area settings at any time after
	the use of the NIM_ADD constant by reassigning the values in the nid variable
	and then using the following variation of the Shell_NotifyIcon API call:
	
	     Shell_NotifyIcon NIM_MODIFY, nid.
	
	However, if you want a different form to receive the callback, then you will need
	to delete the current icon first using "Shell_NotifyIcon NIM_Delete, nid" as the
	NIM_Modify function will not accept a new Hwnd, or you will need to add another
	Icon to the systray for the new form using "Shell_NotifyIcon NIM_ADD, nid" after
	refilling the nid type with the new forms Hwnd. You can also declare separate
	copies of the nid type for each form that you want to display an icon for in the
	Windows System Tray and change them in each form's activate event using the
	NIM_DELETE and NIM_ADD sequence.
	
	REFERENCES
	==========
	
	For information regarding using the System Tray, or Taskbar Notification Area,
	from Visual Basic 4.0 or earlier, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q149276 HOWTO: Use Icons with the Windows 95 System Tray
	
	Additional query words: Taskbar
	
	======================================================================
	Keywords          : kbVBp kbVBp500 kbVBp600bug kbGrpDSVBDB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbZNotKeyword3
	Version           : :5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
