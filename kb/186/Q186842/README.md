---
layout: page
title: "Q186842: BUG: OpenURL Method Bug in Internet Transfer Control"
permalink: /kb/186/Q186842/
---

## Q186842: BUG: OpenURL Method Bug in Internet Transfer Control

	Article: Q186842
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.01,5.0
	Operating System(s): 
	Keyword(s): kbVBp500
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Internet Explorer version 4.01 for Windows NT 4.0 
	- Microsoft Internet Explorer version 4.01 for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the OpenURL method on the Internet Transfer Control for FTP URLs,
	it causes the application to hang. Upon exiting the application, the application
	hangs and causes 100% CPU utilization. When you use code similar to the
	following:
	
	     Private Sub butGet_Click()
	
	        Dim sData as String
	
	        Inet.AccessType = icDirect
	        sData = Inet.OpenURL ("ftp://ftp.somedomain.com/SomeFile.txt")
	     End Sub
	
	And, you use the Internet Transfer Control, the application hangs and further ITC
	requests fail. Upon exiting the application, the GUI portion of the application
	closes, however the Task Manager (under Windows NT) displays the application as
	running and utilizing 100% of the CPU. You can terminate the application only
	through the Task Manager.
	
	RESOLUTION
	==========
	
	The workaround to this bug is to either use the Execute method or use the
	WinInet APIs directly. For example, the Execute method could be:
	
	     Private Sub butGet_Click()
	
	        Inet.AccessType = icDirect
	        Inet.URL = "ftp://ftp.somedomain.com/SomeFile.txt"
	        Inet.Execute "", "GET"
	
	     End Sub
	
	     Private Sub Inet_StateChanged(ByVal State As Integer)
	        Dim sData As String
	
	        If State = 12 Then
	           sData = Inet.GetChunk(4096) 'SomeFile.txt < 4KB in size.
	        End If
	
	     End Sub
	
	For an example of the WinInet API, please see the VBFTP sample referred to in the
	following article in the Microsoft Knowledge Base:
	
	  Q175179 : FILE: VBFTP.EXE: Implementing FTP Using WinInet API from VB
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Use the following code in any Visual Basic 5.0 project that uses the Internet
	Transfer Control:
	
	     Private Sub butGet_Click()
	
	        Dim sData as String
	
	        Inet.AccessType = icDirect
	        sData = Inet.OpenURL ("ftp://ftp.somedomain.com/SomeFile.txt")
	
	     End Sub
	
	Additional query words: kbVBp600bug kbVBp500bug kbDSupport kbdsi kbInternet kbFTP kbhttp
	
	======================================================================
	Keywords          : kbVBp500 
	Technology        : kbVBSearch kbIEsearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500 kbIENT400Search kbIE95Search kbZNotKeyword3 kbIE401Win95 kbIE401WinNT400
	Version           : :4.01,5.0
	Issue type        : kbbug
	
	=============================================================================
	
