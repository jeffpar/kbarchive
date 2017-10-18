---
layout: page
title: "Q139122: Manage WINS &amp; DHCP by Using Only Local Administrator Privilege"
permalink: kb/139/Q139122/
---

## Q139122: Manage WINS &amp; DHCP by Using Only Local Administrator Privilege

	Article: Q139122
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can manage the Windows Internet Name Service (WINS) and Dynamic Host
	Configuration Protocol (DHCP) services on a standalone (non-domain) Windows NT
	server by using a non-administrator domain user account that has administrator
	privileges only on the standalone Windows NT server.
	
	MORE INFORMATION
	================
	
	To manage the WINS and DHCP services, you must have administrator privileges on
	the server running these services. Your logon account must be added to the local
	Administrators group on the standalone server. You can then manage these
	services with only domain user rights (that is, you don't have to have
	administrator rights on the domain you are a member of). You can also manage
	multiple domains in this way if trusts are established between these domains.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	
