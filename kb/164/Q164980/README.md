---
layout: page
title: "Q164980: IIS Memory Leak When Using IDC and Microsoft Access"
permalink: /kb/164/Q164980/
---

## Q164980: IIS Memory Leak When Using IDC and Microsoft Access

{% raw %}

	Article: Q164980
	Product(s): Internet Information Server
	Version(s): WinNt:1.0,2.0,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 1.0, 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Internet Information Server (IIS) to connect to a Microsoft Access
	database, a slow memory leak may occur over a long period of time. This memory
	leak depends on how heavily the server is used and how often the database is
	queried. It is confirmed that this memory leak happens regardless of the query
	used.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Internet Information
	Server versions 1.0, 2.0, and 3.0. This problem has been fixed in Internet
	Information Server versions 4.0
	
	WORKAROUND
	==========
	
	To work around this problem, stop the WWW service periodically. You can do this
	manually or by using a batch file to run the following commands:
	
	  net stop w3svc
	  net start w3svc
	
	Additional query words: execute
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis300 kbiis200 kbiis100
	Version           : WinNt:1.0,2.0,3.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
