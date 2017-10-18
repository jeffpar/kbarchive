---
layout: page
title: "Q170681: XCLN: Deleting Personal Folder Service Causes Loss of Messages"
permalink: kb/170/Q170681/
---

## Q170681: XCLN: Deleting Personal Folder Service Causes Loss of Messages

	Article: Q170681
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 03-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 97 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If message delivery is set to a personal folder file (PST) and you later delete
	that personal folder from the Exchange profile during a mail download from the
	Exchange Server Mailbox to the PST, and you select Yes when the following
	warning message appears
	
	  This information service contains the default message store for
	  the profile. Are you sure you want to remove this information service
	  from the profile.
	
	Mail stored in the personal folder may be permanently lost instead of being sent
	to the Deleted Items folder.
	
	CAUSE
	=====
	
	Because the default message store for the profile is deleted, default delivery
	is changed to "none" during the mail transfer process.
	
	RESOLUTION
	==========
	
	Change the delivery location in the Exchange profile to the Mailbox or another
	personal folder before deleting the personal folder where mail delivery is set.
	
	
	Additional query words: OUTLOOK97-WIN95 OUTLOOK97-WINNT 8.0, 8.01, 8.02, 8.03, 8.04
	
	======================================================================
	Keywords          : win95 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbOutlook97Search kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : :4.0,5.0
	Issue type        : kbbug
	
	=============================================================================
	
