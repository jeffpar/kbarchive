---
layout: page
title: "Q165606: PRB: CRecordset::Move(0) Asserts with skipDeletedRecords Option"
permalink: /kb/165/Q165606/
---

## Q165606: PRB: CRecordset::Move(0) Asserts with skipDeletedRecords Option

	Article: Q165606
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.2,4.2b,5.0,6.0
	Operating System(s): 
	Keyword(s): kbusage kbDatabase kbMFC kbODBC kbVC kbprb
	Last Modified: 04-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 4.2b, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 4.2b, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you open a CRecordset with the skipDeletedRecords option set, it's Move()
	member function asserts if the nRows parameter is 0.
	
	CAUSE
	=====
	
	The reason for this behavior is to prevent the refresh of rows that are deleted
	by other client applications using the same data. Since no scroll direction is
	specified by a Move(0) call, it is not possible to determine which record to
	skip to if the current record was deleted. A Move(0) on a deleted row would have
	an ambiguous outcome. To prevent the possibility of doing a Move() to a deleted
	record, Move(0) is not allowed when the skipDeletedRecords option is set.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	The following code reproduces this:
	
	     CMyRecordset  RSet ;
	     RSet.Open (AFX_DB_USE_DEFAULT_TYPE, NULL,
	        CRecordset::skipDeletedRecords) ;
	     RSet.Move (0) ;
	
	The Move(0) call results in an assertion.
	
	Move(0) refreshes the recordset data for the current row from the open database
	cursor. This is useful in a multi-user environment when the recordset is opened
	using the dyanset or dynamic open types. Other users may change the database
	after the current row has been retrieved. Move(0) refreshes the recordset row
	data so that it reflects the current contents of the database. If it is
	necessary to use Move (0), open the recordset without the skipDeletedRecords
	option.
	
	Another effect of the Move() function is that it switches out of Edit/Add New
	mode. To prevent this from happening, use the CancelUpdate() member function.
	This refreshes the row data from the local cache without hitting the database
	cursor.
	
	Additional query words: kbvc420 kbvc500 kbvc600
	
	======================================================================
	Keywords          : kbusage kbDatabase kbMFC kbODBC kbVC kbprb 
	Technology        : kbVCsearch kbAudDeveloper kbVC420 kbVC500 kbVC600 kbVC32bitSearch kbVC420b kbVC500Search
	Version           : winnt:4.2,4.2b,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
