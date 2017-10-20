---
layout: page
title: "Q280139: TN3270 Print Session Connection Fails on Non-default Port"
permalink: /kb/280/Q280139/
---

## Q280139: TN3270 Print Session Connection Fails on Non-default Port

{% raw %}

	Article: Q280139
	Product(s): Microsoft SNA Server
	Version(s): 3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbDSupport _IK sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbhis2000
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The session properties page for a TN3270 Logical Unit (LU) allows the LU to be
	configured for a port other than the default of 23. If the session is configured
	for a type of "Display," the connection works as expected. If the session is
	configured for a type of "Printer," the session connects only if it is set to
	use the default port. If the TN3270 server is set for another port, a printer
	session will connect on that, and only that, configured port.
	
	MORE INFORMATION
	================
	
	This is by design.
	
	In Host Integration Server (HIS) 2000, which is the successor to Microsoft SNA
	Server, the option to choose another port is unavailable (gray) if a type of
	Printer is selected.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport _IK sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbhis2000 
	Technology        : kbAudDeveloper kbSNAServSearch kbHostIntegServ2000 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : :3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	
	=============================================================================
	

{% endraw %}
