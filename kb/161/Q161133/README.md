---
layout: page
title: "Q161133: HOWTO: Block CTRL+ALT+DEL &amp; ALT+TAB in Windows 95 or Windows 98"
permalink: /kb/161/Q161133/
---

## Q161133: HOWTO: Block CTRL+ALT+DEL &amp; ALT+TAB in Windows 95 or Windows 98

{% raw %}

	Article: Q161133
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbAPI kbSDKWin32 kbVBp kbVBp400 kbVBp500 kbVBp600 kbOSWin98 kbGrpDSVB kbDSupport kbOSWi
	Last Modified: 26-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	WARNING: ANY USE OF THE CODE PROVIDED IN THIS ARTICLE IS AT YOUR OWN RISK.
	Microsoft provides this code "as is" without warranty of any kind, either
	express or implied, including but not limited to the implied warranties of
	merchantability and/or fitness for a particular purpose.
	
	SUMMARY
	=======
	
	You can prevent the CTRL+ALT+DEL and ALT+TAB key combinations from opening a
	task list in Windows 95, Windows 98, or Windows Me by calling the
	SystemParametersInfo function in the Win32 API. A step-by-step example of this
	appears below.
	
	NOTE: This is possible only in Windows 95, Windows 98, or Windows Me.
	
	MORE INFORMATION
	================
	
	Sometimes it is necessary for a program to prevent the use of the CTRL+ALT+DEL
	key combination to open the Close Program task list to end a task or shut down
	Windows 95, Windows 98, or Windows Me and to prevent the use of the ALT+TAB key
	combination to switch tasks. The following technique uses the
	SystemParametersInfo API to trick Windows 95, Windows 98, or Windows Me into
	thinking that a screen saver is running. As a side effect, CTRL+ALT+DEL and
	ALT+TAB are disabled.
	
	The Win32 SDK states:
	
	  "SPI_SCREENSAVERRUNNING Windows 95: Used internally; applications should not
	  use this flag. Windows NT: Not supported."
	
	Note that disabling CTRL+ALT+DEL is not recommended because the Close Program
	dialog box was created to enable users to terminate misbehaving applications. If
	a program "hangs" while CTRL+ALT+DEL is disabled, it may not be possible to
	terminate it by any method other than rebooting the computer, which could result
	in the loss of data. Also, this technique may not work in future versions of
	Windows.
	
	Step-by-Step Example
	--------------------
	
	1. Start a new Standard EXE project. Form1 is created by default.
	
	2. Add two CommandButton controls (Command1 and Command2) to Form1.
	
	3. Add the following code to the General Declarations section of Form1:
	
	        Private Const SPI_SCREENSAVERRUNNING = 97&
	        Private Declare Function SystemParametersInfo Lib "User32" _
	            Alias "SystemParametersInfoA" _
	           (ByVal uAction As Long, _
	            ByVal uParam As Long, _
	            lpvParam As Any, _
	            ByVal fuWinIni As Long) As Long
	
	        Private Sub Form_Load()
	           Command1.Caption = "Disabled"
	           Command2.Caption = "Enabled"
	        End Sub
	
	        Private Sub Form_Unload(Cancel As Integer)
	           'Re-enable CTRL+ALT+DEL and ALT+TAB before the program terminates.
	           Command2_Click
	        End Sub
	
	        Private Sub Command1_Click()
	           Dim lngRet As Long
	           Dim blnOld As Boolean
	           lngRet = SystemParametersInfo(SPI_SCREENSAVERRUNNING, True, _
	           blnOld, _
	              0&)
	        End Sub
	
	        Private Sub Command2_Click()
	          Dim lngRet As Long
	          Dim blnOld As Boolean
	          lngRet = SystemParametersInfo(SPI_SCREENSAVERRUNNING, False, _
	          blnOld, _
	             0&)
	        End Sub
	
	4. Press the F5 key to run the program, and then click the "Disabled" button.
	  CTRL+ALT+DEL and ALT+TAB are disabled. Click the "Enabled" button to enable
	  CTRL+ALT+DEL and ALT+TAB again.
	
	Additional query words: reboot SetSysModalWindow
	
	======================================================================
	Keywords          : kbAPI kbSDKWin32 kbVBp kbVBp400 kbVBp500 kbVBp600 kbOSWin98 kbGrpDSVB kbDSupport kbOSWinME 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400
	Version           : :4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
