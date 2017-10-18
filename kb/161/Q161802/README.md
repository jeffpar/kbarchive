---
layout: page
title: "Q161802: Stop 0x0000000A During Create File SMB"
permalink: kb/161/Q161802/
---

## Q161802: Stop 0x0000000A During Create File SMB

	Article: Q161802
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbenvkbbuglist kbfixlist
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows NT Server may trap when LAN Manager 2.x compatible clients with oplocks
	disabled attempt to open a file that is already in use by a client that supports
	oplocks. The following stop message may appear on your Windows NT server:
	
	  STOP 0x0000000A (0x00000104, 0x00000002, 0x00000001, 0xfbd6bde0)
	
	NOTE: Although the last parameter differs depending on the system configuration,
	it will fall within a protocol driver. In this case, the Stop occurred in
	Nbf.sys.
	
	CAUSE
	=====
	
	LAN Manager clients that have oplocks disabled can trap a Windows NT 4.0 server
	because I/O requests submitted to the transport may get queued and completed
	after the server has already reused the I/O request structure.
	
	This issue is unique to LAN Manager compatible clients because it requires the
	create file Server Message Block (SMB) request to occur.
	
	
	RESOLUTION
	==========
	
	Code was added to Srv.sys to allow create file requests from non oplock clients
	to gracefully timeout before reusing the IO request.
	
	It is also possible to workaround the problem by enabling oplocks on LAN Manager
	2.x compatible clients.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT version
	4.0. This problem was corrected in the latest Microsoft Windows NT 4.0 U.S.
	Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt oxa
	
	======================================================================
	Keywords          : kbenv kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0
	Issue type        : kbbug
	
	=============================================================================
	
