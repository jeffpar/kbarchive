---
layout: page
title: "Q193548: Stop 0x0000002E Using Qlogic Driver Version 2.29"
permalink: kb/193/Q193548/
---

## Q193548: Stop 0x0000002E Using Qlogic Driver Version 2.29

	Article: Q193548
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 05-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a Qlogic SCSI adapter (with the Qlogic driver version 2.29) and you
	modify the NumberofRequests registry value to a number greater than the default
	of 128, the system generates the following blue screen error message:
	
	  STOP: 0x0000002E (0xFACEFEED, 0x00000000, 0x00000000, 0x80ADD9C8)
	  DATA_BUS_ERROR
	
	NOTE: The four parameters inside the parentheses will vary according to the
	configuration of the system.
	
	This value does not normally appear in the registry and must be added manually to
	change the default setting of 128.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	Additional query words: 4.00 stop 2e
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
