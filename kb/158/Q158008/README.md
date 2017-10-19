---
layout: page
title: "Q158008: HOWTO: Use MSCOMM32.OCX to Transfer Data on DBCS Windows"
permalink: /kb/158/Q158008/
---

## Q158008: HOWTO: Use MSCOMM32.OCX to Transfer Data on DBCS Windows

	Article: Q158008
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbCtrl kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport KBSIMCH kbIntlDev
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article illustrates some techniques using the MSComm32.OCX control for
	receiving and transmitting binary data on double-byte character set (DBCS)
	Windows.
	
	MORE INFORMATION
	================
	
	The Communications control, MSCOMM32.OCX, provides serial communications for
	your application by allowing the transmission and reception of data through a
	serial port where only a string of characters to the transmit buffer is
	permitted. This feature limits you to transmitting only text- based files.
	
	The binary data must be converted one byte at a time to a character and then
	transmitted. When received, the data must be converted from a character back
	into binary data one byte at a time. See the REFERENCES section below for more
	information.
	
	On double-byte character set Windows, such as Korean, Japanese, and Chinese
	Windows, binary data will be corrupted if one of the binary values matches a
	DBCS lead character. The MSComm control will interpret this byte and the
	following byte as one double-byte character and return only one byte for the
	equivalent ASCII character. To resolve this problem, which is specific to DBCS
	Windows, you can implement certain encoding algorithms that can convert binary
	data into text data and vice versa. This article demonstrates how to convert one
	byte binary data into ASCII size of three characters to preserve the lead
	character. On the receiving end, these three ASCII characters are converted back
	into one-byte binary data. For example:
	
	  ASC('a') = 97 ' 97
	
	would be transmitted as three characters:
	
	  '0''9''7'
	
	NOTE: The sample code is reading the input file as binary. It is not necessary to
	convert each character to ASCII value.
	
	If you use a modem instead of RS-232 cable, you need to add some codes to
	establish the modem connection. For example:
	
	- MSComm1.Output = 'ATDT 999-9999' for Transmitter
	
	  and -
	
	- MSComm1.Output = 'AT' for Receiver
	
	Once the connection is established, everything should work the same way.
	
	WARNING: USE OF THE SAMPLE CODE PROVIDED IN THIS ARTICLE IS AT YOUR OWN RISK.
	Microsoft provides this sample code "as is" without warranty of any kind, either
	express or implied, including but not limited to the implied warranties of
	merchantability and/or fitness for a particular purpose.
	
	Sample Code - Transmitter
	-------------------------
	
	1. Start Visual Basic. If Visual Basic is already running, from the File menu,
	  choose New Project. Form1 will be created by default.
	
	2. Place Microsoft Comm Control on Form1. If Microsoft Comm Control cannot be
	  found in the control bar, go to Tools menu, choose Custom Controls, and then
	  check the Microsoft Comm Control on the List Box.
	
	3. Add the following code to the General Declarations section of Form1:
	
	        ' General Declaration section
	
	         Dim Offset As Long
	         Dim FileData As Byte
	         Dim FileName As String
	
	4. Add the following code to the Load event of Form1:
	
	        ' Load event of Form
	        ' 28800 baud, no parity, 8 data, and 1 stop bit.
	        ' In RS-232, maximum speed of 28800 baud can be used
	
	        Private Sub Form_Load()
	            MSComm1.Settings = "28800,N,8,1"
	            MSComm1.InputLen = 1
	            MSComm1.CommPort = 2
	            MSComm1.PortOpen = True
	
	        ' Change the file path to point to the file you want to transfer
	            FileName = "d:\sample.hlp"
	
	            Offset = 1
	            Open FileName For Binary Access Read As #1
	        End Sub
	
	5. Add the following code to the OnComm event of MSComm1:
	
	        ' ONCOMM event of Comm OLE Control
	        ' The following code is needed to make sure that next set of
	        ' characters can be transmitted (CommEvent = 2 is triggered from the
	        ' receiver side)
	
	        Private Sub MSComm1_OnComm()
	            If MSComm1.CommEvent = 2 Then
	                temp = MSComm1.Input
	                If Offset <= FileLen(FileName) Then
	                    Get #1, Offset, FileData
	                    q = FileData
	                    MSComm1.Output = Format(q, "000")
	                    Offset = Offset + 1
	                End If
	            End If
	        End Sub
	
	6. Add the following code to the UnLoad event of Form1:
	
	        ' UnLoad event of Form
	
	        Private Sub Form_Unload(Cancel As Integer)
	            Close #1
	        End Sub
	
	7. Make sure that the Properties of MSComm1 are changed as follows:
	
	        RThreshold = 1     ' triggers when at least one char is on the buffer
	        SThreshold = 3
	
	Sample Code - Receiver
	----------------------
	
	1. Start Visual Basic. If Visual Basic is already running, from the File menu,
	  choose New Project. Form1 will be created by default.
	
	2. Place Microsoft Comm Control on Form1. If Microsoft Comm Control cannot be
	  found in the control bar, go to Tools menu, choose Custom Controls, and then
	  check the Microsoft Comm Control on the List Box.
	
	3. Add a CommandButton to Form1. Command1 is created by default.
	
	4. Add the following code to the General Declarations section of Form1:
	
	        ' General Declaration section
	
	        Dim ByteCount As Long
	        Dim FileData As Byte
	
	5. Add the following code to the Load event of Form1:
	
	        ' Load event of Form
	        ' 28800 baud, no parity, 8 data, and 1 stop bit.
	
	        Private Sub Form_Load()
	            MSComm1.Settings = "28800,N,8,1"
	            MSComm1.InputLen = 3
	            MSComm1.CommPort = 1
	            MSComm1.PortOpen = True
	
	        ' Change the file path to point to the file you want to store
	            Open "c:\sample.txt" For Binary Access Write As #1
	
	        End Sub
	
	6. Add the following code to the OnComm event of MSComm1:
	
	        ' OnComm event
	
	        Private Sub MSComm1_OnComm()
	            If MSComm1.CommEvent = 2 And MSComm1.InBufferCount > 0 Then
	                FileData = CInt(MSComm1.Input)
	                ByteCount = ByteCount + 1
	                Put #1, ByteCount, FileData
	                MSComm1.Output = Chr$(26)
	            End If
	        End Sub
	
	7. Add the following code to the Click event of Command1:
	
	        ' CLICK event of button
	
	        Private Sub Command1_Click()
	            MSComm1.Output = Chr$(26)
	        End Sub
	
	8. Add the following code to the UnLoad event of Form1:
	
	        ' UnLoad even of Form
	
	        Private Sub Form_Unload(Cancel As Integer)
	            Close #1
	        End Sub
	
	9. Make sure that the Properties of MSComm1 are changed as follows:
	
	  RThreshold = 3
	
	The Transmitter and Receiver codes should be compiled separately and placed on
	two separate machines where one machine is the designated transmitter and the
	other one is the receiver.
	
	The event-driven technique generates an OnComm event when there are characters
	waiting in the input buffer. Also, the CommEvent property will contain a numeric
	2. For the OnComm event to be triggered, you must set the Rthreshold property to
	a value other than its default of zero. The most common setting for the
	RThreshold property is 1, meaning that the OnComm event is triggered if a
	minimum of one character is waiting in the input buffer. In this article, the
	numeric 3 is being used as a value of RThreshold property because 3 characters
	at a time are being sent.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q194923 HOWTO: Trap Control Characters Using the MSComm Control
	
	Additional query words: Comm KBTRADCH KBSIMCH KBKOREA KBJAPAN kbVBp500 kbVBp600 kbVBp kbdsd kbDSupport kbCtrl
	
	======================================================================
	Keywords          : kbCtrl kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport KBSIMCH kbIntlDev 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVB500 kbVB400Search kbVB400 kbZNotKeyword3 kbVB16bitSearch
	Version           : :4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	
