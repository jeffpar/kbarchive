---
layout: page
title: "Q249855: Secondary DNS Behavior Does Not Match Configured Options"
permalink: /kb/249/Q249855/
---

## Q249855: Secondary DNS Behavior Does Not Match Configured Options

	Article: Q249855
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Operating System(s): 
	Keyword(s): kbenv kbWinNT400PreSP7Fix
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Microsoft DNS-based server is configured as a secondary for a given zone,
	it may query the primary for its SOA record every two minutes rather than the
	period configured in the Refresh Interval or Retry Interval setting. This
	behavior takes place in the following circumstances:
	
	The Microsoft DNS-based server is configured as a secondary for a given zone. At
	least one successful zone transfer has taken place from the primary to the
	secondary. After that time, if the primary DNS server becomes unavailable to
	respond to the secondary, the secondary DNS server queries the primary at an
	interval of approximately every 120 seconds.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post more information here in the
	Microsoft Knowledge Base when it becomes available.
	
	Additional query words: zone transfer
	
	======================================================================
	Keywords          : kbenv kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp6 kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400sp2 kbWinNTS400sp1 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Issue type        : kbprb
	
	=============================================================================
	
