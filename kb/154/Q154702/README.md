---
layout: page
title: "Q154702: Cannot Start Directory Service Manager for NetWare (DSMN)"
permalink: kb/154/Q154702/
---

## Q154702: Cannot Start Directory Service Manager for NetWare (DSMN)

	Article: Q154702
	Product(s): Microsoft Windows NT
	Version(s): 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Windows NT Server fails to start Directory Service Manager for NetWare (DSMN)
	services.
	
	CAUSE
	=====
	
	This is by design.
	
	RESOLUTION
	==========
	
	You can install DSMN on the primary domain controller (PDC) and backup domain
	controller (BDC). However, you can only run DSMN on servers functioning as the
	primary domain controller. In cases where the PDC is not available, you must
	promote the BDC to a PDC before the DSMN service can be started.
	
	MORE INFORMATION
	================
	
	If the PDC fails and you do not have DSMN installed on any BDC, you must promote
	one of the BDCs to be a PDC before installing DSMN on this server. Failure to do
	this will result in an error message stating that the domain controller is not
	found.
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : 3.51 4.0
	
	=============================================================================
	
