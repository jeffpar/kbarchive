---
layout: page
title: "Q153073: M-Node TCP/IP Clients Fail to Register All Names"
permalink: /kb/153/Q153073/
---

## Q153073: M-Node TCP/IP Clients Fail to Register All Names

{% raw %}

	Article: Q153073
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 3.11,3.11a,3.11b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft TCP/IP-32 for Windows for Workgroups, versions 3.11, 3.11a, 3.11b 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you use m-node TCP/IP-32bit Windows for Workgroups clients and your primary
	WINS server is down, TCP/IP will fail to register all names with the backup WINS
	server.
	
	CAUSE
	=====
	
	When using m-node clients with TCP/IP, it will try to register names by first
	using broadcasts. If broadcasts fail, it will try the primary WINS server, and
	if this fails, it goes to the backup WINS server.
	
	NetBIOS registration occurs during the startup of Windows for Workgroups. It
	starts sending all registration requests to the backup after the other two
	methods have failed. Because the secondary WINS server is up, it will reply to
	the Name Registration request. The Name Registration request code sees a
	response and acts accordingly. One of the things the Name Registration request
	code does is check to see where the reply came from. If it determines that the
	response came back from the backup, it will swap the primary and secondary
	addresses so that it will now go to the backup.
	
	Because it has not completed sending out all the Name Registers, it continues
	sending the next Name Register to the backup server. Because the Name
	Registration request code has swapped the backup and primary addresses, it now
	sends to the primary again, and these names fail to get registered.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft TCP/IP-32 for Windows
	for Workgroups. A fix to this problem is in development, but has not been
	regression-tested and may be destabilizing in production environments. Microsoft
	does not recommend implementing this fix at this time. Contact Microsoft Product
	Support Services for more information on the availability of this fix.
	
	Additional query words: networking
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbTCPIPSearch kbZNotKeyword3 kbTCPIP311 kbTCPIP311a kbTCPIP311b
	Version           : :3.11,3.11a,3.11b
	
	=============================================================================
	

{% endraw %}
