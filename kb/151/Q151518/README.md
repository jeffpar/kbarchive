---
layout: page
title: "Q151518: SNADS and PROFS Addresses Have Wrong Gateway Information"
permalink: /kb/151/Q151518/
---

## Q151518: SNADS and PROFS Addresses Have Wrong Gateway Information

{% raw %}

	Article: Q151518
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbother exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you create PROFS or SNADS custom recipients in Microsoft Exchange that are
	propagated via directory synchronization (dirsync) to MS Mail, these recipients
	may contain invalid gateway names in the address.
	
	CAUSE
	=====
	
	When a PROFS or SNADS address is propagated via dirsync into Microsoft Exchange,
	the gateway portion of the address is stripped out to make it Microsoft
	Exchange-compatible. This gateway information is stored in the Imported-From
	field of the recipient's Raw Properties.
	
	On outgoing mail, Microsoft Exchange reconstructs the address using the
	Imported-From attribute. With Custom Recipients, there is no information in the
	Imported-From field and Microsoft Exchange defaults to the gateway names of
	MSPROFS for PROFS recipients and MSSNADS for SNADS recipients. When these
	addresses are propagated to the MS Mail Global Address List (GAL), the invalid
	gateway information makes the addresses unusable.
	
	RESOLUTION
	==========
	
	There are three possible workarounds for this issue, depending on your
	configuration:
	
	- Create the PROFS and SNADS custom recipients in a container that is not
	  exported for dirsync.
	
	- If your DXA is acting as a server, do not request PROFS or SNADS address
	  types from the requestors. The address will be represented by its MS proxy
	  type.
	
	- Use Directory Import with a custom .CSV file to import the PROFS and SNADS
	  addresses containing the proper GATEWAY/NODEID/USER format. This will import
	  all proper information to the Imported-From raw property field. These
	  addresses may then be safely included in dirsync.
	
	Additional query words: PROFS SNADS MSPROFS MSSNADS gateway incorrect
	
	======================================================================
	Keywords          : kbother exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
