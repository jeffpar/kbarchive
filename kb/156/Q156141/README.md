---
layout: page
title: "Q156141: PRB: Default Values Not Shown in Input Parameters Dialog Box"
permalink: /kb/156/Q156141/
---

## Q156141: PRB: Default Values Not Shown in Input Parameters Dialog Box

{% raw %}

	Article: Q156141
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
	
	When you execute or debug any stored procedure with default value parameters,
	the Execute Stored Procedure dialog box does not show the default values.
	
	CAUSE
	=====
	
	Open Database Connectivity (ODBC) and SQL Server do not provide any means to
	retrieve the default values for a stored procedure.
	
	RESOLUTION
	==========
	
	The default values are correctly passed to the stored procedure when you do not
	enter explicit values inside the Execute Stored Procedure dialog box.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbProgramming kbDatabase kbDebug kbEEdition kbMFC kbSQL kbVC420 kbVC500 kbVC600 kbGrpDSODBC kbSQLProg 
	Technology        : kbVCsearch kbAudDeveloper kbVC420 kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : :4.2,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
