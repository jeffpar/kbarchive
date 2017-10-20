---
layout: page
title: "Q138092: PRB: &quot;Alias Not Found&quot; When Verifying an Expression"
permalink: /kb/138/Q138092/
---

## Q138092: PRB: &quot;Alias Not Found&quot; When Verifying an Expression

{% raw %}

	Article: Q138092
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you try to verify an expression in the Expression Builder of a form or a
	report, you may receive an error "Alias <table> not found" even when the
	table is in the data environment of the form or report.
	
	RESOLUTION
	==========
	
	To correct the error and verify your expression, open the table in one of the
	work areas or use the table by using the USE command in the Command window.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
