---
layout: page
title: "Q136774: PRB: Cannot Use Macro Substitution in Remote Views"
permalink: /kb/136/Q136774/
---

## Q136774: PRB: Cannot Use Macro Substitution in Remote Views

{% raw %}

	Article: Q136774
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	you can't use macro substitution within a remote view. This means that the
	following code is invalid:
	
	     whereclause = "authors.au_lname = 'RINGER'"
	
	     CREATE SQL VIEW test REMOTE CONNECT myconnect AS ;
	       SELECT * FROM authors WHERE &whereclause
	
	RESOLUTION
	==========
	
	To limit the result set of a view, consider using View Parameters. For
	information about view parameters, please see the "Creating Multi-Table Views"
	chapter of the Visual FoxPro "Developers Guide," under the heading "Limiting the
	Scope of a View."
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	When Visual FoxPro creates a remote or a local view, the SQL SELECT statement
	for the view is stored as a static string in the .dbc file. The .dbc file also
	stores the column definitions for the result set and other properties.
	
	The next time the view is opened, the entire SQL String is passed to the remote
	data source. Because a remote data source does not process Macro Substitution,
	Visual FoxPro cannot pass the macro to the server. However, you can use View
	Parameters to create the same effect as in this example:
	
	     parameter = "Ringer"
	
	     CREATE SQL VIEW test REMOTE CONNECT myconnect AS ;
	        SELECT * FROM authors WHERE authors.au_lname = ?parameter
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
