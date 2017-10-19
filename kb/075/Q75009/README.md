---
layout: page
title: "Q75009: Using Call_Priority_VM_Event"
permalink: /kb/075/Q75009/
---

## Q75009: Using Call_Priority_VM_Event

	Article: Q75009
	Product(s): Microsoft Windows Device Driver Kit
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Device Development Kit (DDK) for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Call_Priority_VM_Event is one of the most valuable virtual device (VxD) calls
	available. When an application is at a point where the state of the system keeps
	the VxD from completing, a call to Call_Priority_VM_Event causes the process to
	yield until the system is in such a state that the VxD can continue.
	
	Under most circumstances, using this function will cause events to be processed
	in a specific manner. Note, however, that any number of events can occur between
	the call to Call_Priority_VM_Event and the call to the event handler specified
	as a parameter in the Call_Priority_VM_Event call.
	
	If a VxD intermittently has problems, they may be caused by the code assuming
	that the handler is called before certain other actions occur. Also note that a
	VxD may be re-entered before the handler is called, causing another call to
	Call_Priority_VM_Event before the first handler is called.
	
	If two or more handlers are set up at once, they will usually be called in
	last-in, first-out (LIFO) order; however, this is not guaranteed. If
	Call_Priority_VM_Event is used, VxD code must be written to be completely
	re-entrant and it must allow the handlers to be called in any order.
	
	Additional query words: 3.00 VxD Call_Priority_VM_Event reentrant
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWinDDKSearch kbWinDDK300
	Version           : :3.0
	
	=============================================================================
	
