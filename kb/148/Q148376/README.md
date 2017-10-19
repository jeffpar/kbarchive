---
layout: page
title: "Q148376: NetSoft NS/Router Not Working After SNA Server 2.11 SP1"
permalink: /kb/148/Q148376/
---

## Q148376: NetSoft NS/Router Not Working After SNA Server 2.11 SP1

	Article: Q148376
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11 SP1
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 2.11 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you run UPDATE.EXE in SNA Server 2.11 Service Pack 1 Windows 3.x client
	software, the following symptoms occur:
	
	- Opening the NetSoft NS/Router automatically launches the Microsoft SNA client
	  (possibly requesting the User ID and password). If you launch the NS/Router,
	  it should allow you to specify the objective router file.
	
	- Launching an NS/Router client (display session, printer session) with a
	  default router specified other the SNA Server prompts the user for the SNA
	  Server User ID and password.
	
	CAUSE
	=====
	
	When you run the SNA Server 2.11 Service Pack 1 Windows 3.x client UPDATE
	program, it overwrites the following files (replacing the NetSoft Router files
	with the SNA Server Windows 3.x enhanced router files):
	
	  %SystemRoot%\System\EHNAPPC.DLL
	  %SystemRoot%\System\EHNRTRW.DLL
	
	WORKAROUND
	==========
	
	To work around this problem, re-apply the NetSoft Router modules (EHNAPPC.DLL
	and EHNRTRW.DLL) to the %SystemRoot%\System directory.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server 2.11 Service Pack 1.
	This problem was corrected in the latest Microsoft SNA Server 2.11 U.S. Service
	Pack. For information on obtaining the service pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
