---
layout: page
title: "Q235521: BUG: Can't Configure Data Link for OLE DB Provider"
permalink: /kb/235/Q235521/
---

## Q235521: BUG: Can't Configure Data Link for OLE DB Provider

	Article: Q235521
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0 SP2
	Operating System(s): 
	Keyword(s): kbsna400sp3fix
	Last Modified: 19-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft OLE DB Provider for DB2, version 4.0 SP2 
	- Microsoft OLE DB Provider for AS/400 and VSAM, version 4.0 SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you install SNA Server or Client 4.0 Service Pack 2 with only the Microsoft
	OLE DB provider for AS/400 and VSAM selected and not the Microsoft OLE DB
	provider for DB2, and you configure a new Microsoft data link to use the
	Microsoft OLE DB provider for AS/400 and VSAM, you may receive the following
	error message:
	
	  Could not find the OLE DB DB2 Provider. You may need to run MDAC Setup
	  again."
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	4.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	WORKAROUND
	==========
	
	To configure data sources for OLE DB provider for AS/400 and VSAM using the data
	links, install the OLE DB provider for DB2, even if you don't otherwise need
	this provider.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in SNA
	Server version 4.0 Service Pack 3.
	
	
	Additional query words: Mainframe OS/390 OS/400 ODBC DB2OLEDB
	
	======================================================================
	Keywords          : kbsna400sp3fix 
	Technology        : kbAudDeveloper kbOLEDBSearch kbOLEDBProvAS400VSAM400SP2 kbOLEDBProvDB2400SP2 kbOLEDBProvSearch
	Version           : WINDOWS:4.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
