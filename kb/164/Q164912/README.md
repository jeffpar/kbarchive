---
layout: page
title: "Q164912: Host Account Cache Requires Configuration of Master/Backup Role"
permalink: kb/164/Q164912/
---

## Q164912: Host Account Cache Requires Configuration of Master/Backup Role

	Article: Q164912
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you install the SNA Server Host Account Cache service (SnaDatabase) on a
	Windows NT Primary Domain Controller (PDC) or Backup Domain Controller (BDC)
	server (using the SNA Server Host Security Setup program), the administrator
	must manually configure the role as master or backup.
	
	CAUSE
	=====
	
	The SNA Server Host Account Cache service relies on static configuration of its
	role.
	
	RESOLUTION
	==========
	
	An update to SNA Server 3.0 is available to correct this problem.
	
	The SNA Host Account Cache service (for example, SnaDatabase) now regularly
	checks the following two conditions:
	
	- It determines whether its role within the registry has been changed by
	  checking the following registry key:
	
	HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\SnaDatabase\ 
	     Parameters\Master: REG_DWORD:  (1 = master, 0 = backup/secondary)
	
	- If determines whether the computer on which it is running has become a
	  Windows NT PDC or has been demoted to a BDC.
	
	If either condition is true (with the registry setting taking precedence), the
	SnaDatabase service performs an internal shutdown and restarts in the new role.
	
	Also, the Host Account Cache role dialog has been removed from the Host Security
	setup script.
	
	NOTE: The Snadatabase registry entry is not valid for SNA Server version 4.0.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
