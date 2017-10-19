---
layout: page
title: "Q244770: XADM: StorStat Error Message: Cannot Parse a Result Message"
permalink: /kb/244/Q244770/
---

## Q244770: XADM: StorStat Error Message: Cannot Parse a Result Message

	Article: Q244770
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,8.0,8.01,8.02,8.03,8.04,8.5; winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Outlook 97, versions 8.0, 8.01, 8.02, 8.03, 8.04, used with:
	   - the operating system: Microsoft Windows NT 
	- Microsoft Outlook 98, version 8.5, used with:
	   - the operating system: Microsoft Windows NT 
	- Microsoft Outlook 97, versions 8.0, 8.01, 8.02, 8.03, 8.04, used with:
	   - the operating system: Microsoft Windows NT 
	- Microsoft Outlook 98, version 8.5, used with:
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you run the Microsoft BackOffice Resource Kit StorStat utility in
	Administrator Mode (the storstat -a command), the following error message may be
	displayed:
	
	  Cannot parse a result message. From: "<mailbox display name>", Body:
	  "*(&IGY&F*(&*@#T@#&*DG,2.03,1,Microsoft Exchange
	  Server,Mail..."
	
	CAUSE
	=====
	
	This error message is displayed if the user whose mailbox name is listed in the
	error message sends a report to the StorStat utility mailbox, and that mailbox
	display name contains a comma.
	
	RESOLUTION
	==========
	
	Log on to the StorStat utility mailbox from an Exchange Client or Outlook, open
	the message with the title <<user results>> that was sent from that
	user, remove the comma from the mailbox display name, save the change, and then
	run the storstat -a command again.
	
	MORE INFORMATION
	================
	
	The report that the user sent contains a comma-separated line of numbers. When
	the StorStat utility analyzes the report, the utility uses commas as delimiters.
	If a comma is in the mailbox display name, the StorStat utility considers the
	comma in the mailbox display name a delimiter, and the error message in the
	"Symptoms" section of this article is displayed.
	
	For more information about how to use the StorStat utility, please refer to the
	Exchange Server Help files that are shipped with the BackOffice Resource Kit,
	Second Edition and the BackOffice 4.5 Resource Kit.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbOutlook97Search kbZNotKeyword3
	Version           : WINDOWS:4.0,5.0,8.0,8.01,8.02,8.03,8.04,8.5; winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
