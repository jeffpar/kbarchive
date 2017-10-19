---
layout: page
title: "Q234576: BUG: VBCE Winsock Control Might Not Receive Binary Data"
permalink: /kb/234/Q234576/
---

## Q234576: BUG: VBCE Winsock Control Might Not Receive Binary Data

	Article: Q234576
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbToolkit kbVBp600bug kbOSWinCEsearch kbGrpDSVB
	Last Modified: 26-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual Basic 6.0, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Winsock control to try to receive binary data (that is, a
	bitmap, and so forth), you might only receive a subset of your data. In the
	DataArrival event, you can verify that the correct number of bytes is received,
	but you cannot get all of the data using the GetData method.
	
	The documentation for the GetData method of the Windows CE Winsock Control
	incorrectly states:
	
	  GetData supports only strings and arrays of integers. It is common to use the
	  GetData method with the DataArrival event.
	
	The Winsock control for the Windows CE Toolkit for Visual Basic 6.0 only supports
	strings.
	
	CAUSE
	=====
	
	The CE Winsock control only retrieves data to the first ASCII 0 it receives, and
	then it stops.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Windows CE H/PC or H/PC Pro project in Visual Basic. Form1 will
	  be created by default. The application runs in emulation by default.
	
	2. Select Components from the Project menu and add the Microsoft CE Winsock
	  Control to the project.
	
	3. Add a command button to Form1.
	
	4. Copy a bitmap or other binary file to the root of your Web server's content
	  directory.
	
	5. Paste the following code into Form1:
	
	  Private Sub Form_Load
	      'Note: replace with your Web server's IP address
	      Winsock1.RemoteHost = "127.0.0.1" 
	      Winsock1.Protocol = sckTCPProtocol
	      Winsock1.RemotePort = 80
	      Winsock1.Connect   
	  End Sub
	
	  Private Sub WinSock1_DataArrival(ByVal bytesTotal As Long)
	      Dim strData   
	      Winsock1.GetData strData
	      MsgBox "Bytes Total is " & bytesTotal & " data is " & strData
	  End Sub
	
	  Private Sub Command1_Click()
	    'You can replace lanmannt.bmp with the name of the file
	    'you put in your Web server's content directory
	    Winsock1.SendData "GET /lanmannt.bmp" & vbCrLf & vbCrLf
	  End Sub
	
	6. Run the application and click the command button.
	
	Note that you receive only a portion of the data from the bitmap, and you are not
	able to receive any more data until the program is reset.
	
	Additional query words: vbce vbce6 wince wce
	
	======================================================================
	Keywords          : kbToolkit kbVBp600bug kbOSWinCEsearch kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbWinCETKVBSearch kbWinCESearch kbWinCETK100VB600
	Version           : :1.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
