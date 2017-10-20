---
layout: page
title: "Q161769: Admin Select Domain Displays Local Configuration Instead"
permalink: /kb/161/Q161769/
---

## Q161769: Admin Select Domain Displays Local Configuration Instead

{% raw %}

	Article: Q161769
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 2.11 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When focusing on a remote server using the SNA Admin Select Domain function, the
	local subdomain is displayed instead of the remote server subdomain. This
	problem occurs if the remote server is configured with a distributed link
	service.
	
	CAUSE
	=====
	
	The Snadmod.dll file incorrectly indicates that a remote server is actually in
	the local subdomain if the remote server is configured with a distributed link
	service.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the hotfix mentioned below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server 2.11 Service Pack 1.
	
	
	A supported fix is now available. Unless you are severely impacted by this
	specific problem, Microsoft recommends that you wait for the next Service Pack
	that contains this fix. Contact Microsoft Technical Support for more
	information.
	
	
	
	Additional query words: prodsna SP1
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ211SP1
	Version           : WINDOWS:2.11 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
