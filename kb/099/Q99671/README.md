---
layout: page
title: "Q99671: Chaining NotifyRegister Callbacks Issuing Notifications"
permalink: /kb/099/Q99671/
---

## Q99671: Chaining NotifyRegister Callbacks Issuing Notifications

{% raw %}

	Article: Q99671
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
	
	Microsoft Windows version 3.1 can register callback functions with the
	NotifyRegister() application programming interface (API), which is called on
	notifications. Callback functions that result in a notification being issued,
	however, themselves fail to chain on to other registered callbacks. This causes
	negative side-effects to other applications that use NotifyRegister().
	
	MORE INFORMATION
	================
	
	NotifyRegister() can install callback functions that are called in response to
	events such as the starting and ending of an application, the loading of a
	segment, the freeing of a module, and so forth. Only one callback can be
	installed per task running in Windows. When more than one task is running, each
	can install a notification callback. Multiple callback functions are called by a
	chaining mechanism implemented in TOOLHELP when an event occurs. Callback
	functions are called in the order they were installed by the tasks. See the
	Windows Software Development Kit (SDK) version 3.1 "Programmer's Reference,
	Volume 2: Functions" manual for more information on NotifyRegister().
	
	If a callback routine performs an operation that causes another notification to
	be issued, then the callback functions are not called in the usual chained
	manner. The problem is not that the callback routine isn't handling reentrancy;
	rather, NotifyRegister() has not been implemented to handle callbacks that
	result in notifications being issued.
	
	
	For example, a common procedure is to call OutputDebugString() to help debug an
	application. However, callback functions installed by NotifyRegister() cannot
	use OutputDebugString() because this API call causes the NFY_OUTSTR notification
	to be issued. When OutputDebugString() returns, TOOLHELP can't chain on to the
	next installed callback function. The result is that only the first callback is
	called for the event at which OutputDebugString() was called.
	
	If printing debug messages from the callback routine is desired, call
	PostMessage() to inform the application of the event, and call
	OutputDebugString() from the application's window procedure instead of calling
	it directly from the callback routine. Using PostMessage() is necessary for the
	application to perform any operation, not just a call to OutputDebugString(),
	which causes a notification event to occur. Incidentally, the documentation
	states that "the notification callback function cannot use any Windows function,
	with the exception of Tool Helper functions and PostMessage.()"
	
	Having this type of error in an installed NotifyRegister() callback results in
	negative side-effects in other applications that use NotifyRegister(). Microsoft
	Visual C++ version 1.0 uses TOOLHELP notifications as part of the integrated
	development environment debugger. If any application is running that has
	installed a callback that causes notifications to be issued, calling
	OutputDebugString() for example, Visual C++ will not be able to initiate
	debugging an application. Upon starting to debug, Visual C++ displays an error
	message in a dialog box stating:
	
	  DEBUG ERROR: Could not load debuggee. Unknown Error in Windows (-22)
	
	Once the application uninstalls the errant callback routine, Visual C++ can debug
	without this error.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
