---
layout: page
title: "Q141716: PRB: Oracle Driver Does Not Support Dynasets"
permalink: /kb/141/Q141716/
---

## Q141716: PRB: Oracle Driver Does Not Support Dynasets

{% raw %}

	Article: Q141716
	Product(s): Microsoft C Compiler
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbinterop kbprogramming kbDatabase kbMFC kbODBC kbVC
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the 32-bit ODBC driver for Oracle that is distributed with Visual C++
	4.0, you may see the following message in your debug output window:
	
	  
	
	  Warning: SQLExtendedFetch not supported by driver
	  and/or cursor library not loaded. Opening forwardOnly.
	
	You may also experience an unhandled exception accompanied by the following
	messages in your debug output window:
	
	  
	
	  Error: failure updating record
	
	  Function sequence error
	  State:S1010,Native:0,Origin:[Microsoft][ODBC Driver Manager]
	
	  First-chance exception in MyExe.exe (MFCD40D.DLL): 0xE06D7363:
	  Microsoft C++ Exception
	
	  Recordset is read-only
	
	  First-chance exception in MyExe.exe (MFCD40D.DLL): 0xE06D7363:
	  Microsoft C++ Exception
	
	CAUSE
	=====
	
	You are attempting to open and use a CRecordset object as a dynaset.
	
	The driver does not support the ODBC API function SQLExtendedFetch.
	SQLExtendedFetch is required by SQLSetPos and SQLSetPos is required to provide
	dynasets.
	
	CRecordset::OnSetOptions() queries the driver to see if SQLExtendedFetch is
	available. When it finds that SQLExtendedFetch isn't available, it opens the
	recordset as forwardonly. This generates the first warning message.
	
	The last two error messages listed occur when you call CRecordset::Edit() to edit
	a record.
	
	The rest of the error messages occur when you call CRecordset::AddNew() and
	CRecordset::Update to add a record.
	
	RESOLUTION
	==========
	
	You can use snapshots to create a scrollable, updatable recordset. The ODBC
	Cursor Library is loaded when using snapshots, which provides the functionality
	needed for a scrollable, updatable recordset.
	
	MORE INFORMATION
	================
	
	The driver in question isL
	
	File Name: VSORAC32.DLL Version: 1.03.009
	
	To verify the driver version info:
	
	1. Open the ODBC Administator.
	
	2. Click the Drivers button.
	
	3. Highlight the Oracle driver in the Installed ODBC Drivers list box.
	
	4. Click the About button
	
	======================================================================
	Keywords          : kb3rdparty kbinterop kbprogramming kbDatabase kbMFC kbODBC kbVC 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper
	Version           : 4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
