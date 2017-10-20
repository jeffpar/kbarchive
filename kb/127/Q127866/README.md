---
layout: page
title: "Q127866: Cannot Change System Time In Access Using Time Statement"
permalink: /kb/127/Q127866/
---

## Q127866: Cannot Change System Time In Access Using Time Statement

{% raw %}

	Article: Q127866
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 01-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to change the system time on a computer running Windows NT,
	from within Microsoft Access 2.0 using the Time statement, the time does not get
	changed; no error message appears.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. We are
	researching this problem and will post new information here as it becomes
	available.
	
	More Information
	----------------
	
	This is by design. You cannot change the system time from an MS-DOS/WOW tool,
	although the time change is not lost. If you try to see the time in Access after
	setting the time, you see the time changed to what you asked for, but it is not
	reflected in the system.
	
	
	Additional query words: prodnt MSAccess
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : :3.5
	
	=============================================================================
	

{% endraw %}
