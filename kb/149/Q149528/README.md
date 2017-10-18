---
layout: page
title: "Q149528: FTP Client Uses Only One IP Address on Multihomed Workstations"
permalink: kb/149/Q149528/
---

## Q149528: FTP Client Uses Only One IP Address on Multihomed Workstations

	Article: Q149528
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
	
	The Microsoft FTP client does not take advantage of multihomed workstations. By
	default, the FTP client binds to the first IP address that can reach the remote
	station for its control connection and uses that local IP address for any
	subsequent PORT commands.
	
	NOTE: For more information on FTP control connections, PORT commands, etc. please
	refer to Internet RFC 959.
	
	WORKAROUND
	==========
	
	To resolve this problem, install the fix mentioned below.
	
	A new switch has been added to FTP to allow the use of multiple network
	interfaces for data connections.The new switch is:
	
	  -a
	
	Use IN_IPADDR when binding.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT Workstation
	version 3.51 and Microsoft Windows NT Server version 3.51. This problem was
	corrected in the latest U.S. Service Pack for Windows NT Workstation or Server
	version 3.51. For information on obtaining this update, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: 3.51 prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : :3.51
	
	=============================================================================
	
