---
layout: page
title: "Q160912: PRB: Remote View to SQL Server with Logical Values"
permalink: /kb/160/Q160912/
---

## Q160912: PRB: Remote View to SQL Server with Logical Values

{% raw %}

	Article: Q160912
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,6.0
	Operating System(s): 
	Keyword(s): kbvfp300 kbvfp300b kbvfp500 kbvfp600
	Last Modified: 13-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to create a Remote View and try to filter based on logical .T. or
	.F., the following error could occur:
	
	  Connectivity error:[Microsoft][ODBC SQL Server Driver][SQL Server]Line 1:
	  Incorrect syntax near '.'.
	
	CAUSE
	=====
	
	SQL Server stores logical values as 1 or 0.
	
	RESOLUTION
	==========
	
	Under the filter tab of the Remote View place a 1 or 0 for the Example
	criterion. If the desired records would contain .T. place a 1, and if .F. place
	a 0.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open a Database Container with the command MODIFY DATA <dbc name>.
	
	2. Right-click in the Database Designer and select New Remote View.
	
	3. Select New View from the resulting dialog box and select a SQL Server Data
	  Source from either the Connections or Available Data Sources.
	
	4. Select a table from the SQL Server database that has a logical field.
	
	5. Add all of the fields to the Selected fields.
	
	6. Select the Filter tab. Under Field name, choose the logical field.
	
	7. For the Criteria choose "Like" and under Example, enter ".T.".
	
	8. Run the Query and note that the error appears. By simply changing the ".T."
	  to the number "1," you enable the query to perform correctly.
	
	Additional query words: vfoxwin kbdse
	
	======================================================================
	Keywords          : kbvfp300 kbvfp300b kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600
	Version           : WINDOWS:3.0,3.0b,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
