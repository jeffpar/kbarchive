---
layout: page
title: "Q192533: XCLN: MAPI Spooler Sends NDRs During Folder Synchronization"
permalink: /kb/192/Q192533/
---

## Q192533: XCLN: MAPI Spooler Sends NDRs During Folder Synchronization

	Article: Q192533
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:; winnt:4.0,5.0,5.5; :8.0,8.01,8.02,8.03
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 21-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	- Microsoft Outlook 97, versions 8.0, 8.01, 8.02, 8.03 
	- Microsoft Outlook 98 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If an application posts a message to the user's outbox during the time the
	application is synchronizing the user's outbox, the MAPI spooler sends a
	non-delivery report (NDR) on this newly submitted message with the following
	error message:
	
	  Your message did not reach some or all of the intended recipients.
	
	     Subject: Extended MAPI message 11001.
	     Sent: 11/24/97 4:44:59 PM
	
	  The following recipient(s) could not be reached:
	
	     <RECIPIENT NAME>
	     No transport provider was available for delivery to this recipient.
	
	CAUSE
	=====
	
	This problem is caused by a logic error in the way the emsmdb32 provider handles
	messages posted during synchronization.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component: Provider
	
	  File Name      Version
	  ----------------------
	  Emsui32.dll    2326.0
	  Mspst32.dll    2326.0
	  Emsmdb32.dll   2326.0
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	versions 4.0, 5.0, and 5.5.
	
	Additional query words: 8.5
	
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbOutlook97 kbZNotKeyword2 kbOutlook97Search kbOutlook98Search kbZNotKeyword3 kbOutlook801 kbOutlook802 kbOutlook803
	Version           : WINDOWS:; winnt:4.0,5.0,5.5; :8.0,8.01,8.02,8.03
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
