---
layout: page
title: "Q277709: XFOR: Notes Calendar Entries Not Migrated with Migration Wizard"
permalink: /kb/277/Q277709/
---

## Q277709: XFOR: Notes Calendar Entries Not Migrated with Migration Wizard

{% raw %}

	Article: Q277709
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 15-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the Exchange Migration Wizard for Lotus Notes, some Notes calendar
	entries are not migrated to Exchange Server.
	
	CAUSE
	=====
	
	This issue can occur if the default Notes view ( $all ) has been customized.
	
	For example, this issue occurs if the default view contains the following view
	selection:
	
	  SELECT !@IsAvailable(CalendarDateTime)
	
	The wizard migrates items based on the default view of the Notes mailbox.
	
	WORKAROUND
	==========
	
	To work around this issue, remove any customized view selections before you run
	the Migration wizard.
	
	MORE INFORMATION
	================
	
	On the Notes client, when you open the Design folder in the the Views container
	in the left pane, the default view ( $all ) is displayed in the right pane.
	Double-click the view to see its properties.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
