---
layout: page
title: "Q152156: Access Violation in Client Process During Authenticated RPC"
permalink: /kb/152/Q152156/
---

## Q152156: Access Violation in Client Process During Authenticated RPC

{% raw %}

	Article: Q152156
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	RPC client applications may result in an access violation (AV) while doing
	authenticated RPC. The problem occurs as an access violation in the client
	process.
	
	CAUSE
	=====
	
	The access violation is in the rpcrt4.dll function
	NdrpConformantVaryingArrayMarshall. This routine was attempting to marshal
	security context data when the Digital DCE call back routine was returning an
	error status.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51
	
	=============================================================================
	

{% endraw %}
