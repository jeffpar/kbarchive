---
layout: page
title: "Q260349: INFO: What Does &quot;Terminate 0 1&quot; Mean in the Routing Process?"
permalink: /kb/260/Q260349/
---

## Q260349: INFO: What Does &quot;Terminate 0 1&quot; Mean in the Routing Process?

{% raw %}

	Article: Q260349
	Product(s): Microsoft Exchange
	Version(s): 5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Operating System(s): 
	Keyword(s): kbExchange kbExchange550 kbMsg kbGrpDSMsg kbDSupport
	Last Modified: 06-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Exchange Server routing objects have six intrinsic actions:
	
	- AndSplit
	- Goto
	- New
	- OrSplit
	- Wait
	- Terminate
	
	A Microsoft Developer Network (MSDN) document describes the Terminate action as
	follows:
	
	  
	
	  Action        Parameter   Description
	  Terminate     (None)      Ends the currently executing process instance.
	
	This means that Terminate action ends the currently running process instance,
	takes no parameters, and can occur anywhere in your routing map.
	
	However, these examples show different ways to use Terminate action:
	
	  Terminate 0   0
	
	-and-
	
	  Terminate 0   1
	
	What do these examples mean? What is the difference for the parameter 0/1 that is
	passed to the Terminate action?
	
	MORE INFORMATION
	================
	
	This is a documentation error in MSDN. Terminate action can take one parameter:
	0 (which is the same as the default no parameter) or 1.
	
	The parameter
	
	  Terminate 0
	
	-or-
	
	  Terminate 0   0
	
	means that the routing ends the currently executing process instance.
	
	The parameter
	
	  Terminate 0   1
	
	means that the routing ends the currently executing process instance and deletes
	the currently running process instance from the folder where the message is
	posted for routing.
	
	Additional query words: Event Scripting Agent Routing Objects
	
	======================================================================
	Keywords          : kbExchange kbExchange550 kbMsg kbGrpDSMsg kbDSupport 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3
	Version           : :5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
