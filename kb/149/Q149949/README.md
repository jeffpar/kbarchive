---
layout: page
title: "Q149949: Some Browsers May Fail to Connect When IIS Uses SSL"
permalink: /kb/149/Q149949/
---

## Q149949: Some Browsers May Fail to Connect When IIS Uses SSL

{% raw %}

	Article: Q149949
	Product(s): Internet Information Server
	Version(s): winnt:1.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 15-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 1.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Netscape Atlas and other newer web browsers may fail to connect to Microsoft
	Internet Information Server (IIS) when the server is using SSL.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server
	version 1.0. This problem was corrected in the latest Windows NT 3.51 U.S.
	Service Pack. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	IIS version 1.0 supports SSL version 2. Newer web browsers, such as Netscape's
	Atlas, support the newest version of SSL (version 3). When the web browser
	connects to IIS, it states that it is will use version 3 SSL. IIS does not
	recognize version 3 SSL clients; as a result, the connection is immediately
	dropped. This happens because the client never requests to use version 2 after
	version 3 is rejected by the server.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbiisSearch kbiis100
	Version           : winnt:1.0
	
	=============================================================================
	

{% endraw %}
