---
layout: page
title: "Q170864: Error Trying to Run ADO When ASP Installed w/ SQL Server Running"
permalink: /kb/170/Q170864/
---

## Q170864: Error Trying to Run ADO When ASP Installed w/ SQL Server Running

{% raw %}

	Article: Q170864
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): Winnt:3.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 12-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to run any of the Active Data Object (ADO) examples that are
	included with the Microsoft Active Server Pages (ASP) roadmap, you will get the
	following error messages:
	
	  Server object error 'ASP 0177:800401f3'
	
	  Server.CreateObject Failed
	
	-and-
	
	  The call to Server.CreateObject failed. The requested object instance cannot
	  be created.
	
	CAUSE
	=====
	
	You have Microsoft SQL Server installed on this server, and the SQL Server
	services are running when you installed Active Server Pages. The ADO Dlls were
	not registered due to SQL Server services that were running.
	
	RESOLUTION
	==========
	
	Uninstall Active Server Pages by selecting Start, Programs, Microsoft Internet
	Server (common), and clicking Active Server Pages Uninstall.
	
	Stop all SQL services from Control Panel, Services.
	
	Install Active Server Pages. The ADO Dlls should be registered correctly.
	
	Test by running some of the ADO samples in the ASP roadmap. They should work.
	
	From Control Panel, Services start all the SQL Server services.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbiisSearch kbiis300
	Version           : Winnt:3.0
	Hardware          : ALPHA x86
	
	=============================================================================
	

{% endraw %}
