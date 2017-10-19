---
layout: page
title: "Q280107: MMC Shows &quot;Unknown&quot; Status When You Load Multiple ISAPI Filters"
permalink: /kb/280/Q280107/
---

## Q280107: MMC Shows &quot;Unknown&quot; Status When You Load Multiple ISAPI Filters

	Article: Q280107
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbDSupport kbiis400
	Last Modified: 21-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A global Internet Server Application Programming Interface (ISAPI) filter is
	loaded at the server level in the Internet Information Server (IIS) Snap-in.
	Although a global ISAPI filter can only be loaded once, it performs its intended
	function on every site that the server hosts.
	
	Alternately, ISAPI filters can be loaded for each site individually. Although
	this method is discouraged, it can be accomplished and function without any
	problems except that the IIS 4.0 Snap-in does not display the correct status in
	the Microsoft Management Console (MMC). After the ISAPI filter is loaded for the
	first Web site, the status of the ISAPI filter is displayed as "Unknown" for
	each subsequent load, even though the filter functions for every site that it is
	loaded for.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in IIS 5.0.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport kbiis400 
	Technology        : kbiisSearch kbiis400
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
