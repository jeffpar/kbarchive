---
layout: page
title: "Q174836: FIX: Problems Shutting Down When Using the Inet Control"
permalink: kb/174/Q174836/
---

## Q174836: FIX: Problems Shutting Down When Using the Inet Control

	Article: Q174836
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbVBp500 kbVS97sp2fix kbvbp500sp3fix
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The IDE and Visual Basic-created .exe files hang when shutting down if they have
	used the Internet Transfer Control in their project.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Studio 97 Service
	Pack 3.
	
	For more information, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q170365 : INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	For a list of the Visual Basic 5.0 bugs that were fixed in the Visual Studio 97
	Service Pack 3, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q175450 : INFO: Visual Basic 5.0 Fixes in Visual Studio 97 Service Pack 3
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Standard EXE project. Form1 is created by default. Add the
	  following code:
	
	        Public Sub AddURL(ByVal sURL As String, _
	           Optional ByVal sTitle As String = "", _
	                   Optional ByVal sSize As String = "", _
	                         Optional ByVal lSizeUnit As Long = 0)
	           inetDownload.Execute sURL, "GET"
	        End Sub
	
	2. From the Project menu, click Components, and select the Internet Transfer
	  Control 5.0 into the project if it is not already loaded.
	
	3. Place an Internet Transfer Control 5.0 (Inet1) on Form1 and add the following
	  code:
	
	        Private Sub Inet1_StateChanged(ByVal State As Integer)
	            Const lCHUNKSIZE As Long = 1024
	            Dim vtData As Variant ' Data variable.
	
	               Select Case State
	               ' ... Other cases not shown.
	               Case icError ' 11
	                   ' In case of error, return ResponseCode and
	
	              ' ResponseInfo.
	                   vtData = Inet1.ResponseCode & ":" & _
	                   Inet1.ResponseInfo
	
	               Case icResponseCompleted  ' 12
	                   Dim strData As String: strData = ""
	                   Dim bDone As Boolean: bDone = False
	
	                   ' Get first chunk.
	                   vtData = Inet1.GetChunk(lCHUNKSIZE, icString)
	                   DoEvents
	
	                   Do While Not bDone
	
	                       strData = strData & vtData
	                       ' Get next chunk.
	                       vtData = Inet1.GetChunk(lCHUNKSIZE, icString)
	                       DoEvents
	
	                       If Len(vtData) = 0 Then
	                           bDone = True
	                       End If
	                   Loop
	
	                Case icDisconnected
	                    Debug.Print "* Disconnected"
	                    Unload Me
	
	               End Select
	
	        End Sub
	
	4. Add another form to your project. By default, it will be called Form2.
	  IMPORTANT: Make Form2 your startup form by changing the properties of the
	  project. Add the following code:
	
	        Private Sub Form_Load()
	            Load form1
	        End Sub
	
	        Private Sub Form_Unload(Cancel As Integer)
	            Unload form1
	        End Sub
	
	5. Place a CommandButton (Command1) on Form2 and add the following code:
	
	        Private Sub Command1_Click()
	           form1.AddURL "http://www.microsoft.com/default.htm"
	        End Sub
	
	6. From the Run menu, click Start (ALT, R, S), or press the F5 key to run the
	  program. Click the Command1 button and you will see error described above.
	
	======================================================================
	Keywords          : kbVBp500 kbVS97sp2fix kbvbp500sp3fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbZNotKeyword3
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
