---
layout: page
title: "Q148982: XCLN: Prints Multiple Copies of Messages Using Print Icon"
permalink: /kb/148/Q148982/
---

## Q148982: XCLN: Prints Multiple Copies of Messages Using Print Icon

{% raw %}

	Article: Q148982
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the toolbar icon to print messages, more than one copy may be
	printed.
	
	CAUSE
	=====
	
	This behavior is by design.
	
	WORKAROUND
	==========
	
	The toolbar icon for printing is a "fast print" option. This option does not pop
	up a dialog box to change the settings. This fast print option will pick up the
	settings from the last time the print options were selected.
	
	To set this back to make only one copy:
	
	1. Click Print on the File menu.
	
	2. In the dialog box, select only one copy.
	
	3. Print the message.
	
	The next time that the fast print option is used from the toolbar icon, Microsoft
	Exchange client will only print one copy.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	
	=============================================================================
	

{% endraw %}
