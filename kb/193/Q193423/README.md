---
layout: page
title: "Q193423: XADM: Address Book Views Not Updated After Correct Interval"
permalink: kb/193/Q193423/
---

## Q193423: XADM: Address Book Views Not Updated After Correct Interval

	Article: Q193423
	Product(s): Microsoft Exchange
	Version(s): 4.0 5.0 5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 28-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	When the addition or modification of a mailbox results in creation of a new
	Address Book view, the hierarchy does not reflect the change until the hierarchy
	recalculation takes place. New Address Book views may fail to appear in the
	Exchange Administrator program for up to 30 hours. Also, clients will be unable
	to see or use the new view until the recalculation takes place.
	
	
	CAUSE
	=====
	
	An incorrect registry setting results in an excessive delay prior to hierarchy
	recalculation. This delay can be up to 30 hours. The intended interval for
	hierarchy recalculation is 12 hours. Through an error in Exchange Setup, the
	number was initialized to hex 720 rather than decimal 720.
	
	WORKAROUND
	==========
	
	Recalculation of the hierarchy can be forced through the Exchange Administrator
	program. By connecting to the Exchange Server computer through the Administrator
	program, the recalculation can be initiated by using the F5 refresh key.
	
	For a more permanent and automatic solution, modify the registry to the intended
	value and restart the Exchange directory service.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it. If
	you are running Windows NT, you should also update your Emergency Repair Disk
	(ERD).
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the Hierarchy Table Recalculation interval (minutes) value under the
	  following key in the registry:
	
	     HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeDS
	     \Parameters
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	3. Click DWORD on the Edit menu, type 2d0 and then click OK.
	
	4. Quit Registry Editor.
	
	5. Restart the directory service.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	versions 4.0, 5.0, and 5.5. This problem was first corrected in Exchange Server
	5.5 Service Pack 2.
	
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : 4.0 5.0 5.5
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
