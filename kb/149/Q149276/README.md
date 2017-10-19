---
layout: page
title: "Q149276: HOWTO: Use Icons with the Windows 95/98/Me System Tray"
permalink: /kb/149/Q149276/
---

## Q149276: HOWTO: Use Icons with the Windows 95/98/Me System Tray

	Article: Q149276
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbAPI kbVBp kbVBp400 kbGrpDSVB kbDSupport
	Last Modified: 28-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Windows API provides the ability to add, modify, and remove icons from the
	System Tray, or Taskbar Notification Area, available in the Windows 95, Windows
	98, Windows Me, Windows NT 4.0, and Windows 2000 shell. This functionality can
	be provided using only the Shell_NotifyIcon function that is exported by
	Shell32.dll. This API function also provides the ability to specify a text
	string for the ToolTip that is displayed when a user pauses with the mouse
	pointer over the icon. The step-by-step example in this article creates a Visual
	Basic program which demonstrates how to use this API function.
	
	The ability to take some action if the icon in the Taskbar Notification Area is
	clicked depends on a callback function. Because Visual Basic 4.0 does not
	support callback functions directly, there is no way to show a form or execute
	some code using solely Visual Basic 4.0. This functionality was added in Visual
	Basic 5.0 (and later) with the addition of the AddressOf operator. A number of
	options are available to Visual Basic 4.0 developers that can provide callback
	functionality, including the Message Blaster OCX, the OCX mentioned in the
	Microsoft Systems Journal article noted in the "References" section of this
	article, or the Callback OLE server that is detailed in Bruce McKinney's book,
	Hardcore Visual Basic. For more information on any of these options, see the
	"References" section. Because these products do not include Visual Basic,
	Microsoft Product Support Services does not support their use.
	
	MORE INFORMATION
	================
	
	The following example creates a one-form Visual Basic project that shows how to
	use the Shell_NotifyIcon API function.
	
	Step-by-Step Example
	--------------------
	
	1. Start Visual Basic. Form1 is created by default.
	
	2. Change the form's icon property to the icon that should be shown in the
	  Taskbar Notification Area.
	
	3. Draw three CommandButtons onto the form.
	
	4. Select Module from the Insert menu to add a single code module to the
	  project.
	
	5. Add the following code, consisting of function, type, and constant
	  declarations, to Module1:
	
	        Type NOTIFYICONDATA
	            cbSize As Long
	            hWnd As Long
	            uID As Long
	            uFlags As Long
	            uCallbackMessage As Long
	            hIcon As Long
	            szTip As String * 64
	        End Type
	
	        Global Const NIM_ADD = 0
	        Global Const NIM_MODIFY = 1
	        Global Const NIM_DELETE = 2
	        Global Const NIF_MESSAGE = 1
	        Global Const NIF_ICON = 2
	        Global Const NIF_TIP = 4
	
	        Declare Function Shell_NotifyIconA Lib "SHELL32" _
	        (ByVal dwMessage As Long,  lpData As NOTIFYICONDATA) As Integer
	
	6. The following code is a function that takes the parameters that need to be
	  set for the NOTIFYICONDATA type and returns a variable of this type. Add to
	  Form1:
	
	        Private Function setNOTIFYICONDATA(hWnd As Long, ID As Long, _
	            Flags As Long, CallbackMessage As Long, Icon As Long, _
	            Tip As String) As NOTIFYICONDATA
	
	            Dim nidTemp As NOTIFYICONDATA
	
	            nidTemp.cbSize = Len(nidTemp)
	            nidTemp.hWnd = hWnd
	            nidTemp.uID = ID
	            nidTemp.uFlags = Flags
	            nidTemp.uCallbackMessage = CallbackMessage
	            nidTemp.hIcon = Icon
	            nidTemp.szTip = Tip & Chr$(0)
	
	            setNOTIFYICONDATA = nidTemp
	        End Function
	
	7. The three procedures in this block of code call the function created in step
	  5 to add, modify, and remove Taskbar Notification Area icons. Add this code
	  to Form1 also:
	
	        Private Sub Command1_Click()
	            'Add an icon.  This procedure uses the icon specified in
	            'the Icon property of Form1. This can be modified as desired.
	
	            Dim i As Integer
	            Dim s As String
	            Dim nid As NOTIFYICONDATA
	
	            s = InputBox("Enter string:")
	            nid = setNOTIFYICONDATA(hWnd:=Form1.hWnd, _
	                                    ID:=vbNull, _
	                                    Flags:=NIF_MESSAGE Or NIF_ICON _
	                                    Or NIF_TIP, _
	                                    CallbackMessage:=vbNull, _
	                                    Icon:=Form1.Icon, _
	                                    Tip:=s)
	
	               i = Shell_NotifyIconA(NIM_ADD, nid)
	           End Sub
	
	           Private Sub Command2_Click()
	               'Modify an existing icon. This procedure uses the icon
	               'specified in the Icon property of Form1. This can be modified
	               'as desired.
	
	               Dim i As Integer
	               Dim s As String
	               Dim nid As NOTIFYICONDATA
	
	               s = InputBox("Enter string:")
	               nid = setNOTIFYICONDATA(hWnd:=Form1.hWnd, _
	                                       ID:=vbNull, _
	                                       Flags:=NIF_MESSAGE Or NIF_ICON _
	                                       Or NIF_TIP, _
	                                       CallbackMessage:=vbNull, _
	                                       Icon:=Form1.Icon, _
	                                       Tip:=s)
	
	               i = Shell_NotifyIconA(NIM_MODIFY, nid)
	           End Sub
	
	           Private Sub Command3_Click()
	               'Delete an existing icon.
	
	               Dim i As Integer
	               Dim nid As NOTIFYICONDATA
	
	            nid = setNOTIFYICONDATA(hWnd:=Form1.hWnd, _
	                                    ID:=vbNull, _
	                                    Flags:=NIF_MESSAGE Or NIF_ICON _
	                                    Or NIF_TIP, _
	                                    CallbackMessage:=vbNull, _
	                                    Icon:=Form1.Icon, _
	                                    Tip:="")
	
	            i = Shell_NotifyIconA(NIM_DELETE, nid)
	        End Sub
	
	8. Press the F5 key or select Start from the Run menu to run the application.
	  Click the first button and enter a text string to add an icon. Click the
	  second button to modify an existing icon, and the third to delete the icon.
	
	REFERENCES
	==========
	
	Hardcore Visual Basic, Bruce McKinney, Microsoft Press 1995.
	
	Microsoft Win32 SDK, Shell_NotifyIcon and NOTIFYICONDATA.
	
	Microsoft Systems Journal, February 1996, The Visual Programmer, page 93.
	
	Visual Basic Programmer's Journal, March 1996, Q&A, page 136.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q162613 HOWTO: Manipulate Icons in the System Tray with Visual Basic
	
	Additional query words: system tray
	
	======================================================================
	Keywords          : kbAPI kbVBp kbVBp400 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400
	Version           : :4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
