---
layout: page
title: "Q165563: INFO: GetRecordCount May Not Return Correct Number of Records"
permalink: /kb/165/Q165563/
---

## Q165563: INFO: GetRecordCount May Not Return Correct Number of Records

{% raw %}

	Article: Q165563
	Product(s): Microsoft C Compiler
	Version(s): 4.0 4.1 4.2 5.0 6.0
	Operating System(s): 
	Keyword(s): kbusage kbDAOsearch kbDatabase kbMFC kbVC kbVC400 kbVC410 kbVC420 kbVC500 kbVC600
	Last Modified: 04-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	CDaoRecordset::GetRecordCount is not guaranteed to return the correct number of
	rows for a table-type recordset even if you call this function after calling
	MoveLast().
	
	MORE INFORMATION
	================
	
	You can call CDaoRecordset::GetRecordCount to find out how many records in a
	recordset have been accessed. GetRecordCount does not indicate how many records
	are contained in a dynaset-type or snapshot-type recordset until all records
	have been accessed. To force the last record to be accessed, call the MoveLast
	function.
	
	The value of GetRecordCount from a table-type recordset reflects the approximate
	number of records in the table.
	
	
	To get an accurate record count, open a dynaset- or snapshot-type recordset and
	then do a MoveLast. Table-type recordsets will be accurate immediately after the
	database has been compacted or repaired.
	
	REFERENCES
	==========
	
	Visual C++ Help; search on: CDaoRecordset::GetRecordCount
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage kbDAOsearch kbDatabase kbMFC kbVC kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC420 kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : 4.0 4.1 4.2 5.0 6.0
	
	=============================================================================
	

{% endraw %}
