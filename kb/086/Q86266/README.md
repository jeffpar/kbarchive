---
layout: page
title: "Q86266: DOC: Overview Manual Documents PostAppMessage Incorrectly"
permalink: /kb/086/Q86266/
---

## Q86266: DOC: Overview Manual Documents PostAppMessage Incorrectly

{% raw %}

	Article: Q86266
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbdocfix kb16bitonly kbSDKPlatform kbWndw kbWndwMsg
	Last Modified: 11-JUN-1999
	
	3.10
	WINDOWS
	kbprg kbdocerr
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Section 1.1.4 (page 10) of the "Microsoft Windows Software Development Kit:
	Programmer's Reference, Volume 1: Overview" manual for version 3.1 documents
	that the PostAppMessage function posts a message to an application using its
	module handle. This statement is incorrect; PostAppMessage posts a message to an
	application using its task handle.
	
	MORE INFORMATION
	================
	
	Microsoft Windows makes a very important distinction between a task handle and a
	module handle. Each instance of an application has exactly one task, which
	consists of a stack, a message queue, and an execution state (CPU registers).
	However, all instances of an application share the same module, which consists
	of the application's executable code and resources.
	
	One cannot post a message to a module for two reasons:
	
	- A module does not have a message queue; therefore, it cannot process a
	  message.
	
	- Potentially, several application instances (tasks) share a module; therefore,
	  a module handle does not identify a unique task to receive the message.
	
	By posting a message to a task handle, the message is sent to only one instance
	of an application.
	
	Additional query words: 3.10 SDK docerr
	
	======================================================================
	Keywords          : kbdocfix kb16bitonly kbSDKPlatform kbWndw kbWndwMsg 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
