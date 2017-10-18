---
layout: page
title: "Q169407: Routing and Remote Access does not use TAPI Dialing Properties"
permalink: kb/169/Q169407/
---

## Q169407: Routing and Remote Access does not use TAPI Dialing Properties

	Article: Q169407
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Routing and Remote Access Service Update for Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a demand-dial interface in Routing and Remote Access Service (RRAS)
	for Microsoft Windows NT version 4.0, it fails to use the dialing properties
	that are normally used in Dial-Up Networking. For example, you may have your
	dialing properties set to always dial a 9 to access an outside line, or *70 to
	turn off call waiting. When you dial a demand-dial interface, those properties
	are not used.
	
	CAUSE
	=====
	
	Demand-dial interfaces in Routing and Remote Access do not use telephony dialing
	properties. Normal Dial-Up Networking connections do use telephony dialing
	properties. You can configure your telephony dialing properties by
	double-clicking Modems in Control Panel.
	
	RESOLUTION
	==========
	
	Manually enter any dialing strings you normally use directly into the phone
	number field for your demand-dial interfaces. For example, if you have your
	dialing properties set to always dial a 9 to access an outside line, you need to
	add a 9 to the beginning of your phone number; for example 9xxx- xxxx.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Routing and Remote Access
	Service for Windows NT version 4.0. We are researching this problem and will
	post new information here in the Microsoft Knowledge Base as it becomes
	available.
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbRRASNTSearch kbRRASNT400
	Version           : WinNT:4.0
	Issue type        : kbbug
	
	=============================================================================
	
