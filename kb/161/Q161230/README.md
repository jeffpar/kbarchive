---
layout: page
title: "Q161230: Resource Leak in StarSQL 32-Bit ODBC Driver"
permalink: /kb/161/Q161230/
---

## Q161230: Resource Leak in StarSQL 32-Bit ODBC Driver

	Article: Q161230
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Monitoring an application issuing function calls from the StarSQL ODBC Driver
	included with SNA Server 2.11 and 2.11 Service Pack 1 shows progressive
	increases in Heap usage. The increase disappears as soon as the ODBC Driver is
	unloaded. This increase is noted every time a SQLFreeEnv and a SQLAllocEnv are
	issued for the driver.
	
	CAUSE
	=====
	
	The StarSQL ODBC driver v1.05 has a resource leak.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the hotfix mentioned below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 2.0, 2.1,
	2.11, and 2.11 Service Pack 1. This problem was corrected in the latest
	Microsoft SNA Server 2.11 U.S. Service Pack. For information on obtaining the
	service pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	
	
	Additional query words: memory SP1 allocation
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ200 kbSNAServ211 kbSNAServ210 kbSNAServ211SP1
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
