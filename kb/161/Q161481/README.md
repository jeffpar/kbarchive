---
layout: page
title: "Q161481: XADM: Purpose of Integrity Checker (Isinteg.exe) -PATCH Option"
permalink: /kb/161/Q161481/
---

## Q161481: XADM: Purpose of Integrity Checker (Isinteg.exe) -PATCH Option

{% raw %}

	Article: Q161481
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbtool kbusage
	Last Modified: 12-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Exchange Information Store Integrity Checker (Isinteg.exe) is used
	with the -PATCH option to modify the base GUID (generated unique ID or globally
	unique identifier) used by an information store. This procedure is performed
	after an information store is restored to ensure that the GUIDs assigned to
	objects in the information store are unique.
	
	MORE INFORMATION
	================
	
	A GUID is a 64-bit hexadecimal string that uniquely identifies a particular
	object. In the information store, the public and private information stores have
	base GUIDs that are used to generate GUIDs for all other objects, including
	folders, messages, and attachments.
	
	After you restore an information store, the information store does not know which
	GUIDs have already been assigned. If you do not change the base GUID, the public
	and private information stores may generate GUIDs that are not unique.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	
	=============================================================================
	

{% endraw %}
