---
layout: page
title: "Q101414: BUG: OpenFile() Fails When UNC Name Longer Than 11 Characters"
permalink: /kb/101/Q101414/
---

## Q101414: BUG: OpenFile() Fails When UNC Name Longer Than 11 Characters

{% raw %}

	Article: Q101414
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): kb16bitonlykbbuglist
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	OpenFile() successfully opens files with universal naming convention (UNC) names
	when the server portion of the name is 11 characters or shorter, but fails to
	open files when the server name is longer than 11 characters. Error code number
	2, "File not found," is placed in the nErrCode member of the OFSTRUCT structure
	passed to OpenFile.
	
	CAUSE
	=====
	
	OpenFile() validates filenames before opening them, and in the case of UNC
	names, allows server names that are 11 characters or shorter only. No attempt is
	made to open a file with a UNC name longer than 11 characters.
	
	RESOLUTION
	==========
	
	To open files with UNC names when the server name is longer than 11 characters,
	use _lopen().
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Windows SDK versions 3.1 and
	3.11. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	This is not a problem under Windows NT WOW or under Windows 95.
	
	MORE INFORMATION
	================
	
	This problem also affects the File Open common dialog box, because
	GetOpenFileName() calls OpenFile().
	
	Additional query words: no32bit 3.10
	
	======================================================================
	Keywords          : kb16bitonly kbbuglist
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310 kbWinSDK311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
