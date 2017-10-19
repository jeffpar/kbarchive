---
layout: page
title: "Q245194: DHCP and WINS Do Not Start with Command AntiVirus Version 4.54."
permalink: /kb/245/Q245194/
---

## Q245194: DHCP and WINS Do Not Start with Command AntiVirus Version 4.54.

	Article: Q245194
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Command AntiVirus version 4.54 by Command Software Systems, Inc. on
	a server running Microsoft Windows NT Server 4.0, the Windows Internet Naming
	Service (WINS) and Dynamic Host Configuration Protocol (DHCP) services may not
	start. Event Viewer may record events 1014, 1004, 1008, 1018, 4318, and 7023.
	
	CAUSE
	=====
	
	This behavior can occur if you include .mdb files in a virus scan. Because of
	the length of time the scan requires, WINS and DHCP do not correctly initialize
	in Windows.
	
	RESOLUTION
	==========
	
	To work around this behavior, Command Software Systems recommends that you
	remove .mdb files from the Command AntiVirus 'Files to Include' list, and then
	restart the server. For information about how to modify the Command AntiVirus
	'Files to Include' list, please consult the program's documentation or
	manufacturer.
	
	NOTE: Microsoft has not tested this workaround recommended by Command Software
	Systems, Inc. and therefore does not guarantee its results.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: service
	
	======================================================================
	Keywords          : kb3rdparty kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
