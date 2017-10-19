---
layout: page
title: "Q150048: Syscon Changes Maximum Password Age on FPNW Server"
permalink: /kb/150/Q150048/
---

## Q150048: Syscon Changes Maximum Password Age on FPNW Server

	Article: Q150048
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 30-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft File and Print Services for NetWare version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you use the Syscon utility to access a Windows NT server running File and
	Print Manager for NetWare (FPNW), and then access Supervisor options and view
	the default Account Balance / Restrictions, the maximum password age of User
	Manager's account policy will change from Password Never Expires to Expires in
	40 Days.
	
	CAUSE
	=====
	
	There is a code problem with Fpnw.dll.
	
	RESOLUTION
	==========
	
	Fpnw.dll has been modified to correct this situation.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in File and Print Services for
	NetWare version 3.51. This problem was corrected in the latest Windows NT 3.51
	U.S. Service Pack. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt gsnw csnw fpnw
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbServicesNetwareSearch kbFPNW351
	Version           : winnt:3.51
	
	=============================================================================
	
