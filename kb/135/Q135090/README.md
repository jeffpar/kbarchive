---
layout: page
title: "Q135090: Shared Program Groups are Not Removed During PGC Deinstallation"
permalink: kb/135/Q135090/
---

## Q135090: Shared Program Groups are Not Removed During PGC Deinstallation

	Article: Q135090
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbPGC smspgc
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	After you run the Program Group Control (PGC) command APPCTL16 /DEINSTALL on a
	Windows 95 client, the registry entries of shared application groups are
	cleared, but the groups themselves are not deinstalled.
	
	
	CAUSE
	=====
	
	The PGC deinstall process does not work reliably on Windows 95, and therefore
	does not always remove shared program groups.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. We are researching this problem and will post new information in
	the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: windows 95 prodsms sms
	
	======================================================================
	Keywords          : kbnetwork kbPGC smspgc 
	Technology        : kbSMSSearch kbSMS110
	Version           : winnt:1.1
	
	=============================================================================
	
