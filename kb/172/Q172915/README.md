---
layout: page
title: "Q172915: Host Security Fails to Enumerate Memberships of Local Groups"
permalink: /kb/172/Q172915/
---

## Q172915: Host Security Fails to Enumerate Memberships of Local Groups

	Article: Q172915
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If a cached host user ID and password are configured for a user within a host
	security domain, SNA Server fails to map the cached user ID and password,
	causing the user's host logon to fail.
	
	This problem occurs when the Windows NT user is a member of a global group that
	has been granted membership in a local group associated with the host security
	domain. If the user is explicitly added to the local group, the account mapping
	is performed correctly.
	
	CAUSE
	=====
	
	The host security components determine if a user is a member of a local group
	associated with a host security domain. If the local group contains global
	groups, those global groups are not correctly enumerated by SNA Server host
	security, causing no password cache lookup to occur.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0 and 3.0
	Service Pack 1 (SP1). This problem was corrected in the latest SNA Server
	version 3.0 U.S. Service Pack. For information on obtaining this Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
