---
layout: page
title: "Q173264: HOWTO: Internet Transfer Control Using Username and Password"
permalink: /kb/173/Q173264/
---

## Q173264: HOWTO: Internet Transfer Control Using Username and Password

	Article: Q173264
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbInternet kbVBp kbVBp500 kbVBp600 kbVS97sp1 kbInetDev kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When setting the Internet Transfer Control URL, Username, and Password
	properties programmatically, the order in which you do it is very important. If
	you don't set the URL property before the Username and Password properties, you
	will get the following error:
	
	  Run-time error '35754'
	  Unable to connect to remote host
	
	IMPORTANT: In the control shipped with Visual Basic 5.0 (not the Service Packs),
	the Username is sent as Anonymous if the URL property is not set first
	(regardless of the UserName and Password properties). So when connecting to an
	FTP server, you would be accessing the URL with the Anonymous credentials, not
	with the credentials you intended (according Username and Password Inet
	properties).
	
	NOTE: The Internet Transfer Control included with Visual Studio 97 Service Pack 2
	is unable to make an authenticated connection using the Username and Password
	properties. For more information, see the following article in the Microsoft
	Knowledge Base:
	
	  Q173265 : BUG: Internet Transfer Control (SP2) Username and Password
	
	Workaround
	----------
	
	This is sample code for setting the URL property before the Username and Password
	properties so you won't get the error described above: Inet1.URL =
	"ftp://YourFTPServer" Inet1.UserName = "Username" Inet1.Password = "Password"
	Notice the URL property is set before the Username and Password properties. Do
	not specify the URL again in the execute method.
	
	This information is also documented in the Visual Basic 5.0 Readme file.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Standard EXE project. Form1 is added by default.
	
	2. From the Project menu, click Components and select the Internet Transfer
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
	
	REFERENCES
	==========
	
	Visual Basic 5.0 Readme.hlp file; search on topic: "Internet Transfer Control:
	Set URL Before Password and UserName"
	
	Additional query words:
	
	======================================================================
	Keywords          : kbInternet kbVBp kbVBp500 kbVBp600 kbVS97sp1 kbInetDev kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
