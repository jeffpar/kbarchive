---
layout: page
title: "Q319165: Documentation Error in Host Integration Server 2000 SDK"
permalink: /kb/319/Q319165/
---

## Q319165: Documentation Error in Host Integration Server 2000 SDK

{% raw %}

	Article: Q319165
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): kbenv kbdocerr
	Last Modified: 15-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Host Integration Server 2000 Software Development Kit (SDK) includes the
	following incorrect information about the Cache Authentication property of the
	OLE DB Provider for DB2:
	
	  This parameter is equivalent to the DBPROP_CACHE_AUTHINFO OLE DB property ID.
	
	RESOLUTION
	==========
	
	To resolve this problem, note that the Cache Authentication property is actually
	equivalent to the DBPROP_AUTH_CACHE_AUTHINFO OLE DB property ID.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	Additional query words: his
	
	======================================================================
	Keywords          : kbenv kbdocerr 
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
