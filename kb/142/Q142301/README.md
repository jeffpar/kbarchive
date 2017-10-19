---
layout: page
title: "Q142301: IPX Routing With MPR Requires Manual Frame Type"
permalink: /kb/142/Q142301/
---

## Q142301: IPX Routing With MPR Requires Manual Frame Type

	Article: Q142301
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install the Multi-Protocol Router (MPR) in Windows NT Server,
	Microsoft Network client computers using the IPX/SPX compatible transport
	protocol are unable to communicate with the Windows NT Server.
	
	CAUSE
	=====
	
	This problem occurs if auto frame type detection is defined for the IPX/SPX
	compatible transport protocol on all network adapters in the Windows NT Server.
	In addition, if no network numbers are assigned to network devices on the server
	segment, a network number of zero is assigned to all network adapters on the
	Windows NT Server. Therefore, all packets are not routed properly.
	
	RESOLUTION
	==========
	
	To correct this problem, define a manual frame type for the IPX/SPX compatible
	transport protocol and specify a unique network number for each segment in
	Windows NT Server.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
