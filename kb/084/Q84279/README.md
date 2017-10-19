---
layout: page
title: "Q84279: Testing Communications from MS-DOS"
permalink: /kb/084/Q84279/
---

## Q84279: Testing Communications from MS-DOS

	Article: Q84279
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-SEP-1999
	
	3.00 3.00a 3.10 3.11
	
	WINDOWS
	
	kbtshoot kbtlc
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	When you troubleshoot communications problems in Windows, an MS-DOS-level
	communications program is often required to test the modem and ports outside of
	Windows.
	
	If an MS-DOS-based application cannot be used, it is possible to test the modem
	connections by typing the following command at the MS-DOS command prompt
	
	  Echo ATDT > ComX
	
	where X is the number of the serial port the modem is connected to or emulating.
	
	The modem should respond with a dial-tone or just a communication signal.
	
	MORE INFORMATION
	================
	
	The ATDT command is a signal to the modem that is interpreted as Attention Dial
	Tone. The first command, Attention, signals to the modem that it is about to
	receive information, and the Dial Tone command instructs the modem to enable a
	line to dial out.
	
	NOTE: The modem may not always give a dial tone with this test procedure because
	a number does not follow the command; however, the modem should give some kind
	of signal that information was received.
	
	Additional query words: 3.00 3.00a 3.10 3.11 COM1 COM2 COM3 COM4 AT DT dos tshoot
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
