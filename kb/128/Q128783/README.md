---
layout: page
title: "Q128783: RAS Clients Unable to Connect to NetWare Servers"
permalink: /kb/128/Q128783/
---

## Q128783: RAS Clients Unable to Connect to NetWare Servers

{% raw %}

	Article: Q128783
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you dial into a Windows NT server or workstation with Windows NT Remote
	Access Service (RAS) clients, you are unable to connect to one or more NetWare
	servers. You receives error 53 - "the network path was not found" when trying to
	connect to or view a NetWare server's shares.
	
	CAUSE
	=====
	
	The NWSAP Agent builds and maintains the table of servers by listening to all
	SAP broadcasts (socket 452) on the network. When the RAS server service is
	installed, this table is used to satisfy SAP requests from RAS clients. If the
	NWSAP Agent receives an error (for example, a buffer overflows), the thread
	responsible for handling the SAP broadcasts and maintaining the table may
	terminate. When this happens, new entries are no longer added to the table and
	any current entries are aged and removed from the table. The default time for
	aging a SAP entry in Windows NT 3.5 is five minutes. Consequently, a new SAP
	broadcast must be seen within the timeout period for the server to always be
	available to RAS clients.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. A
	supported fix is now available, but is not fully regression-tested and should be
	applied only to systems experiencing this specific problem. Unless you are
	severely impacted by this specific problem, Microsoft recommends that you wait
	for the service pack release containing this fix. Contact Microsoft Product
	Support Services for more information.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : winnt:3.5
	
	=============================================================================
	

{% endraw %}
