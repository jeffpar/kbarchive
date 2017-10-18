---
layout: page
title: "Q131428: DHCPADMN Reports Error 14 After You Select Local Machine"
permalink: kb/131/Q131428/
---

## Q131428: DHCPADMN Reports Error 14 After You Select Local Machine

	Article: Q131428
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run DHCP Manager and select Local Machine to obtain a list of scopes on
	the local DHCP Server, the following error message appears:
	
	  Error 14: Not enough storage available to process this request
	
	  Error 1447: Unable to connect to "Local Machine". Do you want to remove it
	  from the list of DHCP servers?
	
	If you select [ip address] on the same level as "*Local Machine*" the following
	error message appears:
	
	  Error 1753: The DHCP server service is not running on the target machine.
	  Unable to connect to [ip address]. Do you want to remove it from the list?
	
	
	RESOLUTION
	==========
	
	To correct this problem, upgrade to Windows NT 3.51 (if you have not already
	done so) and install the latest U.S. Service Pack for Windows NT version 3.51.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5 and
	3.51. This problem has been corrected in the latest U.S. Service Pack for
	Windows NT version 3.51. For information on obtaining the Service Pack, query on
	the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51
	
	=============================================================================
	
