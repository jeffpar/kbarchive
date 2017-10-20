---
layout: page
title: "Q239079: DNS INT Zone File Identified as Reverse Instead of Forward"
permalink: /kb/239/Q239079/
---

## Q239079: DNS INT Zone File Identified as Reverse Instead of Forward

{% raw %}

	Article: Q239079
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP4,4.0 SP5
	Operating System(s): 
	Keyword(s): kbWinNT4sp6fix
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Server versions 4.0 SP4, 4.0 SP5 
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0 SP4, 4.0 SP5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you update a DNS server with INT zone file(s) containing WINS Lookup
	record(s) in Windows NT Server 4.0 Service Pack 4, the DNS service does not
	start and the System Event log contains the following entries:
	
	  Event ID 1501 "DNS Server could not parse database file %1 for zone %2.
	  Event ID 1503 "DNS Server could not parse database file %1 line %2.
	
	You receive the following error messages if you start the DNS Service from an
	MS-DOS command prompt:
	
	  The Microsoft DNS Server service is starting.
	  The Microsoft DNS Server service could not be started.
	  A system error has occurred.
	  System error 13 has occurred.
	  The data is invalid.
	
	CAUSE
	=====
	
	This problem occurs if the zone file does not contain WINS Lookup records. The
	DNS service may start, but the zone is treated as Reverse. As a result, name
	resolution of hosts contained in the zone do not resolve and it may not be
	possible to add new records to the zone file using the DNS user interface. This
	is because the INT zone file was not recognized as Forward when the DNS service
	was started.
	
	RESOLUTION
	==========
	
	Windows NT Server or Workstation 4.0
	------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or the
	individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/Windows/ServicePacks/
	
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
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp5 kbWinNTSEnt400sp4 kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0 SP4,4.0 SP5
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
