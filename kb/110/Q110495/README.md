---
layout: page
title: "Q110495: Self-Extracting Files on NTFS Don't Work from Command Prompt"
permalink: /kb/110/Q110495/
---

## Q110495: Self-Extracting Files on NTFS Don't Work from Command Prompt

{% raw %}

	Article: Q110495
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kb3rdparty kbinterop
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a directory on an NTFS volume has more than eight characters, you cannot run
	any self-extracting files in that directory from a Windows NT command prompt.
	Another prompt appears, but the file never self-extracts.
	
	WORKAROUND
	==========
	
	You can run the self-extracting file by double-clicking it from File Manager.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT and Windows NT
	Advanced Server version 3.1. This problem was corrected in Windows NT version
	3.5.
	
	Additional query words: prodnt zip compressed pak arj lzh
	
	======================================================================
	Keywords          : kb3rdparty kbinterop 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1
	
	=============================================================================
	

{% endraw %}
