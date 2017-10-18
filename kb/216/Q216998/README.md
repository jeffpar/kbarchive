---
layout: page
title: "Q216998: XWEB: OWA Logon Screen Displays Again When Opening Mail Message"
permalink: kb/216/Q216998/
---

## Q216998: XWEB: OWA Logon Screen Displays Again When Opening Mail Message

	Article: Q216998
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 
	- Microsoft Outlook Web Access, version 5.5 Service Packs 1, 2, 3 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you log on to your mailbox with Outlook Web Access, you may be redirected
	back to the OWA Logon Screen when you open a mail message for the first time.
	
	CAUSE
	=====
	
	When asked to create new windows through script, Internet Explorer might create
	the window in the wrong Internet Explorer process. Because authentication
	credentials and the temporary cookies used for session identification are cached
	per process, new windows need to re-authenticate and start a new session if they
	do not open in the same process as their opening window. This behavior can
	appear randomly; the determined process for new windows is dependent on several
	variables, including timing and browser configuration.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Outlook Web Access version 5.5,
	and Outlook Web Access version 5.5 Service Packs 1 and 2 . This problem was
	first corrected in Internet Explorer 4.01 Service Pack 2.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q196383 BUG: Windows Opened by Script Lose Authentication or Session
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOWASearch kbOWA550 kbOWA550SP1 kbOWA550SP2 kbOWA550SP3
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
