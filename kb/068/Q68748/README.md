---
layout: page
title: "Q68748: Set Up IBM DOS LAN Requester as LAN Manager 2.0 Enhanced"
permalink: /kb/068/Q68748/
---

## Q68748: Set Up IBM DOS LAN Requester as LAN Manager 2.0 Enhanced

	Article: Q68748
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	IBM's DOS LAN Requester is not listed as a supported network on either the
	Microsoft Windows version 3.0 Hardware Compatibility List or during Windows
	Setup.
	
	IBM's DOS LAN Requester has been confirmed to work well with Windows 3.0,
	provided that the following files have been updated with IBM's corrective
	services (available through IBM):
	
	  File            Date
	  ----            ----
	
	  NETAPI.DLL      2/5/90
	  PMSPL.DLL       5/22/90
	  WINPOPUP.EXE    5/23/90
	
	Note: The files above should contain those dates or later if they have been
	corrected.
	
	MORE INFORMATION
	================
	
	The IBM DOS LAN Requester network (using IBM LAN Server software at the server)
	was originally released to the public in November of 1989, six months before
	Windows 3.0 was released. Many LAN Requester network files required updates,
	including the few listed above, which are critical to Windows.
	
	If these update files are not in use, it may be possible to set up your system as
	MS-NET or 100 percent compatible to get the basic connect and disconnect
	features available inside of Windows.
	
	If all else fails, set up Windows for no network and make all drive and printer
	attachments before starting Windows.
	
	Additional query words: 3.00 3.00a requestor 2.00 2.0
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
