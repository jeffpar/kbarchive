---
layout: page
title: "Q124918: TCP/IP-32 NetBIOS over TCP/IP May Not Parse DNS Correctly"
permalink: kb/124/Q124918/
---

## Q124918: TCP/IP-32 NetBIOS over TCP/IP May Not Parse DNS Correctly

	Article: Q124918
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 3.11; WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft TCP/IP-32 for Windows for Workgroups, version 3.11 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use a domain name service (DNS) to resolve NetBIOS names, failures
	occur if the name being resolved is an alias or "CNAME."
	
	CAUSE
	=====
	
	VNBT.386 is not correctly parsing DNS responses that contain multiple answer
	sections. This can cause unexpected behavior as text in the second answer
	section may be interpreted as an IP address.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in TCP/IP-32 for Windows for
	Workgroups versions 3.11 and 3.11a. This problem was corrected in TCP/IP-32
	for Windows for Workgroups version 3.11b.
	
	TCP/IP-32 for Windows for Workgroups version 3.11b is available on the
	Windows NT 3.51 compact disc.
	
	Additional query words: 3.11 prodtcp32 wfw wfwg
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbTCPIPSearch kbWFWSearch kbZNotKeyword3 kbWFW311 kbTCPIP311
	Version           : :3.11; WINDOWS:3.11
	
	=============================================================================
	
