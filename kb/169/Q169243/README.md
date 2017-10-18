---
layout: page
title: "Q169243: XCLN: Err Msg: Unable to Display the Folder"
permalink: kb/169/Q169243/
---

## Q169243: XCLN: Err Msg: Unable to Display the Folder

	Article: Q169243
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0; :8.01
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 23-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Outlook 97, version 8.01 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Microsoft Exchange Client or the Microsoft Outlook client, the
	following message may be displayed:
	
	  Error: Unable to display the folder.
	
	The client may continue to open correctly, but When you attempt to open the set
	of Personal Folders, the above error message may be displayed again and the
	folders do not expand.
	
	CAUSE
	=====
	
	The personal folder (PST) is damaged or corrupt.
	
	RESOLUTION
	==========
	
	1. Exit and log off the client and attempt to repair the damaged set of PSTs by
	  following the steps in the following Knowledge Base article.
	
	  For information on how to repair the PSTs, please see the following article in
	  the Microsoft Knowledge Base:
	
	  Q168648 OL97: How to Find and Run the Inbox Repair Tool
	
	
	2. If the client is still unable to open the PST file, do the following:
	
	  a. Run scandisk or another disk utility on the hard disk drive to ensure hard
	     disk drive integrity.
	
	  b. To ensure the problem is not specific to this computer and or hard disk
	     drive location, attempt to move the PST file to a new location on the hard
	     disk drive (or to another computer running the Exchange client).
	
	  c. Create a new Exchange or Outlook profile.
	
	  d. Add the newly located PST file into the new profile.
	
	  e. Attempt to open the client.
	
	  If the PST is still inaccessible, it may be damaged beyond repair. It may be
	  necessary to remove this set of personal folders (PST) from the profile and
	  create a new set of PSTs.
	
	MORE INFORMATION
	================
	
	This error also occurs if you do not select a delivery point for your mail. If
	you click on the Tools menu, click Services, click Delivery, and select None, in
	the "Deliver new mail to the following location" dialog box, the same error
	occurs. When you select a delivery point such as your Exchange Server mailbox or
	personal folders, the client opens normally without the error.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbOutlook97Search kbZNotKeyword3 kbOutlook801 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0; :8.01
	
	=============================================================================
	
