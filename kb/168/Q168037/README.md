---
layout: page
title: "Q168037: SNA Manager Fails to Display Status for Dependent APPC LUs"
permalink: /kb/168/Q168037/
---

## Q168037: SNA Manager Fails to Display Status for Dependent APPC LUs

	Article: Q168037
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	SNA Server Manager fails to display the User Name and Client for an APPC or CPIC
	application that is using a dependent LU6.2 session. Instead, the status
	information displays as:
	
	  User Name: <Not In Use>
	  Client: <n/a>
	
	CAUSE
	=====
	
	The problem with the dependent LU occurs because the session is created before
	there is an internal user record. Normally, internal user records are created
	first. When Manage is notified of an APPC session, it matches the data with an
	existing user record. In this case it fails to find a match.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server 3.0 and 3.0 Service
	Pack 1 (SP1). This problem was corrected in the latest SNA Server version 3.0
	U.S. Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	With the fix applied, Manage periodically refreshes the APPC session data so
	that after the user record is created, Manage gets the new APPC session info,
	and is able to match it with the user record.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
