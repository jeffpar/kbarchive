---
layout: page
title: "Q215004: Hardware Inventory Fails When Windows Management Is Removed"
permalink: kb/215/Q215004/
---

## Q215004: Hardware Inventory Fails When Windows Management Is Removed

	Article: Q215004
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbClient kbWBEM kbsms200 kbsms200bug kbCAP kbInventory smsinst
	Last Modified: 02-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the Windows Management component is removed from a Windows 95, Windows 98, or
	Windows NT client, hardware inventory fails on that client. is necessary to
	reinstall the component to allow hardware inventory to complete.
	
	RESOLUTION
	==========
	
	To reinstall the Windows Management component, connect to a Client Access
	Point(CAP) and run the following:
	
	CAP_<sitecode>\clicomp.box\wbem\<platform>\wbemsdk.exe.
	
	After the Windows Management component has been restored, the next hardware
	inventory for the client will be successful.
	
	MORE INFORMATION
	================
	
	The Client Component Installation Manager (CCIM) detects and restores missing
	client components periodically. (This occurs every 24 hours by default and may
	be referred to as the Heartbeat Interval).
	
	Additional query words: prodsms wbem wmi
	
	======================================================================
	Keywords          : kbClient kbWBEM kbsms200 kbsms200bug kbCAP kbInventory smsinst 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
