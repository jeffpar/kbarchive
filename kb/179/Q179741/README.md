---
layout: page
title: "Q179741: STOP 0x0A Due to Duplicate Free in Afd.sys"
permalink: kb/179/Q179741/
---

## Q179741: STOP 0x0A Due to Duplicate Free in Afd.sys

	Article: Q179741
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you run SNA Server on a computer with high load and you also experience
	network problems, the server may stop with a STOP 0x0A error in Ntoskrnl.exe.
	
	NOTE: This problem may also happen in other situations.
	
	
	CAUSE
	=====
	
	In the situation above, there were code paths used in Afd.sys where data
	structures happened to be freed twice.
	
	RESOLUTION
	==========
	
	Windows NT 4.0
	--------------
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	Windows NT 3.51
	---------------
	
	To resolve this problem, obtain the following fix. This fix should have the
	following time stamp:
	
	+------------------------------------------------+
	| 12/09/97 | 07:47p | 52,272 | Afd.sys | (Intel) | 
	+------------------------------------------------+
	| 12/09/97 | 07:44p | 88,880 | Afd.sys | (Alpha) | 
	+------------------------------------------------+
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. A
	supported fix is now available, but is not fully regression tested and should be
	applied only to systems experiencing this specific problem. Unless you are
	severely impacted by this specific problem, Microsoft recommends that you wait
	for the next Service Pack that contains this fix. Contact Microsoft Product
	Support Services for more information.
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbNTTermServ400 kbNTTermServSearch kbWinNTS351search
	Version           : WinNT:3.51,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
