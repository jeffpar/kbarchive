---
layout: page
title: "Q119506: Transmitting a BREAK Signal"
permalink: kb/119/Q119506/
---

## Q119506: Transmitting a BREAK Signal

	Article: Q119506
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A BREAK signal is a communications signal that allows two communications devices
	to transmit a "break" in the transmission line. This article discusses how a
	communications program implemented using the Microsoft Windows Communications
	API (Comm API) can send a BREAK signal.
	
	MORE INFORMATION
	================
	
	Despite its name, a BREAK signal may be employed to convey just about any
	special condition as long as the sender and the receiver know the semantics of
	the signal. A BREAK signal, sometimes mistakenly referred to as a BREAK
	character, is any SPACE condition on the communication line that lasts longer
	than a character and its framing bits.
	
	Comm API contains two functions, SetCommBreak() and ClearCommBreak(), to assist
	in sending a BREAK signal. Merely calling these two functions in sequence will
	not cause a BREAK signal to be sent. Use one of the two methods described below
	to transmit the BREAK signal:
	
	Method 1
	--------
	
	The International Consultative Committee for Telephone and Telegraph (CCITT)
	modem recommendations require a break signal to be at least "2m+3" bits long,
	where "m" is the nominal number of bit times in an asynchronous character,
	usually 10; this means that the minimum break time is 23 bits, with no maximum
	specified. Usually, much more than the minimum is sent, such as 100 or 200
	milliseconds (that is, hundreds of bit times at high data rates). The timer
	resolution in a PC is sufficient for sending such "long" BREAK signals, but not
	sufficient to send exactly 23 bit times.
	
	An application can call SetCommBreak() to initiate the BREAK signal. Use
	SetTimer() to set a timer and wait for the recommended duration, and then call
	ClearCommBreak() to terminate the BREAK signal.
	
	NOTE: If an application sends some data and subsequently calls SetCommBreak()
	before that data has had a chance to make its way through the transmit first in,
	first out algorithm (FIFO), the data will actually be overwritten by the
	SetCommBreak() and not get onto the line. To prevent such corruption, it is
	recommended that you pause for a while before the SetCommBreak().
	
	Method 2
	--------
	
	An alternative means of sending a BREAK signal of shorter duration is to
	temporarily change the data rate in the UART to half or 1/4 of the actual line
	speed and then send a single NULL byte. This is more precise than using
	SetCommBreak() and ClearCommBreak(), but it has the disadvantage of corrupting
	received data during the time the BREAK signal is being sent (because the
	received data rate is wrong during that time). An application can change the
	date rate in the UART with a call to SetCommState(). The DCB structure passed to
	SetCommState() specifies the new data rate.
	
	REFERENCES
	==========
	
	For more information on the BREAK signal and the SPACE character, please refer
	to "C Programmer's Guide to Serial Communications," second edition, by Joe
	Campbell, published by SAMS Publishing.
	
	Additional query words: 3.10 COM interrupt
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
