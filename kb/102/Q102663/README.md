---
layout: page
title: "Q102663: NCB and SESS Reversed in Installation/Configuaration Guides"
permalink: /kb/102/Q102663/
---

## Q102663: NCB and SESS Reversed in Installation/Configuaration Guides

	Article: Q102663
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	Pages 160-161 in the "LAN Manager Installation and Configuration Guide" version
	2.2, reverses the correct positions of the NCB and SESSIONS parameters.
	
	On page 160, in the list of parameters that can follow the netn= entry in the
	[networks] section of the LANMAN.INI file, Number of Sessions should be the
	fourth parameter and Number of NCBs should be the fifth. Here is the proper
	order:
	
	  Devicename
	
	  LANA number
	
	  Type
	
	  Number of sessions
	
	  Number of NCBs
	
	  Number of names
	
	On page 161, the example entry should read as follows:
	
	 net2 = netbeui$, 0, lm10, 15, 30, 6
	
	This entry tells NetBEUI to reserve 15 sessions, 30 NCBs, and 6 names for LAN
	Manager. This leaves 25 sessions, 55 NCBs, and 11 names for NetBIOS 3.0
	applications.
	
	The correct format is shown on page 234 in the "Microsoft LAN Manager
	Administrator's Reference" version 2.2. Also see page 9-14 in the "3+Open LAN
	Manager Technical Reference."
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
