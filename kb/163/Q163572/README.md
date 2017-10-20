---
layout: page
title: "Q163572: XADM: Performance Optimizer Values Change Depending on NT Login"
permalink: /kb/163/Q163572/
---

## Q163572: XADM: Performance Optimizer Values Change Depending on NT Login

{% raw %}

	Article: Q163572
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The initial values for the Microsoft Exchange Performance Optimizer are read
	from the following Windows NT registry key:
	
	  HKEY_CURRENT_USER\Software\Microsoft\PerWiz\Question States
	
	Because this is part of the HKEY_CURRENT_USER tree, the value will be dependent
	upon the Windows NT login.
	
	These setting are display settings and do not reflect the actual performance
	enhancement settings that have been made to the registry from running the
	Performance Optimizer.
	
	MORE INFORMATION
	================
	
	To understan this problem, let's use the following example:
	
	User A logs into the Windows NT Server and runs the Microsoft Exchange
	Performance Optimizer and changes the Estimated # of users to 101-250.
	
	User B logs into the Windows NT Server and runs the Microsoft Exchange
	Performance Optimizer. The Estimated # of users does not reflect the change that
	user A made.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server,
	version 4.0. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : 4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
