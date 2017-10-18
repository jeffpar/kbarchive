---
layout: page
title: "Q138700: ARP -s Fails After Applying SP2 to Windows NT 3.51"
permalink: kb/138/Q138700/
---

## Q138700: ARP -s Fails After Applying SP2 to Windows NT 3.51

	Article: Q138700
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you apply Service Pack 2 to Windows NT 3.51, the ARP -s command fails with
	the following error:
	
	  The ARP entry addition failed: 3
	
	ARP -s is used to add static entries to the ARP cache.
	
	
	WORKAROUND
	==========
	
	To work around this problem, expand INETMIB1.DL_ from the Windows NT 3.51 source
	disks to INETMIB1.DLL and place it in %SystemRoot%\SYSTEM32 and then reboot your
	computer
	
	RESOLUTION
	==========
	
	This problem has been corrected in the latest Service Pack for Windows NT
	version 3.51.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: 3.50 prodnt SP2 SP-2 tcpip tcp/ip
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
