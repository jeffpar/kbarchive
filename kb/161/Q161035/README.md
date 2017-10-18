---
layout: page
title: "Q161035: GetAddressByName API Causes SAP Broadcast"
permalink: kb/161/Q161035/
---

## Q161035: GetAddressByName API Causes SAP Broadcast

	Article: Q161035
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the GetAddressByName API in a sockets application to resolve the
	name of a service in an IPX network, a SAP broadcast storm may occur.
	
	CAUSE
	=====
	
	By default under Windows NT, the GetAddressByName API will contact the NetWare
	preferred server bindery to resolve the name of the service. If the bindery
	search for the desired object fails, a SAP broadcast occurs on the net for the
	desired object. This SAP broadcast can cause a SAP broadcast storm.
	
	
	RESOLUTION
	==========
	
	Use the Updated files.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.51 and
	4.0.
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Additional query words: ipx prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0
	
	=============================================================================
	
