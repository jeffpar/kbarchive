---
layout: page
title: "Q103054: Spelling of Administrator Account Changes"
permalink: /kb/103/Q103054/
---

## Q103054: Spelling of Administrator Account Changes

	Article: Q103054
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you join a domain whose domain controller uses a different language, the
	spelling of your administrator account changes. For example: If you have a
	French domain controller, the default administrator account is spelled
	"administrateur." If you join this domain from a Spanish backup domain
	controller as an administrator, you will not be able to use the Spanish
	spelling, "administrador."
	
	CAUSE
	=====
	
	When a backup domain controller joins a domain, it receives a copy of the
	security accounts manager (SAM) database from the domain controller. This
	includes the spelling of the administrator account.
	
	WORKAROUND
	==========
	
	There are two ways you can work around this behavior. You can create
	administrative accounts on the domain for all the different spellings of
	administrator. Or, you can add the necessary user accounts to the domain
	Administrators group and not worry about the spelling of administrator.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNT310Search
	Version           : 3.1
	
	=============================================================================
	
