---
layout: page
title: "Q142680: Modification to Support Direct Host IPX Acceleration Drivers"
permalink: /kb/142/Q142680/
---

## Q142680: Modification to Support Direct Host IPX Acceleration Drivers

	Article: Q142680
	Product(s): Microsoft Windows NT
	Version(s): 3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A new interface has been added to the Server Message Block (SMB) server which
	allows an acceleration driver to "hook up" to Srv.sys for acceleration of direct
	host IPX operations. Network Interface Cards that support this acceleration are
	available from third-party vendors.
	
	
	MORE INFORMATION
	================
	
	The interface is a new FSCTL (FSCTL_SRV_IPX_SMART_CARD_START) which passes a
	data structure into Srv.sys (struct SRV_IPX_SMART_CARD) having pointers to the
	driver acceleration routines. When a direct host IPX client subsequently does
	open, close, and read operations on disk files, Srv.sys passes the request to
	the acceleration driver for servicing.
	
	This new interface is included in Windows NT 4.0, and is available for Windows NT
	3.51.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem has been corrected in the latest Microsoft Windows NT U.S. Service Pack.
	For information on obtaining the Service Pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	S E R V P A C K
	
	Additional query words: prodnt sp sp5
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : :3.51,4.0
	
	=============================================================================
	
