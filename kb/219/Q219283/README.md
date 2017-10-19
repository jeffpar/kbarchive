---
layout: page
title: "Q219283: Using MS-CHAP with RADIUS Authentication"
permalink: /kb/219/Q219283/
---

## Q219283: Using MS-CHAP with RADIUS Authentication

	Article: Q219283
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Routing and Remote Access Service Update for Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	Microsoft Windows NT Routing and Remote Access Server does not offer MS-CHAP
	authentication when used as a Remote Authentication Dial-In User Service
	(RADIUS) client.
	
	CAUSE
	=====
	
	This is by design because several third-party RADIUS servers do not support
	MS-CHAP authentication.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To enable MS-CHAP with RADIUS authentication, you must add a registry value:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\Rasman\PPP\CHAP
	
	3. On the Edit menu, click Add Value, and then add the following registry value:
	
	  DWORD: OfferMSCHAP
	  Value: 0x00000001
	
	4. Quit Registry Editor.
	
	After this key is enabled, every incoming PPP connection may be offered MS-CHAP,
	and MS-CHAP may be used to authenticate each PPP user against the Radius server
	that your RAS server is using.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Set the registry key located in the "Resolution" section to use MS-CHAP
	authentication when you use the Microsoft Windows NT Routing and Remote Access
	Server with either Microsoft RADIUS Server or a third-party Radius server that
	can offer MS-CHAP authentication.
	
	Additional query words: ms-chap
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbRRASNTSearch kbRRASNT400
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
