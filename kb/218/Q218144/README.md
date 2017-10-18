---
layout: page
title: "Q218144: Cannot Apply Licenses or Windows NT Upgrade"
permalink: kb/218/Q218144/
---

## Q218144: Cannot Apply Licenses or Windows NT Upgrade

	Article: Q218144
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.5
	Operating System(s): 
	Keyword(s): kbenv kberrmsg
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Small Business Server version 4.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you are running a not-for-resale (NFR) or Microsoft Developer Network (MSDN)
	version of BackOffice Small Business Server, you cannot apply a Client Add Pack
	or Windows NT Upgrade disk. When you start License Manager (Llsmgr.exe) or start
	the Licensing tool (Liccpa.cpl) in Control Panel, you receive the following
	message:
	
	  Not available in Microsoft BackOffice Small Business Server. To add client
	  licenses, choose Manage Server from the Start Menu and select About Small
	  Business Server.
	
	This message may seem to imply that you can then use the console to add
	additional licenses or apply upgrade disks. This is not the case; you are
	excluded from increasing the number of users with either method.
	
	MORE INFORMATION
	================
	
	When you attempt to apply an actual Client Add Pack or Windows NT Upgrade disk,
	you receive one of the following messages:
	
	   - This version of the Microsoft Small Business Server cannot have additional
	  client licenses added.
	
	   - This version of the Microsoft Small Business Server cannot be upgraded to the
	  full version on Windows NT Server.
	
	
	Additional query words: smallbiz sbs 4.5 add pack MSDN CAL license upgrade NFR 4.0 4.0a 4.0x
	
	======================================================================
	Keywords          : kbenv kberrmsg 
	Technology        : kbAudDeveloper kbSBServSearch kbSBServ450
	Version           : winnt:4.5
	Issue type        : kbinfo
	
	=============================================================================
	
