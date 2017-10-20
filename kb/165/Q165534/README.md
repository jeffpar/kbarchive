---
layout: page
title: "Q165534: Link Service Not Configured with Short Length of Service Title"
permalink: /kb/165/Q165534/
---

## Q165534: Link Service Not Configured with Short Length of Service Title

{% raw %}

	Article: Q165534
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
	
	When configuring link services on SNA Server Manager, if the link service title
	string is less than 11 characters, you will receive the following messages:
	
	  Link Service Error - This link service cannot be configured using SNA Server
	  manager. To configure this link service, run the External Link Service tool
	  from tools menu.
	
	CAUSE
	=====
	
	The DWORD variable containing the size of a buffer used to store a registry
	value wasn't being set, and therefore the value containing the link service DLL
	name could not be determined.
	
	RESOLUTION
	==========
	
	This fix sets the buffer to the size it was before calling RegQueryValueEx.
	
	WORKAROUND
	==========
	
	You can change the link service title to a length greater than 11 character in
	the registry.
	
	The value in the registry is:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services
	     \SnaSdlcx\Parameters\Title
	
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
