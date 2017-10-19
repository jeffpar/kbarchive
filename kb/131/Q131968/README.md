---
layout: page
title: "Q131968: How RAS Supports X.25 Networks"
permalink: /kb/131/Q131968/
---

## Q131968: How RAS Supports X.25 Networks

	Article: Q131968
	Product(s): Microsoft Windows NT
	Version(s): 3.1,3.11,3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.1, 3.5, 3.51 
	- Microsoft Windows NT Workstation versions 3.1, 3.5, 3.51 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses the following:
	
	- How RAS Supports X.25 Networks
	
	- Overview of X.25 Networks
	
	- Reasons to Use an X.25 network for RAS
	
	MORE INFORMATION
	================
	
	How RAS Supports X.25 Networks
	------------------------------
	
	RAS does not know what medium it is running over. It does not know about the X.25
	protocol, just as it does not know about how phone lines and modem equipment
	work. The RAS server uses the Eicon Technology WAN Services Eicon drivers and an
	internal Eicon X.25 adapter to convert the X.25 protocol to the serial (RS232)
	protocol signals (and vice versa), or it can send and receive serial signals to
	and from an external X.25 PAD (packet assembler/disassembler), in which case, no
	Eicon software and hardware is necessary because the X.25 PAD does the protocol
	conversion.
	
	Some RAS client versions can also be configured with the Eicon driver and adapter
	or the external PAD, but usually the clients use a modem to call the X.25
	network provider's dial-up PAD, which is also a modem. After the RAS client's
	modem and the X.25 provider's dial-up PAD connect, the X.25 provider usually
	requires callers to identify themselves for billing purposes. To support caller
	identification, most RAS clients can run a customized command script, and some
	can also go into an interactive post- connect Terminal mode, to allow the client
	to send the user name and password.
	
	NOTE: The external PAD configuration mentioned above is not supported in Windows
	for Workgroups 3.11 and Windows NT Workstation and Server versions 3.1, 3.5, and
	3.51. However, there are no known reasons why it should not work.
	
	Overview of X.25 Networks
	-------------------------
	
	An X.25 network transmits data with a packet-switching protocol. This protocol
	relies on an elaborate worldwide network of packet-forwarding nodes (DCEs) that
	can deliver an X.25 packet to its designated address. X.25 also requires
	additional hardware such as an X.25 Smart card or a PAD.
	
	For additional information, see the Windows NT 3.5 Server "Remote Access Service"
	manual, chapter 6.
	
	Reasons to Use an X.25 network for RAS
	--------------------------------------
	
	In addition to transmitting data more reliably than regular phone lines, X.25
	connections supply bandwidths of up to 56 kilobytes (K) (64K in Europe).
	
	However, in areas where ISDN is available, Microsoft recommends using ISDN rather
	than X.25, because ISDN is much faster without compromising reliability.
	
	For additional information on ISDN and RAS, see the Windows NT 3.5 Server "Remote
	Access Service" manual, page 8, or the Windows NT 3.5 RAS online Help.
	
	Additional query words: 3.10 prodnt 1.1 3.11 wfwg wfw
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbAudDeveloper kbWinNT310Search kbWinNTW310Search kbWFWSearch kbWFW311
	Version           : :3.1,3.11,3.5,3.51
	
	=============================================================================
	
