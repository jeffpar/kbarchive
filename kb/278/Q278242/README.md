---
layout: page
title: "Q278242: DB2OLEDB Provider Incorrectly Maps Isolation Levels"
permalink: /kb/278/Q278242/
---

## Q278242: DB2OLEDB Provider Incorrectly Maps Isolation Levels

	Article: Q278242
	Product(s): Microsoft SNA Server
	Version(s): 4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbDSupport kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix
	Last Modified: 19-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft OLE DB Provider for DB2, versions 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the Microsoft OLE DB Provider for DB2 parameter for Default Isolation Level
	is set to Cursor Stability (CS), it could be incorrectly mapped by the provider
	as Repeatable Read (RR) on DB2. This may lead to the incorrect type of locks
	being held on the DB2 tables, which may cause unexpected behavior.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version 4.0
	SP2 and 4.0 SP3.
	
	This problem was first corrected in SNA Server 4.0 Service Pack 4.
	
	Additional query words: DB2OLEDB MAINFRAME MVS OS/390 DB2/MVS THREAD sp2 sp3
	
	======================================================================
	Keywords          : kbDSupport kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix 
	Technology        : kbAudDeveloper kbOLEDBSearch kbOLEDBProvDB2400SP2 kbOLEDBProvDB2400SP3 kbOLEDBProvSearch
	Version           : :4.0 SP2,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
