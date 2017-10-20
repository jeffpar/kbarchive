---
layout: page
title: "Q264506: Documentation Error in Install.doc File in Services for UNIX 2.0"
permalink: /kb/264/Q264506/
---

## Q264506: Documentation Error in Install.doc File in Services for UNIX 2.0

{% raw %}

	Article: Q264506
	Product(s): Microsoft Windows NT
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Services for UNIX, version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes a documentation error in the Install.doc file included
	with Services for UNIX 2.0.
	
	MORE INFORMATION
	================
	
	The following incorrect statement is displayed in the Install.doc file:
	
	  Password Synchronization must be installed on a Windows domain controller.
	
	This text is incorrect and should read as follows:
	
	  For domain passwords, password synchronization must be installed on Windows
	  domain controllers. Otherwise, it will synchronize passwords of local users.
	
	You can use Password Synchronization to synchronize either domain or local
	passwords. If you want to synchronize passwords for domain accounts, install
	Password Synchronization on all domain controllers. However, if you want to
	synchronize only a single local database, you only need to install Password
	Synchronization on the single authorizing Windows NT-based server.
	
	Additional query words: sfu solar coaster solarcoaster
	
	======================================================================
	Keywords          :  
	Technology        : kbWinServiceUNIX200 kbWinServiceUNIXSearch
	Version           : winnt:
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
