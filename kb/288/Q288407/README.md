---
layout: page
title: "Q288407: SMS: DDR Is Not Processed If a Serial Number Is Not in Sync"
permalink: kb/288/Q288407/
---

## Q288407: SMS: DDR Is Not Processed If a Serial Number Is Not in Sync

	Article: Q288407
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2,2.0 SP3
	Operating System(s): 
	Keyword(s): kbnetwork kbClient kbMMC kbServer kbsms200 kbCollections kbDiscovery kbsmsAdmin
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2, 2.0 SP3 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	Discovery Data records (DDRs) in a secondary site are not processed if a parent
	site has a lower Discovery Data Manager (DDM) serial number. The Ddm.log file
	from the secondary site may have the following error message:
	
	  CDiscoveryDataManager::ProcessDDRs_SS - serial number on this file is older
	  than the current data. Skipping this file. SMS_DISCOVERY_DATA_MANAGER
	
	CAUSE
	=====
	
	This behavior occurs because the value at a parent site must be higher than the
	value at any child secondary sites.
	
	The DDM serial number for a site is incremented each time that the site processes
	a DDR. After recovering a primary site, the DDM serial number of the recovering
	site will probably be lower than it should be because you have restored an old
	value from backup. If this is the case, the recovering site ignores DDRs from
	its secondary sites if their serial number is higher.
	
	WORKAROUND
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To make sure that all secondary site DDM serial numbers are the same or lower
	than those of the primary site, set all secondary site DDM serial numbers to
	zero. If you have many secondary sites, or not all of your secondary sites are
	accessible, you may instead increase the DDM serial number at the recovered
	primary site to ensure that it is higher than all secondary site DDM serial
	numbers.
	
	Before you change the DDM serial number in the registry, be sure to stop the Site
	Component Manager and SMS Executive services, which you can restart after you
	complete the registry change.
	
	The DDM serial number is stored in the registry of the site server under the
	following key:
	
	  HKLM\Software\Microsoft\SMS\Components\SMS_Discovery_Data_Manager\Serial
	  number
	
	MORE INFORMATION
	================
	
	Discovery Data Manager is a thread component of the SMS Executive service that:
	
	- Processes discovery data records that are gathered through the various
	  discovery methods and loads the data into the SMS site database.
	
	- Creates site assignment rules that are based on the site boundaries as
	  specified in the site control file. It then forwards the site assignment
	  rules to secondary sites.
	
	- Creates Client Configuration Request (CCR) files for discovered Microsoft
	  Windows NT 4.0 and Microsoft Windows 2000 clients if you have enabled Windows
	  Remote Client Installation.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbClient kbMMC kbServer kbsms200 kbCollections kbDiscovery kbsmsAdmin 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2 kbSMS200SP3
	Version           : :2.0,2.0 SP1,2.0 SP2,2.0 SP3
	Issue type        : kbprb
	
	=============================================================================
	
