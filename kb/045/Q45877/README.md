---
layout: page
title: "Q45877: How Windows Updates the LRU (Least Recently Used) List"
permalink: /kb/045/Q45877/
---

## Q45877: How Windows Updates the LRU (Least Recently Used) List

{% raw %}

	Article: Q45877
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information describes how the LRU (Least Recently Used) list is
	updated in Windows.
	
	When a function in a code segment is called through its thunk, one instruction in
	the thunk is to update a record in the EXE header. This is done to notify
	Windows that a segment has been recently accessed. Windows updates the LRU list
	periodically according to the records. The routine that does the job searches
	for segments that have been accessed since the last time the routine was called.
	When it has been determined that the list needs to be updated, the routine
	resets its reference byte and puts it at the top of the LRU list. By default,
	the updating routine is called every four timer ticks from the INT 8 handler.
	
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
