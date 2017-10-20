---
layout: page
title: "Q239477: XADM: Could Not Open the File Named Mbcleanm.dll"
permalink: /kb/239/Q239477/
---

## Q239477: XADM: Could Not Open the File Named Mbcleanm.dll

{% raw %}

	Article: Q239477
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3
	Last Modified: 07-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Microsoft Exchange Server Mailbox Manager Setup to install Mailbox
	Manager on your Exchange Server computer, you may receive the following error
	message:
	
	  Could not open the file named c:\winnt\system32\mbcleanm.dll
	
	CAUSE
	=====
	
	The file is being held open by Event Viewer. Mbcleanm.dll is the resource file
	for Mailbox Manager.
	
	RESOLUTION
	==========
	
	Close Event Viewer and click Retry. Setup will continue.
	
	Additional query words: MCA
	
	======================================================================
	Keywords          : exc55sp3 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : winnt:5.5 SP3
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
