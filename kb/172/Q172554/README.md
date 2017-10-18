---
layout: page
title: "Q172554: WinNT Err: Stop 0xA in Netbt.sys on Windows NT 3.51"
permalink: kb/172/Q172554/
---

## Q172554: WinNT Err: Stop 0xA in Netbt.sys on Windows NT 3.51

	Article: Q172554
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run applications that issue frequent NetBIOS Adapter Status queries
	from your Windows NT version 3.51 computer, you may receive a STOP error message
	similar to the following:
	
	  Stop 0x0000000a (0x00000018, 0x00000002, 0x00000001, fbd61ca6)
	  IRQL_NOT_LESS_OR_EQUAL
	  Address fbd61ca6 has base at fbd60000 - NETBT.SYS
	
	NOTE: The parameters in parenthesis are specific to your computer configuration
	and may be different from those listed above.
	
	
	
	RESOLUTION
	==========
	
	Apply the fix mentioned below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. A
	supported fix is now available, but has not been fully regression tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft Product
	Support Services for more information.
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
