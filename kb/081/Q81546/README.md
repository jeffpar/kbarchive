---
layout: page
title: "Q81546: PRB: Segment Was Discardable Under 3.0 Notification"
permalink: /kb/081/Q81546/
---

## Q81546: PRB: Segment Was Discardable Under 3.0 Notification

{% raw %}

	Article: Q81546
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
	
	The debugging version of Microsoft Windows version 3.1 writes the following
	notification to the debugging terminal:
	
	  Segment was discardable under 3.0
	
	CAUSE
	=====
	
	One or more code segments of a dynamic-link library (DLL) are marked MOVEABLE
	and are not marked DISCARDABLE.
	
	RESOLUTION
	==========
	
	Modify the module definition (.DEF) file for the DLL to mark all MOVEABLE code
	segments as DISCARDABLE.
	
	MORE INFORMATION
	================
	
	Under Windows version 3.0, MOVEABLE code segments in a DLL are DISCARDABLE by
	default. This behavior changes under Windows 3.1; segments must be marked
	DISCARDABLE to be discarded. The debug notification highlights the change in
	behavior between the two versions of Windows.
	
	Additional query words: 3.10 no32bit
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
