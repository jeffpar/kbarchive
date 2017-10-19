---
layout: page
title: "Q183517: XCLN: Unable to Display Outlook Calendar After Move Mailbox"
permalink: /kb/183/Q183517/
---

## Q183517: XCLN: Unable to Display Outlook Calendar After Move Mailbox

	Article: Q183517
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5; winnt:4.0,5.0,5.5; :8.0,8.01,8.02,8.03
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 24-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	- Microsoft Exchange Macintosh client, versions 4.0, 5.0, 5.5 
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Outlook 97, versions 8.0, 8.01, 8.02, 8.03 
	- Microsoft Outlook 98 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use an Exchange or Outlook client to view another user's server- based
	folders, you may not be able to access the Outlook Calendar folder. You may
	receive the following error message:
	
	  Unable to display the folder. Outlook could not start because a location
	  to send and receive mail could not be found. To add a location, such as
	  a personal folder file, double-click the Mail icon in Windows Control
	  Panel.
	
	In addition, delegate features may not work or may fail intermittently.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was first corrected in Exchange
	Server 5.5 Service Pack 2.
	
	
	MORE INFORMATION
	================
	
	This condition may exist after moving user mailboxes from one server in the site
	to another using move mailbox. This condition will occur even when the client
	permissions are correct. The above problem can also be seen without using
	MoveUser. In order to apply this fix, each client computer experiencing the
	above problem needs the updated Emsmdb32.dll file.
	
	Additional query words: calender outlook 8.5
	
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbHWMAC kbOSMAC kbOutlookSearch kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbOutlook97 kbZNotKeyword2 kbOutlook97Search kbOutlook98Search kbZNotKeyword3 kbOutlook801 kbOutlook802 kbOutlook803 kbExchange500Mac kbExchange400Mac kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0,5.5; winnt:4.0,5.0,5.5; :8.0,8.01,8.02,8.03
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
