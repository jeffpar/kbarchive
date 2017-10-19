---
layout: page
title: "Q259158: XADM: How to Manually Remove Exchange Server 5.5 Completely"
permalink: /kb/259/Q259158/
---

## Q259158: XADM: How to Manually Remove Exchange Server 5.5 Completely

	Article: Q259158
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	This article describes the steps to completely remove Microsoft Exchange Server
	5.5 from a computer manually.
	
	MORE INFORMATION
	================
	
	IMPORTANT: Before you perform the steps in this article, please make sure that
	you have backed up any information that you may need. If you perform these
	steps, you delete all aspects of Exchange Server from your computer. If you
	perform an offline backup, make sure that the databases are consistent before
	you remove the installation. For additional information, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q237767 XADM: Making and Restoring Offline Backups
	
	  Q182903 XADM: ESEUTIL Command Line Parameters
	
	To completely remove Microsoft Exchange Server 5.5 from a computer manually,
	perform the following steps:
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. In Control Panel, double-click Services, and then stop the Exchange Server
	  system attendant. This stops all Exchange Server services.
	
	2. Insert the Microsoft Exchange Server CD-ROM, click Install, and then click
	  Remove All. Follow the instructions to remove all of the Exchange Server
	  files that were installed during setup and were never modified.
	
	  NOTE: If you are using Small Business Server 4.5, the Exchange setup program
	  (setup.exe) is located on CD #3 under the Exchsrvr\Server\Setup\i386 folder.
	
	3. Start Registry Editor (Regedt32.exe).
	
	4. Locate the following subkey in the registry:
	
	  HKEY_LOCAL_MACHINE/System/CurrentControlSet/Services
	
	5. Delete all of the installed Exchange Server services. The following are the
	  most commonly used Exchange Server services:
	
	   - ESE97
	
	   - MSExchangeDS
	
	   - MSExchangeES
	
	   - MSExchangeIMC
	
	   - MSExchangeINS
	
	   - MSExchangeIS
	
	   - MSExchangeKMS
	
	   - MSExchangeMTA
	
	   - MSExchangeSA
	
	  If other MSExchange services are present, delete them also.
	
	6. Locate the following subkey in the registry:
	
	  HKEY_LOCAL_MACHINE/SOFTWARE/Microsoft
	
	7. Delete the three following subkeys:
	
	   - EDB
	
	   - ESE97
	
	   - Exchange
	
	8. When the following message is displayed, click Yes.
	
	  Registry Editor may delete the currently selected key and all its subkeys.
	
	9. Quit Registry Editor.
	
	10. In Microsoft Windows NT Explorer, delete the Exchsrvr folder and all of the
	  subfolders under this folder. If you have multiple hard disks on the
	  computer, you need to delete the Exchsrvr folder from all of these hard
	  disks.
	
	  NOTE: If you are unable to delete the Exchsrvr folder, rename the Exchsrvr
	  folder and then delete it.
	
	11. Restart the Exchange server.
	
	Additional query words: XMRP uninstall manual manually
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbhowto
	
	=============================================================================
	
