---
layout: page
title: "Q142675: CSNW Sends Packets Greater Than Negotiated Maximum Packet Size"
permalink: /kb/142/Q142675/
---

## Q142675: CSNW Sends Packets Greater Than Negotiated Maximum Packet Size

	Article: Q142675
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Client Services for NetWare (CSNW) can send frames to a NetWare server that are
	bigger than the maximum allowed by the NetWare server. If the NetWare server has
	network card drivers installed that cannot cope with oversized frames, it can
	cause the NetWare server to Abend.
	
	
	CAUSE
	=====
	
	When CSNW establishes a session with a NetWare server, it uses the Large
	Internet Packet (LIP) protocol to negotiate the maximum frame size that can be
	used between the two computers. However, CSNW assumes that the size negotiated
	does not include the size of the IPX protocol header (30 bytes). Therefore, CSNW
	can send frames to the NetWare server that are up to 30 bytes bigger than the
	negotiated maximum frame size. In extreme cases, this can result in the NetWare
	server Abending, or in the normal case, it will result in a protracted
	renegotiation of the actual maximum frame size.
	
	RESOLUTION
	==========
	
	A fix has been produced that ensures that CSNW never sends frames greater than
	the frame size negotiated by the LIP protocol.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.51 and
	4.0. This problem was corrected in the latest Microsoft Windows NT 4.0 U.S.
	Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: nwrdr GSNW gateway prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0
	
	=============================================================================
	
