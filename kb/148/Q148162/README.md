---
layout: page
title: "Q148162: Cannot Add Local Account to Local Group With NET LOCALGROUP"
permalink: /kb/148/Q148162/
---

## Q148162: Cannot Add Local Account to Local Group With NET LOCALGROUP

{% raw %}

	Article: Q148162
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the NET LOCALGROUP command to add or delete a local account to or
	from a local group on a Windows NT domain controller, the following error
	message appears:
	
	  There is no such global user or group: <local account>
	
	The command syntax is as follows:
	
	  net localgroup <local group> <local account> /<ADD or
	  DELETE>
	
	CAUSE
	=====
	
	When you use the NET LOCALGROUP command, the domain controller looks for
	accounts with the USER_NORMAL_ACCOUNT flag. Local accounts on a domain
	controller have the USER_TEMP_DUPLICATE_ACCOUNT flag.
	
	RESOLUTION
	==========
	
	To work around this problem, use User Manager for Domains to add or delete local
	accounts to local groups. Note that the local group and account must exists
	prior to using the "net localgroup <local group> <local account>
	/<ADD" command or the error above will be encountered. It is not necessary to
	delete user accounts from local groups when using using the /delete option
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Workstation and
	Server versions 3.51 and 4.0. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: prodnt acct grp security
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	

{% endraw %}
