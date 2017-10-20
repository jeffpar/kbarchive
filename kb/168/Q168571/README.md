---
layout: page
title: "Q168571: Performance Monitor Logs are Limited to 2.1 GB of Data"
permalink: /kb/168/Q168571/
---

## Q168571: Performance Monitor Logs are Limited to 2.1 GB of Data

{% raw %}

	Article: Q168571
	Product(s): Microsoft Windows NT
	Version(s): ; winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Although you create a log file using the Windows NT Performance Monitor utility,
	the maximum size that the log file can grow to is 2,147,483,648 bytes. When the
	size of a Performance Monitor log reaches this 2.1 gigabyte (GB) limitation, the
	file size counter begins to count down backwards placing a negative sign in
	front of the number of bytes. Also, the log file is corrupted after it reaches
	that point.
	
	CAUSE
	=====
	
	The Windows NT Performance Monitor utility is not designed to collect more than
	2.1 GB of data in a log file.
	
	RESOLUTION
	==========
	
	For a more concise log file containing only certain counters that you specify,
	use a utility in the "Windows NT 4.0 Resource Kit" called Performance Data
	Logger.
	
	In Windows 2000, the Performance Monitor has a 1 GB limitation and stops adding
	information to the log file when it reaches the limit.
	
	For additional information about the log file limit in Windows 2000, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q256929 Windows 2000 System Monitor Logs Have a 1-GB Limit
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0.
	
	Additional query words: perfmon prodnt
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : :; winnt:3.5,3.51,4.0
	Hardware          : ALPHA PPC x86
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
