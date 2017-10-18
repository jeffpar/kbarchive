---
layout: page
title: "Q101420: BUG: Extra CN_RECEIVE/CN_TRANSMIT Events"
permalink: kb/101/Q101420/
---

## Q101420: BUG: Extra CN_RECEIVE/CN_TRANSMIT Events

	Article: Q101420
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using EnableCommNotification() to enable WM_COMMNOTIFY messages for CN_RECEIVE
	or CN_TRANSMIT events can cause spurious WM_COMMNOTIFY messages. At higher baud
	rates, this problem can cause a system to crash and reboot.
	
	WM_COMMNOTIFY messages are received with a 0 (zero) value for the NotifyStatus
	parameter. The system crashes and reboots while receiving or transmitting data.
	
	RESOLUTION
	==========
	
	If the application is experiencing these symptoms, possible solutions are:
	
	- Extra WM_COMMNOTIFY messages with NotifyStatus=0 can be ignored.
	
	- If the system is crashing, change the application to NOT enable CN_RECEIVE
	  and CN_TRANSMIT events.
	
	- Enable the CN_EVENT notification for the EV_RXCHAR event by calling
	  SetCommEventMask() then EnableCommNotification(). EV_RXCHAR is generated when
	  any character is received and put into the queue. Make sure that
	  EnableCommNotification() is called with -1 in both the cbWriteNotify and
	  cbOutQueue parameters, such that the CN_RECEIVE and CN_TRANSMIT events are
	  not enabled. This method is demonstrated in the TTY sample in the Windows
	  Software Development Kit (SDK).
	
	- Instead of using EnableCommNotification, the application could poll for data.
	  This could be implemented in the message loop of the application, or using a
	  timer.
	
	- Modify COMM.DRV to work around this problem.
	
	STATUS
	======
	
	This problem has been reported as a bug. There will not be a fix for COMM.DRV in
	Windows version 3.1.
	
	MORE INFORMATION
	================
	
	CN_RECEIVE events are generated when the number of bytes in the receive queue
	exceeds the threshold (cbWriteNotify) set in EnableCommNotification() or when a
	time-out occurs. After a CN_RECEIVE has been generated for exceeding the
	cbWriteNotify threshold, another CN_RECEIVE should not be generated until the
	number of bytes drops below cbWriteNotify then exceeds it again.
	
	CN_TRANSMIT events are generated similarly to CN_RECEIVE. The notification
	threshold of the output queue is set in the cbOutQueue parameter of
	EnableCommNotify. If the number of bytes in the output queue drops below
	cbOutQueue, a CN_TRANSMIT should be generated. A new CN_TRANSMIT should not be
	generated until the output queue exceeds, then drops below cbOutQueue again.
	
	However, if interrupts arrive fast enough, extra "threshold" CN_RECEIVEs (or,
	similarly, CN_TRANSMITs) may be generated before the size of the output queue
	drops below then again exceeds cbWriteNotify. These extra events can be ignored;
	however, this characteristic may cause the system to reboot, especially at
	higher baud rates.
	
	Additional query words: buglist3.10 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
