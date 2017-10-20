---
layout: page
title: "Q165747: SNA Win95/NT Client Using Named Pipes Will Not Have the Data"
permalink: /kb/165/Q165747/
---

## Q165747: SNA Win95/NT Client Using Named Pipes Will Not Have the Data

{% raw %}

	Article: Q165747
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The connection between an SNA Server 3.0 Windows 95 or Windows NT client using
	named pipes and an SNA Server is not encrypted even when the Data Encryption
	feature is enabled.
	
	CAUSE
	=====
	
	The SNA Server was not checking the Data Encryption Flag and was granting the
	client access without encryption.
	
	RESOLUTION
	==========
	
	The SNA Server will now check the Data Encryption Flag.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
