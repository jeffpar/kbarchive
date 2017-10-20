---
layout: page
title: "Q198397: Dr. Watson Does Not Seem to Trap GP Faults"
permalink: /kb/198/Q198397/
---

## Q198397: Dr. Watson Does Not Seem to Trap GP Faults

{% raw %}

	Article: Q198397
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbtool osr2 win95
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 OEM Service Release, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a general protection (GP) fault occurs, the Dr. Watson program
	(Drwatson.exe) does not display any indication that the GP fault has occurred,
	even though Dr. Watson is running.
	
	CAUSE
	=====
	
	The version of Dr. Watson included with Windows 95 OEM Service Release 2 does
	not display any indication that a GP fault has occurred. Instead, it logs the
	fault information in a file named Faultlog.txt. This file is stored in the
	Windows folder and is appended each time a GP fault occurs.
	
	STATUS
	======
	
	This behavior is by design.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool osr2 win95 
	Technology        : kbWin95search kbOPKSearch
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
