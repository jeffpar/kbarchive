---
layout: page
title: "Q129039: Situations Not Requiring Seed Routing"
permalink: kb/129/Q129039/
---

## Q129039: Situations Not Requiring Seed Routing

	Article: Q129039
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Services for Macintosh provides seed routing support for multiple AppleTalk
	networks. Seed routers broadcast routing information and keep track of and
	direct data packets on AppleTalk networks. This article discusses situations
	when seed routing is not necessary.
	
	MORE INFORMATION
	================
	
	Seed routing is not required:
	
	- If you have a flat network.
	
	  A flat network is described as a network existing wholly on a single physical
	  network that consists only of a single default zone. A flat network is also
	  described as a bridged network connecting multiple physical segments that
	  still only have a single existing zone.
	
	- If you already have a zone list during the installation of AppleTalk.
	
	  This indicates that you have another router that is Windows NT-based,
	  NetWare-based, or hardware-based that provides seed routing (such as Cisco or
	  Wellfleet). It is not recommended to have more than one seed router in a
	  single network.
	
	Additional query words: prodnt sfm
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	
