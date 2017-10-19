---
layout: page
title: "Q156958: Serial Service Won't Stop with Serial Printer Installed"
permalink: /kb/156/Q156958/
---

## Q156958: Serial Service Won't Stop with Serial Printer Installed

	Article: Q156958
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a serial printer is installed on Microsoft Windows NT version 4.0
	workstation or server, the serial service cannot be stopped, even when there are
	no jobs being printed.
	
	CAUSE
	=====
	
	The spooler design assumes that it exclusively holds a port when a printer is
	connected and a print queue is created. The design does not allow for other
	applications to do bidirectional communication with devices.
	
	
	RESOLUTION
	==========
	
	A new version of Localmon.dll has been developed that allows the serial service
	to be stopped, even when a serial printer is attached. Once the serial service
	is stopped, other applications can access the port. This version of Localmon.dll
	is not needed in most environments.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	
