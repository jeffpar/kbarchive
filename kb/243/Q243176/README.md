---
layout: page
title: "Q243176: Foreign Performance Counters Do Not Load"
permalink: /kb/243/Q243176/
---

## Q243176: Foreign Performance Counters Do Not Load

{% raw %}

	Article: Q243176
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbKernBase kbOSWin2000 kbPerfMon kbDSupport kbGrpDSKernBase
	Last Modified: 24-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Performance Monitor in Windows 2000 is used to select performance
	objects and counters of a foreign machine, instead of selecting and displaying
	the counters, the following error message is displayed:
	
	  Machine Not Found
	
	CAUSE
	=====
	
	The Performance Monitor cannot select counters through a foreign counter
	performance extension because of a problem in the Performance Data Helper,
	Pdh.dll, library.
	
	RESOLUTION
	==========
	
	If it is necessary to view performance counters from a foreign system on Windows
	2000, use the Performance Monitor, Perfmon.exe, from Windows NT 4.0, which is
	available in the Windows 2000 resource kit.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Foreign counters are those that are exposed from a non-Windows NT system (for
	example, Unix) to be viewed through the Windows NT or Windows 2000 Performance
	Monitor. A third party supplies the foreign counter performance monitor
	extension that works similarly to the regular performance monitor extension. The
	foreign performance monitor extension is loaded when a machine name or IP
	address of a machine not running Windows NT or Windows 2000 is selected in
	Performance Monitor.
	
	The new Windows 2000 Performance Monitor uses Pdh.dll to access performance
	counter data. The Pdh.dll file cannot access counters through a foreign counter
	extension.
	
	REFERENCES
	==========
	
	Please see the Platform SDK documentation; Base Services; Performance
	Monitoring; Performance Data; Adding Performance Counters
	
	Additional query words:
	
	======================================================================
	Keywords          : kbKernBase kbOSWin2000 kbPerfMon kbDSupport kbGrpDSKernBase 
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinAdvServSearch
	Version           : WINDOWS:
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
