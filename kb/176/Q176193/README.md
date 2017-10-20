---
layout: page
title: "Q176193: XCON: Outbound Conversion of UTF Messages Causes Infinite Loop"
permalink: /kb/176/Q176193/
---

## Q176193: XCON: Outbound Conversion of UTF Messages Causes Infinite Loop

{% raw %}

	Article: Q176193
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Outbound Unicode Translation Format (UTF) messages may cause infinite loops in
	the conversion process, causing the message to be stuck indefinitely.
	
	CAUSE
	=====
	
	The above symptom is caused by a typo in the code that calls the conversion
	process for UTF messages.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	A fix to correct this problem has been included in Exchange Server version 5.5
	and will be included in Exchange Server version 5.0 Service Pack 2.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
