---
layout: page
title: "Q163264: APPC Password Substitution Fails Intermittently"
permalink: /kb/163/Q163264/
---

## Q163264: APPC Password Substitution Fails Intermittently

{% raw %}

	Article: Q163264
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,2.11 SP1
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 2.11 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	APPC password substitution fails intermittently. The APPC Password Substitution
	feature was added in SNA Server 2.11.
	
	CAUSE
	=====
	
	The password substitution code in the APPC library occasionally generates an
	incorrect password token. The incorrect token causes conversation initiation to
	fail with a security error. Because the error occurrs very rarely, it is
	typically seen only in situations where a large number of conversations are
	started in a short time. For example, an ODBC application may generate thousands
	of queries an hour, and suddenly fail with a security error after two hours of
	execution.
	
	RESOLUTION
	==========
	
	The SNA Server and SNA Server client APPC libraries have been updated to correct
	this problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 2.11 and
	2.11SP1. This problem has been corrected in the latest U.S. service pack for SNA
	Server version 2.11. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	REFERENCES
	==========
	
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbnetwork kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ211 kbSNAServ211SP1
	Version           : WINDOWS:2.11,2.11 SP1
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
