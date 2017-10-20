---
layout: page
title: "Q164741: PRB: Form Cannot Find Stored Procedure via Data Environment"
permalink: /kb/164/Q164741/
---

## Q164741: PRB: Form Cannot Find Stored Procedure via Data Environment

{% raw %}

	Article: Q164741
	Product(s): Microsoft FoxPro
	Version(s): 3.0b 5.0 5.0a 6.0
	Operating System(s): 
	Keyword(s): kberrmsg kbHWMAC kbvfp kbvfp300b kbvfp500 kbvfp500a kbvfp600
	Last Modified: 21-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0b, 5.0, 5.0a, 6.0 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to execute a stored procedure of a database from within a form, the
	following error message appears:
	
	  File '<procedure name>' does not exist
	
	The user can choose to Cancel, Suspend, Ignore, or get Help. This appears to only
	happen when the stored procedure is not in the currently selected database.
	
	RESOLUTION
	==========
	
	You may do either of the following to resolve this issue:
	
	- Issue an OPEN DATABASE <database name> command in the Load Event of the
	  form.
	
	  -or-
	
	- Issue SET DATABASE TO <database name> in the Init Event of the form.
	
	STATUS
	======
	
	This behavior is by design. Stored procedures may only be called when the
	database is the active, or selected, database.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a database, and add a table and a Stored Procedure to it.
	
	2. Create a form, and add the table to the Data Environment.
	
	3. Drag the table onto the form to create a Grid.
	
	4. Add a command button to the form, and in the Click Event call the stored
	  procedure. (Ensure that the DBC is closed prior to running the form.)
	
	5. When the error is returned, click Ignore and on the Standard Toolbar click
	  the DBC. Note the procedure is called successfully.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbHWMAC kbvfp kbvfp300b kbvfp500 kbvfp500a kbvfp600 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : 3.0b 5.0 5.0a 6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
