---
layout: page
title: "Q171828: FIX: INET OpenURL Method Doesn't Download Complete Files"
permalink: kb/171/Q171828/
---

## Q171828: FIX: INET OpenURL Method Doesn't Download Complete Files

	Article: Q171828
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbVBp500 kbVS97sp2fix kbvbp500sp2fix
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the OpenURL method of the Internet Transfer Control to download files
	on the Internet, only part of the file downloads.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Studio 97 Service
	Pack 2.
	
	For more information on the Visual Studio 97 Service Pack 2, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q170365 : INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	For a list of the Visual Basic 5.0 bugs that were fixed in the Visual Studio 97
	Service Pack 2, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q171554 : INFO: Visual Basic 5.0 Fixes in Visual Studio 97 Service Pack 2
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run Visual Basic or, if Visual Basic is already running, choose New Project
	  from the File menu (ALT, F, N). Form1 is created by default.
	
	2. Place an Internet Transfer Control (Inet1) on Form1 and add the following
	  code:
	
	        Private Sub Inet1_StateChanged(ByVal State As Integer)
	           Dim strMess As String ' Message variable.
	           Select Case State
	           ' ... Other cases not shown.
	           Case icError  ' 11
	             ' Get the Text of the error.
	           strMess = "ErrorCode: " & Inet1.ResponseCode & " : " &
	                                               Inet1.ResponseInfo
	           End Select
	        End Sub
	    
	
	3. Place a CommandButton (Command1) on Form1 and add the following code:
	
	        Private Sub Command1_Click()
	             ' download FTP files
	             Dim b() As Byte
	             Dim strURL As String
	
	             ' Set the strURL to a valid address.
	             strURL = "FTP://GenericServer/FileToDownload.bin"
	
	             ' Retrieve the file as a byte array.
	             b() = Inet1.OpenURL(strURL, icByteArray)
	
	             ' ** create directory on your machine with directory target
	             Open "C:\Target\FileToDownload.bin" For Binary Access _
	             Write As #1
	             Put #1, , b()
	             Close #1
	         End Sub
	     
	
	4. From the Run menu, choose Start (ALT, R, S), or press the F5 key to run the
	  program. Press the Command1 button to see the error when downloading the
	  file.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp500 kbVS97sp2fix kbvbp500sp2fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbZNotKeyword3
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
