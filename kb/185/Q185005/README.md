---
layout: page
title: "Q185005: XADM: How To Restore a 4.0 Directory To a 5.0 Server"
permalink: /kb/185/Q185005/
---

## Q185005: XADM: How To Restore a 4.0 Directory To a 5.0 Server

{% raw %}

	Article: Q185005
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	In some situations, it may be necessary to restore an older directory created in
	Exchange Server 4.0 to a computer running Exchange Server 5.0. One solution to
	this issue is to completely uninstall and then re-install Exchange Server 4.0,
	and subsequently, upgrade Exchange Server 4.0 to version 5.0. Because this would
	be quite time consuming, the following method in the More Information section
	can be used.
	
	MORE INFORMATION
	================
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	1. Stop the Exchange Server 5.0 directory service.
	
	2. Restore the copy of the directory from the Exchange Server 4.0 backup, and
	  choose to erase all existing data.
	
	3. Open the registry editor and change the following key so that the value is 1
	  DWORD:
	
	      HKLM/SOFTWARE/MICROSOFT/EXCHANGE/SETUP/Disaster Recovery Status
	
	
	4. Run Setup again to upgrade the directory. The directory will be upgraded to
	  version 5.0, and the Disaster Recovery Status Key will be set back to 0.
	
	Uninstallation and re-installation with the setup /r option on Exchange Server
	5.0 will also set the Disaster Recovery Status Key to 1, so that an upgrade of
	the database will be performed in the event that an Exchange Server 4.0
	directory is restored to the server. After you perform the restore, a 5.0
	upgrade will also need to be performed.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
