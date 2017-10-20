---
layout: page
title: "Q139526: HOWTO: Send to the Serial Port by Using Mscomm32.ocx"
permalink: /kb/139/Q139526/
---

## Q139526: HOWTO: Send to the Serial Port by Using Mscomm32.ocx

{% raw %}

	Article: Q139526
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbnokeyword kbvfp300 kbvfp500 kbvfp600
	Last Modified: 09-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the settings necessary to send data to the serial port by
	using Mscomm32.ocx. Mscomm32.ocx ships with the Professional Edition of Visual
	FoxPro. It can be used in Windows 95 or Windows NT only.
	
	MORE INFORMATION
	================
	
	The most frequently used properties to send data to the serial port using the
	mscomm control are as follows:
	
	CommPort
	--------
	
	The CommPort property specifies the communications port number. A numeric
	property that corresponds to the Comm port. By default, this property is set to
	1 corresponding to com1. Valid values are 1, 2, 3, or 4 depending on the serial
	ports installed on the computer and their configuration.
	
	Settings
	--------
	
	The Settings property configures the baud rate, parity, data bits, and stop bits
	for the serial port. It is a character string with individual values separated
	by commas. By default, the Settings property contains 9600,N,8,1. This
	corresponds to 9600 baud, no parity, 8 data bits, and 1 stop bit.
	
	PortOpen
	--------
	
	The PortOpen property specifies a logical value that controls whether or not the
	serial port is open and active. Once the previous properties are set to begin
	using the serial port, you can set this property to true.
	
	Output
	------
	
	The Output property is assigned the string of characters to be sent to the serial
	port. To output the string "Hello World" to the serial port after the previous
	properties are set, use the following command:
	
	     myform.mycomm.output = "Hello World"
	
	Other properties that may be also be needed depending on the application are as
	follows:
	
	CommEvent
	---------
	
	The CommEvent property contains a value that represents the most recent
	communications event or errors.
	
	Sthreshold
	----------
	
	The Sthreshold property specifies the minimum number of characters in the output
	buffer that are sent.
	
	OutBufferCount
	--------------
	
	The OutBufferCount control returns the number of characters waiting in the
	transmit buffer. This should always be zero if the Sthreshold property is zero.
	Setting the OutBufferCount property to zero will clear the transmit buffer.
	
	OutBufferSize
	-------------
	
	The OutBufferSize property specifies the size of the transmit buffer. By default,
	this buffer is 512 bytes. The larger the transmit buffer, the less memory
	available to other applications. Slow baud rates and large text strings written
	to the serial port may mean you need to make this value larger.
	
	Following is a sample that shows how to set up the comm control and dial the
	phone number 555-1234 by using the standard Hayes Modem commands.
	
	     PUBLIC ComForm
	     ComForm = CREATEOBJECT('Form')
	     ComForm.AddObject("Testcom","Olecontrol","MSCOMMLib.MSComm")
	     ComForm.Testcom.CommPort = 2 && Use Comm2, The second Serial Port.
	     ComForm.Testcom.Settings = "14400,N,8,1"  && 14.4 Kbaud, No Parity,
	                                               && 8 data Bits, 1 Stop Bit
	     ComForm.Testcom.PortOpen = .T.
	     ComForm.Testcom.Output = "ATDT555-1234" + chr(13) && Dialing the number
	     * The chr(13) is needed to complete the modem command sequence
	     ComForm.Testcom.PortOpen = .F.
	     ***** End Code *****
	
	NOTE: If you use this in an application and you then distribute the application
	using the Visual FoxPro Setup Wizard, you may see the following error when you
	run the application:
	
	  Program Error OLE error code 0x80040112: Appropriate license for this class
	  not found.
	
	If the preceding error occurs, refer to the following article in the Microsoft
	Knowledge Base:
	
	  Q192693 BUG: License Error with ActiveX Control Added at Run-Time
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbnokeyword kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP500 kbVFP600
	Version           : WINDOWS:3.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
