---
layout: page
title: "Q140525: HOWTO: Receive from the Serial Port by Using MScomm32.ocx"
permalink: kb/140/Q140525/
---

## Q140525: HOWTO: Receive from the Serial Port by Using MScomm32.ocx

	Article: Q140525
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbcode kbnokeyword kbvfp300 kbvfp500 kbvfp600
	Last Modified: 29-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article gives you two techniques you can use to receive data from the
	serial port using the Mscomm32.ocx control. The first uses an event-driven
	method and does not require you to poll the serial port to check for the
	presence of received characters. This technique allows the most flexibility and
	does not require extensive coding to prevent buffer over-runs. The second
	technique requires you to poll the input buffer periodically to check for the
	presence of received characters. This article describes these two techniques and
	provides examples for each.
	
	MORE INFORMATION
	================
	
	You need to set the following properties regardless of which technique you use:
	
	- CommPort property: Set this numeric property to the desired communications
	  port. Valid values are 1, 2, 3, or 4 depending on the serial ports available
	  and the configuration of the individual computer. These values correspond to
	  Com1, Com2, Com3, and Com4 respectively.
	
	- Settings property: Set this character property to the baud rate, Parity, Data
	  Bits, and Stop Bits required by the device connected to the serial port. This
	  property is a character, comma-delimited list. For example, to set the serial
	  port to 14,400 baud, Even Parity, 7 Data Bits, and 1 Stop Bit, set the string
	  to:
	
	  
	
	     14400,E,7,1
	
	- PortOpen property: Set this logical property to true to open communications
	  to the serial port. You can also check this property to determine if the port
	  opened correctly.
	
	Technique One: Event-Driven Receive
	-----------------------------------
	
	The event Driven technique generates an OnComm event when there are characters
	waiting in the input buffer. Also, the CommEvent property will contain a numeric
	2. For the OnComm event to be triggered, you must set the Rthreshold property to
	a value other than zero (its default). The most common setting for the
	rthreshold property is 1, meaning that the OnComm event is triggered if a
	minimum of one character is waiting in the input buffer.
	
	For example, you can place the following code in the OnComm event to append
	received data to a property of a form called mybuffer:
	
	     Procedure MyCom.OnComm
	       IF This.CommEvent = 2
	         ThisForm.mybuffer = ThisForm.mybuffer + This.Input
	       ENDIF
	     ENDPROC
	
	Technique Two: Polling the Input Buffer
	---------------------------------------
	
	Polling the input buffer requires that the program periodically stop what it is
	doing and check to see if there are characters waiting in the input buffer. When
	using this technique, leave the Rthreshold property at 0 (its default value),
	and check the InBufferCount property to see if it is greater than zero, which
	indicates that there are characters waiting in the buffer.
	
	NOTE: Using a technique such as checking the length of the Input property results
	in lost characters because as soon as the Input property is accessed, the Input
	buffer is emptied. Use the InBufferCount property instead.
	
	Assuming the Mscomm control is on the form and has the name MyCom and that there
	is a form property named mybuffer, the following code illustrates how to poll
	for waiting characters:
	
	     Procedure myform.myproc
	       IF Thisform.MyCom.InBufferCount > 0
	         Thisform.mybuffer = Thisform.mybuffer + Thisform.MyCom.Input
	       ENDIF
	     ENDPROC
	
	The procedure code could be called in a timer method to facilitate checking for
	characters at semi-regular intervals. However, if large amounts of data are
	expected to be received from the serial port, Technique One will reduce the
	chance of over-running the input buffer.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbnokeyword kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP500 kbVFP600
	Issue type        : kbhowto
	
	=============================================================================
	
