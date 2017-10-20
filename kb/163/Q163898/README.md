---
layout: page
title: "Q163898: Remote Control Improvement of DHCP Clients"
permalink: /kb/163/Q163898/
---

## Q163898: Remote Control Improvement of DHCP Clients

{% raw %}

	Article: Q163898
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbtshoot kbInventory smsremtshoot smsinv kbRemoteProgkbfaq kbfixlist
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	New to Systems Management Server 1.2 is the ability to do remote control over
	TCP/IP sockets. This does not require any name resolution to function properly,
	but instead uses the IP address for that client defined in the SMS database.
	
	Remote control may fail when trying to locate DHCP clients whose IP address has
	changed. Systems Management Server will fail to establish an IP socket helpdesk
	session if the SMS Database does not contain the client's correct IP address.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem has been corrected in the latest U.S. Service Pack for
	Systems Management Server version 1.2. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	Depending on how frequent the DHCP lease is, and how often the client inventory
	is taken, a situation might arise where the client gets a new IP address but the
	inventory is not updated. Remote control will then fail because it relies on the
	wrong IP address in the SMS Database.
	
	The remote client discovery process used by the viewer (sightnt.dll) has been
	changed so that it attempts to resolve the Netbios machine name to the current
	IP address (using WINS, LMHosts, DNS, etc..), and then uses the normal IP Socket
	connection with the current address rather than using the address in the SMS
	Database.
	
	Additional query words: prodsms sp2 multi-homed multihomed
	
	======================================================================
	Keywords          : kbnetwork kbtshoot kbInventory smsremtshoot smsinv kbRemoteProg kbfaq kbfixlist
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
