---
layout: page
title: "Q172518: Security Is Not Available for Host Security Commands in SNACFG"
permalink: kb/172/Q172518/
---

## Q172518: Security Is Not Available for Host Security Commands in SNACFG

	Article: Q172518
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
	
	When using the SNACFG command-line utility to modify Host Security settings on a
	computer running SNA Server using an "update cache" or "modify cache" request,
	the user issuing the command is not validated in the Windows NT domain of the
	user whose account is being modified.
	
	You are using the SNACFG command-line utility to modify Host Security settings on
	an SNA Server computer. When you use an "update cache" or "modify cache"
	request, your login is not validated in the Windows NT domain of the user whose
	account is being modified. Although your login may have been validated in your
	own domain, if you modify a user's account in another domain with either of
	these two requests, your login is not validated in the second domain.
	
	CAUSE
	=====
	
	Snacfg.exe is not coded to validate the user issuing the command against the
	Domain User Account Database.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0 and 3.0
	Service Pack 1 (SP1). This problem was corrected in the latest SNA Server
	version 3.0 U.S. Service Pack. For information on obtaining this Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	With the fix applied, your privilege level is tested when you issue an "update
	cache" or "modify cache" request. When issuing such a request, you must either
	have Administrator privileges, or must be modifying your own account.
	
	The test is based on a comparison of the issuing user and the Windows NT account
	in the update cache request. The user record is first tested for privilege in
	the Windows NT domain in which the to-be-modified Windows NT account is defined.
	If the user does not have sufficient privilege, a check is done to verify that
	the issuing user matches the to-be-modified Windows NT account and the correct
	Windows NT password is included in the request.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
