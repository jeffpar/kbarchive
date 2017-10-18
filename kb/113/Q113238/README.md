---
layout: page
title: "Q113238: WFWG Err Msg: Error 58: The Network Has Responded Incorrectly"
permalink: kb/113/Q113238/
---

## Q113238: WFWG Err Msg: Error 58: The Network Has Responded Incorrectly

	Article: Q113238
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-SEP-1999
	
	3.11
	
	WINDOWS
	
	kbnetwork kberrmsg kbenv
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using NET START NETBEUI with Microsoft Windows for Workgroups 3.11 causes the
	computer to stop responding (hang) while loading Windows for Workgroups or
	causes the following error message when Windows loads:
	
	  Error 58: The network has responded incorrectly.
	
	CAUSE
	=====
	
	This error message occurs if you run NET START NETBEUI before loading Windows
	for Workgroups with the "IPX/SPX Compatible Transport with NetBIOS" and NetBEUI
	protocols installed.
	
	
	RESOLUTION
	==========
	
	To correct this problem:
	
	- Use NET START without the NetBEUI parameter.
	
	  -or-
	
	- Remove the "IPX/SPX Compatible Transport with NetBIOS" protocol.
	
	  -or-
	
	- Type "net stop netbeui" (without the quotation marks) before loading Windows
	  for Workgroups. (This unloads the real-mode NetBEUI protocol.)
	
	MORE INFORMATION
	================
	
	Some NetBIOS applications require the use of NET START NETBEUI to access NetBIOS
	under Windows for Workgroups 3.1. Most NetBIOS applications do not require this
	under Windows for Workgroups 3.11.
	
	For example, Delrina WinFax Pro 3.0 for Networks requires NET START NETBEUI in
	order for its real-mode drivers to load. Since NET START NETBEUI disables file
	and print sharing in Windows for Workgroups, and can cause the above error
	message, run NET START NETBEUI, load the WinFax real-mode drivers, and then run
	NET STOP NETBEUI before loading Windows for Workgroups.
	
	KBCategory: kbnetwork kberrmsg kbenv
	KBSubcategory: wfw wfwg
	
	Additional query words: 3.11 hangs crash hung
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
