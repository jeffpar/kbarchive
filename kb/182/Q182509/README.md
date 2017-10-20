---
layout: page
title: "Q182509: XADM: Directory Import/Export TAB Key Takes User to Unavailable"
permalink: /kb/182/Q182509/
---

## Q182509: XADM: Directory Import/Export TAB Key Takes User to Unavailable

{% raw %}

	Article: Q182509
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the Exchange Administrator program to import or export users, the
	Import/Export dialogue box allows you to use the TAB key to move to an
	unavailable (grayed) area that does not accept user input.
	
	CAUSE
	=====
	
	This is by design. The Exchange Administrator program allows you to copy the
	contents of read-only edit controls to the clipboard. Dialogue boxes need to
	allow users to do this without using a mouse.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0,5.5
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
