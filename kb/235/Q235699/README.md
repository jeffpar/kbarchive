---
layout: page
title: "Q235699: XFOR: Meetings Incorrectly Migrated from GroupWise 4.x"
permalink: /kb/235/Q235699/
---

## Q235699: XFOR: Meetings Incorrectly Migrated from GroupWise 4.x

	Article: Q235699
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix
	Last Modified: 30-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you migrate users and meetings that contain attachments from Novell
	GroupWise version 4.x to Microsoft Exchange Server, and then view the migrated
	meetings in an e-mail client, the text from the Notes field may appear in the
	Subject field. When this occurs, the Subject field contains the original text
	from the Subject field, several spaces, the word "Notes," and then the text from
	the Notes field.
	
	Note that this problem only occurs if you are running version 5.5.2204.0 or later
	of the Mlmig32.dll file.
	
	
	CAUSE
	=====
	
	When you migrate meetings that contain attachments from GroupWise to Exchange
	Server, the Subject field may not be properly terminated in the Schedule+
	Interchange (.sc2) file. When this occurs, Exchange Server may append the Notes
	field to the end of the Subject field.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Migration Wizard
	
	+--------------------------+
	| File name   | Version    | 
	+--------------------------+
	| Mlmig32.dll | 5.5.2631.0 | 
	+--------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	Additional query words: calendar appointment task post office postoffice
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
