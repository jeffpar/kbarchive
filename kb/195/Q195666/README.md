---
layout: page
title: "Q195666: XCLN: Macintosh Outlook Ends Unexpectedly with Type 2 Error"
permalink: kb/195/Q195666/
---

## Q195666: XCLN: Macintosh Outlook Ends Unexpectedly with Type 2 Error

	Article: Q195666
	Product(s): Microsoft Exchange
	Version(s): MACINTOSH:8.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook for Macintosh, Exchange Server Edition, version 8.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Microsoft Exchange Server is modified to create Container Level Search Control
	using Address Book views as mentioned in the following Knowledge Base article:
	
	  Q182902 XADM: How To Setup Container Level Search Control
	
	The idea is to have multiple departments within one Exchange Server organization,
	and to prevent these departments from viewing the mailboxes of other departments
	in the global address list.
	
	When you use Microsoft Outlook for Windows to create a profile, access the
	mailbox and view the global address list. Only the respective mailboxes are
	viewed in the global address list, just as expected.
	
	When you use Microsoft Outlook for Macintosh, Exchange Server Edition, and create
	a profile, it quits unexpectedly with the following error message:
	
	  The application "Microsoft Outlook" has unexpectedly quit, because an error
	  of Type 2 occurred.
	
	CAUSE
	=====
	
	Outlook ends unexpectedly because the Macintosh client expects to receive
	information about the home server network address from a property called
	PR_EMS_AB_NETWORK_ADDRESS. When Exchange Server returns Permission Denied, the
	Macintosh client fails to process this error condition, and quits.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Microsoft Exchange
	Server. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Outlook for Macintosh,
	Exchange Server Edition, version 8.0. This problem was first corrected in
	Exchange Server 5.5 Service Pack 2.
	
	MORE INFORMATION
	================
	
	To fix this, both the client and server computers needs modifications as
	follows:
	
	Macintosh client
	----------------
	
	Modify the Macintosh client to handle Non-existence, Null-value, and Access
	Denied cases for the PR_EMS_AB_NETWORK_ADDRESS property.
	
	Exchange Server computer
	------------------------
	
	In the Microsoft Exchange Server Administrator program, select each of the server
	objects in the directory, and grant search permissions to the "Everyone"
	account. This will allow the Macintosh client to read the
	PR_EMS_AB_NETWORK_ADDRESS attribute off that server, which was originally
	inaccessible.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbExchangeSearch kbOutlookMacSearch kbOutlook800Mac
	Version           : MACINTOSH:8.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
