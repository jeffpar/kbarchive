---
layout: page
title: "Q166078: PRB: SQLSetDescField Appears to Call Itself"
permalink: /kb/166/Q166078/
---

## Q166078: PRB: SQLSetDescField Appears to Call Itself

{% raw %}

	Article: Q166078
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbinterop kbprogramming
	Last Modified: 10-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When SQLSetDescField is called, the ODBC 3.0 trace log may show two calls made
	to SQLSetDescField. The second call to SQLSetDescField may be embedded within
	the first, giving the appearance that SQLSetDescField called itself.
	
	CAUSE
	=====
	
	SQLSetDescField uses a helper function that has an extra copy of the trace
	function found in SQLSetDescField. This causes SQLSetDescField to show up twice
	in the trace log, giving the appearance that SQLSetDescField called itself.
	
	WORKAROUND
	==========
	
	Ignore the second call to SQLSetDescField in the trace log.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbprogramming 
	Technology        : kbAudDeveloper kbODBCSearch kbODBC300
	Version           : WINDOWS:3.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
