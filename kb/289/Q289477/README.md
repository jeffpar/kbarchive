---
layout: page
title: "Q289477: Err Msg Installing DB2 ODBC Driver: Could Not Load Wappc32.dll"
permalink: /kb/289/Q289477/
---

## Q289477: Err Msg Installing DB2 ODBC Driver: Could Not Load Wappc32.dll

{% raw %}

	Article: Q289477
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 23-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install only the Microsoft ODBC Driver for DB2 from the Host
	Integration Server CD-ROM (and nothing else from this disc), and then go into
	the Windows ODBC configuration and attempt to configure a TCP/IP connection
	directly to the host, you may receive the following error message:
	
	  Could not load Wappc32.dll
	
	CAUSE
	=====
	
	This behavior occurs only when you edit the data source. However, it does not
	hinder data source connectivity.
	
	WORKAROUND
	==========
	
	To prevent this behavior from occurring, install the SNA Application Support
	option in addition to the Data Integration options already installed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
