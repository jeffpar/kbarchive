---
layout: page
title: "Q108309: FIX: Posting WM_COMMNOTIFY Messages May Fail"
permalink: kb/108/Q108309/
---

## Q108309: FIX: Posting WM_COMMNOTIFY Messages May Fail

	Article: Q108309
	Product(s): Microsoft Windows Device Driver Kit
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Device Development Kit (DDK) for Windows, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using WM_COMMNOTIFY messages in a communications application, these
	messages may appear to have stopped being posted.
	
	CAUSE
	=====
	
	When COMM.DRV calls PostMessage(), it does not check the return value. Even if
	PostMessage() fails, it appears to COMM.DRV that the message was sent.
	
	For CN_EVENT notifications, the event must be cleared using GetCommEventMask()
	before a new CN_EVENT notification will be sent. If the application never
	receives the CN_EVENT notification, the event never gets cleared, so COMM.DRV
	will not send a new CN_EVENT notification. If this happens, the notification
	process appears to have stopped.
	
	Similarly, for CN_RECEIVE and CN_TRANSMIT notifications, if these notifications
	are not received, the application may not know to do a ReadComm() or
	WriteComm(). If ReadComm() or WriteComm() is never called, the character level
	will never cross the buffer threshold to create a new notification. For more
	information on how CN_RECEIVE and CN_TRANSMIT notifications are generated, query
	on the following words in the Microsoft Knowledge Base:
	
	  " docerr and CN_RECEIVE and events and generated " (without the quotation
	  marks)
	
	
	RESOLUTION
	==========
	
	Implement a polling strategy to determine communications status, in addition to
	using WM_COMMNOTIFY messages. This could be implemented in the message loop of
	the application, or by using a timer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows version 3.1. This bug
	has been corrected in later versions of Microsoft Windows.
	
	Additional query words: 3.10 buglist3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWinDDKSearch kbWinDDK310
	Version           : :3.1
	Solution Type     : kbfix
	
	=============================================================================
	
