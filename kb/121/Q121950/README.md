---
layout: page
title: "Q121950: HOWTO: Detect an Empty CRecordset Object"
permalink: kb/121/Q121950/
---

## Q121950: HOWTO: Detect an Empty CRecordset Object

	Article: Q121950
	Product(s): Microsoft C Compiler
	Version(s): 1.5,1.51,4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbDatabase
	Last Modified: 01-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, versions 1.5, 1.51 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 4.0, 4.1, 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, versions 4.0, 4.2, 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The CRecordset represents a set of records obtained from a data source through a
	query. If no records from the data source match the query, there will be no
	records in the record set object so CRecordset::IsEOF and CRecordset::IsBOF both
	return a nonzero value. A query is executed during calls to CRecordset::Open and
	CRecordset::Requery, so empty record sets can be detected calling
	CRecordset::IsEOF and/or CRecordset::IsBOF after executing a query.
	
	REFERENCES
	==========
	
	This behavior is described in the documentation for CRecordset::IsEOF and
	CRecordset::IsBOF.
	
	Additional query words: empty recordset MfcDatabase kbprg
	
	======================================================================
	Keywords          : kbDatabase 
	Technology        : kbAudDeveloper kbMFC
	Version           : :1.5,1.51,4.0,4.1,4.2,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
