---
layout: page
title: "Q120574: TRACERT Does Not Return Correct IP Name"
permalink: kb/120/Q120574/
---

## Q120574: TRACERT Does Not Return Correct IP Name

	Article: Q120574
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft TCP/IP-32 for Windows for Workgroups, version 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Using the TRACERT command with Microsoft TCP/IP-32 does not return the correct
	IP name (Inverse Mapping). For example, running
	
	  tracert 130.20.7.77
	
	should result with the following output:
	
	  plato.lc.microsoft.com.20.130.IN-ADDR.ARPA
	
	CAUSE
	=====
	
	TCP/IP-32 does not send a properly formatted query to a Domain Name Server
	(DNS).
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft TCP/IP-32
	protocol. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	Reference(s):
	
	Internetworking with TCP/IP, Vol. I, by Douglas E. Comer, page 239, section 20.17
	and 20.18 (information on Inverse Mappings and Pointer Queries).
	
	Additional query words: prodtcp32 wfw wfwg WFWG DNS
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbTCPIPSearch kbZNotKeyword3 kbTCPIP311
	Version           : 3.11
	
	=============================================================================
	
