---
layout: page
title: "Q139896: IPX Type 0x14 Packets Propagated Even if Disabled"
permalink: kb/139/Q139896/
---

## Q139896: IPX Type 0x14 Packets Propagated Even if Disabled

	Article: Q139896
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
	
	IPX Type 0x14 packets are propagated even if you disable forwarding of IPX Type
	0x14 packets in the registry by setting the Internet entry to 0.
	
	
	CAUSE
	=====
	
	Browser announcements over an IPX host link are broadcast because the browser
	requests a 0x14 packet type. Setting Internet under the NWLNKNB registry key to
	0 only affects the NetBIOS broadcasts.
	
	RESOLUTION
	==========
	
	You cannot prevent this symptom because the software design purposely causes
	this to happen.
	
	Even if the Internet entry in the registry is set to 0 (use packet type 0x04),
	Windows NT propagates a few type 0x14 frames.
	
	However, to disable all type 0x14 broadcasts you must disable the binding for
	IPX/SPX compatible transport under the server service. This will make many
	Registry modifications, so if this needs to be automated SYSDIFF.EXE will
	capture all these differences and allow you to apply them on many machines.
	
	
	MORE INFORMATION
	================
	
	The Internet registry key under the subtree HKEY_LOCAL_MACHINE under the
	following subkey controls the forwarding of IPX Type 0x04 and 0x14 packets:
	
	  SYSTEM\CurrentControlSet\services\NWLNKNB\parameters
	
	Value Name: Internet
	Data: 1 or 0
	Default: 1 (1 means forward IPX Type 0x14 [decimal 20] packets)
	
	The 0x14 packet type matches Novell WAN broadcast message type.
	
	Type 0x04 specifies forwarding of IPX packets; routers do not forward them.
	Type 0x14 is a Novell Wan Broadcast Packet; routers do forward them.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : 3.51 4.0
	
	=============================================================================
	
