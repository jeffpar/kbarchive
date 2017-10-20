---
layout: page
title: "Q164525: PRB: Visual C++ Setup Message From MSDN Universal CD is Wrong"
permalink: /kb/164/Q164525/
---

## Q164525: PRB: Visual C++ Setup Message From MSDN Universal CD is Wrong

{% raw %}

	Article: Q164525
	Product(s): Microsoft C Compiler
	Version(s): 4.2
	Operating System(s): 
	Keyword(s): kberrmsg kbProgramming kbDebug kbEEdition kbSQL kbVC kbSQLProg
	Last Modified: 04-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you setup the Visual C++ 4.2 Enterprise Edition that comes with MSDN
	Universal Subscription, the following error message appears after completion:
	
	  To enable SQL Debugging, you must run the SQL Server Debugging
	  Component Setup found on CD2...
	
	CD2 for Visual C++ Enterprise edition version 4.2 is not present in MSDN
	Universal subscription.
	
	CAUSE
	=====
	
	This message was correct for the standalone version of Visual C++ Enterprise
	Edition.
	
	In the MSDN Universal subscription, the SQL Server Debugging Component folder,
	Sql_sp1, was moved to the same CD that contains Visual C++ Enterprise Edition.
	
	The setup message was not updated to reflect the new location.
	
	
	RESOLUTION
	==========
	
	Run the setup from the Sql_sp1 subdirectory on Visual C++ 4.2 CD to install the
	SQL Server Debugging Component.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbProgramming kbDebug kbEEdition kbSQL kbVC kbSQLProg 
	Technology        : kbVCsearch kbAudDeveloper kbVC420 kbVC32bitSearch
	Version           : 4.2
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
