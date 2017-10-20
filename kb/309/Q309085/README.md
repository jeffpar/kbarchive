---
layout: page
title: "Q309085: InetInfo AV When Using OLE DB Provider and Linked Server"
permalink: /kb/309/Q309085/
---

## Q309085: InetInfo AV When Using OLE DB Provider and Linked Server

{% raw %}

	Article: Q309085
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): kbDSupport Kbhostintegserv2000
	Last Modified: 21-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Microsoft OLE DB Provider for DB2 to configure a linked server
	to DB2, an access violation (AV) may occur in INETINFO.exe when you SELECT (for
	example, to pull) a column of data that contains a unique key.
	
	CAUSE
	=====
	
	The OLE DB Provider for DB2 incorrectly returns the primary and unique key on
	the primary key schema rowset.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Host Integration
	Server 2000.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport Kbhostintegserv2000 
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
