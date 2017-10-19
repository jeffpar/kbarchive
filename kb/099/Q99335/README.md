---
layout: page
title: "Q99335: PRB: Error in the THSAMPLE Sample Application"
permalink: /kb/099/Q99335/
---

## Q99335: PRB: Error in the THSAMPLE Sample Application

	Article: Q99335
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
	
	The Microsoft Windows version 3.1 Software Development Kit (SDK) provides a
	sample called THSAMPLE, which is in the SDK subdirectory \SAMPLES\TOOLHELP. This
	sample application uses the TOOLHELP.DLL to provide the type of information that
	HEAPWALK shows.
	
	SYMPTOMS
	========
	
	When the THSAMPLE sample application is run and the Enable List option is
	enabled from the Notification menu, some of the notification messages are not
	seen in the notification window.
	
	This problem can be demonstrated, for example, by starting the Windows Help
	application when the Enable List option is enabled in the THSAMPLE application.
	(Note that it is preferable to turn off the task switch notifications using the
	Notification/Task Switch Filter option).
	
	CAUSE
	=====
	
	There is a simple error in the THSAMPLE application. THSAMPLE uses
	NotifyRegister() to register a callback function that receives all the
	notification messages. This callback function is then posting a user-defined
	message to itself using PostMessage() for every notification message it
	receives, and displaying it in the appropriate window.
	
	There is a default limit, however, of eight messages that an application's
	message queue can hold, whereas the callback could receive a lot more
	notifications (for example, when some applications are started, a number of
	LOADSEG notifications are sent).
	
	RESOLUTION
	==========
	
	To correct this behavior, the application's message queue size must be increased
	by using SetMessageQueue() set to an appropriate number. Note that starting and
	exiting some applications such as Windows Help, Word for Windows, or Excel will
	produce a large number of LOADSEG and FREESEG notifications. Therefore, it is
	better to set the message queue size to the maximum of 120 in order to be able
	to look at most of the notifications.
	
	Additional query words: 3.10 no32bit
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
