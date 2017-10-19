---
layout: page
title: "Q141810: BUG: pcbValue Shows 1022 Even if Size of Available Data &gt; 1022"
permalink: /kb/141/Q141810/
---

## Q141810: BUG: pcbValue Shows 1022 Even if Size of Available Data &gt; 1022

	Article: Q141810
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kbBug kbISS
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 2.0 
	-------------------------------------------------------------------------------
	
	BUG#: 2400 (QJET)
	
	SYMPTOMS
	========
	
	When fetching an OLE object from a Microsoft Access 2.0 database (*.MDB) using
	the 16-bit ODBC Access driver, SQLFetch always returns a pcbValue of 1022 bytes
	even though the actual size of the data is greater than 1022.
	
	WORKAROUND
	==========
	
	Microsoft recommends moving to the 32-bit ODBC Access driver, because this
	behavior is not seen in the 32-bit version.
	
	MORE INFORMATION
	================
	
	To reproduce this problem:
	
	Create a table (mytable) in Access 2.0 with two fields: Col1 text, Col2 OLE
	Object.
	Insert some text data into col1.
	Open Paintbrush. Scribble, cut and paste the picture into Col2 (actual size >
	1022 bytes).
	
	Create a 16-bit datasource to this Access database.
	
	Then, from ODBC Test:
	
	Full connect to the Access database.
	
	  SQLExecdirect ( Select * from mytable)
	
	  SQLBindCol(icol=2, fCType=SQL_C_CHAR=1, cbValueMax=1023)
	
	  SQLFetch:
	     Return:   SQL_SUCCESS_WITH_INFO=1
	                  icol, fCType, cbValueMax, pcbValue, rgbValue
	                  2, SQL_C_CHAR=1, 1023, 1022, "151C2E00020...."
	
	NOTE: Even though the number of bytes of available data to return for the column
	is 40K, the pcbValue shows 1022. pcbValue returns the correct number of bytes if
	the cbValueMax is set to 1022 or less. This behavior is not seen in the 32-bit
	ODBC Access driver version 3.x.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in 16-bit Access ODBC driver
	version 2.00.2317. We are researching this problem and will post new information
	here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 2.00.2317 Access ODBC Driver
	
	======================================================================
	Keywords          : kbBug kbISS 
	Technology        : kbAudDeveloper kbODBCSearch kbODBC200
	Version           : WINDOWS:2.0
	Issue type        : kbbug
	
	=============================================================================
	
