---
layout: page
title: "Q288738: Queries with Periods in Document Name Fail to Find Text in Files"
permalink: /kb/288/Q288738/
---

## Q288738: Queries with Periods in Document Name Fail to Find Text in Files

{% raw %}

	Article: Q288738
	Product(s): Internet Information Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Index Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you index a document on a server using Index Server 2.0, if the document
	contains a name that uses initials (for example W.A. Wilde), the query for that
	string may appear to be case sensitive. For example, if you query for "W.A.
	Wilde," Index Server finds the document; however, if you query for "W.A. wilde,"
	Index Server fails to find the document.
	
	WORKAROUND
	==========
	
	Although this appears to be a case sensitive issue, if you replace the periods
	with spaces, Index Server will find the document.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Index Server 2.0.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbIdxServSearch kbAudDeveloper kbIdxServ200
	Version           : :2.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
