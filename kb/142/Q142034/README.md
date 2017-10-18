---
layout: page
title: "Q142034: Domain Controllers Unable to Communicate Over IPX Token-Ring WAN"
permalink: kb/142/Q142034/
---

## Q142034: Domain Controllers Unable to Communicate Over IPX Token-Ring WAN

	Article: Q142034
	Product(s): Microsoft Windows NT
	Version(s): 3.51 4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 14-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article helps you configure routed IPX running over Token Ring to properly
	support communication between Windows NT Server 3.51 domain controllers. This
	article is specific to ACC Nile Routers with no filtering, running IPX over
	Token Ring in a non-NetWare environment, although it is likely to be applicable
	to other routers. It is assumed that the Windows NT 3.51 servers are running
	only the NWLINK protocol.
	
	The problem symptoms are that a Windows NT 3.51 Primary Domain Controller (PDC)
	cannot communicate over the WAN with one of its Backup Domain Controllers (BDCs)
	- drives cannot be mapped, browse lists are not correct and the domain cannot be
	synchronized.
	
	MORE INFORMATION
	================
	
	- Make sure the routers are NOT filtering any type 20 (Hex 14) WAN broadcast
	  IPX packets on the WAN link.
	
	- Make sure NETBIOS is enabled on the routers.
	
	- Make sure that the SAP Agent service is running on both the PDC and BDC.
	
	- The two DCs may be trying to communicate at a bigger frame size (4096 bytes).
	  The size of these packets going over a WAN link may be slow enough for their
	  connection to time-out. Use regedt32 and add a REG_DWORD value of 576 to
	  RouterMTU. It should be added to:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\NwlnkNb\Parameter
	
	  This limits the size of the NETBIOS over NWLink IPX packets to 576 bytes. You
	  can fine tune this setting to achieve optimal throughput. The ACC Nile
	  routers have a default value for their maximum transmission unit of 576
	  bytes. This can be modified using the "Set IPX network MTU" command and can
	  range from 576 bytes to 4491 bytes on Token-Ring networks.
	
	- Make sure the IPX net numbers and frame types for the DCs match the network
	  segments on which they are located, especially if you have initially
	  configured and tested them on the same segment before moving the BDC across
	  the WAN link.
	
	NetWare is manufactured by Novell, Inc., a vendor independent of Microsoft; we
	make no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : 3.51 4.0
	
	=============================================================================
	
