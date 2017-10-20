---
layout: page
title: "Q157079: XCLN: How to Move the Location of an OST File"
permalink: /kb/157/Q157079/
---

## Q157079: XCLN: How to Move the Location of an OST File

{% raw %}

	Article: Q157079
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 08-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you configure a Microsoft Exchange client to use Offline Folders, by
	default the OST file will be created in the Windows directory. After an OST has
	been created, it can be moved by following these steps:
	
	1. Exit and Log Off the Microsoft Exchange client.
	
	2. Using the Windows File Manager or Explorer, locate the existing OST file,
	  usually in the Windows directory.
	
	3. Move the OST file to the new location.
	
	4. Start the Microsoft Exchange client, either online or offline.
	
	5. The following message will be displayed:
	
	  The file C:\Windows\Exchange.OST could not be found.
	
	  Click OK.
	
	6. The Offline Folder Settings dialog box will be displayed. Click Browse and
	  select the OST file in the new location.
	
	7. Click OK.
	
	The Microsoft Exchange client is now properly configured to work with the OST
	file in the new location.
	
	MORE INFORMATION
	================
	
	The location of the OST file can be set prior to installing the Microsoft
	Exchange client by modifying the Default.prf file located in the installation
	directory. For more detailed information about using the Setup Editor and
	Default.prf, please see the following article in the Microsoft Knowledge Base:
	
	  Q147352 XCLN: Creating Default User Profiles
	
	In the section titled Microsoft Exchange Server, add an entry similar to the
	following:
	
	  [Microsoft Exchange Server]
	  OfflineFolderPath=C:\Ostpath
	
	This will create an Exchange.ost file in the C:\Ostpath directory during setup.
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
