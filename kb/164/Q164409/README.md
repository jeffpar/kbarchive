---
layout: page
title: "Q164409: Stop 0x0000000A in Tcpip.sys Caused by Invalid Fragment Bit"
permalink: kb/164/Q164409/
---

## Q164409: Stop 0x0000000A in Tcpip.sys Caused by Invalid Fragment Bit

	Article: Q164409
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A computer running Windows NT may display one of the following blue screen STOP
	error messages while it processes a datagram packet:
	
	  STOP 0x0000000A IRQL_NOT_LESS_OR_EQUAL
	
	-or-
	
	  STOP 0x00000019 BAD_POOL_HEADER
	
	CAUSE
	=====
	
	A router incorrectly set the packet fragmentation bit on a browser broadcast
	datagram packet. The Tcpip.sys driver attempts to reassemble this packet and
	causes pool memory corruption.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the fix mentioned below. The new Tcpip.sys
	driver will now check the length field on the packet to prevent it from
	processing fragments that do not exist.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. A
	supported fix is now available, but has not been fully regression tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	
	Additional query words: 0x19 0xa 0x0a
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
