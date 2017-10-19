---
layout: page
title: "Q165185: XCLN: Address Book Stops with Modeless Address Book Applications"
permalink: /kb/165/Q165185/
---

## Q165185: XCLN: Address Book Stops with Modeless Address Book Applications

	Article: Q165185
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 15-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, version 4.0 
	- Microsoft Exchange Windows NT client, version 4.0 
	- Microsoft Exchange Windows 3.x client, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a modeless address book is opened by other MAPI applications, and the
	Microsoft Exchange Client tries to open and close the address book, it stops
	responding. Because the DBCS version of Microsoft Exchange Server uses a
	modeless address book, DBCS Microsoft Exchange Client stops responding with
	modeless address book MAPI applications.
	
	CAUSE
	=====
	
	This problem happens when RichEdit controls are used instead of normal edit
	controls for the edit control in the modeless Address Book. This used to be the
	case in the Far East version only. The failure happens because WMSUI is released
	before the address book dialog box is closed. When the RichEdit control on the
	dialog box is going to be removed, it fails because the control no longer
	exists.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft Exchange clients,
	version 4.0, listed at the beginning of this article. This problem was corrected
	in Microsoft Exchange Server 4.0 U.S. Service Pack 4. For information on
	obtaining the service pack, query on the following word in the Microsoft
	Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange400Win95
	Version           : 4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
