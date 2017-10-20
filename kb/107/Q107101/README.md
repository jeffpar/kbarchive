---
layout: page
title: "Q107101: X400: Err Msg: Mailbox Can Be Mapped Once in an Address"
permalink: /kb/107/Q107101/
---

## Q107101: X400: Err Msg: Mailbox Can Be Mapped Once in an Address

{% raw %}

	Article: Q107101
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Mail Gateway to X.400 administration utility may give the
	following error when you use the routing section:
	
	  Mailbox can be mapped once in an address conversion.
	
	CAUSE
	=====
	
	When you specify an address conversion, you can map each Microsoft Mail
	attribute (network, postoffice, and mailbox) only once.
	
	RESOLUTION
	==========
	
	To cancel an existing Mailbox mapping, select the corresponding X.400 Address
	Attribute field and choose the Mailbox button. Once the attribute mapping is
	canceled, you can map it again.
	
	
	Additional query words: 3.20 errmsg
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400320
	Version           : MS-DOS:3.2
	
	=============================================================================
	

{% endraw %}
