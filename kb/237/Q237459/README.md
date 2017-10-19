---
layout: page
title: "Q237459: XCLN: Move Server Wizard Does Not Properly Reset Free/Busy Info"
permalink: /kb/237/Q237459/
---

## Q237459: XCLN: Move Server Wizard Does Not Properly Reset Free/Busy Info

	Article: Q237459
	Product(s): Microsoft Exchange
	Version(s): 5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Operating System(s): 
	Keyword(s): exc55 exc55sp1 exc55sp2 exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 17-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3 
	- Microsoft Outlook 97 
	- Microsoft Outlook 98 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you use the Move Server wizard to move a Microsoft Exchange Server
	computer from one site to another within the same Exchange Server organization,
	the Free/Busy information for mailboxes on the server may be incorrect or
	unavailable to other users.
	
	CAUSE
	=====
	
	Every mailbox has a MAPI property indicating the Schedule+ Free/Busy Information
	site folder to which Free/Busy data should be published. The Move Server wizard
	to point to the new site's Schedule+ Free/Busy Information folder is not
	updating this property. Therefore, the client incorrectly publishes data to the
	original site's Schedule+ Free/Busy Information folder.
	
	Both of the following conditions must also be met for this behavior to exist:
	
	- The user accesses his or her mailbox with Microsoft Outlook 97 or Microsoft
	  Outlook 98.
	
	-and-
	
	- The old site's Schedule+ Free/Busy Information folder is replicated to the
	  new site, or the new site has been configured to have Public Folder affinity
	  to the old site.
	
	RESOLUTION
	==========
	
	In some cases, simply logging into an affected mailbox with Outlook 2000 may not
	resolve the issue. If that doesn't resolve the issue, you may need to run
	Outlook with the /CleanFreeBusy parameter, as follows:
	
	  "C:\Program Files\Microsoft Office\Office\Outlook.exe" /cleanfreebusy
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	WORKAROUND
	==========
	
	As an alternative to the hotfix provided above, users can upgrade to Microsoft
	Outlook 2000. This version has a corrected algorithm for determining the
	appropriate Schedule+ Free/Busy Information site folder to which data should be
	published. When a Microsoft Outlook 2000 client accesses an affected mailbox on
	the moved server, the Free/Busy folder property is updated on the mailbox.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	MORE INFORMATION
	================
	
	Every site within an Exchange Server organization has its own Schedule+
	Free/Busy Information folder, which is a hidden system folder. When a user
	modifies his or her Calendar or schedule data, the resulting Free and Busy times
	are published as messages to this folder.
	
	The Entry ID of a user's message in the Free/Busy folder is cached in a MAPI
	property in the mailbox root folder and in the Inbox. Because this property is
	not being updated during a server move, the client continues to publish data to
	the old site's folder.
	
	NOTE: If the client is unable to find a replica of the old site's folder in the
	new site or through Public Folder affinity to the old site, then it publishes
	the correct Free/Busy data to the new site's Free/Busy folder.
	
	Additional query words: f/b ol97 ol98 8.5 MSW
	
	======================================================================
	Keywords          : exc55 exc55sp1 exc55sp2 exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOutlook97Search kbOutlook98Search kbZNotKeyword3 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3
	Version           : :5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
