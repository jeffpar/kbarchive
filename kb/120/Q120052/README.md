---
layout: page
title: "Q120052: NBT Query Can Hang Computer or Drop Back to MS-DOS"
permalink: /kb/120/Q120052/
---

## Q120052: NBT Query Can Hang Computer or Drop Back to MS-DOS

{% raw %}

	Article: Q120052
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft TCP/IP-32 for Windows for Workgroups, version 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Your computer running Windows for Workgroups version 3.11 with TCP/IP-32 network
	protocol stops responding (hangs) or drops back to MS-DOS when the 32-bit
	NetBIOS over TCP/IP (NBT) makes a query to the Domain Name Service (DNS).
	
	CAUSE
	=====
	
	The buffer allocated for the DNS name query in 32-bit NBT is one byte too short.
	The code that creates the DNS name query does not count the length byte of the
	domain name and allocates a buffer that is one byte short.
	
	RESOLUTION
	==========
	
	Microsoft has released a new file, VNBT.386, that corrects this problem.
	
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
	Version           : :3.11
	
	=============================================================================
	

{% endraw %}
