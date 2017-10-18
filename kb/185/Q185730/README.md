---
layout: page
title: "Q185730: HOWTO: Prevent Multiple Instances of a 32-bit VB Application"
permalink: kb/185/Q185730/
---

## Q185730: HOWTO: Prevent Multiple Instances of a 32-bit VB Application

	Article: Q185730
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
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
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to avoid loading a second instance of an application
	when the user already has one instance running. It also sets the focus to the
	first instance of the Visual Basic application when you attempt to start a
	second instance of the same application.
	
	MORE INFORMATION
	================
	
	Step-by-Step Example
	--------------------
	
	1. Create a new Visual Basic project.
	
	2. Go into Project Properties and set the Startup Object (or Startup Form in
	  VB4) to be Sub Main.
	
	3. Add a Standard Module to the Project.
	
	4. Paste the following code into the module:
	
	        Option Explicit
	
	        Public Const GW_HWNDPREV = 3
	
	        Declare Function OpenIcon Lib "user32" (ByVal hwnd As Long) As Long
	        Declare Function FindWindow Lib "user32" Alias "FindWindowA" _
	          (ByVal lpClassName As String, ByVal lpWindowName As String) _
	           As Long
	        Declare Function GetWindow Lib "user32" _
	          (ByVal hwnd As Long, ByVal wCmd As Long) As Long
	        Declare Function SetForegroundWindow Lib "user32" _
	          (ByVal hwnd As Long) As Long
	
	        Private Sub Form_Load()
	              If App.PrevInstance Then
	                 ActivatePrevInstance
	              End If
	           End Sub
	
	        Sub ActivatePrevInstance()
	           Dim OldTitle As String
	           Dim PrevHndl As Long
	           Dim result As Long
	
	           'Save the title of the application.
	           OldTitle = App.Title
	
	           'Rename the title of this application so FindWindow
	           'will not find this application instance.
	           App.Title = "unwanted instance"
	
	           'Attempt to get window handle using VB4 class name.
	           PrevHndl = FindWindow("ThunderRTMain", OldTitle)
	
	           'Check for no success.
	           If PrevHndl = 0 Then
	              'Attempt to get window handle using VB5 class name.
	              PrevHndl = FindWindow("ThunderRT5Main", OldTitle)
	           End If
	
	           'Check if found
	           If PrevHndl = 0 Then
	           'Attempt to get window handle using VB6 class name
	           PrevHndl = FindWindow("ThunderRT6Main", OldTitle)
	           End If
	
	           'Check if found
	           If PrevHndl = 0 Then
	              'No previous instance found.
	              Exit Sub
	           End If
	
	           'Get handle to previous window.
	           PrevHndl = GetWindow(PrevHndl, GW_HWNDPREV)
	
	           'Restore the program.
	           result = OpenIcon(PrevHndl)
	
	           'Activate the application.
	           result = SetForegroundWindow(PrevHndl)
	
	           'End the application.
	           End
	        End Sub
	
	5. Compile the project into an EXE.
	
	6. Exit Visual Basic.
	
	7. Run the executable you created.
	
	8. Repeat step 7.
	
	  RESULT: The first instance of the program is given focus and the second
	  instance is closed. If the first instance of the application was minimized,
	  it will be restored to a normal window automatically.
	
	REFERENCES
	==========
	
	For information about preventing multiple instances of a Visual Basic 4.0 16-bit
	application, please see the following article in the Microsoft Knowledge Base:
	
	  Q142937 : How to Prevent Multiple Instances of a VB Application
	
	Additional query words: kbSDKWin32 kbAPI kbdSupport kbdsd kbVBp400 kbVBp500 kbVBp600 kbVBp
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400 kbZNotKeyword3
	Version           : WINDOWS:4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
