---
layout: page
title: "Q244262: OLE DB Provider/ODBC Driver for DB2 May Break Jet Applications"
permalink: /kb/244/Q244262/
---

## Q244262: OLE DB Provider/ODBC Driver for DB2 May Break Jet Applications

{% raw %}

	Article: Q244262
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbSNA400sp4fix kbSNA400PreSP4fix
	Last Modified: 19-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0 SP2, 4.0 SP3 
	- Microsoft ODBC Driver for DB2, version 4.0 SP3 
	- Microsoft OLE DB Provider for DB2, version 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Some DB2 platforms (listed in the "More Information" section of this article) do
	not allow sorting by a column that is not part of the Select list. For example,
	the following query fails with a DB2 specific -208 error:
	
	  SELECT COL1 FROM TABLE ORDER BY COL2
	
	The Microsoft OLE DB Provider for DB2 incorrectly returns VARIANT_FALSE for the
	property DBPROP_ORDERBYCOLUMNSINSELECT, and the Microsoft ODBC Driver for DB2
	incorrectly returns "N" on the SQLGetInfo(SQL_ORDER_BY_COLUMNS_IN_SELECT) call.
	
	The above response from the provider or driver causes the Microsoft Jet database
	engine to assume that DB2 does not require the order by columns to be part of
	the Select list, and consequently, the Jet database engine generates a query
	that is rejected by the DB2, which breaks the application with the provider and
	the driver returning the following error message:
	
	  A SQL error has occurred. Please consult the documentation for your specific
	  DB2 version for a description of the associated Native Error and SQL State.
	  SQLSTATE:42707, SQLCODE: -208
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version 4.0
	Service Pack 2 and Service Pack 3.
	
	This problem was first corrected in SNA Server 4.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	The following platforms have been tested and found to have the requirement for
	order by columns to be part of the select list:
	
	   - DB2 for MVS V4R1 and higher
	
	- DB2 for OS/390 V5R1 and higher
	
	- DB2 for OS/400 V3R2 and higher
	
	Note: The only supported platform that was not tested for this requirement was
	DB2 for OS/390 V6R1.
	
	For the following platforms, this is not a requirement; therefore, they are not
	affected by this problem:
	
	   - DB2 UDB for Windows NT V6R1
	
	- DB2 UDB for AIX V5R2
	
	Note: There may be other platforms or versions of DB2 that are either affected or
	not affected by this problem. This may be found by running a query against
	them.
	
	When this fix is applied, the provider or driver returns the correct information
	to Jet, which then generates a query that's acceptable to DB2. If the error
	still persists after applying this fix, it could be due to a bug with the Jet
	engine (fixed in the Jet3.5 SP3 update). For additional information, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q235960 ACC97: ORDER BY Clause Is Not Valid... Error with Linked Table
	
	Additional query words: DB2OLEDB MSDB2OLE Mainframe AS/400 DB2/MVS DB2/400 DB2/NT DB2/6000
	
	======================================================================
	Keywords          : kbSNA400sp4fix kbSNA400PreSP4fix 
	Technology        : kbAudDeveloper kbODBCSearch kbOLEDBSearch kbSNAServSearch kbODBCDB2400SP3 kbOLEDBProvDB2400SP3 kbSNAServ400SP2 kbSNAServ400SP3 kbOLEDBProvSearch
	Version           : WINDOWS:4.0 SP2,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
