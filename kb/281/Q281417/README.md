---
layout: page
title: "Q281417: HOWTO:Log On to Terminal Server Session Programmatically from VB"
permalink: kb/281/Q281417/
---

## Q281417: HOWTO:Log On to Terminal Server Session Programmatically from VB

	Article: Q281417
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 1.0,6.0
	Operating System(s): 
	Keyword(s): kbCtrl kbService kbVBp kbVBp600 kbGrpDSVB kbDSupport kbTermServ
	Last Modified: 12-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Terminal Services Advanced Client, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Terminal Services ActiveX client control does not expose the
	ImsTscNonScriptable interface. However, this interface can be used to configure
	automatic log on for a Terminal Services Session programmatically, which enables
	the programmer to log a user on to a Terminal Services Session without receiving
	the Windows Logon prompt. This is demonstrated in the sample in the "More
	Information" section.
	
	MORE INFORMATION
	================
	
	To run this program, configure your Terminal Server computer as follows:
	
	1. Log on to the Terminal Server locally as an administrator.
	
	2. On the Start button, click Programs, click Administrative Tools, and then
	  click Terminal Services Configuration.
	
	3. Click on Connections.
	
	4. In the right pane, right-click RDP-Tcp, and then choose Properties.
	
	5. Click on the Logon Settings tab.
	
	6. Deselect Always prompt for password, and then click OK.
	
	NOTE: For security reasons, Microsoft recommends that you do not implement this
	scenario without extreme care and a clear understanding of Microsoft Windows
	security.
	
	Sample Code
	-----------
	
	1. Start a new Standard EXE project. Form1 is created by default.
	
	2. On the Project menu, click to select Components, select Microsoft Terminal
	  Services Control(redist), and then click OK. If this control is not
	  available, see the "References" section of this article for information on
	  how to download and install it.
	
	3. Add one Terminal Services Control to Form1, making sure it is big enough to
	  handle the display of the session.
	
	4. Add three Label controls, three TextBox controls, and one CommandButton
	  control to Form1. Make sure that Lable1 and Text1 are on the same line, and
	  that Label2, Text2, Label3, and Text3 are on the same line.
	
	5. Paste the following code into the General Declarations of Form1:
	
	  ' This code only works when you set the configuration on the Server-side.
	  ' Log on to the Terminal Server as an administrator
	  ' Start\Programs\Administrative Tools\Terminal Services Configuration
	  ' Click on Connections
	  ' On the Right Pane, right-click on RDP-Tcp and choose Properties
	  ' Click on the "Logon Settings" Tab
	  ' Uncheck "Always prompt for password" and click OK
	
	  Option Explicit
	
	  Private Obj As IMsTscNonScriptable
	
	  Private Sub Form_Load()
	    Text1.Text = ""
	    Text2.Text = ""
	    Text3.Text = ""
	    Label1.Caption = "Server"
	    Label2.Caption = "UserName"
	    Label3.Caption = "Password"
	    Command1.Caption = "Connect"
	    Text3.PasswordChar = "*"
	  End Sub
	
	  Private Sub Command1_Click()
	    Set Obj = MsTscAx1.Object
	    MsTscAx1.Server = Text1.Text
	    MsTscAx1.UserName = Text2.Text
	    Obj.ClearTextPassword = Text3.Text
	    MsTscAx1.Connect
	  End Sub
	
	6. Save the project, press the F5 key to run it, and note that after you supply
	  your username, password, and server name, you are not prompted for a logon
	  screen at the server. Microsoft recommends that you enlarge the Terminal
	  Server .ocx file so that you are able to manipulate the Shut Down dialog box.
	
	REFERENCES
	==========
	
	For more information about downloading and installing the Terminal Server
	Advanced Client, see the following Microsoft Web site at:
	
	  http://www.microsoft.com/WINDOWS2000/downloads/recommended/TSAC/tsac.asp
	
	For Frequently Asked Questions (FAQ) about the Terminal Server Advanced Client,
	see the following Microsoft Web site at:
	
	  http://www.microsoft.com/windows2000/techinfo/administration/terminal/tsacfaq.asp
	
	For additional information, see the following Microsoft Web site at:
	
	  http://www.microsoft.com/windows2000/techinfo/administration/default.asp
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCtrl kbService kbVBp kbVBp600 kbGrpDSVB kbDSupport kbTermServ 
	Technology        : kbNTTermServSearch kbVBSearch kbAudDeveloper _IKkbbogus kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600 kbTermServAdvClient
	Version           : :1.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
