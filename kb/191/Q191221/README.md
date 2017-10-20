---
layout: page
title: "Q191221: XWEB: Mailbox Hidden from GAL Not Usable in Outlook Web Access"
permalink: /kb/191/Q191221/
---

## Q191221: XWEB: Mailbox Hidden from GAL Not Usable in Outlook Web Access

{% raw %}

	Article: Q191221
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Active Server Components, version 5.0 
	- Microsoft Outlook Web Access, version 5.5 
	- Microsoft Outlook Web Access, version 5.5 Service Pack 1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the Outlook Web Access (OWA) client to try to open your mailbox,
	you cannot do so. Logging on with your mailbox name returns the following error
	message:
	
	  OWA was unable to get your inbox.
	  To try to logon again, click here.
	
	Repeated attempts to log on fail, whether you use your mailbox alias or your full
	SMTP address in the log-on dialog box.
	
	CAUSE
	=====
	
	Your mailbox has been configured to be hidden from the address book in the
	Microsoft Exchange Administrator program. This option is selected in the
	properties for the mailbox. On the Advanced tab, the "Hide from address book"
	option is selected.
	
	WORKAROUND
	==========
	
	To work around this problem, clear the "Hide from address book" option in the
	properties for the mailbox.
	
	MORE INFORMATION
	================
	
	Because OWA uses a MAPI session for name resolution, a "hidden" recipient cannot
	be resolved to a user name. This is by design.
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbZNotKeyword6 kbExchangeSearch kbZNotKeyword2 kbOWASearch kbOWA550 kbOWA550SP1 kbExchangeActiveServComp500
	Version           : WINDOWS:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
