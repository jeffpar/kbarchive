---
layout: page
title: "Q184731: XADM: MMC Does Not Run after MS Exchange Chat Installed on BDC"
permalink: kb/184/Q184731/
---

## Q184731: XADM: MMC Does Not Run after MS Exchange Chat Installed on BDC

	Article: Q184731
	Product(s): Microsoft Exchange
	Version(s): 2.0,5.5,5.5 SP1
	Operating System(s): 
	Keyword(s): exc55 exc55sp1
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1 
	- Microsoft Commercial Internet System version 2.0 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	After you install the Microsoft Exchange Chat Service 5.5 Service Pack 1 or
	Microsoft Commercial Internet System Chat 2.0 on a Backup Domain Controller
	(BDC), the Microsoft Management Console (MMC) does not run. The following error
	message appears:
	
	  An application error has occurred and an application error log is being
	  generated
	
	  mmc.exe
	  Exception access violation (0xc000005) Address 0x10021433
	
	CAUSE
	=====
	
	This error occurs because the Chat Administrator Account is not created as a
	local account on the Backup Domain Controller.
	
	RESOLUTION
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
	
	To correct this problem, export and then merge the Chat Administrator Key from a
	Primary Domain Controller (PDC) or Member Server to the BDC. To export the key,
	perform the following steps:
	
	1. Start Registry Editor (REGEDT32.exe), and go to the following subkey:
	
	     HKEY_LOCAL_MACHINE\Software\Microsoft\Exchange\ChatSvc
	     \Parameters\Accounts
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	2. Select Chat Administrator.
	
	3. From the Registry menu, click Export Registry File.
	
	4. Type a File Name and then click Save. Save the file to either the hard disk
	  or a floppy disk.
	
	5. Copy this file to the Backup Domain Controller.
	
	6. Double-click on the file in Windows Explorer and the registry key will be
	  added.
	
	WORKAROUND
	==========
	
	To work around this problem, install the registry key (see the Resolution
	section above), and then install the Microsoft Exchange Chat Service. The MMC
	functions properly after these steps have been completed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	This is not a problem when the Microsoft Exchange Chat Service is installed on a
	Primary Domain Controller or a Member Server.
	
	Additional query words: mcischat
	
	======================================================================
	Keywords          : exc55 exc55sp1 
	Technology        : kbAudDeveloper kbExchangeSearch kbExchange550 kbZNotKeyword2 kbMCISSearch kbMCIS200 kbExchange550SP1
	Version           : :2.0,5.5,5.5 SP1
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
