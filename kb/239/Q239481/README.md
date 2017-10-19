---
layout: page
title: "Q239481: ODBC Connection to DB2 Fails from Some Windows 95 Computers"
permalink: /kb/239/Q239481/
---

## Q239481: ODBC Connection to DB2 Fails from Some Windows 95 Computers

	Article: Q239481
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0 SP2
	Operating System(s): 
	Keyword(s): kbsna400sp3fix
	Last Modified: 01-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC Driver for DB2, version 4.0 SP2 
	- Microsoft SNA Server, version 4.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On certain Windows 95 computers, connection attempts to DB2 (mainframe, AS/400,
	or UDB) using the Microsoft ODBC driver for DB2 fail with the following error
	message:
	
	  [Microsoft][ODBC Driver for DB2]No such interface supported.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	4.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version 4.0
	Service Pack 2. This problem was first corrected in SNA Server version 4.0
	Service Pack 3.
	
	MORE INFORMATION
	================
	
	This behavior has been observed on Windows 95 computers that have DCOM 95 V1.3
	installed.
	
	Additional query words: OLE DB OS/390 MVS OS/400 DB2OLEDB
	
	======================================================================
	Keywords          : kbsna400sp3fix 
	Technology        : kbAudDeveloper kbODBCSearch kbSNAServSearch kbODBCDB2400SP2 kbSNAServ400SP2
	Version           : WINDOWS:4.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
