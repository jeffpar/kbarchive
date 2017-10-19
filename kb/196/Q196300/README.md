---
layout: page
title: "Q196300: Failure Accessing PerfMon Counters from ActiveX Component"
permalink: /kb/196/Q196300/
---

## Q196300: Failure Accessing PerfMon Counters from ActiveX Component

	Article: Q196300
	Product(s): Internet Information Server
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you access Performance Monitor counters from the HTTP service or FTP
	service from an ActiveX component, the application may stop responding or there
	is no data filled out in the Performance Monitor data blocks (the data after the
	Performance Monitor header is all zeros).
	
	CAUSE
	=====
	
	The FTP service and HTTP service performance object extension fails to serve
	Performance Monitor counter data when an OLE Automation Server (out of process)
	calls RegQueryValueEx(HKEY_PERFORMANCE_DATA).
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server
	version 4.0. This problem was first corrected in Windows NT 4.0 Service Pack 4.0
	and Windows NT Server 4.0, Terminal Server Edition Service Pack 4.
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch kbiisSearch kbiis400
	Version           : WINNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
