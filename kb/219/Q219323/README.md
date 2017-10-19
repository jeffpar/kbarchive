---
layout: page
title: "Q219323: IPX Router Does Not Increase Transport Control Field"
permalink: /kb/219/Q219323/
---

## Q219323: IPX Router Does Not Increase Transport Control Field

	Article: Q219323
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP4
	Operating System(s): 
	Keyword(s): kbWinNT400sp5fix
	Last Modified: 17-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Normally, when an IPX packet is propagated by the router, the Transport Control
	(TC) field is increased by 1. The router does not propagate any packets with
	TC=16. This guarantees that IPX packetets do not go further than 16 hops from
	the source. When the TC is not incremented, packets (especially broadcasts) are
	propagated an infinite number of hops, which has the potential to create huge
	network storms.
	
	CAUSE
	=====
	
	This problem occurs because this functionality was lost with Windows NT 4.0
	Service Pack 4.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0 or the individual software update. For information on obtaining the latest
	service pack, please go to:
	
	- http://www.microsoft.com/windows/servicepacks
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT Server 4.0
	and Windows NT Server 4.0 Service Pack 4. This problem was first corrected in
	Windows NT Server 4.0 Service Pack 5.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp4 kbWinNTS400search kbWinNTS400
	Version           : :4.0,4.0 SP4
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
