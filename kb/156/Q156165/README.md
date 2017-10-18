---
layout: page
title: "Q156165: ICMP Time Stamp Not Supported"
permalink: kb/156/Q156165/
---

## Q156165: ICMP Time Stamp Not Supported

	Article: Q156165
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Windows NT does not support the Internet Control Message Protocol
	(ICMP) time stamps fields as described in RFC 792.
	
	MORE INFORMATION
	================
	
	Although Packet Internet Groper (PING) supports time stamping (ping -s) with
	ICMP Type 13 for the time stamp message, and ICMP Type 14 for the time stamp
	reply message, it does not use the ICMP time stamp field format. This is
	described in RFC 792:
	
	  The Originate Timestamp is the time the sender last touched the message
	  before sending it, the Receive Timestamp is the time the echoer first touched
	  it on receipt, and the Transmit Timestamp is the time the echoer last touched
	  the message on sending it.
	
	These time stamps can be used to estimate the delay between hosts and they can be
	used to synchronize the clocks on the hosts. According to RFC 1122, ICMP time
	stamps are optional.
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51,4.0
	
	=============================================================================
	
