---
layout: page
title: "Q237951: XCLN: Non-Delivery Reports Received by Clients May Be Confusing"
permalink: /kb/237/Q237951/
---

## Q237951: XCLN: Non-Delivery Reports Received by Clients May Be Confusing

	Article: Q237951
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:2000,4.0,5.0,97,98; winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 29-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Outlook 2000 
	- Microsoft Outlook 97 
	- Microsoft Outlook 98 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you send mail to a personal address book (PAB) distribution list (DL) and
	one or more of the recipients on the distribution list is no longer in the
	global address list, the non-delivery report (NDR) that is returned to you may
	be confusing. This is especially true if the recipient has an Alias value that
	is not "user friendly." The following is a sample non-delivery report:
	
	  Your message did not reach some or all of the intended recipients.
	
	  Subject: Subject
	  Sent: 07/19/1999 3:12 PM
	  The following recipient(s) could not be reached:
	
	  c=US;a=
	  ;p=Organization;o=ASGM;dda:MSXCHNGE=//o=ORGANIZATION//ou=SITE//cn=Container//cn=CR
	  LC4B7A0994; on 07/19/1999 3:12 PM
	
	  The recipient name is not recognized
	  The MTS-ID of the original message is: c=US;a=
	  ;p=Organization;l=Server1-990719191132Z-116481
	
	  MSEXCH:MSExchangeMTA:ASGM:Server2
	
	Because the intended recipient was in the global address list when you entered
	that recipient in the PAB, the Distinguished Name is used to route mail to the
	recipient. In this case, the information that "CRLC4B7A0994" is the value of the
	last CN value may not be helpful to you, if you need to know the first and last
	names of the recipients who do not receive the mail that you send to a PAB DL.
	
	MORE INFORMATION
	================
	
	To work around this problem, keep outdated PAB entries synchronized with the
	global address list, use server-based DLs, or make sure that the Exchange Server
	administrator uses recognizable names for the Alias value to create mailboxes or
	custom recipients in the global address list.
	
	Additional query words: OL97, OL98, OL20
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbOutlook2000Search kbOutlook97Search kbOutlook98Search kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:2000,4.0,5.0,97,98; winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
