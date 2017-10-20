---
layout: page
title: "Q104498: How OF_SHARE Modes Affect Opening Files"
permalink: /kb/104/Q104498/
---

## Q104498: How OF_SHARE Modes Affect Opening Files

{% raw %}

	Article: Q104498
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
	
	The following modes used when opening a file with OpenFile() have an effect only
	if SHARE is loaded:
	
	OF_SHARE_COMPAT (same as specifying no sharing flags, thus its name): If the file
	has not been opened in any other sharing mode, the current task may open the
	same file in OF_SHARE_COMPAT mode any number of times. If the current task
	attempts to open the file in any other sharing mode, the open will fail. If
	other tasks attempt to open the file with any sharing mode, the open will fail.
	If the file has the read-only file attribute, other tasks may open the file in
	OF_SHARE_COMPAT mode any number of times.
	
	OF_SHARE_DENY_WRITE: If the file has not been opened in any other sharing mode,
	any task may open the file any number of times in OF_SHARE_DENY WRITE.
	Attempting to open the file in any other sharing modes will fail.
	
	OF_SHARE_DENY_READ: If the file has not been opened in any other sharing mode,
	any task may open the file any number of times in OF_SHARE_DENY_READ. Attempting
	to open the file in any other sharing modes will fail.
	
	OF_SHARE_EXCLUSIVE: If the file has not been opened in any other sharing mode,
	the file will be opened. Any additional attempts to open the file in any sharing
	modes by any task will fail.
	
	OF_SHARE_DENY_NONE: If the file has not been opened in any other sharing mode,
	any task may open the file any number of times in OF_SHARE_DENY_NONE. Attempting
	to open the file in any other sharing modes will fail.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
