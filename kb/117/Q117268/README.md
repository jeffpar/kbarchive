---
layout: page
title: "Q117268: File Manager Shows Wrong File Size for Files Larger than 4 GB"
permalink: /kb/117/Q117268/
---

## Q117268: File Manager Shows Wrong File Size for Files Larger than 4 GB

{% raw %}

	Article: Q117268
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	File Manager displays incorrect file size when the size of the file is greater
	than 4 gigabytes (GB). The MS-DOS DIR command displays the correct size.
	
	
	CAUSE
	=====
	
	File Manager ignores the high DWORD for computing the file size.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT and Windows NT
	Advanced Server version 3.1. This problem was corrected in Windows NT version
	3.5.
	
	Additional query words: prodnt winfile
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1
	
	=============================================================================
	

{% endraw %}
