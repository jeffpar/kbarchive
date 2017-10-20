---
layout: page
title: "Q254821: XADM: Re-establishing ADC Connection Agreement Deletes Objects"
permalink: /kb/254/Q254821/
---

## Q254821: XADM: Re-establishing ADC Connection Agreement Deletes Objects

{% raw %}

	Article: Q254821
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:; winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 18-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In some cases, tearing down and re-establishing an Active Directory Connector
	(ADC) Connection Agreement becomes necessary. If objects were deleted from a
	directory while the Connection Agreement was down and deletions are enabled on
	the newly created Connection Agreement, these objects will be deleted in the
	connected directory after the Connection Agreement is reestablished.
	
	MORE INFORMATION
	================
	
	When objects are deleted from a Windows 2000 or an Exchange Server directory,
	tombstones are generated for the deleted objects. When the Connection Agreement
	is re-established and deletions are enabled, these tombstones are replicated to
	the connected directory, and the objects are deleted.
	
	A natural tendency in resolving directory discrepancies is to break and
	re-establish the Connection Agreement. A better first course of action is to
	click All Tasks->Replicate Now on the Connection Agreement. If this does not
	resolve the issue, try setting the Replicate entire directory flag on the
	Connection Agreement. If you need to break and then re-establish the Connection
	Agreement, click the option to store the deletion list in a .csv file to ensure
	that only objects intended for deletion are removed.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Component         : ADC
	Technology        : kbwin2000AdvServSearch kbwin2000Ssearch kbwin2000ProSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbWinAdvServSearch
	Version           : WINDOWS:; winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
