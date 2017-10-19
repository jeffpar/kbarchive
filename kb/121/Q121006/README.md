---
layout: page
title: "Q121006: Limitations of DHCP Option Overlays"
permalink: /kb/121/Q121006/
---

## Q121006: Limitations of DHCP Option Overlays

	Article: Q121006
	Product(s): Microsoft Windows NT
	Version(s): 3.5 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	Microsoft Windows NT 3.5 DHCP (Dynamic Host Configuration Protocol) Server
	and Client do not support option overlays to expand the DHCP packet beyond
	548 bytes, but only up to 336 bytes. This is enough space for a reasonable
	set of options.
	
	If a non-Microsoft DHCP server is sending the option overlays, make sure
	they all fit in the standard options field. If that is not possible, make
	sure that those used by the Microsoft clients fit in.
	
	Additional query words: prodnt Netbt tcpip
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS350 kbWinNTS350search
	Version           : 3.5 4.0
	
	=============================================================================
	
