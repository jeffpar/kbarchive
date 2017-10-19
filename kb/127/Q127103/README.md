---
layout: page
title: "Q127103: Mac Clients Must Log On to Trusted Domains - No Pass-through"
permalink: /kb/127/Q127103/
---

## Q127103: Mac Clients Must Log On to Trusted Domains - No Pass-through

	Article: Q127103
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	From a Macintosh client, if you log into a Windows NT master domain and then
	access a resource in a Windows NT domain that trusts the master domain, you must
	re-enter your user ID and password.
	
	This occurs even when Services for Macintosh is configured to use the Microsoft
	User Authentication Module.
	
	CAUSE
	=====
	
	Windows NT clients are able to take advantage of Windows NT pass-through
	validation, where when you have an account on the master domain, you can access
	any trusting domain's resources without having to re-enter your name and
	password. However, the design of the Macintosh redirector and the AppleTalk
	protocol does not allow for participation in pass-through validation. Thus, you
	must re-enter your user ID and password.
	
	STATUS
	======
	
	This is a limitation of the Macintosh network client
	
	The Macintosh computer and AppleTalk protocol are manufactured by Apple
	Computers, Inc., a vendor independent of Microsoft; we make no warranty, implied
	or otherwise, regarding this product's performance or reliability.
	
	Additional query words: prodnt SFM
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNT310Search
	Version           : 3.1 3.5 3.51 4.0
	
	=============================================================================
	
