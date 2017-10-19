---
layout: page
title: "Q156142: PRB: Symbol &lt;default&gt; Always Shown in Input Parameters Dialog"
permalink: /kb/156/Q156142/
---

## Q156142: PRB: Symbol &lt;default&gt; Always Shown in Input Parameters Dialog

	Article: Q156142
	Product(s): Microsoft C Compiler
	Version(s): 4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbProgramming kbDatabase kbDebug kbEEdition kbMFC kbSQL kbVC420 kbVC500 kbVC600 kbGrpDS
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, version 4.2 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you execute or debug any stored procedure, the Execute Stored Procedure
	dialog box shows the symbol Default even if the procedure does not have default
	value parameters.
	
	CAUSE
	=====
	
	Open Database Connectivity (ODBC) and SQL Server do not provide a means to
	determine if a stored procedure has been defined with default values for
	parameters.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	In the Execute Stored Procedure dialog box, the values you enter are correctly
	passed to the procedure. When you do not enter explicit values and there is no
	default value for the parameter, you get an error. For example, the SQL Server
	datasource gives the following error:
	
	  37000[Microsoft][ODBC SQL Server Drier][SQL Server]
	  Procedure <name> expects parameter <name> which was not supplied
	
	Additional query words:
	
	======================================================================
	Keywords          : kbProgramming kbDatabase kbDebug kbEEdition kbMFC kbSQL kbVC420 kbVC500 kbVC600 kbGrpDSODBC kbSQLProg 
	Technology        : kbVCsearch kbAudDeveloper kbVC420 kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : :4.2,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
