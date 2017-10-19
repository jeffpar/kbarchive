---
layout: page
title: "Q156208: STOP: 0x0000000A During Client Socket Disconnect"
permalink: /kb/156/Q156208/
---

## Q156208: STOP: 0x0000000A During Client Socket Disconnect

	Article: Q156208
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A computer running Windows NT 3.51 Server running client/server-based
	applications may result in a Blue Screen when the processing client socket
	disconnects. You may see an error message such as:
	
	  STOP: 0x0000000A (0x000020b5, 0x00000002, 0x00000001, 0x8010da81)
	  IRQL_NOT_LESS_OR_EQUAL
	
	NOTE: The first parameter may differ, but the fourth parameter will be the same
	on a uniprocessor system.
	
	CAUSE
	=====
	
	This problem has been identified in the Afd.sys driver. For instance, the NwLink
	Nwlnkspx.sys driver makes a reference to close a connection, and AFD
	dereferences the connection and sets the counter to zero. However, in certain
	instances Afd.sys does not handle the dereference properly and Afd.sys later
	tries to dereference the connection object again. This causes the machine to
	stop.
	
	
	RESOLUTION
	==========
	
	Obtain the hotfix mentioned below. This problem does not occur under Windows NT
	version 4.0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51.
	
	A supported fix is now available, but has not been fully regression- tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Additional query words: SPX 0xa 0x1e prodnt
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	
