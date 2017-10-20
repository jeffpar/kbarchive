---
layout: page
title: "Q170588: Snacfg.exe /Addpartner Option Fails in SNA 3.0 SP1"
permalink: /kb/170/Q170588/
---

## Q170588: Snacfg.exe /Addpartner Option Fails in SNA 3.0 SP1

{% raw %}

	Article: Q170588
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you add a dependent LU 6.2 session to SNA Server using the Snacfg.exe
	command line utility using the /Addpartner option, the process appears to
	complete successfully. However, the following message appears when opening SNA
	Server Manager after adding the LU:
	
	  Deleting Unpartnered Dependent Lus.
	
	The LU that was added using SNACFG does not appear in SNA Server Manager.
	
	CAUSE
	=====
	
	The /Addpartner option in the SNA Server 3.0 Service Pack 1 (SP1) version of
	Snacfg.exe fails to correctly partner the LU specified when writing to the
	Com.cfg. Errors in reading partnership records in the Com.cfg lead to problems
	when subsequent fields are read.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server 3.0 SP1. This problem
	was corrected in the latest SNA Server version 3.0 U.S. Service Pack. For
	information on obtaining this Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300SP1
	Version           : WINDOWS:3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
