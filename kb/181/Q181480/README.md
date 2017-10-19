---
layout: page
title: "Q181480: FIX: MFC ODBC Cannot Update Access Date/Time with No Date"
permalink: /kb/181/Q181480/
---

## Q181480: FIX: MFC ODBC Cannot Update Access Date/Time with No Date

	Article: Q181480
	Product(s): Microsoft C Compiler
	Version(s): 2.5,2000,5.0,6.0,97
	Operating System(s): 
	Keyword(s): kbJET kbMFC kbODBC kbVC500 kbVC600 kbGrpDSVCDB kbGrpDSMDAC kbDSupport MSGRAPH kbMDAC250
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Access 2000 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you update records in an Access database using the ODBC cursor library and
	you previously added a date/time field in Access without a date using the
	CRecordset (with TIMESTAMP_STRUCT) classes, MFC throws the following exception:
	
	  No Rows Affected
	
	CAUSE
	=====
	
	The ODBC WHERE clause fails to find the record it needs to update it.
	
	RESOLUTION
	==========
	
	This problem has been fixed in MDAC 2.6. For MDAC versions before 2.6 use the
	following workarounds:
	
	You must always enter a date in the Access date/time field for CRecordset classes
	using the ODBC cursor library.
	
	You can also resolve this problem by switching to dynasets.
	
	STATUS
	======
	
	
	
	MORE INFORMATION
	================
	
	If you have to use the ODBC cursor library, you must always enter a date along
	with a time in the Access date/time field. If you only enter a time, the
	recordset will fail to post updates and the MFC exception "No Rows Affected"
	will be thrown. This occurs because the ODBC cursor library attempts to update
	the database using an UPDATE clause and attempts to select all columns to ensure
	a unique record. During this selection, the date field fails to be resolved.
	
	If you do not have to use the ODBC cursor library, you can open the recordset as
	a dynaset, which effectively eliminates this problem.
	
	REFERENCES
	==========
	
	Visual C++, Microsoft Foundation Class Reference, Class Library Reference:
	Crecordset; CDatabase
	
	
	Additional query words: MfcDatabase
	
	======================================================================
	Keywords          : kbJET kbMFC kbODBC kbVC500 kbVC600 kbGrpDSVCDB kbGrpDSMDAC kbDSupport MSGRAPH kbMDAC250 kbMDAC260fix kbMDACNoSweep 
	Technology        : kbAudDeveloper kbMFC
	Version           : :2.5,2000,5.0,6.0,97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
