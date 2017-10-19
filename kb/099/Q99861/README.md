---
layout: page
title: "Q99861: PRB: Using SetCommState() to Toggle DTR/RTS for Flow Control"
permalink: /kb/099/Q99861/
---

## Q99861: PRB: Using SetCommState() to Toggle DTR/RTS for Flow Control

	Article: Q99861
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When SetCommState() is used to raise the DTR and RTS lines for hardware flow
	control, the first several incoming characters may be lost.
	
	CAUSE
	=====
	
	SetCommState() calls the communications driver's setcom function, which calls
	$SETCOM. $SETCOM disables interrupts from the specified port by clearing the
	UART's interrupt enable register (IER). After changing the state of the UART and
	the DTR and RTS lines, $SETCOM delays while interrupts from the UART are still
	disabled. In Windows 3.1, this delay is approximately 200 milliseconds; in
	Windows 3.0, the delay is approximately 55 milliseconds. If the DTR and RTS
	lines are raised from low to high, any characters that arrive before interrupts
	from the UART are enabled will be lost.
	
	RESOLUTION
	==========
	
	SetCommState() should not be used to toggle the states of the DTR and RTS lines
	for hardware flow control.
	
	Use EscapeCommFunction() to toggle the the states of the DTR and RTS lines
	because it does not delay while interrupts are disabled.
	
	Additional query words: 3.00 3.10 comm
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
