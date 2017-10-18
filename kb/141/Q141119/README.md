---
layout: page
title: "Q141119: PRB: SMC8432BT-E Fails GetBackUpList Request"
permalink: kb/141/Q141119/
---

## Q141119: PRB: SMC8432BT-E Fails GetBackUpList Request

	Article: Q141119
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Browsing is very slow when using the SMC8432BT-E network card with NWlink. The
	SMC8432BT-E network card is a different card from the SMC8432BT card supported
	on the HCL. The SMC8432-E requires a different driver that does not respond to
	the GetBackUpList request. As a result of the GetBackUpList request failing, an
	election is force each time a browse list is requested. Transport protocols
	TCP/IP and Netbeui do not display this problem.
	
	RESOLUTION
	==========
	
	Use the SMC8432BT card, another NIC or use the SMC8432BT-E in a computer which
	is not a browser.
	
	MORE INFORMATION
	================
	
	The SMC8432BT-E card is physically different, the most obvious difference is the
	EPROM socket located on the card. This socket provides re-boot support for
	diskless workstations. SMC has not clearly marked this card as a different card
	from the SMC8432BT. However, a loose leaf sheet added to the orginal SMC8432BT
	manual is included.
	
	Additional query words: prodnt
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	
