---
layout: page
title: "Q196160: XWEB: Contacts Information Not Available When Using OWA"
permalink: kb/196/Q196160/
---

## Q196160: XWEB: Contacts Information Not Available When Using OWA

	Article: Q196160
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 01-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Microsoft Outlook Web Access (OWA) with the option to use Schedule+
	as your primary calendar, you can no longer open your Contacts folder. When you
	disable the option to use Schedule+ as your primary calendar, the Contacts
	folder becomes viewable again.
	
	To enable this option, on the Tools menu, click Options, and then select the "Use
	Microsoft Schedule+ as my primary calendar" check box.
	
	CAUSE
	=====
	
	OWA assumes that you manage your contacts information using Schedule+ when you
	enable the option to use Schedule+ as your primary calendar. OWA has no method
	of opening the contacts information you have created in Schedule+. This is by
	design.
	
	WORKAROUND
	==========
	
	To work around this problem, you must first import your Schedule+ contacts into
	Outlook. For additional information about converting your contacts, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q164271 OL97: Converting Schedule+ Files to Outlook 97
	
	After you import the contact information, be sure not to use Schedule+ as your
	primary calendar.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
