---
layout: page
title: "Q195669: DNS: System Error 13 When Starting DNS Service"
permalink: /kb/195/Q195669/
---

## Q195669: DNS: System Error 13 When Starting DNS Service

{% raw %}

	Article: Q195669
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After applying Service Pack 4 for Windows NT, your DNS service may fail to start
	with the following error:
	
	  System error 13 has occurred. The data is invalid.
	
	The following events will be logged in the System Event Log:
	
	  Event ID: 7023
	  Description:
	  The Microsoft DNS server service terminated with the following error:
	  The data is invalid.
	
	  Event ID: 1501
	  Description:
	  DNS server could not parse database file <file name> for Zone <Zone
	  name>.
	
	  Event ID: 1503
	  Description:
	  DNS server could not parse the database file <file name> line <line
	  number>.
	
	CAUSE
	=====
	
	This problem is because there is an invalid HINFO record in the zone file.
	
	RESOLUTION
	==========
	
	To resolve this problem, correct the HINFO record.
	
	MORE INFORMATION
	================
	
	RFC 1034 stated that an HINFO record requires two strings.
	
	Example of Invalid HINFO Record:
	
	  Test     IN      HINFO   "WWW Server"
	
	Example of Valid HINFO Record:
	
	  Test     IN      HINFO   "WWW Server"   "Customer Sites"
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
