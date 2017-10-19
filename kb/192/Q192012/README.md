---
layout: page
title: "Q192012: INFO: Troubleshooting Tips for the MSComm Control"
permalink: /kb/192/Q192012/
---

## Q192012: INFO: Troubleshooting Tips for the MSComm Control

	Article: Q192012
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbfile kbCtrl kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport kbCOMM
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The MSComm control encapsulates much of the functionality provided by the
	communications functions of the Windows API. This encapsulation makes these
	functions easier to use but does limit the functionality of the MSComm control.
	This article provides you with some tips for troubleshooting the MSComm control.
	
	MORE INFORMATION
	================
	
	1. If you are using Visual Basic 6.0, the version that ships on the CD is
	  6.00.8169. If you are using Visual Basic 5.0, there are two versions of the
	  MSComm control that you can use. Microsoft recommends that you use the
	  version updated by Service Pack 2 for Visual Basic 5.0. This version is
	  5.01.4319 dated 7/19/97. The other version, which shipped on the Visual Basic
	  5.0 CD, is 5.00.3714 dated 1/14/97. The major fix in the Service Pack 2
	  version is documented in Microsoft Knowledge Base article Q171472, and it
	  fixes a memory leak that was occurring when the port was repeatedly toggled
	  open and closed.
	
	2. Use another communications application such as HyperTerminal, supplied with
	  Windows 95, Windows 98, Windows Me, and Windows 2000, to determine if a
	  connection can be established independent of Visual Basic. This will
	  determine if a connection can be made using only the communication functions
	  in the Windows API. If a connection cannot be made, examine the physical
	  elements of the connection. Is the proper cable being used? Is it connected
	  to the correct serial port? If a connection can be made, note the settings
	  that were used and use the same settings with the MSComm control.
	
	3. Use the Visual Basic VBTerm and Dialer sample applications with the
	  appropriate settings. If these work, use this code as a starting point for
	  your application. If they don't work, first try the suggestions below on
	  these samples. If these suggestions fix the problem, then use the samples as
	  a starting point. Otherwise, start with the simplest code possible and use
	  the following suggestions as a starting point.
	
	4. Set the RTSEnable property of the MSComm control to True. Many modems and
	  other communication devices use the RTS signal for handshaking.
	
	5. Set the RThreshold property to 1. If you set the RThreshold property to any
	  other value, you may have trouble unless all of your data consists of
	  fixed-length packets.
	
	
	6. Set the InputLen property to 0 unless there is an overriding reason not to do
	  so.
	
	7. Always receive data when data is available. Do not rely on the RThreshold
	  property to tell you if data is available. Use the OnComm event procedure.
	  Double-buffer the incoming data. Extract the data from the buffer and process
	  it. Clean up the buffer to remove the processed data. For example:
	
	        Sub MSComm1_OnComm()
	           Static Buffer As String
	
	           ' Always buffer incoming data no matter
	           ' what generated the OnComm event.
	           Buffer = Buffer & MSComm1.Input
	
	           ' Check if buffer has grown larger than limit.
	           If Len(Buffer) >= limit Then
	              ' Call procedure to Process the received information.
	              process Left$(Buffer, limit)
	
	              ' Clean-up buffer
	              Buffer = Right$(Buffer, Len(Buffer) - limit)
	           End If
	        End Sub
	
	  This procedure double-buffers the received data and, unless the program is
	  bound to fail because of some other performance problems, provides good
	  security for the received data. It is extremely important to handle every
	  character as it comes in at high baud rates. If you are looking for a
	  terminating character sequence instead of length, then the test would use
	  InStr instead of Len.
	
	8. Whenever possible, use event-driven communications. A template for the OnComm
	  event can be found in Help under the example tab of the OnComm topic.
	  Event-driven communication is far more efficient than continuous polling, and
	  also allows for a wider range of error handling.
	
	========== 16 bit only ==============
	
	1. If you are using Windows for Workgroups 3.11, obtain the updated version of
	  SERIAL.386.
	
	The following file is available for download from the Microsoft Download Center:
	
	  Wg1001.exe
	  (http://download.microsoft.com/download/vb40pro/Sample/2.0/Win98/En-US/Wg1001.exe)
	
	Release Date: May 31, 2000
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. After it is posted, the file is housed on
	secure servers that prevent any unauthorized changes to the file.
	
	2. If the Visual Basic application using the MSComm control is running on a
	  Windows for Workgroups 3.11 machine with a 16550AF UART chip and the
	  InBufferSize property is greater than 1024, COMxFIFO=0 must be added to the
	  [386Enh] section of the System.ini file. This entry disables the FIFO buffer
	  of COMx's 16550 UART. If a serial port does not have a 16550 UART, this
	  setting is ignored. The default value is 1 (enabled).
	
	Additional query words: Wg1001
	
	======================================================================
	Keywords          : kbfile kbCtrl kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport kbCOMM 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600 kbVB400Search kbVB400 kbVB16bitSearch
	Version           : :4.0,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
