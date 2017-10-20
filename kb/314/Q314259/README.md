---
layout: page
title: "Q314259: XADM: MAPI Client Hangs Deleting Multiple Messages"
permalink: /kb/314/Q314259/
---

## Q314259: XADM: MAPI Client Hangs Deleting Multiple Messages

{% raw %}

	Article: Q314259
	Product(s): Microsoft Exchange
	Version(s): 5.5,5.5 SP1,5.5 SP2,5.5 SP3,5.5 SP4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3, 5.5 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a Messaging Application Programming Interface (MAPI) profile in a
	MAPI client (such as Microsoft Outlook) to try to delete multiple mail items,
	the client may stop responding (hang).
	
	CAUSE
	=====
	
	This issue can occur if Performance Optimizer (Perfwiz.exe) was not run after an
	Exchange Server service pack was installed.
	
	RESOLUTION
	==========
	
	To resolve this issue, run Performance Optimizer (Perfwiz.exe) to reconfigure
	the Exchange Server computer.
	
	WORKAROUND
	==========
	
	To work around this issue, stop and restart the MAPI client; after you do so,
	you can work with the client as usual. However, if you try to delete multiple
	messages again or try to empty the trash can, the client hangs again.
	
	MORE INFORMATION
	================
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q271824 XADM: Rerunning Performance Optimizer Is Recommended After Applying
	  Service Pack
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3 kbExchange550SP4
	Version           : :5.5,5.5 SP1,5.5 SP2,5.5 SP3,5.5 SP4
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
