---
layout: page
title: "Q152779: PRB: ODBC Driver &quot;unrecognized phrase/keyword&quot; Error"
permalink: kb/152/Q152779/
---

## Q152779: PRB: ODBC Driver &quot;unrecognized phrase/keyword&quot; Error

	Article: Q152779
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbinterop
	Last Modified: 10-MAR-2000
	
	1.00
	
	WINDOWS
	
	kbinterop
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC Driver for Visual FoxPro, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Crystal Reports, selecting a Visual FoxPro table can result in the following
	error:
	
	  ODBC Visual FoxPro Driver Command contains unrecognized phrase/keyword
	
	Crystal Reports is unable to use Visual FoxPro database tables or free tables
	with this version of the ODBC driver.
	
	
	WORKAROUND
	==========
	
	Steps to Workaround Behavior
	----------------------------
	
	1. Open the table in the Command window by using a command like this one:
	
	  Use customer
	
	2. Use the COPY command to copy the table to to c:\Temp\cust2x with a type of
	  FOX2.
	
	3. Create a new datasource for this table.
	
	4. Use the new datasource to use the table in Crystal Reports.
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start Crystal Reports.
	
	2. On the File menu, click New. Then click Report, and click OK.
	
	3. In the Choose Database File dialog box, select SQL Table.
	
	4. Select your Visual FoxPro Datasource from the "Log on to Server" dialog box.
	
	5. Select a table, and click OK.
	
	Additional query words: 1.00 vFoxWin
	
	======================================================================
	Keywords          : kb3rdparty kbinterop 
	Technology        : kbVFPsearch kbAudDeveloper kbODBCSearch kbODBCVFP100
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	
