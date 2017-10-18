---
layout: page
title: "Q271924: Permissions for Users in a Trusted Domain Appear as 'Account Unk"
permalink: kb/271/Q271924/
---

## Q271924: Permissions for Users in a Trusted Domain Appear as 'Account Unk

	Article: Q271924
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to assign permissions to users in a trusted domain, the
	permissions for the user accounts in the trusted domain appear as "account
	unknown".
	
	CAUSE
	=====
	
	This behavior can occur when the trust between the domains has been broken.
	
	RESOLUTION
	==========
	
	Reestablish the trust between the two domains. After the trust is reestablished,
	you can then assign permissions to users in the trusted domain.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
