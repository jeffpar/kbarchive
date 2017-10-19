---
layout: page
title: "Q174835: FIX: Internet Transfer Control Using Username and Password"
permalink: /kb/174/Q174835/
---

## Q174835: FIX: Internet Transfer Control Using Username and Password

	Article: Q174835
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbVBp500 kbVS97sp2fix kbvbp500sp3fix
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Internet Transfer Control is unable to make authenticated connections for
	either the HTTP or FTP protocols. Anonymous connections still work. If you try
	to specify the Username and Password, you will get the following error:
	
	  Run-time error '35754'
	  Unable to connect to remote host
	
	CAUSE
	=====
	
	The control did not properly handle the Username and Password.
	
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
	
	1. Start a new Standard EXE project. Form1 is added by default.
	
	2. From the Project menu, choose Components, and select the Internet Transfer
	  Control 5.0(SP2) into the project if it is not already loaded.
	
	3. Place an Internet Transfer Control 5.0(SP2) on Form1 and add the following
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
	
	            MsgBox strData
	         End Select
	        End Sub
	
	4. Place a CommandButton (Command1) on Form1 and add the following code:
	
	        Private Sub Command1_Click()
	            Inet1.UserName = "Username"
	            Inet1.Password = "Password"
	            Inet1.URL = "ftp://YourFTPServer"
	            Inet1.Execute , "DIR"
	       End Sub
	
	5. From the Run menu, choose Start (ALT, R, S), or press the F5 key to run the
	  program. Press the Command1 button and you will see error described above.
	
	REFERENCES
	==========
	
	  Q173265 : BUG: Internet Transfer Control (SP2) Username and Password
	
	  Q173264 : HOWTO: Internet Transfer Control Using Username and Password
	
	======================================================================
	Keywords          : kbVBp500 kbVS97sp2fix kbvbp500sp3fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
