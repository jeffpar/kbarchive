---
layout: page
title: "Q155056: IIS Security Concern Using Batch Files for CGI"
permalink: /kb/155/Q155056/
---

## Q155056: IIS Security Concern Using Batch Files for CGI

{% raw %}

	Article: Q155056
	Product(s): Internet Information Server
	Version(s): winnt:1.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 15-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 1.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Web clients that send Common Gateway Interface (CGI) requests to Internet
	Information Server (IIS) servers using batch files (.bat or .cmd) as CGI
	applications may gain undesired levels of access to the IIS server.
	
	CAUSE
	=====
	
	Internet Information Server 1.0 (IIS) allowed the use of batch files as CGI
	applications. Using batch files as CGI applications exposed several security
	issues in IIS because the batch file processes run in the context of the full
	Windows NT console command processor (cmd.exe).
	
	
	RESOLUTION
	==========
	
	Obtain the fix referenced below.
	
	STATUS
	======
	
	Batch file processing support was removed from the IIS product due to security
	concerns.
	
	Microsoft has confirmed this to be a problem in IIS version 1.0. This problem was
	corrected in the latest Windows NT 3.51 U.S. Service Pack. For information on
	obtaining the Service Pack, query on the following word in the Microsoft
	Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodiis
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbiisSearch kbiis100
	Version           : winnt:1.0
	
	=============================================================================
	

{% endraw %}
