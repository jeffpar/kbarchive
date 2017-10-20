---
layout: page
title: "Q78155: INFO: Introduction to Nonpreemptive Multitasking in Windows"
permalink: /kb/078/Q78155/
---

## Q78155: INFO: Introduction to Nonpreemptive Multitasking in Windows

{% raw %}

	Article: Q78155
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbDlg kbSDKPlatform kbWndw kbWndwMsg
	Last Modified: 11-JUN-1999
	
	3.00 3.10
	WINDOWS
	kbprg
	
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Applications in the Windows environment are scheduled using a nonpreemptive
	multitasking system. Usually, multitasking operating systems schedule tasks for
	execution based on some combination of time slice and/or task priority. However,
	Windows does not preemptively switch the processor away from a currently running
	application under normal circumstances (excluding interrupts). Instead,
	multitasking in Windows is based on the messaging system.
	
	Windows-based applications must cooperatively offer to yield the processor on a
	regular basis to allow Windows to multitask. Normally, an application offers to
	yield by calling one of three functions: GetMessage(), PeekMessage(), or
	WaitMessage(). An application may also yield when it calls DialogBox(),
	DialogBoxIndirect(), DialogBoxParam(), DialogBoxIndirectParam(), MessageBox(),
	or TrackPopupMenu().
	
	MORE INFORMATION
	================
	
	The GetMessage Loop
	-------------------
	
	In the Windows environment, most applications have a central GetMessage() loop
	that allows the application to cooperate with the other applications running in
	the system.
	
	When an application (called "App A") calls GetMessage(), the GetMessage()
	function will return if there are any messages in App A's message queue. If
	there are no messages, Windows will give control to another application that has
	messages in its queue. If there are no messages waiting for any application in
	the system, Windows idles. App A's call to GetMessage() will not returns until
	there is a new message in App A's queue.
	
	Using this method, the Windows-based application with control will retain control
	as long as messages are waiting in its queue. There is a small wrinkle to this
	rule: Windows considers WM_PAINT and WM_TIMER messages to be low-priority
	messages. If App A calls GetMessage() and has only low-priority messages in its
	queue, Windows will pass control to an application with high-priority messages
	waiting.
	
	It is important to note that an application can retain control of the CPU
	indefinitely if it does not call GetMessage(), PeekMessage(), or WaitMessage().
	However, an application that fails to periodically make one of these three calls
	is very impolite, because it is not allowing Windows to multitask.
	
	Background Processing
	---------------------
	
	In the Windows environment, an application can perform a lengthy processing task
	and allow Windows to multitask by using either a PeekMessage() loop or a Windows
	timer. In both cases, the general idea is the same: break the large processing
	task into small pieces, processing one piece at a time and offering to yield at
	regular short intervals.
	
	An application can use a PeekMessage() loop to perform background processing
	because, unlike GetMessage(), PeekMessage() does not wait for a message to be
	placed in the application's message queue before returning. If there are no
	messages waiting, PeekMessage() returns FALSE.
	
	A typical PeekMessage() loop resembles the following:
	
	     while (bDoingBackgroundWork)
	     {
	
	     if PeekMessage(&msg, hWnd, 0, 0, PM_REMOVE)
	     {
	     TranslateMessage(&msg); // a message is ready - process it
	     DispatchMessage(&msg);
	     }
	     else
	     {
	        // PeekMessage returned FALSE, which means no messages ready.
	        // Do a small piece of background work here.
	     }
	
	     }
	
	The PM_REMOVE flag must be specified in the wRemoveMsg parameter; otherwise, the
	application will never yield. PeekMessage() will not yield as long as there are
	messages in the application's queue. If the application does not remove and
	process the messages, PeekMessage() may send the application into an infinite
	loop.
	
	An application creates a Windows timer with the SetTimer() function. An
	application can use a Windows timer to do background processing by setting a
	timer and doing a small piece of the background job each time a WM_TIMER message
	is received or the timer notification function is called. Even if the
	application is receiving a steady stream of WM_TIMER messages, other
	applications will still have an opportunity to run because Windows considers
	WM_TIMER messages to be a low priority.
	
	It may be necessary to consider two other facts about Windows timers: they are
	not asynchronous, and the highest resolution that can be obtained is about 55
	milliseconds.
	
	REFERENCES
	==========
	
	For more information on using Windows timers, see Chapter 5, "The Timer," in
	Charles Petzold's book "Programming Windows 3.1" (Microsoft Press).
	
	Additional query words: 3.00 3.10 no32bit
	
	======================================================================
	Keywords          : kb16bitonly kbDlg kbSDKPlatform kbWndw kbWndwMsg 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
