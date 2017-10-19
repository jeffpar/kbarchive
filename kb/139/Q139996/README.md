---
layout: page
title: "Q139996: BUG: Wizards Create Invalid Column Names for QueryDef Join"
permalink: /kb/139/Q139996/
---

## Q139996: BUG: Wizards Create Invalid Column Names for QueryDef Join

	Article: Q139996
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbwizard kbDAOsearch kbDatabase kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600bug
	Last Modified: 07-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The AppWizard, used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	- The ClassWizard, used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use AppWizard or ClassWizard to create a MFC DAO recordset based on a
	predefined query (QueryDef) that joins tables that contain columns with
	identical names, the application generates an exception when it attempts to open
	the recordset. The exception indicates that:
	
	  '[table.column]' isn't a valid parameter name.
	
	where table and column correspond to actual table and column names in your
	database.
	
	NOTE: In VC++ 6.0 the AppWizard creates a CdaoRecordset-derived class for the
	application based on the query. At run-time, a MessageBox is generated with the
	following error message:
	
	  Invalid bracketing of name '[table.column]'
	
	NOTE: If you have MDAC 2.1 installed on your computer, the new Access 4.0 driver
	returns a different error message. The following error message appears:
	
	  '' is not a valid name
	
	Make sure that it does not include invalid characters or punctuation and that it
	is not too long.
	
	CAUSE
	=====
	
	The exception is thrown due to the incorrect manner in which the wizards add
	delimiting brackets to the standard table_name.column_name references in your
	CDaoRecordset-derived class's DoFieldExchange.
	
	The wizards generate the following syntax:
	
	  [table.column]
	
	The correct syntax is:
	
	  [table].[column]
	
	RESOLUTION
	==========
	
	You must manually modify the CDaoRecordset-derived class's DoFieldExchange to
	correct those column references that use the incorrect syntax. Follow this
	procedure:
	
	1. Do not add qualifiers to any columns that are not duplicates. Qualifying
	  columns where no ambiguity exists will result in errors. For additional
	  information, please see the following article in the Microsoft Knowledge
	  Base:
	
	  Q139994 Specifying Table Name with Column Name in MFC DAO
	
	2. Modify the wizard-generated code to delimit the table and column names
	  correctly. For additional information about the exact form of the final
	  column reference is described in detail, please see the following article in
	  the Microsoft Knowledge Base:
	
	  Q139997 Item not found in this collection" with MFC DAO Join
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbwizard kbDAOsearch kbDatabase kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600bug kbDSupport kbVC421bug 
	Technology        : kbVCsearch kbAudDeveloper kbAppWizard
	Version           : :4.0,4.1,4.2,5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
