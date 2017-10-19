---
layout: page
title: "Q176032: XCLN: Err: Object Storage Could not be Allocated"
permalink: /kb/176/Q176032/
---

## Q176032: XCLN: Err: Object Storage Could not be Allocated

	Article: Q176032
	Product(s): Microsoft Exchange
	Version(s): WinNT:4.0;5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	When moving a message from one folder to another in the Microsoft Exchange
	Client while running on Windows NT, you may receive the following error
	message:
	
	  Object Storage could not be allocated. Try closing some windows to free
	  memory.
	
	WORKAROUND
	==========
	
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
	
	This problem may result from different causes and may be corrected by following
	the steps outlined below:
	
	1. Increase the size of the paging file and distribute it on several hard
	  disks:
	
	  On Windows NT 3.51 Workstation:
	
	  a. Open Control Panel and double-click System, and select Virtual memory.
	
	  b. Check the free disk space, and increase the size of the virtual memory,
	     preferably on more than one hard drive.
	
	  On Windows NT 4.0 Workstation:
	
	  a. Open Control Panel, double-click System, and click the Performance tab. In
	     the Virtual Memory section, click Change.
	
	  b. Under Paging File Size for Selected Drive, increase the paging file size
	     and distribute it on several hard drives, if possible.
	
	2. Create another profile for the user with a new Personal Storage File (.PST)
	  on a drive that has adequate disk space. This disk can be located on another
	  machine accessed through the LAN.
	
	3. Update the client software to the latest version and service pack.
	
	4. Disable any anti-virus software.
	
	5. Remove any terminate-and-stay-resident (TSR) applications.
	
	6. Disable any third-party applications from memory.
	
	7. Increase the size of the Registry. For additional information, please see the
	  following article in the Microsoft Knowledge Base:
	
	  Q166840 Err Msg: Not Enough Storage to Complete Operation
	
	8. Remove and re-install the Microsoft Exchange client.
	
	9. If the problem is affecting other applications as well as the Microsoft
	  Exchange client, then re-install the Windows NT operating system to a new
	  directory. After confirming that the problem has been resolved, you can
	  delete the old Windows NT directory.
	
	Additional query words: Disk Space memory virtual drag drop ole
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT
	Version           : WinNT:4.0;5.0
	Issue type        : kbprb
	
	=============================================================================
	
