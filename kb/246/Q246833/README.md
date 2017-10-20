---
layout: page
title: "Q246833: XADM: DXA Sends Add Transaction Instead of a Modify Transaction"
permalink: /kb/246/Q246833/
---

## Q246833: XADM: DXA Sends Add Transaction Instead of a Modify Transaction

{% raw %}

	Article: Q246833
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Operating System(s): 
	Keyword(s): exc55 exc55sp1 exc55sp2 exc55sp3
	Last Modified: 23-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	In a mixed Exchange Server and Microsoft Mail (MS Mail) environment where the
	Exchange Server computer is configured as the directory synchronization server,
	if you modify the network or postoffice portion of the MS Mail address of a
	custom recipient, an add transaction may be sent to the MS Mail environment
	instead of a modify transaction.
	
	CAUSE
	=====
	
	This issue can occur because the address-type comparison checks to determine if
	the new entry and the record in the Directory Exchange Agent (DXA) mapping table
	are from the same NET/PO combination. If the entry is not the same, then an add
	transaction is sent for the new entry. If the NET/PO combination does match, a
	modify transaction is sent.
	
	WORKAROUND
	==========
	
	To work around this issue, delete the custom recipient and recreate it. When you
	need to modify multiple addresses, export the custom recipients to a .csv file.
	Delete the existing custom recipients and allow a full directory synchronization
	cycle to finish. Then re-import the modified custom recipients and allow another
	directory synchronization cycle to finish.
	
	STATUS
	======
	
	This behavior is by design.
	
	
	
	Additional query words: Dirsync gal
	
	======================================================================
	Keywords          : exc55 exc55sp1 exc55sp2 exc55sp3 
	Component         : DXA
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3
	Version           : winnt:5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
