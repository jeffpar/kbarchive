---
layout: page
title: "Q89890: ERR: &quot;No Fields to Process&quot; in FoxBASE+ for the Macintosh"
permalink: /kb/089/Q89890/
---

## Q89890: ERR: &quot;No Fields to Process&quot; in FoxBASE+ for the Macintosh

{% raw %}

	Article: Q89890
	Product(s): Microsoft Fox Miscellaneous Products
	Version(s): MACINTOSH:2.01
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxBASE+ for Macintosh, version 2.01 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The
	
	  No fields to process
	
	error message appears in FoxBASE+/Mac.
	
	CAUSE
	=====
	
	The user is attempting to browse a database when Set Fields is set but no active
	fields are specified.
	
	RESOLUTION
	==========
	
	To avoid this problem, choose Setup from the Database menu, and select the Off
	option button next to the Set Fields check box.
	
	MORE INFORMATION
	================
	
	When fields and filters are specified in FoxBASE+/Mac because Set Fields is
	specified, and no Active Fields are specified, FoxBASE+/Mac sets fields to an
	empty list. Browsing the database when no fields are specified causes the
	
	  No fields to process
	
	message to appear.
	
	Additional query words: 2.01 err msg fox base errmsg
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbFoxproSearch kbFoxBASE201Mac kbFoxBASESearch
	Version           : MACINTOSH:2.01
	
	=============================================================================
	

{% endraw %}
