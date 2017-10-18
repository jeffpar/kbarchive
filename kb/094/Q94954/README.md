---
layout: page
title: "Q94954: PRB: DdeInitialize Fails in Implicitly-Loaded DLL's LibMain()"
permalink: kb/094/Q94954/
---

## Q94954: PRB: DdeInitialize Fails in Implicitly-Loaded DLL's LibMain()

	Article: Q94954
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When implementing DDEML from an implicitly-loaded dynamic-link library (DLL),
	calling DdeInitialize() from the DLL's LibMain() function causes the
	DdeInitialize() call to fail (that is, results to an exception 13). Moving the
	call to DdeInitialize() anywhere other than LibMain() corrects the problem.
	
	CAUSE
	=====
	
	In DdeInitialize(), DDEML initializes its data structures, allocates memory, and
	also creates windows (for its own internal use). This, of course, causes
	messages to be sent to the application's message queue, which at LibMain() time,
	in an implicitly-loaded DLL, does not exist yet. These messages sent to a
	non-existent message queue result to an exception 13.
	
	RESOLUTION
	==========
	
	One way to resolve this problem is to export another function in the DLL, call
	it InitDDEML(), which can call DdeInitialize() and perform all necessary
	initializations. This guarantees that when the function InitDDEML() is called,
	the application's message queue has been properly initialized.
	
	Another way to resolve this problem is to keep the DdeInitialize() call in
	LibMain(), but to explicitly load the DLL via LoadLibrary(). This also ensures
	that the calling application's message queue exists before the call to
	DdeInitialize() in LibMain().
	
	MORE INFORMATION
	================
	
	Because an implicitly-loaded DLL is loaded into memory before the calling
	application is completely loaded, LibMain(), [which is analogous to an
	application's WinMain()] is called before the application's message queue is
	initialized. As a result, the DLL must not call functions that send messages to
	the application in LibMain().
	
	This problem is not specific to DDEML.
	
	Similarly, an implicitly-loaded DLL is terminated after the calling application
	has been removed from memory. Therefore, nothing in the Windows exit procedure
	(WEP) must require the application to exist.
	
	
	Additional query words: 3.10 3.1
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
