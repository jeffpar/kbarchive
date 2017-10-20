---
layout: page
title: "Q248704: Open Database Connectivity Performance Slow When Tracing Enabled"
permalink: /kb/248/Q248704/
---

## Q248704: Open Database Connectivity Performance Slow When Tracing Enabled

{% raw %}

	Article: Q248704
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
	
	When you query a database using an Open Database Connectivity (ODBC) data
	source, you may experience slow performance.
	
	CAUSE
	=====
	
	This behavior can occur when ODBC tracing is enabled.
	
	RESOLUTION
	==========
	
	To resolve this behavior, stop ODBC tracing and then delete the log file.
	
	1. In Control Panel, double-click ODBC Data Sources.
	
	2. Click the Tracing tab, and then click Stop Tracing Now.
	
	3. In Windows NT Explorer, delete the log file that the Log File Path box on the
	  Tracing tab refers to.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
