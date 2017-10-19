---
layout: page
title: "Q161569: Event ID 5711 Fills Event Log on Primary Domain Controller"
permalink: /kb/161/Q161569/
---

## Q161569: Event ID 5711 Fills Event Log on Primary Domain Controller

	Article: Q161569
	Product(s): Microsoft Windows NT
	Version(s): WINNT:3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error occurs about every five minutes on the primary domain
	controller (PDC):
	
	  Event Id 5711 - Source: NETLOGON
	  Description: The partial synchronization request from the server <BDC>
	  completed successfully. X changes(s) has(have) been returned to the caller.
	
	Also, The following errors may occur on one or more backup domain controllers
	(BDCs):
	
	  Event Id 5730 - Source: NETLOGON
	  Description: Replication of the SAM Global Group "Rid: 0x201" from primary
	  domain controller <PDC> failed with the following error:
	  Cannot perform this operation on built-in accounts.
	
	  Event Id 5731 - Source: NETLOGON
	  Description: Replication of the BUILTIN Local Group "Rid: 0x220" from primary
	  domain controller <PDC> failed with the following error:
	  Cannot perform this operation on built-in accounts.
	
	  Event Id 5716 - Source: NETLOGON
	  Description: The partial synchronization replication of the BUILTIN database
	  from the primary domain controller <PDC> failed with the following
	  error:
	  Cannot perform this operation on built-in accounts.
	
	CAUSE
	=====
	
	A built-in account may have been modified. For example, the administrator for
	the domain may have been removed from the Administrators group on the domain
	controller. Other changes to group memberships that can cause these errors are:
	
	- Making the Administrator's account a non-Administrator account.
	
	- Disabling the Administrator's account by clicking to select the "disable
	  account" check box.
	
	- Setting the Administrator's account to expire.
	
	- Removing the Domain Admins global group from the Administrators local group.
	
	- Removing Administrator from the Domain Admins global group.
	
	RESOLUTION
	==========
	
	To resolve these problems, reverse any such modifications to built-in accounts
	and built-in groups.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5, 3.51,
	and 4.0. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt complete fail repl sync
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WINNT:3.5 3.51 4.0
	Issue type        : kbbug
	
	=============================================================================
	
