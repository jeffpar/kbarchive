---
layout: page
title: "Q120051: DNS Reverse Name Resolution Requests Are Incorrect"
permalink: /kb/120/Q120051/
---

## Q120051: DNS Reverse Name Resolution Requests Are Incorrect

{% raw %}

	Article: Q120051
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft TCP/IP-32 for Windows for Workgroups, version 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	TCP/IP-32 does not return the correct IP name when it queries the Domain Name
	Service (DNS).
	
	CAUSE
	=====
	
	TCP/IP-32 sends an improperly formatted query to the DNS.
	
	RESOLUTION
	==========
	
	Microsoft has released a new file, WINSOCK.DLL, that corrects this problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in TCP/IP-32. This problem has been
	corrected in an updated TCP/IP-32 version 3.11a. For information on the
	availability of TCP/IP-32 3.11a, see article Q122544 in the Microsoft Knowledge
	Base.
	
	Additional query words: wfw wfwg prodtcp32 1.00 3.11 3.11a tcpip
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbTCPIPSearch kbZNotKeyword3 kbTCPIP311
	
	=============================================================================
	

{% endraw %}
