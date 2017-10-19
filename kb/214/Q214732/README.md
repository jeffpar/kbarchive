---
layout: page
title: "Q214732: SFU Password Synchronization to Digital UNIX Server Problem"
permalink: /kb/214/Q214732/
---

## Q214732: SFU Password Synchronization to Digital UNIX Server Problem

	Article: Q214732
	Product(s): Microsoft Windows NT
	Version(s): ; winnt:4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbtool
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Services for UNIX Add-On Pack 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows NT Services for UNIX (SFU) password synchronization may post the
	following error message in the System log on the Digital UNIX host on which the
	Microsoft Encrypted Password Protocol (MEPP) daemon (SSOD) is running:
	
	  8201: user <name> does not exist on host digital
	
	The following error message is posted in the Windows NT System event log on the
	Windows NT server that is running the Password Synchronization service:
	
	  Secret key mismatch
	
	The Digital UNIX host should post an "8203: secret key mismatch or packet error
	for user <name> on host digital" error message.
	
	CAUSE
	=====
	
	The shared secret key is mismatched between the SFU Password Synchronization
	service and the SSOD daemon on the UNIX host.
	
	RESOLUTION
	==========
	
	To resolve this issue, reset the shared secret key on both the SFU server and
	the UNIX host to a matching key.
	
	NOTE: The shared secret key is case sensitive.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbtool 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTServicesUnix
	Version           : :; winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
