---
layout: page
title: "Q159072: An Account That Still Has System Access May Be Deleted"
permalink: /kb/159/Q159072/
---

## Q159072: An Account That Still Has System Access May Be Deleted

{% raw %}

	Article: Q159072
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If LsarRemoveAccountRights is used to remove all privileges from an account, and
	no changes were made to the account's system access, the account will be
	deleted. This deletion will occur even if the account still has system access.
	The account should only be deleted if there are no privileges and the account
	has no system access.
	
	CAUSE
	=====
	
	LsarRemoveAccountRights is not checking for system access unless system access
	is changed. This will result in LsarRemoveAccountRights treating the account as
	if it has no system access. Therefore, if all privileges are removed, the
	account will be deleted.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT version
	4.0. This problem was corrected in the latest Microsoft Windows NT 4.0 U.S.
	Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbenv kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	

{% endraw %}
