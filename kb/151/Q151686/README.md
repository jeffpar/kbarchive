---
layout: page
title: "Q151686: FIX: MFC ODBC Dynaset Cannot Update a SQL Server 6.0 View"
permalink: /kb/151/Q151686/
---

## Q151686: FIX: MFC ODBC Dynaset Cannot Update a SQL Server 6.0 View

	Article: Q151686
	Product(s): Microsoft C Compiler
	Version(s): 2.0,2.1,2.5,4.0,4.1,4.2
	Operating System(s): 
	Keyword(s): kbprogramming kbDatabase kbMDAC kbMFC kbVC kbDSupport kbMDAC250 kbGrpDSODBCkbbuglist kb
	Last Modified: 21-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ 32-bit Edition, versions 2.0, 2.1, 4.0, 4.1, 4.2 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An MFC database application cannot update a dynaset-type CRecordset based on a
	View in a SQL Server 6.00 data source, even if the operation observes the SQL
	Server requirement that updates through Views only update a single base table.
	The update will give the following error:
	
	  Error: failure updating record.
	  The cursor does not include the table being modified
	  State:37000,Native:16933,Origin:[Microsoft][ODBC SQL Server Driver] [SQL
	  Server]
	
	CAUSE
	=====
	
	This error is caused by a bug in SQL Server 6.0 server cursors. For more
	information on this problem, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q149917 FIX: 16933 Error on View Updated Through Server Cursor
	
	RESOLUTION
	==========
	
	One workaround is to use snapshots with the cursor library to update the View.
	You can use a dynaset with a View as long as you are not updating it. If you
	must use a dynaset and need to update, try using a permanent or temporary table
	instead of a View, or open a separate recordset as a snapshot.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug is corrected in Microsoft SQL Server version
	6.50.
	
	MORE INFORMATION
	================
	
	This problem only occurs when using a dynaset update. The recordset is opened
	correctly. The dynaset is scrollable forward and backward and MoveNext() and
	MovePrev() also work correctly but dynaset does not allow updates.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprogramming kbDatabase kbMDAC kbMFC kbVC kbDSupport kbMDAC250 kbGrpDSODBC kbbuglist kbfixlist
	Technology        : kbAudDeveloper kbMFC
	Version           : :2.0,2.1,2.5,4.0,4.1,4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
