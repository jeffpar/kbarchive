---
layout: page
title: "Q152270: CreateProcessAsUser() Fails After Applying Service Pack 3"
permalink: /kb/152/Q152270/
---

## Q152270: CreateProcessAsUser() Fails After Applying Service Pack 3

{% raw %}

	Article: Q152270
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Applications that use the CreateProcessAsUser() Win 32 function to start a new
	console application in a different user account's security context may receive
	the following error:
	
	  Initialization of the dynamic link library
	  d:\winnt35\system32\kernel32.dll failed.
	
	  The process is terminating abnormally.
	
	CAUSE
	=====
	
	The new console application fails to load Kernel32.dll because it fails to
	allocate the new console window requested by the starting application The
	console window allocation fails because the starting application references a
	virtual address descriptor (VAD) owned by the parent application causing a
	conflicting address error.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51 Service
	Packs 3 and 4. This problem was corrected in the latest Windows NT 3.51 U.S.
	Service Pack. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: 3.51 prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	

{% endraw %}
