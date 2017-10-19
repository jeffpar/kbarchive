---
layout: page
title: "Q235299: BUG: Parameterized Queries that Are Not Prepared Fail to Execute"
permalink: /kb/235/Q235299/
---

## Q235299: BUG: Parameterized Queries that Are Not Prepared Fail to Execute

	Article: Q235299
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0 SP2
	Operating System(s): 
	Keyword(s): kbsna400sp3fix
	Last Modified: 19-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft OLE DB Provider for DB2, version 4.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run a query containing parameter markers like the following:
	
	  UPDATE EMPLOYEE SET DEPTNO = 20 WHERE DEPTNO = ?
	
	and the query is not prepared using the ICommandPrepare::Prepare method, the OLE
	DB Provider for DB2 returns E_FAIL with the following error message:
	
	  Statement not prepared.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	4.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	WORKAROUND
	==========
	
	Prepare the command using the ICommandPrepare::Prepare method.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version 4.0
	Service Pack 2. This problem was first corrected in SNA Server version 4.0
	Service Pack 3.
	
	Additional query words: MSDB2OLE Mainframe AS/400 MVS OS/390 OS/400
	
	======================================================================
	Keywords          : kbsna400sp3fix 
	Technology        : kbAudDeveloper kbOLEDBSearch kbOLEDBProvDB2400SP2 kbOLEDBProvSearch
	Version           : WINDOWS:4.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
