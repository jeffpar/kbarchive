---
layout: page
title: "Q74412: Steady Timer Messages in a Dynamic-Link Library (DLL)"
permalink: /kb/074/Q74412/
---

## Q74412: Steady Timer Messages in a Dynamic-Link Library (DLL)

{% raw %}

	Article: Q74412
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the Microsoft Windows graphical environment, a dynamic-link library (DLL) can
	receive steady timer messages, even as various applications that link into the
	DLL are started and terminated. However, it cannot do so by calling the
	SetTimer() API directly as an application typically does. To receive steady
	timer messages, a DLL can launch a hidden application and use that application's
	message queue to receive the timer messages.
	
	MORE INFORMATION
	================
	
	The SetTimer() API is used to create a Windows timer. When the timer expires,
	Windows needs a message queue into which it can place a WM_TIMER message. A
	message queue is required even if a timer notification function is specified as
	the lpTimerFunc parameter to SetTimer().
	
	Because a DLL is not a task, it does not have a message queue. When a DLL calls
	SetTimer(), Windows places the resulting WM_TIMER messages into the message
	queue of the currently active task, which is the application instance that
	called into the DLL.
	
	If this application instance should terminate, its message queue is destroyed,
	and the DLL does not receive any more timer messages. If the DLL specified a
	timer notification function, the notification function is not called again.
	
	For a DLL to receive a steady flow of timer messages, the timer messages must go
	into a message queue that will remain present while the various applications
	that link into the DLL are started and terminated. One way to achieve this is to
	launch a hidden application from the DLL. The DLL can use that application's
	message queue to receive steady timer messages.
	
	This technique could be implemented as follows:
	
	1. Export a routine from the DLL with syntax similar to the following:
	
	        void FAR PASCAL StartDLLTimer(HWND hWndHiddenApp)
	
	2. To start a steady timer, the DLL launches a hidden application with a call
	  similar to the following:
	
	        WinExec("MYTIMER.EXE", SW_HIDE);
	
	  MYTIMER is a minimal Windows-based application. The only special processing
	  MYTIMER requires is to link to the DLL and call the StartDLLTimer function in
	  the processing of its WM_CREATE case, supplying the handle for its main
	  window as the value for the hWndHiddenApp parameter.
	
	3. In the StartDLLTimer function, the DLL calls SetTimer, specifying
	  hWndHiddenApp as the hWnd parameter.
	
	Timer messages for the DLL consequently use the MYTIMER function's message queue.
	Therefore, the DLL continues to receive timer messages regardless of other
	applications that link into the DLL.
	
	Timers are a scarce system resource. If the SetTimer() call fails, no timers are
	available for use.
	
	Before the DLL terminates, it should free the timer. It can do so by calling
	KillTimer(). It then sends a WM_CLOSE message to the MYTIMER application, which
	terminates MYTIMER.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
