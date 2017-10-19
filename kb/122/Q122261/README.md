---
layout: page
title: "Q122261: Err Msg: The Trust Relationship...Could Not Be Verified..."
permalink: /kb/122/Q122261/
---

## Q122261: Err Msg: The Trust Relationship...Could Not Be Verified...

	Article: Q122261
	Product(s): Microsoft Windows NT
	Version(s): 3.1,3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 20-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When establishing a trust between two domains, if there is a session already
	established between the two domain controllers the following message appears on
	the Windows NT 3.x domain controller:
	
	  The trust relationship between XXXX and YYYY could not be verified at this
	  time. If you find that it was not established, contact the administrator of
	  the XXXX domain and verify that it has been permitted YYYY to trust.
	
	On a Windows NT 4.0 domain controller, the following error message appears:
	
	  The trust relationship cannot be verified because this machine has a session
	  open to <computer name>, the Primary Domain Controller of domain XXXX.
	  Do you wish to continue setting up the trust relationship?
	
	(<computer name> is the machine name for the PDC, XXXX is the trusted
	domain, and YYYYY is the trusting domain.)
	
	CAUSE
	=====
	
	The trust may have been established and may be working correctly. The reason
	this message appears is that there was already a session established between the
	domain controllers under a user account (specifically, the session would have to
	have been established from YYYY to XXXX). This session keeps the special trust
	verification from being sent because the Windows NT redirector
	(LanmanWorkstation) can establish remote sessions under only one user account
	per remote server.
	
	
	
	Additional query words: prodnt Trust Domain
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNT310Search
	Version           : :3.1,3.5,3.51,4.0
	
	=============================================================================
	
