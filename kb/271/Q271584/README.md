---
layout: page
title: "Q271584: XCLN: Cannot Download OAB After Using Newprof and Profgen"
permalink: kb/271/Q271584/
---

## Q271584: XCLN: Cannot Download OAB After Using Newprof and Profgen

	Article: Q271584
	Product(s): Microsoft Exchange
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 97 
	- Microsoft Outlook 98 
	- Microsoft Outlook 2000 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using an Outlook client, and you create a profile with the Newprof
	tool and the Profgen tool, you may not be able to download the Outlook Address
	Book.
	
	CAUSE
	=====
	
	This behavior can occur if the path for the OfflineAddressBookPath statement
	does not exist on the drive where the Outlook Address Book files are stored.
	
	The following section in the .prf file indicates an invalid path for the
	OfflineAddressBookPath= statement. When this file is used, the profile is
	generated but you are not able to download the Offline Address Book and no error
	message is displayed.
	
	  Settings for the Microsoft Exchange Server computer
	
	  [Service2]
	
	  OfflineAddressBookPath="<Windir>\Profiles\<Username>\Local
	  Settings\Application Data\Microsoft\Outlook"
	
	RESOLUTION
	==========
	
	To resolve this issue, ensure the path that is specified in the
	OfflineAddressBookPath= statement resides on the hard disk before you use
	Profgen and Newprof to create the profile.
	
	MORE INFORMATION
	================
	
	The Newprof tool does not create folders for items that do not already exist.
	This includes folders that are named using the <username> variable.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOutlook2000Search kbOutlook97Search kbOutlook98Search kbZNotKeyword3
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
