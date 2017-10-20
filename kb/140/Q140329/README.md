---
layout: page
title: "Q140329: Trust Relationships Fail with Large Number of Trusted Domains"
permalink: /kb/140/Q140329/
---

## Q140329: Trust Relationships Fail with Large Number of Trusted Domains

{% raw %}

	Article: Q140329
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Windows NT Backup Domain Controllers do not list all trusted domains during
	logon when there are more than twenty trust relationships.
	
	Trusted domain users from domains that do not show up in the Backup Domain
	Controller's list of domains during logon receive access denied errors when
	attempting to use resources on the Backup Domain Controller.
	
	CAUSE
	=====
	
	This occurs because the full list of trusted domains is not replicated to Backup
	Domain Controllers. Since the Backup Domain Controllers do not have a complete
	list of trusted domains, they do not setup a secure channel with Domain
	Controllers that exist in Domain accounts that did not replicate. This results
	in access denied errors on clients from trusted domains because there is no way
	for pass-through validation to occur.
	
	The complete list of trusted domains does not replicate to Backup Domain
	Controllers because Netlogon does not indicate all the trusted domain accounts
	to replicate. Replication fails when Netlogon calls the LSA to get the complete
	list of domain accounts to replicate during a synchronization. Netlogon fails
	because it replicates domain names when it receives STATUS_SUCCESS back from the
	LSA, however with a large number of trusted domain names the LSA may return
	STATUS_MORE_ENTRIES instead of STATUS_SUCCESS. The LSA returns
	STATUS_MORE_ENTRIES if the default buffer supplied by Netlogon (1k in size) is
	too small to hold the complete list of domain names. As a result, if there are
	too many domains to fit in the 1k buffer, Netlogon ignores all but the last
	group of domain names returned by the LSA when STATUS_SUCCESS is received.
	
	RESOLUTION
	==========
	
	This problem has been corrected in the latest Service Pack for Windows NT
	version 3.51.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: incomplete
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	

{% endraw %}
