---
layout: page
title: "Q67676: DOCERR: Doc Errors for DeferWindowPos and SetWindowPos"
permalink: /kb/067/Q67676/
---

## Q67676: DOCERR: Doc Errors for DeferWindowPos and SetWindowPos

{% raw %}

	Article: Q67676
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The "Microsoft Windows Software Development Kit Reference Volume 1" for the
	Windows SDK version 3.0 (pages 4-80 and 4-418) and the "Microsoft Windows
	Software Development Kit Programmer's Reference, Volume 2: Functions" for the
	Windows SDK version 3.1 (page 204) incorrectly document the DeferWindowPos() and
	SetWindowPos() functions. The text explanation for the flags of these functions
	should be corrected to read as follows:
	
	  The flags parameter specifies the 16-bit value that affect the size and
	  position of the window. This parameter can be a combination of the following
	  8 values which can be combined by using the bitwise OR operator.
	
	Additional query words: 3.00 3.10 docerr
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
