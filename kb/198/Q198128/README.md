---
layout: page
title: "Q198128: PRB: Accessing WINMODEM with MSComm Control Can Hang Application"
permalink: kb/198/Q198128/
---

## Q198128: PRB: Accessing WINMODEM with MSComm Control Can Hang Application

	Article: Q198128
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbCtrl kbIO kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB
	Last Modified: 06-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While performing serial communications using the MSCOMM32.OCX with a WINMODEM,
	upon opening the com port, system resources will be reduced causing the
	application to hang.
	
	CAUSE
	=====
	
	WINMODEM is a software modem. It is different from a standard modem in that it
	does not include a UART (Universal Asynchronous Receiver Transmitter) chip or a
	processor chip to process instructions. Instead, it uses the computer's CPU.
	Necessary software and drivers must be loaded for the WINMODEM to work.
	
	RESOLUTION
	==========
	
	Do not open the port until you are ready to output characters to the modem.
	Immediately following the message MSComm1.PortOpen = TRUE, send a command string
	or other output to the modem. This can be as simple as an "AT" command string.
	
	MORE INFORMATION
	================
	
	Steps to Work Around Behavior
	-----------------------------
	
	1. Create a new Standard EXE project. Form1 is created by default.
	
	2. Choose Components from the Project menu, check the "Microsoft Comm Control,"
	  and click OK.
	
	3. Add an MSComm control to the form.
	
	4. Add the following code to Form1's code window:
	
	        Private Sub Form_Load()
	
	           With MSComm1
	              .Handshaking = 2 - comRTS
	              .RThreshold = 1
	              .RTSEnable = True
	              .Settings = "9600,n,8,1"
	              .SThreshold = 1
	              ' Leave all other settings as default values.
	           End With
	           ' These next 2 lines avoid the problem
	           MSComm1.PortOpen = True
	           MSComm1.Output = "AT"
	        End Sub
	
	5. Run the program. Without the MSComm1.Output line, the application will
	  consume resources and may hang. With this line, the application runs fine, as
	  expected.
	
	REFERENCES
	==========
	
	For more information on how to use the MSComm control, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q192012 : INFO: Troubleshooting Tips for the MSComm Control
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCtrl kbIO kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400
	Version           : :4.0,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
