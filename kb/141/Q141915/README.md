---
layout: page
title: "Q141915: PRB: Syntax Error with the Query Wizard"
permalink: /kb/141/Q141915/
---

## Q141915: PRB: Syntax Error with the Query Wizard

{% raw %}

	Article: Q141915
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Query Wizard or the Local View Wizard to build a query or a
	local view, the wizard generates a syntax error. The only selection criteria are
	the fields you use. This only happens with a specific table named group.
	
	CAUSE
	=====
	
	The table name is not valid. The Query Wizard generates a SELECT-SQL statement.
	In this case, the SELECT statement looks like this:
	
	     SELECT GROUP.* from GROUP
	
	It generates a "Syntax error" because the name group is invalid.
	
	WORKAROUND
	==========
	
	Rename the table.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Other table names that generate an error are Order and From.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a table named group.
	
	2. Click Wizard and then Query Wizard on the Tools menu.
	
	3. Select Query Wizard or Local View Wizard.
	
	4. Open the group table, and select all the fields.
	
	5. Click the Finish button.
	
	6. When the last dialog is displayed, click the Preview button. A "Syntax error"
	  is displayed.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	

{% endraw %}
