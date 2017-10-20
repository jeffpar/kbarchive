---
layout: page
title: "Q315359: PRB: Properties Truncated When OLE DB Provider for SQL Svr Used"
permalink: /kb/315/Q315359/
---

## Q315359: PRB: Properties Truncated When OLE DB Provider for SQL Svr Used

{% raw %}

	Article: Q315359
	Product(s): Internet Information Server
	Version(s): 2.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Index Server version 2.0, used with:
	   - the operating system: Microsoft Windows NT 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the OLE DB provider for Microsoft SQL Server, Index Server 2.0 may
	truncate properties.
	
	CAUSE
	=====
	
	Index Server 2.0 incorrectly converts strings for SQL Server.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, upgrade to Microsoft Windows 2000 or later.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Index Server 2.0.
	
	This problem was corrected in Index Server 3.0.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbIdxServSearch kbAudDeveloper
	Version           : :2.0,4.0
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
