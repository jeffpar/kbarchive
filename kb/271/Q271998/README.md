---
layout: page
title: "Q271998: DOM:Event 5718 on the BDC"
permalink: /kb/271/Q271998/
---

## Q271998: DOM:Event 5718 on the BDC

	Article: Q271998
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SYMPTOMS
	========
	
	During replication between the Primary Domain Controller (PDC) and Backup Domain
	Controllers (BDCs), Event Viewer may record the following error message:
	
	  Event ID: 5718
	  Description: Full synchronization of xxx database for the Domain Controller
	  \\(server name) failed
	
	CAUSE
	=====
	
	This behavior can occur when the Netlogon.chg file or the Security Accounts
	Manager (SAM) has become corrupt on the BDC.
	
	RESOLUTION
	==========
	
	To resolve this behavior, reset the Netlogon.chg file by deleting it and
	restarting the system. If necessary, also obtain a fresh copy of the Security
	Accounts Manager from the PDC.
	
	MORE INFORMATION
	================
	
	To delete (reset) Netlogon.chg on an NTFS file system partition from the BDC,
	use the following steps:
	
	1. Set the permissions so that the %SystemRoot%\Netlogon.chg file has No Access
	  for the System account.
	
	2. Restart the computer, and then delete the file.
	
	3. Restart the computer again. The system recreates the file at startup.
	
	To delete (reset) Netlogon.chg on a file allocation table (FAT) partition, use
	the following steps:
	
	1. Start the computer, using MS-DOS, and then delete the
	  %SystemRoot%\Netlogon.chg file.
	
	2. Restart the computer, using Windows NT. The system recreates the file at
	  startup.
	
	For more information, refer to the following articles in the Microsoft Knowledge
	Base:
	
	  Q190449 Corrupted SAM Hangs Windows NT Server
	
	  Q173882 Netlogon Synchronization Errors
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Issue type        : kbprb
	
	=============================================================================
	
