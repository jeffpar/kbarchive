---
layout: page
title: "Q253257: HOWTO: Capture the EOF Character with the MSComm Control"
permalink: /kb/253/Q253257/
---

## Q253257: HOWTO: Capture the EOF Character with the MSComm Control

{% raw %}

	Article: Q253257
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0 SP2,5.0 SP3,6.0
	Operating System(s): 
	Keyword(s): kbCommPort kbCtrl kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 06-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0 SP2, 5.0 SP3, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0 SP2, 5.0 SP3, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article demonstrates how to capture the End of File (EOF) character with
	the MSComm control.
	
	When the OnComm event of the MSComm control is used, it is sometimes necessary to
	trap the EOF character to detect when the end of a file is reached. The EOF
	character is defined as CTRL+Z, or ASCII 26.
	
	MORE INFORMATION
	================
	
	This example demonstrates how to create two small sample applications that show
	how to signal the EOF character. The EOFEnable property must be set to True on
	the receiving side, and the contents of the MSComm Input buffer must also be
	read in order for the character to be detected. The following example assumes
	that a null modem cable is attached between COM1 and COM2. This is only
	necessary for testing these sample applications. App1 is the COM1 application,
	App2 is the COM2 application.
	
	Steps to Create App1
	--------------------
	
	1. Create a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. On the Project menu, select Components, select Microsoft Comm Control, and
	  then click OK.
	
	3. Add a Command button and an MSComm control to Form1.
	
	4. Add the following code to the General Declarations section of Form1:
	
	  Private Sub Command1_Click()
	     MSComm1.Output = Chr$(26)
	  End Sub
	
	  Private Sub Form_Load()
	     Form1.Caption = "App1"
	     With MSComm1
	        .Handshaking = 2 - comRTS
	        .RThreshold = 1
	        .RTSEnable = True
	        .Settings = "9600,n,8,1"
	        .SThreshold = 1
	        .PortOpen = True
	     End With
	     Command1.Caption = "Send"
	  End Sub
	
	  Private Sub Form_Unload(Cancel As Integer)
	     MSComm1.PortOpen = False
	  End Sub
	
	Steps to Create App2
	--------------------
	
	1. Start a new instance of Visual Basic specifying a new Standard EXE project.
	  Form1 is created by default.
	
	2. On the Project menu, select Components, select the Microsoft Comm Control,
	  and then click OK.
	
	3. Add an MSComm control to Form1.
	
	4. Add the following code to the General Declarations section of Form1:
	
	  Private Sub Form_Load()
	     Form1.Caption = "App2"
	     With MSComm1
	        .CommPort = 2
	        .Handshaking = 2 - comRTS
	        .RThreshold = 1
	        .RTSEnable = True
	        .Settings = "9600,n,8,1"
	        .SThreshold = 1
	        .PortOpen = True
	        .EOFEnable = True
	     End With
	  End Sub
	
	  Private Sub Form_Unload(Cancel As Integer)
	     MSComm1.PortOpen = False
	  End Sub
	
	  Private Sub MSComm1_OnComm()
	     Dim InBuff As String
	     Select Case MSComm1.CommEvent
	     ' Handle each event or error by placing
	     ' code below each case statement.
	
	     ' This template is found in the Example
	     ' section of the OnComm event help topic
	     ' in VB help.
	
	     ' Errors
	        Case comEventBreak   ' A Break was received.
	        Case comEventCDTO    ' CD (RLSD) Timeout.
	        Case comEventCTSTO   ' CTS Timeout.
	        Case comEventDSRTO   ' DSR Timeout.
	        Case comEventFrame   ' Framing Error
	        Case comEventOverrun ' Data Lost.
	        Case comEventRxOver  ' Receive buffer overflow.
	        Case comEventRxParity   ' Parity Error.
	        Case comEventTxFull  ' Transmit buffer full.
	        Case comEventDCB     ' Unexpected error retrieving DCB]
	
	     ' Events
	        Case comEvCD   ' Change in the CD line.
	        Case comEvCTS  ' Change in the CTS line.
	        Case comEvDSR  ' Change in the DSR line.
	        Case comEvRing ' Change in the Ring Indicator.
	        Case comEvReceive ' Received RThreshold # of chars.
	           InBuff = MSComm1.Input
	        Case comEvSend ' There are SThreshold number of
	                       ' characters in the transmit
	                       ' buffer.
	        Case comEvEOF  ' An EOF character was found in
	                       ' the input stream.
	           MsgBox "EOF character received!"
	     End Select
	  End Sub
	
	Steps to Run the Applications
	-----------------------------
	
	1. Press the F5 key or click the Run button on each project. Position both
	  applications so that you can see them running at the same time.
	
	2. Make sure you have a standard null modem cable connecting the COM1 and COM2
	  ports.
	
	3. Click the Command button labeled Send on App1, and note that a Message Box
	  displaying the message "EOF character received!" appears in App2.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q194923 HOWTO: Trap Control Characters Using the MSComm Control
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCommPort kbCtrl kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : :5.0 SP2,5.0 SP3,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
