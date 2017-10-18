---
layout: page
title: "Q82168: PRB: &quot;Orphan&quot; Metafiles Not Tracked by Debugging Windows"
permalink: kb/082/Q82168/
---

## Q82168: PRB: &quot;Orphan&quot; Metafiles Not Tracked by Debugging Windows

	Article: Q82168
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If an application fails to delete a GDI object (for example, a pen) before it
	shuts down, the debugging version of Windows will write a warning message to the
	debug terminal. However, the debugging version of Windows does not produce a
	warning message if an application creates a metafile and does not delete it
	before termination.
	
	This behavior does not unduly constrain memory because metafiles are stored in
	global memory and are freed automatically at application termination.
	
	Additional query words: 3.10 no32bit
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
