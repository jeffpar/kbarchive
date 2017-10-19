---
layout: page
title: "Q179023: FIX: T-SQL Debugger Hangs When User Has No Execute Permission"
permalink: /kb/179/Q179023/
---

## Q179023: FIX: T-SQL Debugger Hangs When User Has No Execute Permission

	Article: Q179023
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 09-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using T-SQL debugger to debug stored procedures from Visual Basic, if a SQL
	Server login user does not have Execute permission granted to the extended
	stored procedure sp_sdidebug in Master database, Visual Basic comes to a halt.
	
	CAUSE
	=====
	
	The user needs to have rights to execute the extended stored procedure
	sp_sdidebug. The default access is for sa only.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Studio 97 Service
	Pack 3.
	
	Additional query words: sqlserver kbdse kbDSupport kbVBp kbVBp500bug kbVS97SP3fix
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB500
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
