---
layout: page
title: "Q134213: BUG: Init Method for Cursor Object has Incorrect Data Session"
permalink: /kb/134/Q134213/
---

## Q134213: BUG: Init Method for Cursor Object has Incorrect Data Session

{% raw %}

	Article: Q134213
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS: 3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbenv kbvfp300bBUG kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 24-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When running a report with a private data session, the Init method of a cursor
	or relation object with the data environment does not run with the correct data
	session selected, but instead runs with the default data session (1).
	
	RESOLUTION
	==========
	
	There is no way to know which data session should be selected with the SET DATA
	SESSION command because reports do not have a data session number property as
	forms do. As a result, any code in the Init method of a cursor or relation
	object is unable to reliably access the work areas of the proper data session,
	so the code must be placed in a different object method. A suggested alternative
	is to move the code from the Init Method of the cursor or relation object to the
	Init Method of the Data Environment object.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a new report.
	
	2. On the Report menu, click Private Data Session.
	
	3. Open the data environment for the report.
	
	4. Add a table to the data environment.
	
	5. Select the properties for the CURSOR1 object in the data environment.
	
	6. Add a SUSPEND command to the Init method for the CURSOR1 object.
	
	7. Preview the report.
	
	After the SUSPEND command executes, open the View window and you will see that
	the default data session is selected, not the private data session.
	
	Additional query words: kbvfp300 kbvfp500 kbvfp600
	
	======================================================================
	Keywords          : kbenv kbvfp300bBUG kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS: 3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
