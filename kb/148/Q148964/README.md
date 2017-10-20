---
layout: page
title: "Q148964: Windows 95 Running Server Tools Sets Incorrect Permissions"
permalink: /kb/148/Q148964/
---

## Q148964: Windows 95 Running Server Tools Sets Incorrect Permissions

{% raw %}

	Article: Q148964
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 95 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you run Server Tools on a Windows 95 client and you create a new user for
	the domain with a home directory on an NT file system (NTFS) volume, the default
	permissions are incorrect. The default permissions are "EVERYONE FULL CONTROL."
	The permissions should be "<username> FULL CONTROL," where the user name
	is the name of the user that was created.
	
	RESOLUTION
	==========
	
	Change the permissions manually to "<username> FULL CONTROL," or create
	the user account from a Windows NT Server or Workstation running Server Tools.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server versions 3.5,
	3.51, and 4.0. We are researching this problem and will post new information
	here as it becomes available.
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbWin95search kbZNotKeyword3
	Version           : 3.5 3.51 95 4.0
	
	=============================================================================
	

{% endraw %}
