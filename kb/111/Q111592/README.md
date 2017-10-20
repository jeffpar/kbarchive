---
layout: page
title: "Q111592: BUG: DeleteObject() Generates Debug Errors in WEP"
permalink: /kb/111/Q111592/
---

## Q111592: BUG: DeleteObject() Generates Debug Errors in WEP

{% raw %}

	Article: Q111592
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Freeing GDI objects in the Windows Exit Procedure (WEP) of a dynamic-link
	library (DLL) will generate errors from the debug version of Windows 3.1. The
	errors are incorrectly generated if the application has an implicit link to the
	DLL and the application is terminating.
	
	CAUSE
	=====
	
	The debug version of Windows reports errors that a task has exited but has not
	freed any GDI resources allocated by the task. Windows calls the WEP of an
	implicitly linked DLL when the DLL is unloaded from memory but after the
	application using the DLL has already exited. Debug Windows interprets this
	situation as an error and gives debug messages in DBWIN or the debug terminal.
	
	RESOLUTION
	==========
	
	Although debug Windows reports the GDI objects are not freed, The WEP is still
	called and the objects are still freed regardless of the messages displayed by
	debug Windows. There is no need to call DeleteObject(). These messages can be
	ignored.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in Windows version 3.1. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: buglist3.10 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
