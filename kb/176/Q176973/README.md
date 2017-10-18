---
layout: page
title: "Q176973: Stop 0x0000000A in Netbt.sys on BDC When WINS Server Shuts Down"
permalink: kb/176/Q176973/
---

## Q176973: Stop 0x0000000A in Netbt.sys on BDC When WINS Server Shuts Down

	Article: Q176973
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the primary WINS server on another subnet shuts down, a backup domain
	controller (BDC) displays a blue screen with the following STOP message in
	Netbt.sys:
	
	  STOP 0x0000000A in Netbt.sys
	
	CAUSE
	=====
	
	The Tcpip.sys driver passed a NULL parameter to the Netbt.sys driver.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT To
	resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. A
	supported fix is now available, but is not fully regression tested and should be
	applied only to systems experiencing this specific problem. Unless you are
	severely impacted by this specific problem, Microsoft recommends that you wait
	for the next Service Pack that contains this fix. Contact Microsoft Product
	Support Services for more information.
	
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbNTTermServ400 kbNTTermServSearch kbWinNTS351search
	Version           : winnt:3.51,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
