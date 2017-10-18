---
layout: page
title: "Q87537: PRB: midiInOpen Fails in MIDIMON Sample Application"
permalink: kb/087/Q87537/
---

## Q87537: PRB: midiInOpen Fails in MIDIMON Sample Application

	Article: Q87537
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the MIDIMON sample application provided with version 3.1 of the Microsoft
	Windows Software Development Kit (SDK), the call to the midiInOpen() function
	fails and returns error code 11.
	
	CAUSE
	=====
	
	The midiInputHandler() function and its associated data are in movable,
	discardable segments.
	
	RESOLUTION
	==========
	
	Modify the CODE and DATA segments in the CALLBACK.DEF module definition file to
	read as follows:
	
	  CODE FIXED PRELOAD
	  DATA FIXED SINGLE PRELOAD
	
	Additional query words: 3.10 midi midimon
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
