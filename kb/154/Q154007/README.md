---
layout: page
title: "Q154007: HOWTO: Connect to a Network Printer with the Win32 API"
permalink: kb/154/Q154007/
---

## Q154007: HOWTO: Connect to a Network Printer with the Win32 API

	Article: Q154007
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbVBp400 kb32bitOnly
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Using the Win32 API, it is possible to bring up a predefined Windows Dialog box
	for connecting to a network printer. The ConnectToPrinterDlg Win32 API works
	under Windows NT. However, it is not accessible by Visual Basic programs running
	under Windows 95 because the user interface is so different. Therefore, you must
	use a Command line equivalent statement to invoke the "Add Printer Wizard" under
	Windows 95. Below is a code sample showing how to implement both methods of
	displaying the Dialog.
	
	MORE INFORMATION
	================
	
	1. Create a new project with Visual Basic. Form1 is created by default.
	
	2. Add a CommandButton, Command1, to the form.
	
	3. Add the following code to the General Declarations section of Form1:
	
	     Option Explicit
	
	     Private Type OSVERSIONINFO
	       dwOSVersionInfoSize As Long
	       dwMajorVersion As Long
	       dwMinorVersion As Long
	       dwBuildNumber As Long
	       dwPlatformId As Long
	       szCSDVersion As String * 128
	     End Type
	
	     Private Declare Function GetVersionExA Lib "kernel32" _
	        (lpVersionInformation As OSVERSIONINFO) As Integer
	     Private Declare Function ConnectToPrinterDlg Lib "winspool.drv" (ByVal _
	        hwnd As Long, ByVal flags As Long) As Long
	
	     Private Sub Form_Load()
	       Command1.Caption = "Press Me"
	     End Sub
	
	     Private Sub Command1_Click()
	       Dim osinfo As OSVERSIONINFO
	       Dim iReturn As Integer
	       Dim lReturn As Long
	       osinfo.dwOSVersionInfoSize = 148
	       osinfo.szCSDVersion = Space$(128)
	       iReturn = GetVersionExA(osinfo)
	       If osinfo.dwMajorVersion = 3 And osinfo.dwMinorVersion = 51 And _
	         osinfo.dwBuildNumber = 1057 And osinfo.dwPlatformId = 2 Then
	         lReturn = ConnectToPrinterDlg(Form1.hwnd, 0)
	       ElseIf osinfo.dwMajorVersion = 4 And osinfo.dwMinorVersion = 0 And _
	         osinfo.dwBuildNumber = 67109814 And osinfo.dwPlatformId = 1 Then
	         Shell "rundll32.exe shell32.dll,SHHelpShortcuts_RunDLL AddPrinter"
	       Else
	         MsgBox "Your Operating System has not been detected successfully !"
	       End If
	     End Sub
	
	4. Press the F5 key to run the project. Click the buttons to see the results.
	  Depending on which operating system you are running, you will see that one
	  dialog works and one doesn't:
	
	                         NT 3.51          Win95
	     ---------------------------------------------
	
	     dwMajorVersion           3              4
	     dwMinorVersion          51              0
	     dwBuildNumber         1057       67109814
	     dwPlatformId             2              1
	
	
	REFERENCES
	==========
	
	The Win32 SDK.
	
	Additional query words: ConnectToPrinterDlg
	
	======================================================================
	Keywords          : kbVBp400 kb32bitOnly 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400
	Version           : 4.0
	Issue type        : kbhowto
	
	=============================================================================
	
