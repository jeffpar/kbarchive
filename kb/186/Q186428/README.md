---
layout: page
title: "Q186428: HOWTO: Implement the 'SnapTo' Feature in Visual Basic"
permalink: /kb/186/Q186428/
---

## Q186428: HOWTO: Implement the 'SnapTo' Feature in Visual Basic

{% raw %}

	Article: Q186428
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbinterop kbMouse kbVBp500 kbGrpDSVB kbDSupport
	Last Modified: 27-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The 'SnapTo' feature of Microsoft IntelliPoint Software version 2.x, which
	automatically places the mouse pointer over the default button of a form, does
	not work with Visual Basic forms. This article presents a way to achieve this
	functionality in Visual Basic.
	
	MORE INFORMATION
	================
	
	This article uses a class module to make the necessary Windows API calls. One
	possible extension to this article would be to compile the class code into an
	ActiveX DLL, and that is why a class module was used. This is a good approach if
	the 'Snap To' functionality is needed in a number of different projects. The
	mouse cursor will not be adjusted unless the 'Snap To' functionality is enabled
	on the target machine.
	
	NOTE: Under Windows 95, Windows 98, and Windows Me, the 'Snap To' functionality
	does not interact properly with Visual Basic 5.0 applications under some
	circumstances. Please see the REFERENCES section of this article for more
	information on this topic.
	
	Step-by-Step Example
	--------------------
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default. Add a second Form to the Project.
	
	2. Place two CommandButtons on Form1. Set the Default property of Command2 to
	  True.
	
	3. Add a Class Module to the Project. Change the property name of the Class
	  Module to Snap.
	
	4. Add the following code to the Snap Class module:
	
	        Option Explicit
	
	        Private Declare Function SetCursorPos Lib "user32" _
	                      (ByVal x As Long, ByVal y As Long) As Long
	
	        Private Declare Function GetWindowRect Lib "user32" _
	                      (ByVal hwnd As Long, lpRect As RECT) As Long
	
	        Private Declare Function RegOpenKeyEx Lib "advapi32.dll" Alias _
	        "RegOpenKeyExA" (ByVal hKey As Long, ByVal lpSubKey As String, _
	        ByVal ulOptions As Long, ByVal samDesired As Long, phkResult _
	        As Long) As Long
	
	        Private Declare Function RegQueryValueEx Lib "advapi32.dll" Alias _
	        "RegQueryValueExA" (ByVal hKey As Long, ByVal lpValueName _
	        As String, ByVal lpReserved As Long, lpType As Long, lpData As Any, _
	        lpcbData As Long) As Long
	
	        Private Declare Function RegCloseKey Lib "advapi32.dll" _
	        (ByVal hKey As Long) As Long
	
	        Private Type RECT
	           left As Long
	           top As Long
	           right As Long
	           bottom As Long
	        End Type
	
	        Private Const HKEY_C_U = &H80000001  ' HKEY_CURRENT_USER
	        Private Const subkey = "Control Panel\Microsoft Input Devices\Mouse"
	
	        Private buttonHandle As Long
	
	        Public Sub setDefaultButton(colControls As Object)
	        Dim iIterate As Integer
	        For iIterate = 0 To colControls.Count - 1
	           If TypeOf colControls(iIterate) Is CommandButton Then
	              If colControls(iIterate).Default = True Then
	                 buttonHandle = colControls(iIterate).hwnd
	                 Exit For
	              End If
	           End If
	        Next iIterate
	        End Sub
	
	        Public Function snapTo()
	           Dim buttonRect As RECT
	           Dim RetVal As Long
	           Dim x As Long
	           Dim y As Long
	
	           If buttonHandle And _
	            RegGetString$(HKEY_C_U, subkey, "SnapTo") = "ON" Then
	              RetVal = GetWindowRect(buttonHandle, buttonRect)
	              With buttonRect
	                 x = .left + ((.right - .left) / 2)
	                 y = .top + ((.bottom - .top) / 2)
	              End With
	              DoEvents
	              RetVal = SetCursorPos(x, y)
	              snapTo = True
	           Else
	              snapTo = False
	           End If
	        End Function
	
	        Function RegGetString$(hInKey As Long, ByVal subkey$, ByVal valname$)
	           Dim RetVal$, hSubKey As Long, dwType As Long, vSZ As Long
	           Dim R As Long, v$
	
	           RetVal$ = ""
	           Const ERROR_SUCCESS& = 0
	           Const REG_SZ& = 1
	           Const KEY_READ = &H20019
	
	           R = RegOpenKeyEx(hInKey, subkey$, 0, KEY_READ, hSubKey)
	           If R <> ERROR_SUCCESS Then GoTo Quit_Now
	
	           vSZ = 256: v$ = String$(vSZ, 0)
	           R = RegQueryValueEx(hSubKey, valname$, 0, dwType, ByVal v$, vSZ)
	           If R = ERROR_SUCCESS And dwType = REG_SZ Then
	              RetVal$ = left$(v$, vSZ - 1)
	           Else
	              RetVal$ = "--Not String--"
	           End If
	           If hInKey = 0 Then R = RegCloseKey(hSubKey)
	        Quit_Now:
	           RegGetString$ = RetVal$
	        End Function
	
	5. Insert the following into the General Declarations section of Form1:
	
	        Dim objSnap As Snap
	
	        Private Sub Command1_Click()
	           Form2.Show
	        End Sub
	
	        Private Sub Form_Activate()
	           objSnap.snapTo
	        End Sub
	
	        Private Sub Form_Load()
	           Command1.Caption = "Show Form2"
	           Command2.Caption = "Default Button"
	           Set objSnap = New Snap
	           ' determine the default button and save it in the Snap class
	           Call objSnap.setDefaultButton(Me.Controls)
	        End Sub
	
	        Private Sub Form_Unload(Cancel As Integer)
	           Set objSnap = Nothing
	        End Sub
	
	6. Run the project. When Form1 opens, the mouse pointer should be centered over
	  the button with the caption "Default Button."
	
	7. Click on Command2 to open the other form.
	
	8. Click back and forth between Form1 or Form2, either by clicking on the forms
	  themselves, or on the form Icons in the Windows TaskBar. When focus returns
	  to Form1, the mouse pointer should be positioned on the default button.
	
	NOTE: This technique only works when shifting between forms of the same
	application. To make it work properly when your application gains focus would
	require hooking the WM_ACTIVATEAPP message, because Visual Basic does not have
	an App_Activate event. Please refer to the REFERENCES section of this article
	for more information on this topic.
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q143274 : HOWTO: Retrieve Printer Name from Windows 95 Registry in VB
	
	  Q166199 : SnapTo Feature May Not Work in Mouse Orientation Tool
	
	
	  Q168795 : HOWTO: Hook Into a Window's Messages Using AddressOf
	
	  Q186430 : PRB: Intellipoint 'Snap To' Feature and VB5 Applications
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbMouse kbVBp500 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500
	Version           : :5.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
