---
layout: page
title: "Q150027: FPNW Sends Print Operator Broadcasts to All Users"
permalink: kb/150/Q150027/
---

## Q150027: FPNW Sends Print Operator Broadcasts to All Users

	Article: Q150027
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	NetWare clients accessing print queues located on a File and Print Services for
	NetWare server receive printer broadcast notification messages for all printer
	errors. With the capture command specified in the user's logon script set for
	NONOTIFY, users who are not members of the Print Operators group still receive
	the printer messages. These messages indicate such error conditions as the
	printer being out of paper.
	
	CAUSE
	=====
	
	FPNW sends printer broadcast notification messages to all users.
	
	RESOLUTION
	==========
	
	FPNW has been modified so that only print operators receive the messages.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest U.S. Service Pack for Windows NT. For
	information on obtaining this update, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : :3.51
	
	=============================================================================
	
