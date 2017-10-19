---
layout: page
title: "Q240208: XFOR: Applying Exchange Service Packs Does Not Update MSMC Files"
permalink: /kb/240/Q240208/
---

## Q240208: XFOR: Applying Exchange Service Packs Does Not Update MSMC Files

	Article: Q240208
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5,5.5 SP1,5.5 SP2
	Operating System(s): 
	Keyword(s): exc5 exc55 exc55sp1 exc55sp2
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5, 5.5 SP1, 5.5 SP2 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you apply the Exchange Server service pack, it may change most of the
	registry entries pointing to the default drive location of the shadow postoffice
	of the Microsoft Mail connector (MSMC). Also, it may not update the Msmcon\Bin
	folder, leaving its contents unchanged, and creates a new Msmcon folder. It may
	also stop sharing the relocated Maildat$ folder, which stops the MSMC.
	
	CAUSE
	=====
	
	The shadow postoffice (MS Mail Connector postoffice) has been moved from its
	original drive location before you apply the Exchange Server service pack.
	
	If the msmcon folder has been deleted, the service pack creates a new Msmcon
	folder containing the files updated by the service pack.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	To resolve this problem:
	
	1. Make a backup copy of the Msmcon\Bin folder on the drive hosting the
	  relocated postoffice files.
	
	2. Copy the contents of the Msmcon\Bin folder on the default drive to the
	  Msmcon\Bin folder on the drive hosting the relocated postoffice files,
	  allowing it to overwrite duplicate files.
	
	3. Verify and correct, if necessary, the following registry entries to reflect
	  the location of the relocated shadow postoffice.
	
	  HKEY_LOCAL_MACHINE/SYSTEM/CurrentControlSet/Services
	
	   - Registry Key: <name_of_the_pcmta>
	     Value Name: ImagePath
	
	   - Registry Key: MSExchangeMSMI
	     Value Name: ImagePath
	
	   - Registry Key: MSExchangeMSMI/Performance
	     Value Name: Library
	
	   - Registry Key: MSExchangePCMTA/Performance
	     Value Name: Library
	
	  HKEY_LOCAL_MACHINE/SYSTEM/CurrentControlSet/Services/EventLog/Application
	
	   - Registry Key: MSExchangeMSMI
	     Value Name: CategoryMessageFile
	     Value Name: EventMessageFile
	
	   - Registry Key: <name_of_the_pcmta_service>
	     Value Name: CategoryMessageFile
	     Value Name: EventMessageFile
	
	4. Check to see if the relocated Maildata folder is still being shared as
	  Maildat$.
	
	5. Verify mail flow in both directions.
	
	6. Delete the Msmcon folder from the default drive, if necessary.
	
	Additional query words: post office
	
	======================================================================
	Keywords          : exc5 exc55 exc55sp1 exc55sp2 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2
	Version           : winnt:5.0,5.5,5.5 SP1,5.5 SP2
	Issue type        : kbprb
	
	=============================================================================
	
