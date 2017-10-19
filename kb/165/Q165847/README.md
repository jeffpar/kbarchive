---
layout: page
title: "Q165847: Server/Domain Name Truncated in &quot;Open Subdomain&quot; Dialog Box"
permalink: /kb/165/Q165847/
---

## Q165847: Server/Domain Name Truncated in &quot;Open Subdomain&quot; Dialog Box

	Article: Q165847
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
	
	When using the Open Subdomain feature in SNA Manager for selecting either an SNA
	Server subdomain or Windows NT domain, you can type up to 15 characters, however
	only 14 characters are accepted.
	
	CAUSE
	=====
	
	A problem was found in the way SNA Manager handled this request.
	
	RESOLUTION
	==========
	
	SNA Manager now accepts 17 characters, and validates that it is less than 16
	characters if no leading "\" (backslash) is present.
	
	A fix to SNA Server 3.0 is available for this problem.
	
	
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
	
