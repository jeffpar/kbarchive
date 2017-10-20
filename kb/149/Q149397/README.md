---
layout: page
title: "Q149397: Cacls.exe May Terminate Prematurely"
permalink: /kb/149/Q149397/
---

## Q149397: Cacls.exe May Terminate Prematurely

{% raw %}

	Article: Q149397
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Cacls.exe terminates whenever it tries to access a file that has been opened by
	another process. When this happens, the screen displays the following message:
	
	  The process cannot access the file because it is being used by another
	  process
	
	This problem makes it difficult to automate permission settings on a running
	system.
	
	CAUSE
	=====
	
	The released version of Cacls.exe was written to terminate when this error
	occurs.
	
	RESOLUTION
	==========
	
	To resolve this problem on Windows NT 3.51 Workstation or Server, install
	Service Pack 5 or later or upgrade to Windows NT Workstation and Server version
	4.0.
	
	Apply NTFS permissions manually.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in Windows NT 3.51 Service Pack 5 and Windows NT
	Workstation or Server version 4.0.
	
	
	
	Additional query words: prodnt cacls cacls.exe abort
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	

{% endraw %}
