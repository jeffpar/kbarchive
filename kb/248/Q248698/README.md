---
layout: page
title: "Q248698: MPRSHUT.EXE - DLL Initialization Message During Shutdown"
permalink: /kb/248/Q248698/
---

## Q248698: MPRSHUT.EXE - DLL Initialization Message During Shutdown

{% raw %}

	Article: Q248698
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are shutting down Microsoft Windows NT 4.0, the following error message
	may appear:
	
	  MPRSHUT.EXE - DLL initialization hung
	  Initialization of the dynamic link library c:\winnt\system32\kernel32.dll
	  failed
	
	The system then shuts down normally.
	
	CAUSE
	=====
	
	This behavior can occur when the RSA ACE software by Security Dynamics is in
	use. The ACE readme files document this error as a 'non-injurious' error.
	
	RESOLUTION
	==========
	
	To work around this behavior, shut down the ACE software before you shut down
	the computer.
	
	MORE INFORMATION
	================
	
	For information about how to contact Security Dynamics, click the appropriate
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
