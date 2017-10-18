---
layout: page
title: "Q173265: BUG: Internet Transfer Control (SP2) Username and Password Fails"
permalink: kb/173/Q173265/
---

## Q173265: BUG: Internet Transfer Control (SP2) Username and Password Fails

	Article: Q173265
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,97sp2
	Operating System(s): 
	Keyword(s): kbVBp500
	Last Modified: 18-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Internet Transfer Control included in Service Pack 2 for Visual Studio 97 is
	unable to make authenticated connections for either the HTTP or FTP protocols.
	Anonymous connections still work. If you try to specify the Username and
	Password, you will get the following error:
	
	  Run-time error '35754'
	  Unable to connect to remote host
	
	CAUSE
	=====
	
	This version of the control does not properly handle the Username and Password
	properties.
	
	
	RESOLUTION
	==========
	
	To restore this functionality temporarily, replace the Msinet.ocx included with
	SP2 with the Msinet.ocx on the Visual Basic 5.0 CD.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Standard EXE project. Form1 is added by default.
	
	2. From the Project menu, click Components, and select the Internet Transfer
	  Control 5.0 into the project if it is not already loaded.
	
	3. Place an Internet Transfer Control 5.0 (Inet1) on Form1 and add the following
	  code:
	
	        Private Sub Inet1_StateChanged(ByVal State As Integer)
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
	             vtData = Inet1.GetChunk(1024, icString)
	             DoEvents
	
	             Do While Not bDone
	
	                 strData = strData & vtData
	                 ' Get next chunk.
	                 vtData = Inet1.GetChunk(1024, icString)
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
	
	5. From the Run menu, click Start (ALT, R, S) or press the F5 key to run the
	  program. Click the Command1 button, and you will see error described above.
	
	NOTE: The above sample demonstrates the problem with FTP, but it also occurs for
	the HTTP protocol
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp500 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB500
	Version           : WINDOWS:5.0,97sp2
	Issue type        : kbbug
	
	=============================================================================
	
