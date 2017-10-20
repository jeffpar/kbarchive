---
layout: page
title: "Q132397: HOWTO: Retrieve a Counter Field Value Without Requerying"
permalink: /kb/132/Q132397/
---

## Q132397: HOWTO: Retrieve a Counter Field Value Without Requerying

{% raw %}

	Article: Q132397
	Product(s): Microsoft C Compiler
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, version 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 2.1, 2.2, 4.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Access ODBC driver version 2.x or higher provides a Counter field
	data type. This is an autoincrement field, meaning that the value of the field
	is assigned automatically by the ODBC driver when a record is first created.
	This value can then be used as a primary key or as general index.
	
	Once a record is added, the value of the counter field is assigned by the
	Microsoft Access ODBC driver version 2.x or higher. You can save this value for
	later use, and have an application retrieve the value of the counter field
	without re-querying. This article explains how.
	
	MORE INFORMATION
	================
	
	ODBC doesn't supply any mechanism by which an application can easily retrieve
	the value of an autoincrement field when a record is added. However, the
	Microsoft Access ODBC driver version 2.x or higher does provide a feature that
	can help. The Microsoft Access ODBC driver version 2.x or higher appends newly
	added records to the end of the current recordset if you use a dynaset. After
	adding a record, an application can call MoveLast() to move to the last record
	of the recordset to retrieve the value of the new record.
	
	If you want to move back to the previous cursor position following the MoveLast()
	call, use the information provided in the following article in the Microsoft
	Knowledge Base:
	
	  Q132398 HOWTO: Use Bookmarks with the MFC ODBC Database Classes
	
	Sample Code
	-----------
	
	The following code segment is an example of how to use the bookmark code in
	article Q132398 to retrieve the value of a counter (autoincrement) field in
	Microsoft Access version 2.0 or higher database so that you can save the value
	for later use within your application. This example moves to a record, gets the
	bookmark for the record, adds a record, calls MoveLast() to get to the newly
	added record and thus retrieve the counter field value, and then moves back to
	the record it came from.
	
	     CDatabase db;
	     db.Open("MYDataSourceName",NULL,NULL,"ODBC;",FALSE);
	     CCounterSet rs(&db);
	
	     // Open up dynaset because any records added by a CRecordset using
	     // dynasets are appended to the end of Microsoft Access 2.0 or higher
	     //recordset
	
	     rs.Open(CRecordset::dynaset);
	
	     // move to some record
	     rs.MoveNext();
	
	     BOOKMARK bookmark;
	     rs.GetBookmark(&bookmark);
	
	     // Add record. Counter field of record will be given a value by
	     // the ODBC driver
	     rs.AddNew();
	     rs.m_textfield="SomeText";
	     rs.Update();
	
	     // MoveLast to get on record just added
	     rs.MoveLast();
	
	     // retrieve the value of the counter field for the
	     // newly added record here
	
	     // return to the record you were on
	     rs.MoveToBookmark(bookmark);
	
	Additional query words: kbVC150 kbVC151 MfcDatabase kbMFC kbVC152 kbVC210 kbVC220 kbVC400 kbVC500 kbVC600 kbODBC
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbMFC
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
