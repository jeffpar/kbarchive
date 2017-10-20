---
layout: page
title: "Q174482: Performance Monitor Chart View Limited to 100 Data Points"
permalink: /kb/174/Q174482/
---

## Q174482: Performance Monitor Chart View Limited to 100 Data Points

{% raw %}

	Article: Q174482
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:2000; winnt:4.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you view Performance Monitor log files in Chart Mode, the Time Window can
	be changed. As the Time Window is adjusted, the user may notice different highs
	and lows (peaks and valleys) for counters graphed on the chart. Also, notice
	that values for Last, Average, Min, Max, and Graph Time will also adjust as the
	Time Window is changed by the user.
	
	MORE INFORMATION
	================
	
	The Windows NT Workstation version 4.0 Resource Kit documents this behavior as
	normal for Performance Monitor in Chapter 10, page 327. Performance Monitor only
	takes 100 data points out of a log file and presents them in Chart View. To see
	more than 100 data points from a log file, you can export the data and create a
	chart using another application such as Microsoft Excel.
	
	Additional query words: perfmon
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro
	Version           : WINDOWS:2000; winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
