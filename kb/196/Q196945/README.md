---
layout: page
title: "Q196945: Host Account Manager May Display User Password In Clear Text"
permalink: /kb/196/Q196945/
---

## Q196945: Host Account Manager May Display User Password In Clear Text

{% raw %}

	Article: Q196945
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If a new user account is created using Windows NT User Manager and an SNA Server
	host security domain is configured with "User ID is Mapped" and "Password is
	Mapped", the Host Account Manager may display the new user's password if the
	"Use Windows NT Password" radio button is clicked.
	
	CAUSE
	=====
	
	When a new user is added to the host cache, the SNA Server Host Account Manager
	normally indicates the user password as <Uninitialized>. However, when a
	new user is added to Windows NT and password caching was configured, and the
	password radio button is switched, the actual user password could appear in
	clear text.
	
	RESOLUTION
	==========
	
	Microsoft has confirmed this to be a problem in SNA Server versions 4.0 and 4.0
	Service Pack 1. This problem was corrected in the latest SNA Server version 4.0
	U.S. Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft SNA Server 4.0 and
	4.0 Service Pack 1.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1
	Version           : WINDOWS:4.0,4.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
