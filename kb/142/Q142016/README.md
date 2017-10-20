---
layout: page
title: "Q142016: BUG: System Receives Permissions When No Permissions Specified"
permalink: /kb/142/Q142016/
---

## Q142016: BUG: System Receives Permissions When No Permissions Specified

{% raw %}

	Article: Q142016
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you copy files into an NTFS directory that has "Access Not Specified"
	chosen for ALL file-level permissions for ALL users (through "Special File
	Access..." for the Directory permissions), the expected behavior is that only
	the file owner should have file permission. However, both the owner and System
	are given full-control. This happens even though System has no permissions at
	the directory level.
	
	To see this behavior, no one can have any file permissions in the directory. If
	anyone has a single permission for the file, then only those permissions are
	applied to the file. This is expected behavior, and it seems reasonable that if
	no one has any permissions to the file, then none should be given.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5 and
	3.51. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	

{% endraw %}
