---
layout: page
title: "Q77255: INFO: wsprintf() Buffer Limit in Windows"
permalink: /kb/077/Q77255/
---

## Q77255: INFO: wsprintf() Buffer Limit in Windows

{% raw %}

	Article: Q77255
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1,95; winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbOSWinNT310 kbOSWinNT350 kbOSWinNT351 kbOSWinNT400 kbOSWin95 kbSDKWin16
	Last Modified: 11-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	- Microsoft Win32 Application Programming Interface (API), used with:
	   - Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	   - Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The wsprintf(lpOutput, lpFormat [, argument] ...) and wvsprintf() functions
	format and store a series of characters and values in a buffer specified by the
	first parameter, lpOutput. This buffer is limited to 1K (1024 bytes); in other
	words, the largest buffer that wsprintf can use is 1K.
	
	If an application tries to use a buffer larger than 1K, the string will be
	truncated automatically to a length of 1K.
	
	
	Additional query words: 3.00 3.10 3.50 4.00 win16sdk
	
	======================================================================
	Keywords          : kbOSWinNT310 kbOSWinNT350 kbOSWinNT351 kbOSWinNT400 kbOSWin95 kbSDKWin16 
	Technology        : kbAudDeveloper kbSDKSearch kbWin32sSearch kbWin32API kbWinSDKSearch
	Version           : WINDOWS:3.1,95; winnt:3.5,3.51,4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
