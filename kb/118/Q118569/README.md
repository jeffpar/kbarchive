---
layout: page
title: "Q118569: Domain Guests Group Not Created On Upgrade"
permalink: kb/118/Q118569/
---

## Q118569: Domain Guests Group Not Created On Upgrade

	Article: Q118569
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Domain Guests group is not created when you upgrade Windows NT 3.1 to
	Windows NT 3.5.
	
	CAUSE
	=====
	
	A new security feature of Windows NT 3.5 is that the Guest account is no longer
	a member of the Domain Users group by default. Some users objected to having the
	Guest account defaulting to the Domain Users group so a new Domain Guests group
	was created.
	
	When you install (not upgrade to) Windows NT 3.5, the default is to create the
	Domain Guests group that includes the Guest account. When you upgrade to Windows
	NT 3.5, the default is to not create the Domain Guests group and to leave the
	Guest account in the Domain Users account.
	
	WORKAROUND
	==========
	
	Create a Domain Guests group and add the Guest account to that group. Remove the
	Guest account from the Domain Users group.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.5
	
	=============================================================================
	
