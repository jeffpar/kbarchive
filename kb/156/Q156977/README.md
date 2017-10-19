---
layout: page
title: "Q156977: PRB: CRecordset Does Not Skip Deleted Records"
permalink: /kb/156/Q156977/
---

## Q156977: PRB: CRecordset Does Not Skip Deleted Records

	Article: Q156977
	Product(s): Microsoft C Compiler
	Version(s): 4.2 4.2b 5.0 6.0
	Operating System(s): 
	Keyword(s): kbprogramming kbDatabase kbMFC kbODBC kbVC
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2b 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2b 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may continue to see deleted records when using the CRecordset and
	CRecordView classes with a snapshot recordset.
	
	CAUSE
	=====
	
	The default behavior of the MFC ODBC classes has changed. It is now possible to
	move onto a record that has been deleted. If the current record has been
	deleted, the CRecordset IsDeleted() function will return TRUE.
	
	RESOLUTION
	==========
	
	Open your CRecordset using the skipDeletedRecords option, or check IsDeleted()
	to ensure that the current record is valid before using it.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The default behavior of a snapshot no longer skips deleted records. CRecordView
	opens a CRecordset with the default behavior so the CRecordView will display
	deleted records. An example of this behavior appears in the Enroll tutorial. If
	you delete the last record in the CSectionSet recordset, the deleted record will
	continue to be displayed in the CSectionForm record view. If you try to delete
	this record again, you will receive the following error message:
	
	  Operation failed, no current record
	
	Sample Code
	-----------
	
	     // The following code shows how to override the CRecordset::Open call to
	     // pass the skipDeletedRecords option:
	     BOOL CMySet::Open(UINT nOpenType, LPCTSTR lpszSql, DWORD dwOptions)
	     {
	         return CRecordset::Open(nOpenType, lpszSql,
	             dwOptions | skipDeletedRecords );
	     }
	
	REFERENCES
	==========
	
	See the documentation for CRecordset::Open() and CRecordset::IsDeleted(), as
	well as the MFC 4.2 Encyclopedia articles entitled "Recordset: How Addnew, Edit,
	and Delete Work" and "Recordset: Adding, Updating, and Deleting Records"
	
	Additional query words: Move MoveFirst MoveLast MoveNext MovePrev kbvc420 kbvc500 kbvc600
	
	======================================================================
	Keywords          : kbprogramming kbDatabase kbMFC kbODBC kbVC 
	Technology        : kbAudDeveloper kbMFC
	Version           : 4.2 4.2b 5.0 6.0
	Issue type        : kbprb
	
	=============================================================================
	
