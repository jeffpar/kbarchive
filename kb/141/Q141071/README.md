---
layout: page
title: "Q141071: PRB: Can't Receive Data When Using MSCOMM.OCX Control"
permalink: kb/141/Q141071/
---

## Q141071: PRB: Can't Receive Data When Using MSCOMM.OCX Control

	Article: Q141071
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While performing serial communications by using the MSCOMM16.OCX or MSCOMM32.OCX
	control, you can get it to connect and send data, but not receive data.
	
	CAUSE
	=====
	
	You do not have the correct handshaking enabled.
	
	RESOLUTION
	==========
	
	To resolve this problem when using MSCOMM.OCX, set the RTSEnable property to
	True or add the following line of code to your program when you initialize the
	MSCOMM control:
	
	     MSComm1.RTSEnable = True
	
	MORE INFORMATION
	================
	
	The following information on the RTSEnable property comes from the Custom
	Control Help file (CTRLREF.HLP):
	
	  (RTSEnable) Determines whether to enable the Request To Send (RTS) line.
	  Typically, the Request To Send signal that requests permission to transmit
	  data is sent from a computer to its attached modem.
	
	  When RTSEnable is set to True, the Request To Send line is set to high (on)
	  when the port is opened and low (off) when the port is closed. The Request To
	  Send line is used in RTS/CTS hardware handshaking. The RTSEnable property
	  allows you to manually poll the Request To Send line if you need to determine
	  its state.
	
	Additional query words: 4.00 vb4win vb4all comm communication custom
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : 4.00
	Issue type        : kbprb
	
	=============================================================================
	
