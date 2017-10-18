---
layout: page
title: "Q128442: ErrMsg: &quot;5735: Protocol Manager has reported...&quot; w/ 3Com NIC"
permalink: kb/128/Q128442/
---

## Q128442: ErrMsg: &quot;5735: Protocol Manager has reported...&quot; w/ 3Com NIC

	Article: Q128442
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): winnt:3.0,3.5
	Operating System(s): 
	Keyword(s): kberrmsg kbhw kbnetwork kbHardware
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	- Microsoft Network Client for MS-DOS version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After building an MS-DOS Client boot disk using the Windows NT Server Network
	Client Administrator and using the disk to boot a computer with a 3Com 3c509 or
	3c503 Network Interface Card (NIC), the "net start" line in the Autoexec.bat
	file fails and the following error message appears:
	
	  Error 5735: Protocol Manager has reported that a network adapter cannot be
	  found.
	
	RESOLUTION
	==========
	
	Run the setup program for the NIC and disable the Plug and Play option.
	
	The 3c509 or 3c503 are manufactured by 3Com, Corp., a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: prodnt unable bind
	
	======================================================================
	Keywords          : kberrmsg kbhw kbnetwork kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search kbAudDeveloper kbZNotKeyword kbNetworkClientSearch kbNetworkClient300DOS
	Version           : winnt:3.0,3.5
	Issue type        : kbprb
	
	=============================================================================
	
