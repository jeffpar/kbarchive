---
layout: page
title: "Q157700: XCLN: Updating Windows 3.x Client can Cause GP Fault"
permalink: /kb/157/Q157700/
---

## Q157700: XCLN: Updating Windows 3.x Client can Cause GP Fault

{% raw %}

	Article: Q157700
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 13-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the Microsoft Exchange client for Windows 3.x is updated on a Windows for
	Workgroups 3.11 computer while the Microsoft Exchange client is running, the
	Microsoft Exchange client might stop with a General Protection Fault. Once the
	update is completed, the error might occur after you switch back to the
	Microsoft Exchange client.
	
	CAUSE
	=====
	
	The update program does not verify that the Microsoft Exchange client is not
	running before attempting to update it.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft Exchange clients,
	version 4.0, listed at the beginning of this article. This problem was corrected
	in Microsoft Exchange Server 4.0 U.S. Service Pack 4. For information on
	obtaining the service pack, query on the following word in the Microsoft
	Knowledge Base:
	
	  " SERVPACK" (without the quotation marks)
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbExchangeSearch kbExchange400 kbExchangeClientSearch kbZNotKeyword3
	Version           : WINDOWS:4.0
	
	=============================================================================
	

{% endraw %}
