---
layout: page
title: "Q101415: DOCERR: How CN_RECEIVE Events Are Generated"
permalink: kb/101/Q101415/
---

## Q101415: DOCERR: How CN_RECEIVE Events Are Generated

	Article: Q101415
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
	
	WM_COMMNOTIFY messages with CN_RECEIVE notifications are enabled when
	EnableCommNotification() is called with any number but -1 in the cbWriteNotify
	parameter. CN_TRANSMIT notifications are enabled when the cbOutQueue parameter
	is any number but -1. The CN_RECEIVE notifications are generated when either the
	number of characters in the receive queue exceeds cbWriteNotify, or a time-out
	occurs. Similarly, CN_TRANSMIT notifications are generated when the number of
	characters in the output queue drops below the cbOutQueue parameter.
	
	MORE INFORMATION
	================
	
	When the COMM.DRV is loaded, it calls CreateSystemTimer() to create a 100
	millisecond timer. When the timer goes off, COMM.DRV loops through all open
	ports, and does the "time-out check." The timer period is not configurable.
	
	A CN_RECEIVE notification is generated if at receive interrupt time the following
	are true:
	
	- CN_RECEIVE notification is enabled.
	
	- The number of characters in the receive queue exceeds cbWriteNotify.
	
	- The number of characters in the receive queue has been below cbWriteNotify
	  since the last CN_RECEIVE notification.
	
	-or-
	
	The following are true at time-out check:
	
	- CN_RECEIVE notification is enabled.
	
	- The port has at least one character in its receive queue.
	
	- The number of characters in the receive queue is less than cbWriteNotify.
	
	- A time-out CN_RECEIVE has not already been sent since the last character
	  arrived at the port.
	
	A CN_TRANSMIT notification is generated if at transmit interrupt time the
	following are true:
	
	- CN_TRANSMIT notification is enabled.
	
	- The number of characters in the transmit queue is less then cbOutQueue.
	
	- The number of character in the transmit queue has been above cbOutQueue since
	  the last CN_TRANSMIT notification.
	
	The Windows 3.1 Software Development Kit (SDK) documentation for
	EnableCommNotification() contains an incorrect sentence in the comments
	section:
	
	  Similarly, a WM_COMMNOTIFY message in which the CN_RECEIVE flag is set is
	  sent only when the output queue is larger than the number of bytes specified
	  in the cbOutQueue parameter.
	
	This should be replaced by:
	
	  Similarly, a WM_COMMNOTIFY message in which the CN_TRANSMIT flag is set is
	  sent only when the number of bytes in the output queue first exceeds and then
	  falls below the number of bytes specified in the cbOutQueue parameter.
	
	COMM.DRV has a bug that can generate extra CN_RECEIVE or CN_TRANSMIT
	notifications. For additional information, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q101420 BUG: Extra CN_RECEIVE/CN_TRANSMIT Events
	
	Additional query words: 3.10 no32bit docerr
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
