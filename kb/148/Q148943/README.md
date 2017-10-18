---
layout: page
title: "Q148943: Removing Banyan Vines Client for NT Leaves Vines Protocol"
permalink: kb/148/Q148943/
---

## Q148943: Removing Banyan Vines Client for NT Leaves Vines Protocol

	Article: Q148943
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51 4.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Setup/uninstall from the Banyan VINES Client for NT distribution
	media, the VINES Workstation Service and the VINES program group are
	successfully removed. However, the VINES IP Protocol is not removed. Although
	the bindings for VINES IP are removed, the VINES IP Protocol is still displayed
	in Installed Network Software under Control Panel Network.
	
	CAUSE
	=====
	
	The Banyan Setup/uninstall utility does not remove the following key, nor its
	subkeys, from the registry:
	
	HKEY_LOCAL_MACHINE\SOFTWARE\Banyan
	
	
	WORKAROUND
	==========
	
	You can work around this problem with the following steps:
	
	1. Run Setup/uninstall from the VINES Client for NT distribution media.
	
	2. Restart the server.
	
	3. Open Control Panel Network and push the Close button. (This button is not
	  normally available when you first open Network; it will be available after
	  the first two steps have been taken).
	
	4. Delete the following key from the registry:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Banyan
	
	5. Restart the server.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51 4.00
	
	=============================================================================
	
