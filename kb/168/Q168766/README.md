---
layout: page
title: "Q168766: FIX: Internet Transfer Control Fails on Case-Sensitive Server"
permalink: kb/168/Q168766/
---

## Q168766: FIX: Internet Transfer Control Fails on Case-Sensitive Server

	Article: Q168766
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbVBp500 kbVS97sp2fix kbvbp500sp2fix
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
	
	The "Execute" method of Microsoft Internet Transfer Control will fail on a
	case-sensitive server with directories or files containing lowercase letters.
	
	RESOLUTION
	==========
	
	To work around this behavior:
	
	- the WinInet API can be used for various FTP functions.
	
	  -or-
	
	- for directory listings, the OpenURL method of the control can be used as
	  follows:
	
	        Private Sub Command1_Click()
	            Text1.Text = Inet1.OpenURL("ftp://ftp.host.com/pub")
	        End Sub
	
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
	
	UNIX servers support both uppercase and lowercase characters in file names and
	directory names; file systems, such as FAT and NTFS, treat both cases the same.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Place a CommandButton on a Visual Basic form.
	
	2. Place this code in the button:
	
	        Private Sub_Command1_Click()
	            ' ftp.host.com is a server that supports lowercase
	            ' file names, such as a UNIX server, and has a directory
	            ' called "pub" in lower case.
	            Inet1.Execute "FTP://ftp.host.com", "CD pub"
	        End Sub
	
	3. Place the following code in the StateChanged event for the Inet control:
	
	        Private Sub Inet1_StateChanged(ByVal State As Integer)
	            Debug.Print Inet1.ResponseInfo
	        End Sub
	
	4. Run the form. In the debug window, you will see this message:
	
	  550 PUB: No such file or directory.
	
	======================================================================
	Keywords          : kbVBp500 kbVS97sp2fix kbvbp500sp2fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbZNotKeyword3
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
