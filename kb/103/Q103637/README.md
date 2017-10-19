---
layout: page
title: "Q103637: Use EV_RINGTE for Modem Ring Detection"
permalink: /kb/103/Q103637/
---

## Q103637: Use EV_RINGTE for Modem Ring Detection

	Article: Q103637
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
	
	Many communications applications need ring detection. The documentation for
	SetCommState() indicates that EV_RING should be the event to set for this
	purpose. However, the EV_RING bit does not work as expected; the EV_RINGTE (ring
	indicator trailing edge) event should be used for ring detection.
	
	The trailing edge of the ring indicator (RI) generates a modem status register
	(MSR) interrupt, which in turn sets the EV_RINGTE bit. EV_RING is set to the
	current status of RI. Because the interrupt does not occur until RI changes from
	high to low, EV_RING almost always is low (except when it happens to be high
	during another MSR interrupt).
	
	The EV_RINGTE event is not referenced in the SetCommEventMask() documentation;
	however, it is defined in WINDOWS.H, and will be supported in future versions of
	16-bit Windows.
	
	NOTE: The information in this article applies to the 16-bit comm driver in
	Windows 95 also.
	
	EV_RING
	-------
	
	EV_RING is set when the ring indicator is detected high during Modem Status
	Register (MSR) interrupt processing. This is an absolute state, but since it is
	read only during MSR interrupt processing, it will almost always be zero. The
	only time it will not be zero is when the ring indicator is high and the MSR
	interrupt is triggered for some other reason, such as a change in the state of a
	line (CD, CTS, or DSR). Because of this, EV_RING has no real value for detecting
	a ring.
	
	EV_RINGTE
	---------
	
	EV_RINGTE is set when a ring is detected on the modem. The trailing edge of a
	ring indicator generates an MSR interrupt, which in turn sets the EV_RINGTE
	event. Use this event to detect a ring.
	
	Additional query words: 3.10 Win16 no32bit COMM SetCommState event
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
