---
layout: page
title: "Q179070: Year 2000 Reverts to Year 1900 with Hal.dll File"
permalink: /kb/179/Q179070/
---

## Q179070: Year 2000 Reverts to Year 1900 with Hal.dll File

{% raw %}

	Article: Q179070
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbenv kbYear2000
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the system time and date on your computer is set to a date before January 1,
	2000 and your computer is idle during the century conversion, the century may
	revert to 1900.
	
	CAUSE
	=====
	
	This issue can occur if there are issues with the Hal.dll file.
	
	RESOLUTION
	==========
	
	To resolve this issue on a computer that is using the Microsoft version of the
	Hal.dll file, apply Service Pack 5. To resolve this issue on a computer that is
	using the Compaq version of the Hal.dll file, contact Compaq.
	
	You can download Windows NT 3.51 Service Pack 5 from the following Microsoft Web
	site:
	
	  http://www.microsoft.com.
	
	Additional query words: Year Y2K
	
	======================================================================
	Keywords          : kbenv kbYear2000 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	Hardware          : ALPHA PPC x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
