---
layout: page
title: "Q155058: IIS May Stop Responding after Processing Several Client Queries"
permalink: /kb/155/Q155058/
---

## Q155058: IIS May Stop Responding after Processing Several Client Queries

{% raw %}

	Article: Q155058
	Product(s): Internet Information Server
	Version(s): winnt:1.0,1.0c
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 15-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 1.0, 1.0c 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Internet Information Server (IIS) may stop responding after processing several
	Universal Resource Locator (URL) requests for an .htm file with additional
	relational operators as in the following example:
	
	  http://www.server.com/default.htm/...and so on...
	
	CAUSE
	=====
	
	IIS enters an infinite loop trying to service URL requests for .htm files with
	additional relational operators. This behavior would eventually result in
	several server pool threads in infinite loops taking CPU cycles and causing IIS
	to stop responding.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in IIS versions 1.0 and 1.0c. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodiis
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbiisSearch kbiis100
	Version           : winnt:1.0,1.0c
	
	=============================================================================
	

{% endraw %}
