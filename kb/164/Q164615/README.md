---
layout: page
title: "Q164615: FIX: New Record Not Inserted to End of Recordset"
permalink: /kb/164/Q164615/
---

## Q164615: FIX: New Record Not Inserted to End of Recordset

{% raw %}

	Article: Q164615
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.2,5.0
	Operating System(s): 
	Keyword(s): kbdocerr kbDAOsearch kbDatabase kbMFC kbDocs kbVC420bug kbVC500bug kbVC600fix kbNoUpdat
	Last Modified: 04-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Foundation Classes (MFC) documentation for CDaoRecordset::AddNew()
	and the DAO SDK documentation for the AddNew method state:
	
	  "The position of the record depends on the type of Recordset:
	   - In a dynaset-type Recordset object, records are inserted at the end
	  of the recordset, regardless of any sorting or ordering rules that may
	  have been in effect when the recordset was opened."
	
	The documentation is incorrect. Beginning with Jet 3.0, this behavior is not
	guaranteed. The behavior was changed to improve performance as well as
	concurrency issues.
	
	To demonstrate the change in behavior, delete a record in a recordset of 300+
	records and then call AddNew(). Then, traverse the recordset until you see where
	the record has been added. Typically, this record will be inserted in the 253rd
	record rather than at the end of the recordset.
	
	STATUS
	======
	
	This problem was corrected in the documentation for Visual C++, version 6.0.
	
	MORE INFORMATION
	================
	
	If the goal is to make the newly added record the current record, you should get
	the bookmark of the last modified record and move to that bookmark. You can do
	this with MFC DAO by doing the following:
	
	     rs.SetBookmark(rs.GetLastModifiedBookmark());
	
	
	Additional query words: AddNew MoveLast
	
	======================================================================
	Keywords          : kbdocerr kbDAOsearch kbDatabase kbMFC kbDocs kbVC420bug kbVC500bug kbVC600fix kbNoUpdate 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.2,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
