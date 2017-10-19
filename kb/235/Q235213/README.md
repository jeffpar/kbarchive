---
layout: page
title: "Q235213: BUG: Four-part Name Linked Server Queries Fail w/DB2 for OS/390"
permalink: /kb/235/Q235213/
---

## Q235213: BUG: Four-part Name Linked Server Queries Fail w/DB2 for OS/390

	Article: Q235213
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0 SP2
	Operating System(s): 
	Keyword(s): kbsna400sp3fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft OLE DB Provider for DB2, version 4.0 SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you run a four-part name query such as the following
	
	  SELECT * FROM <LinkedServer name>.<Catalog>.<Schema
	  name>.<Table name>
	
	using the Microsoft OLE DB Provider for DB2 from a linked server to DB2 on
	OS/390, the following error might be reported by the SQL Server:
	
	  Server: Msg 7314, Level 16, State 1, Line 1
	  OLE DB provider 'DB2OLEDB' does not contain table '<Schema name.Table
	  name>'.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	4.0. For additional information, click the following article number to view the
	article in the Microsoft Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	WORKAROUND
	==========
	
	Use pass-through queries with OPENQUERY or OPENROWSET. For examples of linked
	server queries to DB2 using OPENQUERY or OPENROWSET, please refer to the
	following article in the Microsoft Knowledge Base:
	
	  Q222937 Creating a Linked Server to DB2 using Microsoft OLE DB Provider for
	  DB2
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft SNA Server version
	4.0 Service Pack 2. This problem was first corrected in SNA Server version 4.0
	Service Pack 3.
	
	Additional query words: Mainframe ODBC MSDB2OLE MVS DB2/400
	
	======================================================================
	Keywords          : kbsna400sp3fix 
	Technology        : kbAudDeveloper kbOLEDBSearch kbOLEDBProvDB2400SP2 kbOLEDBProvSearch
	Version           : WINDOWS:4.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
