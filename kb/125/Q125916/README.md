---
layout: page
title: "Q125916: NetBIOS CALL to a Group Name Fails with TCP/IP-32"
permalink: /kb/125/Q125916/
---

## Q125916: NetBIOS CALL to a Group Name Fails with TCP/IP-32

	Article: Q125916
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 3.11; WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft TCP/IP-32 for Windows for Workgroups, version 3.11 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After converting a Windows for Workgroups workstation from TCP/IP-16 to
	TCP/IP-32 for Windows for Workgroups, some NetBIOS based client-server and
	peer-to-peer applications may stop working. Error messages indicate that the
	server or partner can not be found on the network.
	
	CAUSE
	=====
	
	NetBIOS applications use names to identify themselves and to address their
	partners and servers. To establish a connection with a partner, the application
	makes a NetBIOS CALL request to a particular name, and the protocol resolves the
	name to a specific machine. When resolving NetBIOS names for CALL requests,
	VNBT.386 ignores responses from group names.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in TCP/IP-32 for Windows for
	Workgroups version 3.11. A fix to this problem is in development, but has not
	been regression-tested and may be destabilizing in production environments.
	Microsoft does not recommend implementing this fix at this time. Contact
	Microsoft Product Support Services for more information on the availability of
	this fix.
	
	
	Additional query words: 3.11 prodtcp32
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbTCPIPSearch kbWFWSearch kbZNotKeyword3 kbWFW311 kbTCPIP311
	Version           : :3.11; WINDOWS:3.11
	
	=============================================================================
	
