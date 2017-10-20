---
layout: page
title: "Q74288: Some Windows Functions Cannot Be Called from LibMain"
permalink: /kb/074/Q74288/
---

## Q74288: Some Windows Functions Cannot Be Called from LibMain

{% raw %}

	Article: Q74288
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the Microsoft Windows graphical environment, when a dynamic-link library
	(DLL) is implicitly linked to an application, the LibMain function in the DLL
	should not call any dialog box, messaging, or window management functions.
	Making such a call causes a FatalExit error under the debugging version of
	Windows because the application has not created a message queue when the LibMain
	function for an implicitly loaded DLL executes.
	
	MORE INFORMATION
	================
	
	Every Windows DLL must include an automatic initialization function, which is
	typically called LibMain. Windows calls this function when the DLL is initially
	loaded, giving the DLL an opportunity to perform one-time startup processing.
	
	This startup processing typically includes registering window classes,
	initializing the DLL's local heap, and setting initial values for the DLL's
	global variables. However, a DLL's LibMain function cannot safely make many
	Windows calls.
	
	When Windows loads an application that is implicitly linked to a DLL, it also
	loads the DLL on behalf of the application. Windows loads the DLL and calls the
	DLL's LibMain function before calling the application's WinMain function and
	before creating the application's message queue.
	
	While the DLL is executing, it uses certain system resources that are owned by
	the application. One of these resources is the application's message queue. If
	the application's message queue has not been created, the DLL cannot do any
	messaging or tasking (because these operations require a message queue). In
	other words, the DLL cannot call any Windows functions that would send a message
	or yield control to another application. Attempting to do so causes a FatalExit
	error.
	
	Because the DLL's LibMain function may be called before the application's message
	queue is created, the LibMain function cannot do any messaging or tasking. Such
	calls include the dialog box, messaging and window management functions as well
	as other functions that could result in a message being sent.
	
	Additional query words: 3.00 no32bit 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
