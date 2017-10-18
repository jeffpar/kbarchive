---
layout: page
title: "Q148270: XADM: Can't Return to Admin Choosing OK After Regeneration"
permalink: kb/148/Q148270/
---

## Q148270: XADM: Can't Return to Admin Choosing OK After Regeneration

	Article: Q148270
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 21-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you choose to regenerate Microsoft Mail addresses for Exchange mailboxes
	after changing the network and/or postoffice names for Exchange, the following
	dialog box indicating success is displayed:
	
	  The e-mail regeneration process has been started. It may take some time.
	  Please monitor the event log for any errors and completion.
	
	                            OK
	
	You can still see the OK button of the previous dialog box in the background. If
	you click the background OK button instead of the foreground dialog box OK
	button, the top dialog box will be placed behind the Admin pane, giving the
	impression that control has been totally lost within the admin program.
	
	CAUSE
	=====
	
	The Connector administration displays all of its dialog boxes without a parent
	window handle.
	
	WORKAROUND
	==========
	
	To work around this problem and regain control of the admin console, simply
	press ALT+TAB to access the Microsoft Mail Connector window.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange version 4.0.
	We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: hung hang frozen
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
