---
layout: page
title: "Q288218: Windows 95/98 Clients May Remove SMS Client Components"
permalink: /kb/288/Q288218/
---

## Q288218: Windows 95/98 Clients May Remove SMS Client Components

	Article: Q288218
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbnetwork kbsetup kbClient kbConfig kbsms200 kbsms200bug kbUpgrade
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Microsoft Windows 95-based or Microsoft Windows 98-based computer changes
	its site location because of a change in site boundaries or a change in the
	client's subnet, the client may be removed if Client Configuration Installation
	Manager (CCIM) starts a removal process before the Smsls.bat file is able to
	assign the computer to its new site. The client performs a CCIM-update cycle
	every 23 hours to check for updates to the site settings.
	
	CAUSE
	=====
	
	This behavior can occur when a Windows 95-based computer changes subnets and the
	computer is assigned to a new site as a result of a site boundary change. CCIM
	begins the process of removing the client from the old site and "cleaning up"
	the client.
	
	At the same time, a user can log on the computer which starts the Smsls.bat file
	and its evaluation of the site boundaries. The Smsls.bat file finds the new site
	assignment and adds it to the registry. If CCIM removes the old site, however,
	before the Smsls.bat file adds the new site, the client can be removed by CCIM.
	
	In other cases, the Smsls.file can add the new site assignment before CCIM
	removes the assignment and the computer is properly moved from the old to the
	new site.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The following log files record the removal of a client instead of its move from
	one site to another. The Smsls.bat file adds the new site assignment just three
	seconds after CCIM begins to remove the client.
	
	CCIM32.log
	==========
	1/16/2001 2:27:39 PM	Checking property SMS Installed Sites, value = "ABC"  	CliEx32.dll 4294896193 (0xFFFEEA41)
	1/16/2001 2:27:39 PM	Calling GetAccessiblePath with ABEXPRT:\\CAP List for site ABC\clidata.box\  	CliEx32.dll	4294896193 (0xFFFEEA41)	
	1/16/2001 2:27:39 PM	Assessing assignment state from "\\<SERVERNAME>\CAP_ABC\clidata.box\"   	CliEx32.dll	4294896193 (0xFFFEEA41)	
	1/16/2001 2:27:39 PM	HK ASSMT : To become assigned, the potential client must match the following 'IP Subnets' data. Using DLL 'SMSDISCV.DLL', Entry Point 'GetSMSAssignmentStatus' to fetch this data.  	CliEx32.dll	4294896193 (0xFFFEEA411)	
	1/16/2001 2:27:39 PM	 135.<###>.<###>.192  	CliEx32.dll	4294896193 (0xFFFEEA41)	
	1/16/2001 2:27:39 PM	CardIndex 0, MACAddress 00:A0:C9:13:74:B2, IPAddress 135.<###>.<###>.132, IPSubnet 135.<###>.<###>.128, IPXAddress , IPXSubnet   	CliEx32.dll	4294896193 (0xFFFEEA41)	
	1/16/2001 2:27:39 PM	CardIndex 1, MACAddress 44:45:53:54:00:00, IPAddress 0.0.0.0, IPSubnet 0.0.0.0, IPXAddress , IPXSubnet   	CliEx32.dll	4294896193 (0xFFFEEA41)	
	1/16/2001 2:27:39 PM	Invalid IPX Address. Zero length string.  	CliEx32.dll	4294896193 (0xFFFEEA41)	
	1/16/2001 2:27:39 PM	Card at index 1 is not valid for assignment	CliEx32.dll	4294896193 (0xFFFEEA41)	
	1/16/2001 2:27:39 PM	Function return - Client not assigned  	CliEx32.dll	4294896193 (0xFFFEEA41)	
	1/16/2001 2:27:39 PM	- No longer assigned to ABC; checking for travel mode override  	CliEx32.dll	4294896193 (0xFFFEEA41)
	
	NOTE: The Travel mode setting is checked prior to CCIM beginning the removal
	process.
	
	(At this point the client is removed...)
	
	WN_LOGON.LOG
	===============
	1/16/2001 2:27:42 PM	Before adding new sites, there are 2 site keys and 1 sites in the site list  	CliEx32.dll	4294883705 (0xFFFEB979)	
	1/16/2001 2:27:42 PM	   Site Key #0: "123"  	CliEx32.dll	4294883705 (0xFFFEB979)	
	1/16/2001 2:27:42 PM	   Site Key #1: "ABC"  	CliEx32.dll	4294883705 (0xFFFEB979)	
	1/16/2001 2:27:42 PM	   Site Value #0: "ABC"  	CliEx32.dll	4294883705 (0xFFFEB979)	
	1/16/2001 2:27:42 PM	Some sites in the registry are not assigned  	CliEx32.dll	4294883705 (0xFFFEB979)	
	1/16/2001 2:27:42 PM	Assessing assignment state from "\\<SERVERNAME>\SMSLOGON\SITES\123"   	CliEx32.dll	4294883705 (0xFFFEB979)	
	1/16/2001 2:27:42 PM	HK ASSMT : To become assigned, the potential client must match the following 'IP Subnets' data. Using DLL 'SMSDISCV.DLL', Entry Point 'GetSMSAssignmentStatus' to fetch this data.  	CliEx32.dll	4294883705 (0xFFFEB9799)	
	1/16/2001 2:27:42 PM	 135.<###>.<###>.128  	CliEx32.dll	4294883705 (0xFFFEB979)	
	1/16/2001 2:27:42 PM	CardIndex 0, MACAddress 00:A0:C9:13:74:B2, IPAddress 135.<###>.<###>.132, IPSubnet 135.<###>.<###>.128, IPXAddress , IPXSubnet   	CliEx32.dll	4294883705 (0xFFFEB979)	
	1/16/2001 2:27:42 PM	CardIndex 1, MACAddress 44:45:53:54:00:00, IPAddress 0.0.0.0, IPSubnet 0.0.0.0, IPXAddress , IPXSubnet   	CliEx32.dll	4294883705 (0xFFFEB979)	
	1/16/2001 2:27:42 PM	Invalid IPX Address. Zero length string.  	CliEx32.dll	4294883705 (0xFFFEB979)	
	1/16/2001 2:27:42 PM	Card at index 1 is not valid for assignment	CliEx32.dll	4294883705 (0xFFFEB979)	
	1/16/2001 2:27:42 PM	CLIENT IS ASSIGNED  	CliEx32.dll	4294883705 (0xFFFEB979)	
	1/16/2001 2:27:42 PM	Inserting new site "123" into the registry  	CliEx32.dll	4294883705 (0xFFFEB979)
	1/16/2001 2:27:42 PM	Skipping assignment check for site 'ABC' because it's already assigned	CliEx32.dll	4294883705 (0xFFFEB979)	
	1/16/2001 2:27:42 PM	After adding any new sites, there are 2 site keys and 2 sites in the site list  	CliEx32.dll	4294883705 (0xFFFEB979)	
	1/16/2001 2:27:42 PM	   Site Key #0: "123"  	CliEx32.dll	4294883705 (0xFFFEB979)	
	1/16/2001 2:27:42 PM	   Site Key #1: "ABC"  	CliEx32.dll	4294883705 (0xFFFEB979)	
	1/16/2001 2:27:42 PM	   Site Value #0: "ABC"  	CliEx32.dll	4294883705 (0xFFFEB979)	
	1/16/2001 2:27:42 PM	   Site Value #1: "123"  	CliEx32.dll	4294883705 (0xFFFEB979)	
	1/16/2001 2:27:42 PM	Waiting up to one minute for sites subtree mutex  	CliEx32.dll	4294883705 (0xFFFEB979)	
	1/16/2001 2:27:42 PM	Wrote Site List data back to the registry  	CliEx32.dll	4294883705 (0xFFFEB979)
	
	
	Additional query words: prodsms smsman
	
	======================================================================
	Keywords          : kbnetwork kbsetup kbClient kbConfig kbsms200 kbsms200bug kbUpgrade 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
