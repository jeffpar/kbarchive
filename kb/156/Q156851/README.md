---
layout: page
title: "Q156851: PRB:Run to Cursor and Breakpoints Don't Work After Debug.Break"
permalink: /kb/156/Q156851/
---

## Q156851: PRB:Run to Cursor and Breakpoints Don't Work After Debug.Break

{% raw %}

	Article: Q156851
	Product(s): Microsoft C Compiler
	Version(s): 4.2
	Operating System(s): 
	Keyword(s): kbProgramming kbtool kbDebug kbEEdition kbSQL kbVC kbSQLProg
	Last Modified: 15-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	"Run to cursor" and breakpoints do not work after Debug.Break when debugging a
	SQL Server stored procedure on Windows 95.
	
	
	RESOLUTION
	==========
	
	Debug.Break is not supported when debugging a SQL stored procedure. This is by
	design.
	
	When debugging a SQL stored procedure, the debugger always stops on the first
	line of executable code in the stored procedure. You can then set breakpoints
	and use the "Run to cursor" feature.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start debugging a SQL Server stored procedure and immediately select Break
	  from the Debug menu.
	
	
	2. Right-click the stored procedure window and select the option "Run to
	  Cursor".
	
	The stored procedure will run to completion. It will not stop at cursor. If there
	are additional breakpoints, these will not be hit.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbProgramming kbtool kbDebug kbEEdition kbSQL kbVC kbSQLProg 
	Technology        : kbVCsearch kbAudDeveloper kbVC420
	Version           : :4.2
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
