---
layout: page
title: "Q163267: Delay While Establishing SPX II Connection"
permalink: /kb/163/Q163267/
---

## Q163267: Delay While Establishing SPX II Connection

	Article: Q163267
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While establishing an SPX II connection, you may experience approximately a five
	second delay during the SPX session setup.
	
	CAUSE
	=====
	
	When establishing a SPX II session, you follow these steps.
	
	- Client - SPX II Connection Request
	
	- Host - Extended SPX II ACK
	
	- Client - Negotiate Size Request
	
	- Host - Extended SPX II ACK (Negotiate Size ACK)
	
	- Host - Session Setup/Negotiate Size
	
	- Client - Extended SPX II ACK (Negotiate Size ACK)
	
	When Windows NT sends the last Client ACK, it does not require an ACK to be
	returned (does not turn on the acknowledge bit). The server, in these cases, is
	waiting for a packet that requires an ACK to start transmission. Apparently,
	during the session setup phase of SPX II, it is OK to require that all packets
	have the ACK bit set. Because the client did not require an ACK on the last
	packet of the negotiation, the Novell server does not start sending data, as we
	would normally expect it to. Instead, we timeout the NWLNKSPX Parameter for
	KeepAliveTimeout (which defaults to 12), which is a measurement in half seconds.
	This is the delay before a packet that requires an ACK is sent, and this starts
	the server going again.
	
	Sample Trace of an SPX II Connection with This Failure
	------------------------------------------------------
	
	Time   Src MAC Addr  Dst MAC Addr Protocol  Description
	0.245  Client        The Server   ConCtrl = 0xCC, DtaStrm = 0x00, 0xE3A0 ->
	0xFFFF
	0.247  The Server    Client       ConCtrl = 0x8C, DtaStrm = 0x00, 0x235C ->
	0xE3A0
	0.249  Client        The Server   ConCtrl = 0xCC, DtaStrm = 0x00, 0xE3A0 ->
	0x235C
	0.252  The Server    Client       ConCtrl = 0x8C, DtaStrm = 0x00, 0x235C ->
	0xE3A0
	0.270  The Server    Client       ConCtrl = 0xCC, DtaStrm = 0x00, 0x235C ->
	0xE3A0
	0.270  Client        The Server   ConCtrl = 0x8C, DtaStrm = 0x00, 0xE3A0 ->
	0x235C
	6.223  Client        The Server   ConCtrl = 0xC8, DtaStrm = 0x00, 0xE3A0 ->
	0x235C
	6.224  The Server    Client       ConCtrl = 0x88, DtaStrm = 0x00, 0x235C ->
	0xE3A0
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. We are
	researching this problem and will post new information here as it becomes
	available.
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt Silent RIP
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0
	
	=============================================================================
	
