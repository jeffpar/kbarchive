---
layout: page
title: "Q125437: TCP/IP-32 Winsock calls return WSAEINPROGRESS"
permalink: /kb/125/Q125437/
---

## Q125437: TCP/IP-32 Winsock calls return WSAEINPROGRESS

	Article: Q125437
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): ; WINDOWS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft TCP/IP-32 for Windows for Workgroups 
	- Microsoft Windows for Workgroups 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Windows Sockets applications running on Microsoft TCP/IP-32 may receive error
	10036 (WSAEINPROGRESS).
	
	This problem occurs when applications process a large number of Windows Sockets
	calls.
	
	CAUSE
	=====
	
	There is a timing problem in the Microsoft TCP/IP-32 version 3.11 and 3.11a
	Windows Sockets implementation.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in TCP/IP-32 for Windows for
	Workgroups versions 3.11 and 3.11a. This problem was corrected in TCP/IP-32 for
	Windows for Workgroups version 3.11b.
	
	TCP/IP-32 for Windows for Workgroups version 3.11b is available on the Windows NT
	3.51 compact disc.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbTCPIPSearch kbWFWSearch kbZNotKeyword3
	Version           : :; WINDOWS:
	
	=============================================================================
	
