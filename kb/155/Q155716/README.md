---
layout: page
title: "Q155716: PRB: SQL Single-Stepping Does Not Display Errors as They Occur"
permalink: kb/155/Q155716/
---

## Q155716: PRB: SQL Single-Stepping Does Not Display Errors as They Occur

	Article: Q155716
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbDebug kbEEdition kbMFC kbSQL kbVC420 kbVC500 kbVC600 kbGrpDSODBC kbSQLProg
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When single-stepping through a SQL Server stored procedure, error messages, if
	generated, are not displayed at the point where the error occurred.
	
	STATUS
	======
	
	We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	To reproduce this behavior, create and single-step through the following stored
	procedure in the SQL Server Pubs sample database:
	
	  ------------------------------
	  CREATE PROCEDURE sp_trigger AS
	
	  INSERT authors
	      VALUES ('123-21-2321', 'Redmond', 'Ricky', '206/555-1212',
	            '123 Nowhere St.', 'Redmond', 'WA', '98989', DEFAULT )
	  DECLARE @a INTEGER
	  SELECT @a = 4/2
	  RETURN
	  ------------------------------
	
	The INSERT statement fails because there is no DEFAULT defined for the last
	field. However, the user is not notified that the insertion failed until the
	stored procedure completes.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbDebug kbEEdition kbMFC kbSQL kbVC420 kbVC500 kbVC600 kbGrpDSODBC kbSQLProg 
	Technology        : kbVCsearch kbAudDeveloper kbVC420 kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : WINDOWS:4.2,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
