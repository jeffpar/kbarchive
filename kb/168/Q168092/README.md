---
layout: page
title: "Q168092: XCLN: Deleted PAB Entries Remain in PDLs"
permalink: /kb/168/Q168092/
---

## Q168092: XCLN: Deleted PAB Entries Remain in PDLs

{% raw %}

	Article: Q168092
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5
	Last Modified: 16-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	When you delete an address from your Personal Address Book (PAB) and that
	address was a member of a personal distribution list (PDL), the deleted address
	remains in the PDL.
	
	MORE INFORMATION
	================
	
	This is by product design; it is intended to give the ability to have a personal
	entry in a PDL without having the entry in the PAB.
	
	You may want someone with the friendly (display) name of Jack Frost to be
	included in your PDL, but not to be listed in your PAB. This would be useful
	when performing Ambiguous Name Resolution (ANR) against the Global Address List
	(GAL) if there was another Jack Frost in the GAL. This way, the Jack Frost in
	your PAB is not accidentally matched when you Check Names.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc4 exc5 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
