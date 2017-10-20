---
layout: page
title: "Q155561: WebSurfer Replaces Url.dll File"
permalink: /kb/155/Q155561/
---

## Q155561: WebSurfer Replaces Url.dll File

{% raw %}

	Article: Q155561
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install WebSurfer, you receive the following error message:
	
	  The procedure entry point ReinitializeCriticalSection could not be located in
	  the dynamic link library KERNEL32.dll.
	
	
	CAUSE
	=====
	
	The Windows NT 4.0 or Microsoft Internet Explorer 3.0 version of the Url.dll
	file has been replaced with a Windows 95 version.
	
	When you install WebSurfer, a dialog box appears warning you that the version of
	the Url.dll file that WebSurfer is attempting to replace is a newer version. If
	you choose to ignore that warning, the Windows NT 4.0 Url.dll file is replaced
	with a Windows 95 version.
	
	RESOLUTION
	==========
	
	If you are not using Internet Explorer 3.0, replace the Url.dll file with the
	version on the Windows NT 4.0 CD-ROM.
	
	If you are using Internet Explorer 3.0, reinstall Internet Explorer to replace
	the Url.dll file.
	
	MORE INFORMATION
	================
	
	WebSurfer has been tested and appears to work as expected with both the Windows
	NT 4.0 and the Internet Explorer 3.0 versions of the Url.dll file. WebSurfer
	users should make sure they are using the most current version of WebSurfer by
	contacting NetManage.
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	
	Additional query words: prodnt winnt
	
	======================================================================
	Keywords          : kb3rdparty kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	

{% endraw %}
