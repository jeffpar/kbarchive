---
layout: page
title: "Q277871: Linked Server SELECT's to DB2/400 tables w/ DBCS Char Field Fail"
permalink: /kb/277/Q277871/
---

## Q277871: Linked Server SELECT's to DB2/400 tables w/ DBCS Char Field Fail

{% raw %}

	Article: Q277871
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
	
	When a Linked Server is configured to DB2/400 from Microsoft SQL Server by using
	the OLE DB provider for DB2, and a SELECT query is issued to retrieve data from
	a DB2/400 table that contains a DBCS fixed-length character field, the following
	error message may be returned:
	
	  OLE DB provider 'DB2OLEDB' returned unexpected length of data from fixed
	  length field <field name>
	
	CAUSE
	=====
	
	The DB2 OLE DB Provider returns different values for the field length and the
	actual data size, which causes the SELECT to fail.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version 4.0
	Service Pack 2 (SP2) and 4.0 SP3.
	
	This problem was first corrected in SNA Server 4.0 Service Pack 4.
	
	Additional query words: DB2OLEDB AS/400 DB2 OPENQUERY OPENROWSET 4 PART NAME MSDB2OLE ODBC sp2 sp3
	
	======================================================================
	Keywords          : kbDSupport kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix 
	Technology        : kbAudDeveloper kbOLEDBSearch kbOLEDBProvDB2400SP2 kbOLEDBProvDB2400SP3 kbOLEDBProvSearch
	Version           : :4.0 SP2,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
