---
layout: page
title: "Q127805: Err Msg: &quot;Problem Loading or Executing the NetWare...&quot;"
permalink: /kb/127/Q127805/
---

## Q127805: Err Msg: &quot;Problem Loading or Executing the NetWare...&quot;

	Article: Q127805
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11,95
	Operating System(s): 
	Keyword(s): 3rdpartynet win95 kb3rdPartyNetClient
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using Windows for Workgroups version 3.11 or Windows 95 in
	conjunction with the Novell NetWare shell version 4.x, you may receive the
	following error message:
	
	  NetWare Error: NWDrv-3.00-20: Problem loading or executing the NetWare
	  directory services support libraries. All NetWare directory services and
	  functions are disabled.
	
	CAUSE
	=====
	
	The Netware.drv file cannot find the library files it requires to operate. This
	problem can occur if you do not run the INSTALL program provided with Novell's
	NWCLIENT after you set up the network in Windows for Workgroups or Windows 95.
	This information applies to the NWCLIENT version dated 11/8/94 that is shipped
	with Novell NetWare version 4.1.
	
	RESOLUTION
	==========
	
	Please contact Novell to determine the proper procedure for installing the
	NWCLIENT components.
	
	
	MORE INFORMATION
	================
	
	During Setup, both Windows for Workgroups version 3.11 and Windows 95 copy only
	the NetWare components Netware.drv, Vnetware.386, and Vipx.386. Setup does not
	copy the NetWare library files that Netware.drv looks for when it loads.
	
	Additional query words: 3.11
	
	======================================================================
	Keywords          : 3rdpartynet win95 kb3rdPartyNetClient 
	Technology        : kbAudDeveloper kbWin95search kbWFWSearch kbZNotKeyword3 kbWFW311
	Version           : WINDOWS:3.11,95
	
	=============================================================================
	
