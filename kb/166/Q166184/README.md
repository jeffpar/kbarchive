---
layout: page
title: "Q166184: Event ID 3870: Not a Valid Computer Name"
permalink: /kb/166/Q166184/
---

## Q166184: Event ID 3870: Not a Valid Computer Name

{% raw %}

	Article: Q166184
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you restart a computer running Windows NT, the following error occurs:
	
	  Event ID: 3870
	  Source: workstation
	  <computer name> is not a valid computer name.
	
	CAUSE
	=====
	
	A possible static entry in the WINS database is the cause of this problem.
	
	RESOLUTION
	==========
	
	To resolve this problem, remove the static entry from the WINS database.
	
	MORE INFORMATION
	================
	
	If the WINS server is multi-homed, check for split registration. If the WINS
	server has split registration, configure the Primary and Secondary WINS entries
	on both network adapters with the IP address of only one of the adapters.
	
	The Event ID: 3870 will usually occur first. It causes a cascade of failures that
	may include the following error messages:
	
	  Event ID: 7023
	  Source: Service Control Manager Error
	  The Workstation service terminated with the following error:
	  A duplicate name exists on the network.
	
	  Event ID: 7001
	  Source: Service Control Manager
	  The Messenger service depends on the Workstation service which failed to start
	  because of the following error:
	  A duplicate name exists on the network.
	
	  Event ID: 7002
	  Source: Service Control Manager
	  The TCP/IP NetBIOS Helper service depends on the NetworkProvider group and no
	  member of this group started.
	
	  Event ID: 7001
	  Source: Service Control Manager Error
	  The Computer Browser service depends on the Workstation service, which failed
	  to start because of the following error:
	  A duplicate name exists on the network.
	
	  Event ID: 7001
	  Source: Service Control Manager Error
	  The Alerter service depends on the Workstation service which failed to start
	  because of the following error:
	  A duplicate name exists on the network.
	
	  Event ID: 3870
	  Source: Workstation
	  <computer name> is not a valid computer name.
	
	
	Additional query words: duplicate ras server launch boot start mappings Entries
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbNTTermServ400 kbNTTermServSearch kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
