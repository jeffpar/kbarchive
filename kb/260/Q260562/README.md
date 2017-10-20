---
layout: page
title: "Q260562: XIMS: Routing Restrictions: &quot;and&quot; or &quot;or&quot; Options"
permalink: /kb/260/Q260562/
---

## Q260562: XIMS: Routing Restrictions: &quot;and&quot; or &quot;or&quot; Options

{% raw %}

	Article: Q260562
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 02-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you click the Routing tab and then click Routing Restrictions to configure
	the Microsoft Exchange Server Internet Mail Service, the following three check
	boxes are displayed:
	
	- "Hosts and Clients that can successfully authenticate"
	
	- "Hosts and Clients with these IP addresses"
	
	- "Hosts and Clients connecting to these internal addresses"
	
	If any of the preceding check boxes are selected and the host or client meets any
	of the selected criteria, the message is allowed for relay. For example, if you
	click to select two of the three check boxes, the message does not have to meet
	the criteria for both selected check boxes; the message only has to meet the
	criteria for one of the selected check boxes. Therefore, these check boxes
	reflect "or" requirements, not "and" requirements.
	
	If you do set the IMS to use Routing Restrictions you must choose one of the
	options available in Routing Restrictions. If none of the options is selected
	the server becomes an open relay.
	
	In terms of Boolean operators we do use the "or" (union) but if there is no value
	specified we use the set of everyone which turns the server into an open relay.
	
	Additional query words: IMS
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
