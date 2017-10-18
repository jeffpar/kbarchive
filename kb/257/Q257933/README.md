---
layout: page
title: "Q257933: ODBC Connection to DB2 Breaks When You Update to OS/400 V4R4"
permalink: kb/257/Q257933/
---

## Q257933: ODBC Connection to DB2 Breaks When You Update to OS/400 V4R4

	Article: Q257933
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 (all SP),4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): kbsna300sp1 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you update the OS version on the AS/400 computer to version 4 release 4
	(v4r4), the connection between SQL Server and DB2 on the AS/400 computer no
	longer works. Event alerts are logged in SQL Server.
	
	CAUSE
	=====
	
	With versions of SNA Server 3.0 (all service packs) and SNA Server 4.0
	(including Service Pack 1), the StarSQL driver for ODBC connections is provided;
	however, these versions of the StarSQL driver are not compatible with OS/400
	v4r4. The version numbers included in SNA Server are as follows:
	
	   - SNA Server 3.0: version 2.27.10.18
	
	- SNA Server 4.0: version 2.40.08.05
	
	- SNA Server 4.0 SP1: version 2.52.05.01
	
	WORKAROUND
	==========
	
	In SNA Server 4.0 SP2 and later, Microsoft provides the same functionality with
	the OLE DB provider for DB2. This driver supports both OLE DB and ODBC
	connections through both APPC and TCP/IP protocols. The behavior described in
	the "Symptoms" section of this article has not been observed with the ODBC
	driver included with SNA Server 4.0 SP2 and later.
	
	For additional information on how to configure ODBC for DB2, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q216428 Configuring Microsoft ODBC Driver for DB2
	
	For additional information on the SNA Server SP2 update, which is available for
	download, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	MORE INFORMATION
	================
	
	For more information on the version of the StarSQL driver that is compatible
	with OS/400 v4r4, please click the following link:
	
	  http://www.starquest.com/support/news.html#v4r4
	
	Please contact StarQuest regarding this information.
	
	Microsoft provides third-party contact information to help you find technical
	support. This contact information may change without notice. Microsoft does not
	guarantee the accuracy of this third-party contact information.
	
	The third-party products that are discussed in this article are manufactured by
	companies that are independent of Microsoft. Microsoft makes no warranty,
	implied or otherwise, regarding the performance or reliability of these
	products.
	
	Additional query words: DB2 AS/400 StarSQL
	
	======================================================================
	Keywords          : kbsna300sp1 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : WINDOWS:3.0 (all SP),4.0,4.0 SP1
	Issue type        : kbinfo
	
	=============================================================================
	
