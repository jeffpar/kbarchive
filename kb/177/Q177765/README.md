---
layout: page
title: "Q177765: XADM: Version of Store Incompatible with Version of Admin Pgm"
permalink: /kb/177/Q177765/
---

## Q177765: XADM: Version of Store Incompatible with Version of Admin Pgm

{% raw %}

	Article: Q177765
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 19-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When creating an Active file using the Microsoft Exchange Administrator program
	and clicking Create Active File (steps to find this option are included below),
	the following error message may be displayed after you specify the file name and
	click OK:
	
	  The version of the Microsoft Exchange Information Store service is
	  incompatible with the version of the Microsoft Exchange Administrator
	  program. Make sure all components have matching versions.
	
	Steps to Create Active File:
	
	1. In the Administrator window, choose a server, and then choose Protocols.
	
	2. Double-click NNTP (News) Settings for the server.
	
	3. Click the Newsfeeds tab and then select Create Active File.
	
	CAUSE
	=====
	
	This error can be reported if the information store is not running or has shut
	down due to lack of disk space.
	
	WORKAROUND
	==========
	
	Restart the information store and create the active file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft Exchange Server
	version 5.5. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
