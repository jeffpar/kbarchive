---
layout: page
title: "Q233177: Enable Point to Point IP and IP Packet Size Options Missing"
permalink: /kb/233/Q233177/
---

## Q233177: Enable Point to Point IP and IP Packet Size Options Missing

	Article: Q233177
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbnetwork kbtool kbui win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you upgrade to Dial-Up Networking version 1.3, the "IP Packet Size" and
	"Enable point to point IP" options are missing in Dial-Up Adapter properties.
	
	RESOLUTION
	==========
	
	To resolve this issue, use either of the following methods:
	
	Uninstall and Reinstall Dial-Up Networking Version 1.3
	------------------------------------------------------
	
	You can uninstall and then reinstall Dial-Up Networking version 1.3.
	
	Remove Instances of Dial-Up Adapters and VPN Adapters
	-----------------------------------------------------
	
	If Dial-Up Adapters were already installed when you installed Dial-Up Networking
	version 1.3, you can remove all instances of "Dial-Up Adapter" and "Microsoft
	Virtual Private Networking Adapter" listed in the Network tool in Control Panel
	to resolve this issue. Note that after removing these adapters, you must add two
	"Dial-Up Adapter" entries, and one "Microsoft Virtual Private Networking
	Adapter".
	
	MORE INFORMATION
	================
	
	For related information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q154091 Windows 95 Dial-Up Networking 1.3 Upgrade Release Notes
	
	  Q191494 Dial-Up Networking 1.3 Upgrade Available
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbtool kbui win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	
