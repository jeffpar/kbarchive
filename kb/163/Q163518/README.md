---
layout: page
title: "Q163518: License Restrictions for ODBC/DRDA Driver"
permalink: /kb/163/Q163518/
---

## Q163518: License Restrictions for ODBC/DRDA Driver

	Article: Q163518
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11 SP2,3.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11 SP2, 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	SNA Server will begin enforcing StarSQL licensing restrictions beginning with
	SNA Server 2.11 Service Pack 2 and SNA Server 3.0.
	
	STATUS
	======
	
	
	
	MORE INFORMATION
	================
	
	SNA Server provides a single license of StarSQL (the ODBC driver included with
	SNA Server) per copy of Microsoft SNA Server, and a limit of ten connections per
	driver instance. SNA Server 2.11 and SNA Server 2.11 Service Pack 1 have the
	same licensing provisions, but do not place any restrictions on the use of the
	driver.
	
	SNA Server 2.11 Service Pack 2 or SNA Server 3.0 will return the following error
	if a user attempts to use more than one instance of the ODBC/DRDA driver per
	server:
	
	  [StarQuest][StarSQL ODBC Driver]No more licenses available.
	  Contact StarQuest Software, Inc to acquire additional licenses.(#0)
	
	You can contact StarQuest at (800) 763-0050 (in the U.S. or Canada) or (510)
	704-2000. You can also contact StarQuest by e-mail at sales@starquest.com.
	
	Additional query words: StarWare appc
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ211SP2
	Version           : WINDOWS:2.11 SP2,3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
