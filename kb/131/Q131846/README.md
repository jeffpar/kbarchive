---
layout: page
title: "Q131846: BUG: Deleted Rows Show w/ 'Show Deleted Rows' Option Cleared"
permalink: kb/131/Q131846/
---

## Q131846: BUG: Deleted Rows Show w/ 'Show Deleted Rows' Option Cleared

	Article: Q131846
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kbBug kbISS
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 2.0 
	-------------------------------------------------------------------------------
	
	BUG# QJet: 2262 (2.00.2317)
	
	SYMPTOMS
	========
	
	The Paradox, dBase, and FoxPro drivers will show the deleted rows even when the
	Show Deleted Rows option in the ODBC Setup dialog box is cleared.
	
	NOTE: The Microsoft Access driver does not exhibit this behavior.
	
	In the datasource setup, the default for Show Deleted Rows option is off.
	However, all the above drivers will still show the deleted records on a SELECT
	statement. It appears that the ODBCDDP.INI setting Deleted=Off has no effect
	initially.
	
	CAUSE
	=====
	
	The problem occurs only if you had never selected and cleared the Show Deleted
	check box.
	
	WORKAROUND
	==========
	
	Select and clear the Show Deleted Rows check box in the ODBC Setup dialog box to
	resolve the problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the 16-bit and 32-bit ODBC
	version 2.0 Paradox, FoxPro, and dBase drivers. We are researching this problem
	and will post new information here in the Microsoft Knowledge Base as it becomes
	available.
	
	Additional query words: odbc mfc desktop drivers
	
	======================================================================
	Keywords          : kbBug kbISS 
	Technology        : kbAudDeveloper kbODBCSearch kbODBC200
	Version           : WINDOWS:2.0
	Issue type        : kbbug
	
	=============================================================================
	
