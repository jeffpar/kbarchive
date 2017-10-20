---
layout: page
title: "Q236411: DNS Event Log Key Does Not Work as Expected"
permalink: /kb/236/Q236411/
---

## Q236411: DNS Event Log Key Does Not Work as Expected

{% raw %}

	Article: Q236411
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT4sp6fix
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following registry key may not work as you expect:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\DNS\Parameters\EventLogLevel
	
	RESOLUTION
	==========
	
	Windows NT Server or Workstation 4.0
	------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or the
	individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/windows/servicepacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	Windows NT Server 4.0, Terminal Server Edition
	----------------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition.
	
	This problem was first corrected in Windows NT Server 4.0 Service Pack 6 and
	Windows NT Server 4.0, Terminal Server Edition Service Pack 6.
	
	MORE INFORMATION
	================
	
	Key: EventLogLevel
	Type: DWORD
	Default: NoKey (Log all events)
	Function: Determines level of logging to event log.
	
	A Domain Name System (DNS) server can generate many serious and routine events.
	An administrator can use this key to limit logging to the appropriate level. The
	value you assign specifies the value of the least serious event the DNS server
	logs, with the event types taken directly from the Microsoft Win32 Software
	Development Kit (SDK):
	
	  EVENTLOG_ERROR_TYPE: 0x0001
	  EVENTLOG_WARNING_TYPE: 0x0002
	  EVENTLOG_INFORMATION_TYPE: 0x0004
	
	Additional query words: 4.00 event log level
	
	======================================================================
	Keywords          : kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
