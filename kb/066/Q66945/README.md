---
layout: page
title: "Q66945: PRB: Fatal Exit Code 0x0019 Definition and Causes"
permalink: /kb/066/Q66945/
---

## Q66945: PRB: Fatal Exit Code 0x0019 Definition and Causes

{% raw %}

	Article: Q66945
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After an implicitly loaded dynamic-link library (DLL) attempts to create a
	window in its initialization procedure, a Fatal Exit 0x0019 occurs.
	
	CAUSE
	=====
	
	When an application is loaded, Windows loads any DLLs that are implicitly
	referenced by that application prior to initializing the application's task.
	Part of task initialization is creating a message queue for that application. By
	the time the application's WinMain() function is called, the message queue has
	been created.
	
	Any window created by a DLL uses the message queue of the application task using
	that DLL. If an implicitly loaded DLL creates a window in its initialization
	code (that is, LibMain) there is no message queue for it to use. When Windows
	detects this situation, it signals Fatal Exit 0x0019.
	
	RESOLUTION
	==========
	
	If the DLL must display a message during initialization, it must either be
	explicitly loaded from the application using LoadLibrary() or the DLL should
	export a function that can be called from the WinMain() procedure of the
	application. By the time WinMain() is executed, the window queue has been
	created.
	
	MORE INFORMATION
	================
	
	In Microsoft Windows, a network driver is the only DLL that can create a window
	during initialization. The network driver is loaded after the first application
	task has been initialized (that is, the shell), and any dialog box displayed by
	a network driver uses the message queue of the shell application.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
