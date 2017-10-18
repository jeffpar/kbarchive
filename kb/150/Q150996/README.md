---
layout: page
title: "Q150996: Session Canceled Error Using IBM 16/4 Adapter II"
permalink: kb/150/Q150996/
---

## Q150996: Session Canceled Error Using IBM 16/4 Adapter II

	Article: Q150996
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you perform certain read operations between Windows NT computer using an
	IBM 16/4 Adapter II network adapter and any Server Message Block (SMB) client or
	server, the session to the remote computer stops and a "Session canceled" error
	message appears. Additional attempts continue to fail with the same error. For
	example, this problem occurs when you copy a file larger than 40 KB from a
	remote computer to a Windows NT 3.51 computer on the same physical token ring
	network.
	
	CAUSE
	=====
	
	The IBM 16/4 Adapter II driver incorrectly reports the maximum receive size to
	the transport driver. When the redirector performs a RAW read request and the
	data returned is the maximum size allowed, the transport driver flags this as an
	error and drops the packet as "too large". This eventually causes the
	destination computer to disconnect after a number of retries.
	
	
	RESOLUTION
	==========
	
	To correct this problem, apply the fix mentioned below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt 3.51 Token Ring Session Canceled IBM
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : :3.51
	
	=============================================================================
	
