---
layout: page
title: "Q104955: WFW NCBS and SESSIONS Settings Affect only Real Mode NetBEUI"
permalink: kb/104/Q104955/
---

## Q104955: WFW NCBS and SESSIONS Settings Affect only Real Mode NetBEUI

	Article: Q104955
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups SDK, version 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The NCBS and SESSIONS settings found in the [MS$NETBEUI] section of the
	PROTOCOL.INI file, affect only the real mode NetBEUI; the protected mode NetBEUI
	(VNB.386) ignores these settings and allocates resources dynamically from the
	Virtual Memory Manager's heap.
	
	The real mode NetBEUI is used only if the commands NET START NETBEUI or NET START
	FULL are issued before Windows for Workgroups is started. Otherwise, the
	protected mode NetBEUI and redirector are used, freeing up more conventional
	memory.
	
	
	Additional query words: wfw wfwg settings parameters
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSDKSearch kbWFWSearch kbSDKWinWkgroup311
	Version           : :3.11
	
	=============================================================================
	
