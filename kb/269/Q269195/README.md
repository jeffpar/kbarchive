---
layout: page
title: "Q269195: Active Directoy MA Does Not Allow DN"
permalink: /kb/269/Q269195/
---

## Q269195: Active Directoy MA Does Not Allow DN

	Article: Q269195
	Product(s): Microsoft Windows NT
	Version(s): 2.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Metadirectory Services, version 2.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the Management Agent (MA) logon information used to connect to Active
	Directory is specified as a distinguished name (DN), the MA cannot locate Active
	Directory. The operator's log may contain an error message similar to the
	following:
	
	  ERR_00 0590 00/07/20 14:54:10.202 (AD-MA_doSchemaDiscovery) Couldn't bind to
	  bpdomain.local: LDAP error 49, Invalid Credentials.
	
	CAUSE
	=====
	
	This behavior occurs because the MA requires the user's credentials to be set up
	either as a user principal name, for example, user@domain.com, or in down-level
	domain format, for example, domain\user.
	
	RESOLUTION
	==========
	
	To resolve this behavior, you must set up the user's credentials either as a
	user principal name, or in down-level domain format.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: metadirectory, via, zoomit, adma
	
	======================================================================
	Keywords          :  
	Technology        : kbMMSSearch kbMMS220
	Version           : :2.2
	Issue type        : kbprb
	
	=============================================================================
	
