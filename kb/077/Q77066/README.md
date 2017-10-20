---
layout: page
title: "Q77066: PRB: Problems with Dr. Watson or with the Packager"
permalink: /kb/077/Q77066/
---

## Q77066: PRB: Problems with Dr. Watson or with the Packager

{% raw %}

	Article: Q77066
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
	
	Neither Dr. Watson nor the Packager runs correctly.
	
	CAUSE
	=====
	
	An old version of the TOOLHELP.DLL file is in the main Windows directory (by
	default, C:\WINDOWS).
	
	RESOLUTION
	==========
	
	Verify that Windows has installed TOOLHELP.DLL in the Windows system directory
	(by default, C:\WINDOWS\SYSTEM). Delete the old TOOLHELP.DLL from the Windows
	directory.
	
	Additional query words: 3.10 no32bit
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
