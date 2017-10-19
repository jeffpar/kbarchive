---
layout: page
title: "Q134906: Changing Domains in SNA Admin Gives Wrong Status Information"
permalink: /kb/134/Q134906/
---

## Q134906: Changing Domains in SNA Admin Gives Wrong Status Information

	Article: Q134906
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.1,2.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.1, 2.11, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The SNA Server Admin program allows an administrator to manage an entire domain
	(or subdomain) of SNA Servers. The administrator can switch focus to a different
	domain using the File / Select Domain option.
	
	If there are connections of the same name configured within two different SNA
	Server domains (or subdomains), SNA Admin may not display the correct connection
	and LU status information when focusing on another domain.
	
	CAUSE
	=====
	
	The SNA Server Admin program caches status information on a connection in order
	to optimize performance. However, if the administrator switches to another
	domain which happens to have a connection configured with the same name as a
	connection in the previous domain, SNA Admin does not properly retrieve the
	updated status information from the new server, causing the connection and LU
	status information to be incorrect.
	
	RESOLUTION
	==========
	
	Microsoft has updated the file SNAADMIN.EXE to correct this problem.
	
	To work around this problem, the SNA Server 2.11 Admin must be stopped and
	restarted.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna 2.10 2.11 admin hotfix
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.1,2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
