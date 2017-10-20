---
layout: page
title: "Q170119: DOC: New Record Not Inserted to the End of Recordset"
permalink: /kb/170/Q170119/
---

## Q170119: DOC: New Record Not Inserted to the End of Recordset

{% raw %}

	Article: Q170119
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.2,5.0
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr kbDAOsearch kbDatabase kbMFC kbVC kbVC420 kbVC500
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The MFC documentation for CDaoRecordset::AddNew() and the DAO SDK documentation
	for the AddNew method state:
	
	  The position of the record depends on the type of Recordset:
	
	  In a dynaset-type Recordset object, records are inserted at the end of the
	  recordset, regardless of any sorting or ordering rules that may have been in
	  effect when the recordset was opened.
	
	The documentation is incorrect. Beginning with Jet 3.0, this behavior is not
	guaranteed. The behavior was changed to improve performance as well as
	concurrency issues.
	
	To demonstrate the change in behavior, delete a record in a recordset of 300+
	records and then call AddNew(). Then, traverse the recordset until you see where
	the record has been added. Typically this record will be inserted in the 253rd
	record rather than at the end of the recordset.
	
	MORE INFORMATION
	================
	
	If the goal is to make the newly added record the current record, you should get
	the bookmark of the last modified record and move to that bookmark.
	
	This documentation was corrected in Visual C++ version 6.0 for Windows.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdocfix kbdocerr kbDAOsearch kbDatabase kbMFC kbVC kbVC420 kbVC500 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.2,5.0
	
	=============================================================================
	

{% endraw %}
