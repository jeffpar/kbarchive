---
layout: page
title: "Q257372: XADM: Exchange Server 5.5 Post-SP3 Directory Fixes Available"
permalink: /kb/257/Q257372/
---

## Q257372: XADM: Exchange Server 5.5 Post-SP3 Directory Fixes Available

{% raw %}

	Article: Q257372
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55kbfixlist
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article lists the article numbers for Exchange Server version 5.5 directory
	bugs that were fixed after Exchange Server 5.5 Service Pack 3 (SP3) was
	released. For information about how to obtain the fixes listed in this article,
	click the article number next to the title of the article about that issue to
	view the article in the Microsoft Knowledge Base.
	
	NOTE: Exchange Server fixes for a particular component are cumulative and contain
	all of the previous fixes for that component. Fixes with a particular version
	number contain all of the fixes that have an earlier version number.
	
	MORE INFORMATION
	================
	
	Directory fixes include the following files:
	
	+--------------------------------+
	| File name    | Current version | 
	+--------------------------------+
	| Dracheck.dll | 5.5.2652.41     | 
	+--------------------------------+
	| Dsamain.exe  | 5.5.2652.73     | 
	+--------------------------------+
	| Libxds.dll   | 5.5.2652.37     | 
	+--------------------------------+
	
	
	Fixes Released on July 21, 2000
	-------------------------------
	
	The following files are modified:
	
	- Dracheck.dll added and incremented to version 5.5.2652.41
	- Dsamain.exe incremented to version 5.5.2652.73
	- Libxds.dll added and incremented to version 5.5.2652.37
	
	The following fixes are included:
	
	  Q248398 XADM: Restricting Permission to Address Book Views
	
	  Q262899 XADM: Knowledge Consistency Checker Generates Notifications for Server
	  Performing Replication Within the Site Based on the Directory Replication
	  Schedule
	
	  Q263069 XADM: Dr. Watson in Exchange Server Information Store
	
	  Q267425 XADM: Hiding Address Book Views from Exchange Server Administrator and
	  Clients During Address Book View Storms
	
	Fixes Released on March 15, 2000
	--------------------------------
	
	NOTE: The Dracheck.dll and Libxds.dll files are not included with these fixes.
	These files are added later.
	
	The following files are modified:
	
	- Dsamain.exe incremented to version 5.5.2651.83
	
	
	The following fixes are included:
	
	  Q241186 XADM: Directory Replication Bridgehead Servers Generate Notifications
	  for Downstream Servers Even If There Are No Changes
	
	
	  Q246567 XADM: LDAP Searches on Home-MDB in Multiserver Site Are Not Returned
	  Properly
	
	  Q247222 XADM: Cannot Create Newsfeed on Windows 2000 Server Computer
	
	  Q255673 XADM: Unwanted Replication of Address Book Views
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 kbfixlist
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
