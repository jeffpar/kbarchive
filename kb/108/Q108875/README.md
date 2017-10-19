---
layout: page
title: "Q108875: SFM Seed Routing and Seeding Devices"
permalink: /kb/108/Q108875/
---

## Q108875: SFM Seed Routing and Seeding Devices

	Article: Q108875
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In a network where you are seeding the network and are running Windows NT
	Advanced Server Services for Macintosh, be very cautious of the order in which
	the network hardware is initialized. A device, such as the Shiva NetModem, which
	has the capability of seeding a AppleTalk network can keep other seed routing
	devices on the network from seeding properly.
	
	MORE INFORMATION
	================
	
	One problem that may occur is when your whole network is powered down, but a
	seeding device, such as the Shiva NetModem, is left running or is powered on
	first. This causes other seed routers on the network to see that the NetModem is
	seeding the network. They then gather the seed information that the NetModem is
	sending out, which may or may not have the correct network zones or network
	ranges created. The result of this is that other seed routers on the network do
	not start unless their seed routing information matches the Shiva NetModem's
	seed routing information. To keep this from happening, make sure that the device
	that has the correct seed routing information for your network is powered on
	first.
	
	The Shiva product included here is manufactured by a vendor independent of
	Microsoft; we make now warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: sfm prodnt
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNT310Search
	Version           : 3.1 3.5 3.51 4.0
	
	=============================================================================
	
