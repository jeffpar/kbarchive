---
layout: page
title: "Q129127: File Transfers Using TCP/IP-32 Take a Long Time"
permalink: /kb/129/Q129127/
---

## Q129127: File Transfers Using TCP/IP-32 Take a Long Time

	Article: Q129127
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 3.11a; WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft TCP/IP-32 for Windows for Workgroups, version 3.11a 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	File transfers to a computer running Windows for Workgroups 3.11 and TCP/IP- 32
	may take a long time.
	
	CAUSE
	=====
	
	This problem can occur when the TCP Receive window size shrinks down to 1460
	bytes, which is equal to the TCP segment size. It takes the Windows for
	Workgroups 3.11 client approximately 200 milliseconds to send an acknowledgment
	(ACK).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft TCP/IP-32 for Windows
	for Workgroups, version 3.11a. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodtcp32 wfw wfwg
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbTCPIPSearch kbWFWSearch kbZNotKeyword3 kbWFW311 kbTCPIP311a
	Version           : :3.11a; WINDOWS:3.11
	
	=============================================================================
	
