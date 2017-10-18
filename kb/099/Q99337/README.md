---
layout: page
title: "Q99337: PRB: Using ToAscii() in Journal Record Hooks"
permalink: kb/099/Q99337/
---

## Q99337: PRB: Using ToAscii() in Journal Record Hooks

	Article: Q99337
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbHook kbInput kbKeyIn kbOSWin2000 kbSDKWin32 kbGrpDSUser kbOSWin310
	Last Modified: 09-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a journal record hook procedure calls the ToAscii() function, dead keys are
	apparently no longer processed correctly due to a side effect.
	
	CAUSE
	=====
	
	The current implementation of ToAscii() determines whether the key that is
	currently being processed is a dead key; if yes, it collapses the next keystroke
	seen in the input stream with the dead key for Windows to display. This
	assumption is being made for Windows, which calls the ToAscii() function during
	normal processing of keystrokes. Calling ToAscii() in a journal record hook
	clears the flag that indicates the presence of a dead key; thus, the key
	combination will not be displayed correctly on the screen although it will
	appear correctly when the recorded key strokes are played back.
	
	RESOLUTION
	==========
	
	The journal record hook procedure should call the ToAscii() function twice with
	the same parameters when processing a dead key [that is, the call to ToAscii()
	returns -1]. This will reset the dead key flag internally.
	
	Note that the source code for the ToAscii() function is publicly available
	because it resides in the keyboard device driver whose source is shipped with
	the Windows Device Development Kit (DDK).
	
	Additional query words:
	
	======================================================================
	Keywords          : kbHook kbInput kbKeyIn kbOSWin2000 kbSDKWin32 kbGrpDSUser kbOSWin310 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbprb
	
	=============================================================================
	
