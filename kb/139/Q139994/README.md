---
layout: page
title: "Q139994: PRB: Specifying Table Name with Column Name in MFC DAO"
permalink: /kb/139/Q139994/
---

## Q139994: PRB: Specifying Table Name with Column Name in MFC DAO

	Article: Q139994
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1
	Operating System(s): 
	Keyword(s): kbprogramming kbDAOsearch kbDatabase kbMFC kbVC
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you add a table name qualifier to a column name in the DoFieldExchange of
	your CDaoRecordset-derived class where one is not required to resolve ambiguity,
	an exception will be thrown when the recordset is opened. The exception
	indicates that:
	
	  GetRows failed. The requested column is not a member of this recordset.
	
	CAUSE
	=====
	
	Specifying table name qualifiers for columns that are not ambiguous (where the
	column name is sufficient to uniquely identify the column) causes the assignment
	of retrieved data to bound columns that occurs in the GetRows function to fail.
	
	RESOLUTION
	==========
	
	Remove unnecessary table name qualifiers to avoid this behavior.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprogramming kbDAOsearch kbDatabase kbMFC kbVC 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410
	Version           : :4.0,4.1
	Issue type        : kbprb
	
	=============================================================================
	
