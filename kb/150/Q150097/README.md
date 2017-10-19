---
layout: page
title: "Q150097: cc:Mail Clients Lock Up Through FPNW"
permalink: /kb/150/Q150097/
---

## Q150097: cc:Mail Clients Lock Up Through FPNW

	Article: Q150097
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 22-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft File and Print Services for NetWare version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When several OS/2 computers are simultaneously running the router software for
	cc:Mail in conjunction with one File and Print Services for NetWare (FPNW)
	server, the server can cause mail to slow almost to a standstill. You may notice
	file locks being kept open for long periods (more than 15 seconds).
	
	CAUSE
	=====
	
	There is a hard-coded time-out in the FPNW software that causes the delay on the
	file lock.
	
	RESOLUTION
	==========
	
	To resolve this problem, install the fix mentioned below.
	
	The time-out has been changed so that the file lock will be released in a manner
	allowing mail to flow normally.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in File and Print Services for
	NetWare version 3.51. This problem was corrected in the latest U.S. Service Pack
	for Windows NT Workstation or Server version 3.51. For information on obtaining
	this update, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt ntinterop ntnetserv
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbServicesNetwareSearch kbFPNW351
	Version           : winnt:3.51
	
	=============================================================================
	
