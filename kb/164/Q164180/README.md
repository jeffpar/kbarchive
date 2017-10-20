---
layout: page
title: "Q164180: Full App Event Log Prevents Virtual Root Enumeration &amp; Indexing"
permalink: /kb/164/Q164180/
---

## Q164180: Full App Event Log Prevents Virtual Root Enumeration &amp; Indexing

{% raw %}

	Article: Q164180
	Product(s): Internet Information Server
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Index Server version 1.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If the Application Event Log is full when the W3SVC service is started, Index
	Server may not enumerate and index virtual roots.
	
	CAUSE
	=====
	
	Index Server adds an event to the Application Event Log when it adds a virtual
	root to the list to be indexed. If the Event Log is full, Index Server will not
	add the root to the list to be indexed. Therefore, the catalog will not get
	updated, and the queries will return incorrect results.
	
	
	WORKAROUND
	==========
	
	To fix this issue, clear out the Application Event Log in Event Viewer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Index Server version
	1.0. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbIdxServSearch kbAudDeveloper kbIdxServ100
	Version           : :1.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
