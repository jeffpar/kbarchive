---
layout: page
title: "Q146481: XFOR: Certain Fields Are Not Activated After Adding Domain"
permalink: /kb/146/Q146481/
---

## Q146481: XFOR: Certain Fields Are Not Activated After Adding Domain

{% raw %}

	Article: Q146481
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 16-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you add an E-Mail Domain entry on the Internet Mail tab of the Microsoft
	Exchange Internet Mail Connector (IMC) properties page, the Edit and Remove
	buttons are not highlighted.
	
	This problem does not occur when adding entries to the E-Mail Domain section on
	the Connections tab of the IMC properties page.
	
	CAUSE
	=====
	
	When the first entry is made, a call is not made to change the state of the
	dialog to signify that an entry has been added. If a second entry is made, the
	change state call is made and the Edit and Remove as well as the Move Up and
	Move Down buttons all become activated.
	
	Adding an entry and clicking OK will also activate the Edit and Remove buttons.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange version 4.0.
	We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: focus control
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	

{% endraw %}
