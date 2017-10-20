---
layout: page
title: "Q139069: FIX: Append-Only on Dynaset Recordsets Forces Read-Only"
permalink: /kb/139/Q139069/
---

## Q139069: FIX: Append-Only on Dynaset Recordsets Forces Read-Only

{% raw %}

	Article: Q139069
	Product(s): Microsoft C Compiler
	Version(s): 1.51 1.52 | 2.00 2.10 2.20
	Operating System(s): 
	Keyword(s): kbDatabase kbMFC kbODBC kbVCkbbuglist kbfixlist
	Last Modified: 03-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 1.51, 1.52, 2.0, 2.1, 2.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Opening a recordset as an append-only dynaset leads to an internal application
	error when Update() is called to commit an AddNew(). A CDBException is thrown,
	and the following error is displayed in the output window of the debugger (DB
	tracing enabled):
	
	In Visual C++ 1.5x using the Microsoft Access 2.0 driver:
	
	  
	
	  Error: failure updating record.
	  Invalid argument value
	  State:S1009[Microsoft][ODBC Microsoft Access 2.0 Driver]
	
	In Visual C++ 2.x using the Microsoft Access 2.0 driver:
	
	  
	
	  Error: failure updating record.
	  Invalid argument value
	  State:S1009,Native:57,Origin:[Microsoft][ODBC Microsoft Access 2.0
	  Driver]
	
	CAUSE
	=====
	
	Due to a bug in the MFC code, specifying that a recordset be opened as
	append-only results in its concurrency being set to read-only. While the
	concurrency is not checked for snapshots, it must be consistent in dynasets with
	operations performed on the datasource.
	
	Specifying CRecordset::appendOnly as the third parameter to CRecordset::Open
	results in m_bUpdatable being set false. Open calls OnSetOptions where, if
	m_bUpdatable is false, the concurrency for the recordset is set to
	SQL_CONCUR_READ_ONLY. When Update() is eventually called, the ODBC API SQLSetPos
	is invoked to perform the update. Because the operation (SQL_ADD) and locking
	mode (SQL_LOCK_NO_CHANGE) do not match the concurrency, SQLSetPos fails.
	
	RESOLUTION
	==========
	
	Opening a recordset as append-only has very limited benefits, so to work around
	the problem, don't use it. The only real benefit to setting a recordset to
	append-only is to inhibit you from calling Edit() on the recordset.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Visual C++ version 4.0
	but has not been fixed in the 16-bit version of the compiler. We will post new
	information here in the Knowledge Base as it becomes available.
	
	Additional query words: 1.51 2.51 1.52 2.52 2.00 3.00 2.10 3.10 2.20 3.20
	
	======================================================================
	Keywords          : kbDatabase kbMFC kbODBC kbVC kbbuglist kbfixlist
	Technology        : kbVCsearch kbAudDeveloper kbVC220 kbVC151 kbVC200 kbVC210 kbVC152
	Version           : 1.51 1.52 | 2.00 2.10 2.20
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
